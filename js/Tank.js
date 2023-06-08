// что бы добавить Tank в Pixi - он должен быть контейнером

import {AnimatedSprite, Container, Texture, Sprite} from "./pixi.mjs";

export const createAnimatedSprite = (textureNames, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
  const textures = textureNames.map(name => Texture.from(name));

  const animatedSprite = new AnimatedSprite(textures);
  animatedSprite.position.copyFrom(position);
  animatedSprite.anchor.copyFrom(anchor);
  return animatedSprite;
};

export const createSprite = (textureName, position = { x: 0, y: 0 }, anchor = { x: 0.5, y: 0.5 }) => {
  const sprite = new Sprite(Texture.from(textureName));
  sprite.position.copyFrom(position);
  sprite.anchor.copyFrom(anchor);
  return sprite;
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

    this._bodyContainer = new Container();
    this._view.addChild(this._bodyContainer);

    /*this._tracksLeft = createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: -80});
    this._tracksRight = createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: 80});
    this._tracksLeft.animationSpeed = 0.25;
    this._tracksRight.animationSpeed = 0.25;
    this._view.addChild(this._tracksLeft, this._tracksRight);*/

    /*this._hull = new Sprite(Texture.from('HeavyHullB'));
    this._hull.anchor.set(0.5);
    this.view.addChild(this._hull);*/

    /*const gunLeft = new Sprite(Texture.from('HeavyGunB'));
    gunLeft.points.set(140, -27);
    gunLeft.anchor.set(0.5);

    const gunRight = new Sprite(Texture.from('HeavyGunB'));
    gunRight.points.set(160, -27);
    gunRight.anchor.set(0.5);*/

    // что бы вращение было не относительно элемента а относительно центра башни, нужно
    // сгрупировать все элементы в контейнер, который будет групироваться относительно центра корпуса

    this._towerContainer = new Container();
    this._view.addChild(this._towerContainer);

    this._towerContainer.addChild(createSprite('HeavyGunB', { x: 140, y: -27 }));
    this._towerContainer.addChild(createSprite('HeavyGunB', { x: 160, y: 29 }));

    this._towerContainer.addChild(createSprite('GunConnectorD', { x: 80, y: 0 }));
    this._towerContainer.addChild(createSprite('HeavyTowerB'));

    this._bodyContainer.addChild(createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: -80}));
    this._bodyContainer.addChild(createAnimatedSprite(['TrackСFrame1', 'TrackСFrame2'], {x: 0, y: 80}));
    this._bodyContainer.addChild(createAnimatedSprite(['HeavyHullB']))

  }
  get view() {
    return this._view;
  }

  // будет присваивать значение которое передадим
  set towerDirection(value) {
    this._towerContainer.rotation = value;
  }

  // взять поворот
  get towerDirection() {
    return this._towerContainer.rotation;
  }

  // будет присваивать значение которое передадим
  set bodyDirection(value) {
    this._bodyContainer.rotation = value;
  }

  // взять поворот
  get bodyDirection() {
    return this._bodyContainer.rotation;
  }

  get x() {
    return this._view.position.x
  }

  set x(value) {
    return this._view.position.x = value;
  }

  get y() {
    return this._view.position.y
  }

  set y(value) {
    return this._view.position.y = value;
  }

  /*rotateTowerBy(angle) {
    this._towerContainer.rotation += angle;
  }

  rotateBodyBy(angle) {
    this._bodyContainer.rotation += angle;
  }*/

  startTracks() {
    this._tracksLeft.play();
    this._tracksRight.play();
  }

  stopTracks() {
    this._tracksLeft.stop();
    this._tracksRight.stop();
  }

}
