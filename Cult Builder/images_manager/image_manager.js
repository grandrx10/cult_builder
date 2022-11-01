class Image_Manager{
    constructor(){
        this.images = new Map()
        this.fade_out = false
    }

    add_image(image_name, image, image_location){
        this.images[image_name] = new Image_Display(image, image_location)
    }

    show(){
        for (var image in this.images){
            this.images[image].show()
        }
    }

    update(){

        if (this.fade_out == true){
            var fade_level = -5
        } else {
            var fade_level = 5
        }

        for (var image in this.images){
            this.images[image].update(fade_level)

            if (this.images[image].fade < 0){
                delete this.images[image]
            }
        }

        if (Object.keys(this.images).length == 0){
            this.fade_out = false
        }
    }

    fade_images(){
        this.fade_out = true
    }
}