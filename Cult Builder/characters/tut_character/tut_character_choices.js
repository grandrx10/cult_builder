class Tut_Character_Choices extends Character_Choices{
    constructor(){
        super()
    }

    initiate_choice(choice, possible_dialogue, text_box, choice_display, cult_stats){
        var hash;
        switch(choice){
            case "choice_1":
                hash = {
                    "Yes" : ["make_choice_1: yes"],
                    "No" : ["make_choice_1: no"]
                }
                break;
            case "ask_repeat_explain":
                hash = {
                    "Yes please" : ["ask_repeat_explain: re_explain"],
                    "No, you bore me" : ["ask_repeat_explain: bore"]
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}