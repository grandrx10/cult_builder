class Character{
    constructor(name){
        this.name = name
        this.image = null
        this.audio = null
        this.dialogue = ""
        this.dialogue_number = 0
        this.possible_dialogue = {}
        this.dialogue_path = ""
        this.character_choices;

        this.images = new Map()

        this.text_color = "rgba(255, 255, 255, 1)"
        this.border_color = "rgba(255, 255, 255, 1)"

        this.fade = 0
        this.fade_out = false

        this.character_choices = new Character_Choices()
    }

    set_dialogue(text_box, choice_display, cult_stats, character_manager, image_manager){
        text_box.set_character_speaking(this.name, this.text_color, this.border_color)

        if (this.dialogue_number < this.possible_dialogue[this.dialogue_path].length){
            var dialogue_list = this.possible_dialogue[this.dialogue_path][this.dialogue_number]
            var dialogue_obj = new Dialogue(dialogue_list[0], dialogue_list[1]) // Change here and check for conditions

            // use this when you need specific conditions
            switch(true){
                case !dialogue_obj.check_requirements(cult_stats):
                    this.dialogue_number ++;
                    this.set_dialogue(text_box, choice_display, cult_stats, character_manager, image_manager)
                    break;

                case dialogue_obj.dialogue.slice(0, 4) == "(Go)":
                    this.set_dialogue_path(dialogue_obj.dialogue.slice(4, dialogue_obj.dialogue.length))
                    this.set_dialogue(text_box, choice_display, cult_stats, character_manager, image_manager)
                    break;
                case dialogue_obj.dialogue.slice(0, 8) == "(Choice)":
                    this.initiate_choice(dialogue_obj.dialogue.slice(8, dialogue_obj.dialogue.length), text_box, choice_display, cult_stats)
                    break;
                case dialogue_obj.dialogue.slice(0, 5) == "(End)":
                    this.fade = 0
                    this.set_dialogue_path(dialogue_obj.dialogue.slice(5, dialogue_obj.dialogue.length))
                    character_manager.set_character_focus(text_box, "", choice_display, cult_stats, image_manager)
                    image_manager.fade_out = true

                    break;
                case dialogue_obj.dialogue.slice(0, 1) == "{": // enter image
                    let image_name = dialogue_obj.dialogue.slice(1, dialogue_obj.dialogue.indexOf(":"))
                    let image_location = dialogue_obj.dialogue.slice(dialogue_obj.dialogue.indexOf(":") + 1, dialogue_obj.dialogue.indexOf("}"))

                    if (image_manager.images.has(image_name)){
                        image_manager.images[image_name].set_location(image_location)
                    } else {
                        image_manager.add_image(image_name, this.images[image_name], image_location)
                    }
                    this.dialogue = dialogue_obj.dialogue.slice(dialogue_obj.dialogue.indexOf("}") + 1, dialogue_obj.dialogue.length)
                    text_box.set_text(this.dialogue)
                    break;
                // don't use this one
                case dialogue_obj.dialogue.slice(0, 11) == "(Next_Char)":
                    this.set_dialogue_path(dialogue_obj.dialogue.slice(11, dialogue_obj.dialogue.length))
                    character_manager.meet_next_character(text_box, choice_display, cult_stats, image_manager)
                    break;
                default:
                    this.dialogue = dialogue_obj.dialogue
                    text_box.set_text(this.dialogue)
                    break;
            }
        }
    }

    reset_intro(){
        this.fade = 0
    }

    set_dialogue_path(dialogue_path){
        this.dialogue_path = dialogue_path
        this.dialogue_number = 0
    }

    next_dialogue(text_box, choice_display, cult_stats, character_manager, image_manager){
        this.dialogue_number++
        this.set_dialogue(text_box, choice_display, cult_stats, character_manager, image_manager)
    }

    set_colors(text_color, border_color){
        if (text_color != null){
            this.text_color = text_color
        }

        if (border_color != null){
            this.border_color = border_color
        }
    }

    initiate_choice(choice, text_box, choice_display, cult_stats){
        this.character_choices.initiate_choice(choice, this.possible_dialogue, text_box, choice_display, cult_stats)
    }

    // method override this
    show(text_box){
        text_box.show(this.fade)

        if (this.fade < 255){
            this.fade += 5
        }
    }

    load_images(){

    }

    load_audio(){

    }
}