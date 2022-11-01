class Character_Name extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Character Name Here!") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Char_Name_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
    }

    /** READ ME: each character is on a dialogue_path, which determines what they are saying.
     * The dialogue is in chronological order. Without any parameters, one will proceed to the next.
     * 
     * Each new dialogue must be encompassed by square brackets: [ "Example text here!" ], [ "Second text here!" ]
     *  
     * To move from one dialogue path to the other, just add (Go) to the start of your text.
     * Example: [ "(Go)example_2_dialogue_path" ]  <- this makes the character move to dialogue path example_2_dialogue_path
     * 
     * To make a choice, add (Choice) then the name of the choice. Please consult char_name_choices.js and make sure your choice is there
     * Example: [ "(Choice)example_choice" ] 
     *
     * To end a dialogue, add (End), then the begginning of the next dialogue path for that character.
     * Example: [ "(End)last_example_dialogue_path" ]
     * 
     * VARIABLES:
     * If you want to change cult_stats variables, add another element in your dialogue array.
     * If your variable is not already in cult_stats, it will create that variable. You may add any positive or negative number.
     * You may also change multiple cult_stats. Just add a comma in between your arrays.
     * [ "Example text here!", [ [ "name_of_variable", "add", number_here ], [ "second_variable", "add", number_here ] ] ]
     * 
     * If you want dialogue to ONLY appear when certain stats are fulfilled, then do this:
     * [ "Example text here!", [ [ "name_of_variable", "more/less", number_here ] ] ]
     * Note: choose either more or less. They are inclusive.
     */
    set_possible_dialogue(){
        this.dialogue_path = "intro" // make sure this is the dialogue path you want to start on
        this.possible_dialogue = {
            "intro": [ ["Example text here! Change me!"], 
            ["Wow, this is the second text box! You did it!"], 
            ["(Go)example_dialogue_path"] ],

            "example_dialogue_path": [ ["Second dialogue path! Let's make a choice!"], 
            ["Do you like eggs or ham?"],
            ["(Choice)example_choice"] ],

            "last_example_dialogue_path": [["Either way you suck!"],
            ["(End)last_example_dialogue_path"]] // <- since there is currently no more for this character, put up a loop.
        }
    }

    load_images(){
        this.image = loadImage('assets/images/edlith.png'); // <- upload your own image and use it here!
    }

    load_audio(){
        this.audio = loadSound('assets/audio/edlith_soundtrack.mp3') // <- upload your own soundtrack and use it here!
    }
}