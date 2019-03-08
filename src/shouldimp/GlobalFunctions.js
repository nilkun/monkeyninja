const init = () => {
    background.setTexture(tileImg);
    player.loadAnimations();
    window.requestAnimationFrame(() => loop());
}

const loop = () => {
    gameView.clear();
    renderer.drawImage(background.texture, 50, 50);
    renderer.drawImage(player.frame, player.x, player.y);
    renderer.drawImage(heartImg, 90, 90);
    renderer.drawImage(heartImg, 100, 90);
    renderer.drawImage(heartImg, 110, 90);

    for(let i = 0; i < gameWorld.length; i++) {
        if(gameWorld[i].updatextureAndCheck()) garbageCan.push(i);
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
    // console.log(event);
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
            player.fire();
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

// not used at the moment
