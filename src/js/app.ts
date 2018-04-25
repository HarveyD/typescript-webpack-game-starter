declare var require: any;
require('../css/main.css');

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here

		this.gameLoop();
	}

	private gameLoop(): void {
		requestAnimationFrame(this.gameLoop.bind(this));

		this._game.render();
	}
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}