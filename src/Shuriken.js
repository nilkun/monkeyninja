class Shuriken {
    constructor(heading, x, y) {
        this.x = 0;
        this.y = 0;
        this.heading = "";
        this.xVel = 0;
        this.yVel = 0;
        // switch(heading) 
        // {
        //     case "up":
        //         this.yVel = -2;
        //         break;
        //     case "down":
        //         this.yVel = 2;
        //         break;
        //     case "left":
        //         this.xVel = -2;
        //         break;
        //     case "right":
        //         this.xVel = 2;
        //         break;

        // }
    }
    set(heading, x, y) {
        this.x = x;
        this.y = y;
        switch(heading) 
        {
            case "up":
                this.yVel = -.5;
                break;
            case "down":
                this.yVel = .5;
                break;
            case "left":
                this.xVel = -.5;
                break;
            case "right":
                this.xVel = .5;
                break;

        }
    }
    updateAndCheck() {
        this.x+= this.xVel;
        this.y+= this.yVel;

        if(this.x < 0 || this.x > 300 || this.y < 0 || this.y > 200) return true;
        else return false;
    }
}

export default Shuriken;