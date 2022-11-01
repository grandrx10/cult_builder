class Transition extends Character{
    constructor(){
        super("")
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Transition_Choices()
    }

    set_possible_dialogue(){
        this.dialogue_path = "in_transition"
        this.possible_dialogue = {
            "in_transition" : [["(Spacebar to see the next client)"], ["(Next_Char)in_transition"]]
        }
    }

    load_images(){
    }

    load_audio(){
    }
}