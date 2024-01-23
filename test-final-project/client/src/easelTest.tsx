import * as createjs from '@thegraid/createjs-module';

// test out individual features on specific scales, don't use everything at once

// createjs.Ticker.timingMode = createjs.Ticker.RAF;

const canvas = document.querySelector('#demoCanvas');

const $container = document.querySelector('#canvas-container');

const width = 800;
const height = 800;

console.log('canvas', canvas);
const stage = new createjs.Stage('demoCanvas');

$container.style.width = width + 'px';
$container.style.height = height + 'px';
stage.canvas.width = width;
stage.canvas.height = height;

function tick(event) {
  stage.update(event);
}
createjs.Ticker.on('tick', tick);
createjs.Ticker.framerate = 5;

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
domElement.x = 25;
domElement.y = 25;

domElement.htmlElement.onclick = function () {
  console.log('clicked button!');
};

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

function factor() {
  // multiply canvas screen cursor position by this
  return 1 / stage.scale;
}

function scaledCursorPos(num: number) {
  // if canvas width is 100, scale is .5, this will return 200
  return num * factor();
}

const drawings = [];
const shapes = [];

// coordinates in the LOCAL canvas WORLD SPACE
let localCursorX, localCursorY;
let prevLocalCursorX, prevLocalCursorY;

//screen coordinate relative to canvas origin point in SCREEN SPACE
let cursorX, cursorY;
let prevCursorX, prevCursorY;

function redrawCanvas() {
  // set the canvas to the size of the window
  // stage.canvas.width = document.body.clientWidth;
  // stage.canvas.height = document.body.clientHeight;

  // context.fillStyle = '#fff';
  // context.fillRect(0, 0, canvas.width, canvas.height);

  stage.drawRect = null;
  for (let i = 0; i < drawings.length; i++) {
    const line = drawings[i];
    const myLine = shapes[i];

    // myLine.graphics.beginStroke('blue').command
    // myLine.graphics.setStrokeStyle(10).command
    // myLine.graphics.moveTo(toScreenX(line.x0), toScreenY(line.y0)).command
    // myLine.graphics.lineTo(toScreenX(line.x1), toScreenY(line.y1)).command
    // myLine.graphics.endStroke().command

    // drawLine(
    //   toScreenX(line.x0),
    //   toScreenY(line.y0),
    //   toScreenX(line.x1),
    //   toScreenY(line.y1)
    // );
  }
  // stage.update();
}
// redrawCanvas();

// if the window changes size, redraw the canvas
window.addEventListener('resize', (event) => {
  // redrawCanvas();
});

function drawLine(x0, y0, x1, y1) {
  const myLine = new createjs.Shape();
  myLine.graphics
    .setStrokeStyle(1)
    .beginStroke('red')
    .moveTo(x0, y0)
    .lineTo(x1, y1)
    .endStroke();
  // console.log(1 + scale);

  // myLine.x = -stage.x * (1 + scale);
  // myLine.y = -stage.y * (1 + scale);
  return myLine;
}

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

  const rect = event.target.getBoundingClientRect(); //event.target is canvas

  cursorX = event.clientX - rect.x; //x screen position relative to canvas.
  cursorY = event.clientY - rect.y; //y screen position relative to canvas.

  const { x, y } = stage.globalToLocal(cursorX, cursorY); // real position regardless of scale
  localCursorX = x;
  localCursorY = y;

  prevLocalCursorX = localCursorX;
  prevLocalCursorY = localCursorY;
  prevCursorX = cursorX;
  prevCursorY = cursorY;
}

stage.scale = 0.15;
let foundNan = false;
function onMouseMove(event) {
  // get mouse position

  const rect = event.target.getBoundingClientRect(); //event.target is canvas
  cursorX = event.clientX - rect.x; //x screen position relative to canvas.
  cursorY = event.clientY - rect.y; //y screen position relative to canvas.

  // num to multiply by to get to normal scale
  const scaledX = scaledCursorPos(cursorX);
  const scaledY = scaledCursorPos(cursorY);

  const prevScaledX = scaledCursorPos(cursorX);
  const prevScaledY = scaledCursorPos(cursorY);

  const obj = stage.globalToLocal(cursorX, cursorY); // real position regardless of scale
  let { x, y } = obj;
  x = Math.round(x);
  y = Math.round(y);
  localCursorX = x;
  localCursorY = y;

  const xDiff = cursorX - prevCursorX;
  const yDiff = cursorY - prevCursorY;

  const scaledXDiff = scaledX - prevScaledX;
  const scaledYDiff = scaledY - prevScaledY;

  if (leftMouseDown) {
    // add the line to our drawing history
    drawings.push({
      x0: prevLocalCursorX,
      y0: prevLocalCursorY,
      x1: localCursorX,
      y1: localCursorY,
    });
    // draw a line
    shapes.push(
      stage.addChild(
        drawLine(prevLocalCursorX, prevLocalCursorY, localCursorX, localCursorY)
      )
    );
  }

  if (rightMouseDown) {
    if (!foundNan) {
      if (isNaN(x)) {
        foundNan = !foundNan;
      }
      console.log('scaledX', scaledX);
      console.log('scaledXDiff', scaledXDiff);
      console.log('stageOffset', stage.x);

      // console.log('prevLocalPos', prevLocalCursorX, prevLocalCursorY);
      // console.log('localPos', localCursorX, localCursorY);
      // console.log('xSubtracted', localCursorX - prevLocalCursorX);
    }

    // console.log(localCursorX, prevLocalCursorX)
    // console.log('xDiff', localCursorX - prevLocalCursorX)
    stage.x += xDiff;
    stage.y += yDiff;
  }

  prevLocalCursorX = localCursorX;
  prevLocalCursorY = localCursorY;
  prevCursorX = cursorX;
  prevCursorY = cursorY;
}

function onMouseUp() {
  leftMouseDown = false;
  rightMouseDown = false;
}

function onMouseWheel(event) {
  // how much the screen is meant to scroll: -100 or 100 (pixels) up is negative, down is positive
  const deltaY = event.deltaY;

  // becomes a percentage like .2 or -.2
  // positive is zooming in
  // negative is zooming out
  const scaleAmount = -deltaY / 500;
  stage.scale *= 1 + scaleAmount
  console.log('new Scale', stage.scale)

  //   scale = scale * (1 + scaleAmount);
  //   stage.scale = scale;
  //   // zoom the page based on where the cursor is
  //   const rect = event.target.getBoundingClientRect();
  //   cursorX = event.clientX - rect.left; //x position within the element.
  //   cursorY = event.clientY - rect.top; //y position within the element.
  //   const distX = cursorX / canvas.clientWidth;
  //   const distY = cursorY / canvas.clientHeight;
  //   // calculate how much we need to zoom
  //   const unitsZoomedX = trueWidth() * scaleAmount;
  //   const unitsZoomedY = trueHeight() * scaleAmount;
  //   const unitsAddLeft = unitsZoomedX * distX;
  //   const unitsAddTop = unitsZoomedY * distY;
  //   offsetX -= unitsAddLeft;
  //   offsetY -= unitsAddTop;
  //   // stage.x = offsetX;
  //   // stage.y = offsetY;
  // //
  //   // redrawCanvas();
}

stage.canvas.addEventListener('mousedown', onMouseDown);
stage.canvas.addEventListener('mouseup', onMouseUp, false);
stage.canvas.addEventListener('mouseout', onMouseUp, false); // unclick mouse if out of canvas
stage.canvas.addEventListener('mousemove', onMouseMove, false);

stage.canvas.addEventListener('wheel', onMouseWheel, false);
