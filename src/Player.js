class Player {
    constructor() {
        this.x = 50;
        this.y = 50;
        this.heading = "up";
        this.frame = "";
        this.animation = new Array(4);
        this.animation[0] = [];
        this.animation[1] = [];
        this.animation[2] = [];
        this.animation[3] = [];

    }
    move(direction) {
        switch(direction) {
            case "up":
                this.y--;
                this.heading = "up";
                this.frame=this.animation[0][1 + this.y%2];
                break;
            case "down":
                this.y++;
                this.heading = "down";
                this.frame=this.animation[2][1 + this.y%2];
                break;
            case "left":
                this.x--;
                this.heading = "left";
                this.frame=this.animation[3][1 + this.x%2];
                break;
            case "right":
                this.x++;
                this.heading = "right";
                this.frame=this.animation[1][1 + this.x%2];
                break;
        }  
    }
    loadAnimations(assetsManager) {
        this.animation[0].push(assetsManager.images[0]);
        this.animation[0].push(assetsManager.images[1]);
        this.animation[0].push(assetsManager.images[2]);
        this.animation[1].push(assetsManager.images[3]);
        this.animation[1].push(assetsManager.images[4]);
        this.animation[1].push(assetsManager.images[5]);
        this.animation[2].push(assetsManager.images[6]);
        this.animation[2].push(assetsManager.images[7]);
        this.animation[2].push(assetsManager.images[8]);
        this.animation[3].push(assetsManager.images[9]);
        this.animation[3].push(assetsManager.images[10]);
        this.animation[3].push(assetsManager.images[11]);
        this.frame = this.animation[0][0];
    }
    fire(container, weapon) {
        weapon.set(this.heading, this.x + 4, this.y + 4); // SIZE OF NINJA HARD CODED
        container.push(weapon);
    }    
}

export default Player;