import Viewport from "../shared/engine/Viewport.js";
import create from "./--create.js";
import ImageAssets from "./ImageAssets.js";
import Player from "./Player.js";
import Shuriken from "./Shuriken.js";
import Terrain from "./Terrain.js";

const init = () => {
    background.setTexture(tileImg);
    player.loadAnimations(assets);
    window.requestAnimationFrame(() => loop());
}

const loop = () => {
    gameView.clear();
    renderer.drawImage(background.texture, 0, 0);
    renderer.drawImage(player.frame, player.x, player.y);
    renderer.drawImage(heartImg, 4, 4);
    renderer.drawImage(heartImg, 14, 4);
    renderer.drawImage(heartImg, 24, 4);

    for(let i = 0; i < gameWorld.length; i++) {
        if(gameWorld[i].updateAndCheck()) garbageCan.push(i);
        else { 
            renderer.drawImage(shurikenImg, gameWorld[i].x, gameWorld[i].y);
        }
    }
    for(let i = garbageCan.length - 1; i >= 0; i--) {
        gameWorld.splice(garbageCan[i], 1);
    }
    garbageCan = [];
    window.requestAnimationFrame(() => loop());
}

const walk = (event) => {
    switch(event.key) {
        case "ArrowDown":
            player.move("down");
            break;
        case "ArrowUp":
            player.move("up");
            break;
        case "ArrowLeft":
            player.move("left");
            break;
        case "ArrowRight":
            player.move("right");
            break;
        case " ":
            player.fire(gameWorld, new Shuriken);
            break;
    }
}

const stopped = (event) => {
    // console.log(event);
    switch(event.key) {
        case "ArrowDown":
            player.frame = player.animation[2][0];
            break;
        case "ArrowUp":
            player.frame = player.animation[0][0];
            break;
        case "ArrowLeft":
            player.frame = player.animation[3][0];
            break;
        case "ArrowRight":
            player.frame = player.animation[1][0];
            break;
    }
}

const gameView = new Viewport(320, 200);
const renderer = gameView.context;
const assets = new ImageAssets;
const gameWorld = [];
const player = new Player();
let garbageCan = [];
const background = new Terrain;

window.addEventListener("keydown", (e) => walk(e));
window.addEventListener("keyup", (e) => stopped(e));

gameView.init();
gameView.setBackground("lightgreen");

create(assets);
assets.initialize(init);

// ...

const heartImg = assets.images[12];
const shurikenImg = assets.images[13];
const tileImg = assets.images[14];
// ...





