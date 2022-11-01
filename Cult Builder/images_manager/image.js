class Image_Display {
    constructor (image, image_location){
        this.x;
        this.y;
        this.image = image
        this.fade = 0

        this.set_location(image_location)
    }

    show(){
        tint(255, 255, 255, this.fade)
        image(this.image, this.x, this.y)
    }

    update(fade_level){
        if (this.fade < 255 && fade_level > 0){
            this.fade += fade_level
        } else if (this.fade >= 0 && fade_level < 0){
            this.fade += fade_level
        }
    }

    set_location(image_location){
        this.x = windowWidth/2;
        this.y = windowHeight/2;

        if (image_location == "left"){
            this.x = windowWidth/3
        } else if (image_location == "right"){
            this.x = windowWidth*2/3
        }
    }
}