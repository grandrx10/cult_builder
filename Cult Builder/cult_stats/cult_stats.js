class Cult_Stats{
    constructor(){
        this.name = ""
        this.stats = {
            "followers" : 0,
            "popularity" : 0,
            "happiness" : 0,
            "Gold" : 0,
        }

        this.cult_stats_display = new Cult_Stats_Display(10, windowHeight/2, 20, 50)
    }

    set_name(name){
        this.name = name
    }

    check_clicked(x, y){
        if (this.cult_stats_display.check_clicked(x, y)){
            this.cult_stats_display.clicked_on()
        }
    }

    update(){
        this.cult_stats_display.update()
    }

    show(){
        this.cult_stats_display.show(this)
    }
}