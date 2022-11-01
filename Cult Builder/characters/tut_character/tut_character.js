class Tut_Character extends Character{
    constructor(){
        super("Edlith")
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Tut_Character_Choices()
    }

    set_possible_dialogue(){
        this.dialogue_path = "intro"
        this.possible_dialogue = {
            "intro": [["{Edlith:middle}Greetings! My name is Edlith and I'm just a voice in your head. Don't worry about that, lets get you familiar with the system. (Press SPACEBAR)"],
            ["Now, certain beings that I shain't mention have contracted you to build a cult on Earth. Yes, Earth. E-A-R-T-H. Exciting stuff, I know!"],
            ["As you set up your cult, people will flock to you. You'll have to convince them to join your cause, whatever that may be. They'll remember anything you say, so your decisions matter!"],
            ["Do you understand?"], ["(Choice)choice_1"]],
            "make_choice_1: yes": [["Good! You catch on quite fast. You'll make a fine deity."], ["(Go)after_choice"]],
            "make_choice_1: no": [["Hmm. I can explain it again, if you would like."], ["(Choice)ask_repeat_explain"]],
            "ask_repeat_explain: re_explain": [["Alright, listen closely! You will be trying to create your own cult. Try and gather as many followers as you can, and you will be rewarded."],
            ["Your followers will react and remember everything that you do."], ["Do you understand now?"], ["(Choice)choice_1"]],
            "ask_repeat_explain: bore": [["Well then! If you don't want my help, you won't be getting it! You're awfully rude, you know that?", [["edlith_relations", "add", -1]]], ["(Go)after_choice"]],            
            "after_choice": [["I love having active dialogue, you know that?", [["edlith_relations", "more", 0]]], ["Test to see if you see this after!"], ["(End)talk_2"]],

            "talk_2": [["{Edlith:middle}Hello there, I didn't expect to see you again!"]]
        }


    }

    load_images(){
        this.image = loadImage('assets/images/edlith.png');

        this.images["Edlith"] = loadImage('assets/images/edlith.png');
    }

    load_audio(){
        this.audio = loadSound('assets/audio/edlith_soundtrack.mp3')
    }
}