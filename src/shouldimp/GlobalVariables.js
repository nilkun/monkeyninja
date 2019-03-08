const gameView = new Viewport(320, 200);
const renderer = gameView.context;
const assets = new ImageAssets;
const gameWorld = [];
const player = new Player();
const shuriken = () => { console.log("shuriken!!!")}
let garbageCan = [];
const background = new Terrain;

gameView.init();
gameView.setBackground("lightgreen");
