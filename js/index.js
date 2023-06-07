// import * as PIXI from './pixi.mjs';
import { Application, Graphics, Rectangle } from './pixi.mjs';
import { assetsMap } from './assetsMap.js';
import { Tank } from './Tank.js';

// Создаем приложение Pixi.js
const app = new Application({
  width: 800,
  height: 800,
  backgroundColor: 0xc2c2c2,
  view: document.getElementById("canvas")
});

// const loader = PIXI.Loader.shared;

const runGame = () => {
  // debugger
  const marker = new Graphics();
  // что бы начать рисовать графику нужно её залить, потом рисуем форму, заканчиваем

  marker.beginFill(0xff0000, 1);
  // marker.drawRect(0, 0, 10, 10);
  marker.drawCircle(0, 0, 5);
  marker.endFill();

  const tank = new Tank();
  app.stage.addChild(tank.view);
  app.stage.addChild(marker);



  // от дисплей object наследуются все объекты котороые будут рисоваться
  // если js файл импортирован как модуль, то все его переменные не будет видимости window

  // window["RECTANGLE"] = marker;  - появляется в консоле
  // !!!!!!!!!!!
  // в играх корневой stage - нужно передвигать в центр объекта, что бы движение
  // и вращение было относительно ценрта  => app.stage.position.set(800/2, 800/2);
  // 800; 800 - ширина и высота конваса

  app.stage.position.set(800 / 2, 800 / 2);

  window["TANK"] = tank;

  // вешаем обработчик событий на stage - слушать когда происходят клики
  // в библиотеке pixi найти PIXI.AnimatedSprite => Events

  const onPointerDown = ({ data }) => {
    console.log('event >>>', data);

    // getLocalPosition - возращает позиции относительно объекта

    const position = data.getLocalPosition(app.stage);
    app.stage.addChild(new Graphics().beginFill(0xff0000, 1).drawCircle(position.x, position.y, 5))

  };
  app.stage.on('pointerdown', onPointerDown, undefined);
  // также нужно показать что объект должен быть интерактивным это связано с аптимизацией в pixi
  app.stage.interactive = true;
  // interactiveChildren - ставим false для того что бы не проверять каждый элемент танка отдельно
  // так как нам нужна область вогруг танка. Таким обрпзом экономяться ресурсы.
  app.stage.interactiveChildren = false;

  app.stage.hitArea = new Rectangle(-400, -400, 800, 800);
};

assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);

// ------------------------
/*

// Добавляем канвас на страницу
document.body.appendChild(app.view);

// Создаем графический объект (Graphics)
const graphics = new PIXI.Graphics();

// Задаем цвет заливки (черный в данном случае)
graphics.beginFill(0x000000);

// Рисуем прямоугольник с заданными размерами
graphics.drawRect(0, 0, 800, 600);

// Завершаем рисование
graphics.endFill();

// Добавляем графический объект на сцену
app.stage.addChild(graphics);*/
