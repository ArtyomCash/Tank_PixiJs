// что бы добавить Tank в Pixi - он должен быть контейнером

import {AnimatedSprite, Container, Texture} from "./pixi.mjs";

export const createAnimatedSprite = (textureNames, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
  const textures = textureNames.map(name => Texture.from(name));

  const animatedSprite = new AnimatedSprite(textures);
  animatedSprite.position.copyFrom(position);
  animatedSprite.anchor.copyFrom(anchor);
  return animatedSprite;
};


export class Tank {
  constructor() {
    this._view = new Container();

    // this._tracksLeft = new AnimatiedSprite();
    // левая гусиница
    /*this._tracksLeft = new AnimatedSprite([
      Texture.from('TrackСFrame1'), Texture.from('TrackСFrame2')
    ]);
    this._tracksLeft.animationSpeed = 0.25;
    this._tracksLeft.position.set(0, -80);
    // для позиционирования применяем свойство anchor
    this._tracksLeft.anchor.set(0.5);
    // добавляем в контейнер трек
    this._view.addChild(this._tracksLeft);*/

    // правая гусиница
    /*this._tracksRight = new AnimatedSprite([
      Texture.from('TrackСFrame1'), Texture.from('TrackСFrame2')
    ]);
    this._tracksRight.animationSpeed = 0.25;
    this._tracksRight.position.set(0, 80);
    // для позиционирования применяем свойство anchor
    this._tracksRight.anchor.set(0.5);
    // добавляем в контейнер трек
    this._view.addChild(this._tracksRight)*/

    this._tracksLeft = createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: -80});
    this._tracksRight = createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: 80});
    this._tracksLeft.animationSpeed = 0.25;
    this._tracksRight.animationSpeed = 0.25;
    this._view.addChild(this._tracksLeft, this._tracksRight)

  }
  get view() {
    return this._view;
  }
}