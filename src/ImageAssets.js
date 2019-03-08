// Don't forget to start the loop after all images are loaded

class ImageAssets {
    constructor() {
        this.images = [];
        this.paths = []
    }
    addImg(path) {
        this.paths.push(path);
    }

    initialize(init) {
        this.images = [];
        let counter = 0;
        this.paths.forEach(path => {
            const image = new Image();
            this.images.push(image); 
            image.src = path;
            image.onload = () => { 
                // Create a progress bar if you want
                counter++;
                if(counter >= this.paths.length) { 
                    console.log("All resources loaded. Continuing..."); 
                    window.requestAnimationFrame(() => init()); 
                };
            }

        });
        this.paths = [];
    }
    
    loadImg(path) {
        const image = new Image();
        image.src = path;
        image.onload = () => { 
            this.loaded++;
            start(); 
        }
        this.images.push(image);
        return image;
    }   
}

export default ImageAssets;