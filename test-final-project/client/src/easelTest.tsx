import * as createjs from '@thegraid/createjs-module';

/*
  NOTES:
  move stage.x or stage.y offset by screen space pixel differences, NOT CANVAS WORLD SPACE
  can not update stage.x or stage.y offset by more than the width or height of the canvas on mouse dragging.
  if you are doing that. you are doing things WRONG.

  probably Math.round() all coordinate data so that they are not floats. this will save space on datastorage

*/

// test out individual features on specific scales, don't use everything at once

// createjs.Ticker.timingMode = createjs.Ticker.RAF;

const canvas = document.querySelector('#demoCanvas');

const $html = document.querySelector('html');
const $body = document.querySelector('body');
const $container = document.querySelector('#canvas-container');

const width = 1600;
const height = 800;
const initialScale = 1;

let dragStageX = 0;
let dragStageY = 0;
let scrollStageX = 0;
let scrollStageY = 0;

console.log('canvas', canvas);
const stage = new createjs.Stage('demoCanvas');

stage.scale = initialScale;
stage.canvas.width = width;
stage.canvas.height = height;
stage.snapToPixel = true;

// make origin point the center of the screen
// stage.regX = -width / 2;
// stage.regY = -height / 2;
// stage.x = width / 2;
// stage.y = height / 2;

$container.style.width = width + 'px';
$container.style.height = height + 'px';

function tick(event) {
  // stage.y += 1
  // stage.x += 1
  stage.update(event);
}
createjs.Ticker.on('tick', tick);
createjs.Ticker.framerate = 60;

//working!
// const shape = new createjs.Shape();
// shape.graphics.beginFill('red').drawCircle(0, 0, 40);
// shape.x = shape.y = 50;
// stage.addChild(shape);
// stage.update();
// end of working!

//working
const testLine = new createjs.Shape();
testLine.graphics
  .setStrokeStyle(1)
  .beginStroke('red')
  .moveTo(0, 0)
  .lineTo(100, 700)
  .endStroke();
stage.addChild(testLine);
//end of working

const $button = document.createElement('div');
$button.textContent = 'THIS IS MY TEST BUTTON!';
$button.style.width = '300px';
$button.style.height = '300px';
$button.style.backgroundColor = 'black';
// $button.style.zIndex = 10
console.log($button);
$container.prepend($button);

const domElement = new createjs.DOMElement($button);
stage.addChild(domElement);
domElement.parent = stage;
domElement.x = 0;
domElement.y = 0;

// domElement.htmlElement.onclick = function () {
//   console.log('clicked button!');
// };

function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
    console.log(scrollTop);
    window.scrollTo(scrollLeft, scrollTop);
  };
}
disableScroll();

document.oncontextmenu = function () {
  return false;
};

function cursorPos(event): [x: number, y: number] {
  const { x, y } = $container.getBoundingClientRect(); //event.target is canvas
  return [event.x - x, event.y - y]; // x and y screen position relative to canvas.
}

const drawings = [];
const shapes = [];

// coordinates in the LOCAL canvas WORLD SPACE
let localCursorX, localCursorY;
let prevLocalCursorX, prevLocalCursorY;

//screen coordinate relative to canvas origin point in SCREEN SPACE
let cursorX, cursorY;
let prevCursorX, prevCursorY;

function drawLine({ x0, y0, x1, y1, color }) {
  const myLine = new createjs.Shape();
  myLine.graphics
    .setStrokeStyle(1)
    .beginStroke(color || 'red')
    .moveTo(x0, y0)
    .lineTo(x1, y1)
    .endStroke();
  return myLine;
}

function randomColor(offsetFromWhite: number | null): string {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * (255 - offsetFromWhite || 0)
  )},${Math.floor(Math.random() * 255)})`;
  // const color = '#' + (155).toString(16) + (102).toString(16) + (102).toString(16);
}

function drawGrid() {
  const drawEveryX = 100;
  const drawEveryY = 100;

  const gridCount = 10;
  const totalDrawings = gridCount ** 2;

  for (let i = -totalDrawings / 2; i < totalDrawings / 2; i++) {
    const xPos = i * drawEveryX;
    const yPos = i * drawEveryY;

    let length = drawings.push({
      x0: yPos,
      y0: -drawEveryY * totalDrawings,
      x1: yPos,
      y1: drawEveryX * totalDrawings,
      color: randomColor(100),
    });
    // draw a line
    let drawing = drawings[length - 1];

    shapes.push(stage.addChild(drawLine(drawing)));

    length = drawings.push({
      x0: -drawEveryY * totalDrawings,
      y0: xPos,
      x1: drawEveryY * totalDrawings,
      y1: xPos,
      color: randomColor(),
    });
    // draw a line
    drawing = drawings[length - 1];

    shapes.push(stage.addChild(drawLine(drawing)));
  }
}

function moveScreenToWorldPos(worldX: number, worldY: number) {
  stage.x = worldX;
  stage.y = worldY;
}

drawGrid();

// mouse functions

let leftMouseDown = false;
let rightMouseDown = false;

function onMouseDown(event) {
  // detect left clicks
  if (event.button == 0) {
    leftMouseDown = true;
    rightMouseDown = false;
  }

  // detect right clicks
  if (event.button == 2) {
    rightMouseDown = true;
    leftMouseDown = false;
  }

  [cursorX, cursorY] = cursorPos(event);

  const { x, y } = stage.globalToLocal(cursorX, cursorY); // real position regardless of scale
  localCursorX = x;
  localCursorY = y;

  prevLocalCursorX = localCursorX;
  prevLocalCursorY = localCursorY;
  prevCursorX = cursorX;
  prevCursorY = cursorY;
}

function onMouseUp(event) {
  leftMouseDown = false;
  rightMouseDown = false;

  [cursorX, cursorY] = cursorPos(event);

  const localObj = stage.globalToLocal(cursorX, cursorY); // real position regardless of scale
  const { x, y } = localObj;
  localCursorX = x;
  localCursorY = y;

  // console.log('localPos', localCursorX);
  // console.log('scaledPosX', scaledCursorPos(cursorX))
}

function onMouseOut(event) {
  const mouseTarget = document.elementFromPoint(event.x, event.y);

  //prevent mouse moving over elements within canvas from stopping mouse click
  if (!mouseTarget || !mouseTarget.closest('#canvas-container')) {
    leftMouseDown = false;
    rightMouseDown = false;
  }
}

let foundNan = false;
function onMouseMove(event) {
  // get mouse position
  [cursorX, cursorY] = cursorPos(event);

  // const scaledX = scaledCursorPos(cursorX) - stage.x; // proper tested scaling -> world position aka globalToLocal position

  const { x, y } = stage.globalToLocal(cursorX, cursorY); // real position regardless of scale

  // x = Math.round(x);
  // y = Math.round(y);
  localCursorX = x;
  localCursorY = y;

  const xDiff = cursorX - prevCursorX;
  const yDiff = cursorY - prevCursorY;

  if (leftMouseDown) {
    // add the line to our drawing history
    const length = drawings.push({
      x0: prevLocalCursorX,
      y0: prevLocalCursorY,
      x1: localCursorX,
      y1: localCursorY,
    });
    // draw a line
    const drawing = drawings[length - 1];
    shapes.push(stage.addChild(drawLine(drawing)));
  }

  if (rightMouseDown) {
    // debugging stuff
    if (!foundNan) {
      if (isNaN(x)) {
        foundNan = !foundNan;
      }
      // prints go here

      // debugging stuff end
    }

    dragStageX += xDiff;
    dragStageY += yDiff;
    stage.x = scrollStageX + dragStageX;
    stage.y = scrollStageY + dragStageY;
  }

  prevLocalCursorX = localCursorX;
  prevLocalCursorY = localCursorY;
  prevCursorX = cursorX;
  prevCursorY = cursorY;
}

function onMouseWheel(event) {
  const mouseX = stage.mouseX;
  const mouseY = stage.mouseY;

  const { x: localCursorX, y: localCursorY } = stage.globalToLocal(
    mouseX,
    mouseY
  );

  const delta = event.deltaY;
  let factor = 0.8;
  if (delta < 0) {
    factor = 1 / factor;
  }

  const newScale = stage.scale * factor;

  //reset drag offset so that dragging screen isn't funky
  dragStageX = 0;
  dragStageY = 0;

  // change scale to new scale
  stage.scale = newScale;

  // because scale changes, we need a new screenPosition
  // it will be different than the last mouseX and mouseY
  const screenPosAfterScale = stage.localToGlobal(localCursorX, localCursorY);

  // increase the stage offset by the differende between the last screenPosition and the new one
  stage.x += mouseX - screenPosAfterScale.x;
  stage.y += mouseY - screenPosAfterScale.y;

  scrollStageX = stage.x;
  scrollStageY = stage.y;
}

$container.addEventListener('mousedown', onMouseDown);
$container.addEventListener('mouseup', onMouseUp, false);
$html.addEventListener('mouseout', onMouseOut, false); // unclick mouse if out of canvas
$container.addEventListener('mousemove', onMouseMove, false);
$container.addEventListener('wheel', onMouseWheel, false);
