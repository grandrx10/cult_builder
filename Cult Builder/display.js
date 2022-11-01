class Display {
    constructor(){
    }

    show(user_input, text_box, cult_stats, character_manager, choice_display, image_manager){
        if (cult_stats.name == ""){
            this.show_name_selection(user_input)
        } else {
            image_manager.show()
            character_manager.show(text_box)
            cult_stats.show()
            choice_display.show()
        }
    }

    show_name_selection(user_input){
        fill(255, 255, 255)
        text("Name your cult:", windowWidth/2, windowHeight/3)
        text(user_input, windowWidth/2, windowHeight/2)
    }
}