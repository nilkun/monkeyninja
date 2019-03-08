class Terrain {
    constructor() {
        this.texture = document.createElement('canvas');
        this.texture.width = 320;
        this.texture.height = 200;
    }
    setTexture(tile) {
        for(let x = 0; x < 320 / 8; x++) {
            for(let y = 2; y < 200 / 8; y++ ) {
                this.texture.getContext("2d").drawImage(tile, x*8, y*8);
            }
        }

    }
}

export default Terrain;