import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
  /** @type {Phaser.GameObjects.Text} */
  Text;

  constructor() {
    super("game");
  }

  init() {}

  preload() {}

  create() {
    this.physics.add.collider(this.platforms, this.carrots);
    this.physics.add.overlap(
      this.player,
      this.carrots,
      this.handleCollectCarrot,
      undefined,
      this
    );

    this.Text = this.add
      .text(240, 10, "Hello\nWorld", { color: "#fff", fontSize: 44 })
      .setOrigin(0.5, -0.3);
  }

  update() {
  }
}
