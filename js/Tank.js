// что бы добавить Tank в Pixi - он должен быть контейнером

import {AnimatedSprite, Container, Texture} from "./pixi.mjs";

export class Tank {
  constructor() {
    this._view = new Container();

    // this._tracksLeft = new AnimatiedSprite();
    this._tracksLeft = new AnimatedSprite([
      Texture.from('TrackСFrame1'), Texture.from('TrackСFrame2')
    ]);
    // для позиционирования применяем свойство anchor
    this._tracksLeft.anchor.set(0.5);
    // добавляем в контейнер трек
    this._view.addChild(this._tracksLeft)

  }
  get view() {
    return this._view;
  }
}