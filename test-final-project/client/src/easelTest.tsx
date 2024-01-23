import * as createjs from '@thegraid/createjs-module';

const canvas = document.querySelector('#demoCanvas');

console.log(createjs);
console.log('canvas', canvas);
const stage = new createjs.Stage('demoCanvas');

stage.canvas.width = 1000;
stage.canvas.height = 1000;

const circle = new createjs.Shape();
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
circle.x = 50;
circle.y = 100;
stage.addChild(circle);

stage.update();

console.log(stage);

const context = canvas.getContext('2d');

document.oncontextmenu = function () {
  return false;
};

const drawings = [];

// coordinates of our cursor
let cursorX;
let cursorY;
let prevCursorX;
let prevCursorY;

// distance from origin
let offsetX = 0;
let offsetY = 0;

// zoom amount
let scale = 1;

// convert coordinates
function toScreenX(xTrue) {
  return (xTrue + offsetX) * scale;
}
function toScreenY(yTrue) {
  return (yTrue + offsetY) * scale;
}
function toTrueX(xScreen) {
  return xScreen / scale - offsetX;
}
function toTrueY(yScreen) {
  return yScreen / scale - offsetY;
}
function trueHeight() {
  return canvas.clientHeight / scale;
}
function trueWidth() {
  return canvas.clientWidth / scale;
}

function redrawCanvas() {
  // set the canvas to the size of the window
  stage.canvas.width = document.body.clientWidth;
  stage.canvas.height = document.body.clientHeight;

  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < drawings.length; i++) {
    const line = drawings[i];
    drawLine(
      toScreenX(line.x0),
      toScreenY(line.y0),
      toScreenX(line.x1),
      toScreenY(line.y1)
    );
  }
}
redrawCanvas();

// if the window changes size, redraw the canvas
window.addEventListener('resize', (event) => {
  redrawCanvas();
});

// Mouse Event Handlers
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mouseout', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('wheel', onMouseWheel, false);

// Touch Event Handlers
canvas.addEventListener('touchstart', onTouchStart);
canvas.addEventListener('touchend', onTouchEnd);
canvas.addEventListener('touchcancel', onTouchEnd);
canvas.addEventListener('touchmove', onTouchMove);

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

  // update the cursor coordinates
  const rect = event.target.getBoundingClientRect();

  cursorX = event.clientX - rect.left; //x position within the element.
  cursorY = event.clientY - rect.top; //y position within the element.

  // cursorX = event.pageX;
  // cursorY = event.pageY;

  prevCursorX = event.clientX - rect.left; //x position within the element.
  prevCursorY = event.clientY - rect.top; //y position within the element.
  // prevCursorX = event.pageX;
  // prevCursorY = event.pageY;
}
function onMouseMove(event) {
  // get mouse position

  const rect = event.target.getBoundingClientRect();

  cursorX = event.clientX - rect.left; //x position within the element.
  cursorY = event.clientY - rect.top; //y position within the element.

  // const x = event.pageX - event.currentTarget.offsetLeft;
  // const y = event.pageY - event.currentTarget.offsetTop;
  // console.log('x', x, 'y', y);

  // cursorX = event.x;
  // cursorY = event.y;
  // console.log(cursorX);
  const scaledX = toTrueX(cursorX);
  const scaledY = toTrueY(cursorY);
  const prevScaledX = toTrueX(prevCursorX);
  const prevScaledY = toTrueY(prevCursorY);

  if (leftMouseDown) {
    // add the line to our drawing history
    drawings.push({
      x0: prevScaledX,
      y0: prevScaledY,
      x1: scaledX,
      y1: scaledY,
    });
    // draw a line
    drawLine(prevCursorX, prevCursorY, cursorX, cursorY);
  }
  if (rightMouseDown) {
    // move the screen
    offsetX += (cursorX - prevCursorX) / scale;
    offsetY += (cursorY - prevCursorY) / scale;
    redrawCanvas();
  }
  prevCursorX = cursorX;
  prevCursorY = cursorY;
}
function onMouseUp() {
  leftMouseDown = false;
  rightMouseDown = false;
}
function onMouseWheel(event) {
  const deltaY = event.deltaY;
  const scaleAmount = -deltaY / 500;
  scale = scale * (1 + scaleAmount);

  // zoom the page based on where the cursor is

  const rect = event.target.getBoundingClientRect();

  cursorX = event.clientX - rect.left; //x position within the element.
  cursorY = event.clientY - rect.top; //y position within the element.

  const distX = cursorX / canvas.clientWidth;
  const distY = cursorY / canvas.clientHeight;

  // calculate how much we need to zoom
  const unitsZoomedX = trueWidth() * scaleAmount;
  const unitsZoomedY = trueHeight() * scaleAmount;

  const unitsAddLeft = unitsZoomedX * distX;
  const unitsAddTop = unitsZoomedY * distY;

  offsetX -= unitsAddLeft;
  offsetY -= unitsAddTop;

  redrawCanvas();
}
function drawLine(x0, y0, x1, y1) {
  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.strokeStyle = '#000';
  context.lineWidth = 2;
  context.stroke();
}

// touch functions
const prevTouches = [null, null]; // up to 2 touches
let singleTouch = false;
let doubleTouch = false;
function onTouchStart(event) {
  if (event.touches.length == 1) {
    singleTouch = true;
    doubleTouch = false;
  }
  if (event.touches.length >= 2) {
    singleTouch = false;
    doubleTouch = true;
  }

  // store the last touches
  prevTouches[0] = event.touches[0];
  prevTouches[1] = event.touches[1];
}
function onTouchMove(event) {
  // get first touch coordinates
  // TODO: copy cursorX and cursorY from other computer functions
  const touch0X = event.touches[0].pageX;
  const touch0Y = event.touches[0].pageY;
  const prevTouch0X = prevTouches[0].pageX;
  const prevTouch0Y = prevTouches[0].pageY;

  const scaledX = toTrueX(touch0X);
  const scaledY = toTrueY(touch0Y);
  const prevScaledX = toTrueX(prevTouch0X);
  const prevScaledY = toTrueY(prevTouch0Y);

  if (singleTouch) {
    // add to history
    drawings.push({
      x0: prevScaledX,
      y0: prevScaledY,
      x1: scaledX,
      y1: scaledY,
    });
    drawLine(prevTouch0X, prevTouch0Y, touch0X, touch0Y);
  }

  if (doubleTouch) {
    // get second touch coordinates
    const touch1X = event.touches[1].pageX;
    const touch1Y = event.touches[1].pageY;
    const prevTouch1X = prevTouches[1].pageX;
    const prevTouch1Y = prevTouches[1].pageY;

    // get midpoints
    const midX = (touch0X + touch1X) / 2;
    const midY = (touch0Y + touch1Y) / 2;
    const prevMidX = (prevTouch0X + prevTouch1X) / 2;
    const prevMidY = (prevTouch0Y + prevTouch1Y) / 2;

    // calculate the distances between the touches
    const hypot = Math.sqrt(
      Math.pow(touch0X - touch1X, 2) + Math.pow(touch0Y - touch1Y, 2)
    );
    const prevHypot = Math.sqrt(
      Math.pow(prevTouch0X - prevTouch1X, 2) +
        Math.pow(prevTouch0Y - prevTouch1Y, 2)
    );

    // calculate the screen scale change
    const zoomAmount = hypot / prevHypot;
    scale = scale * zoomAmount;
    const scaleAmount = 1 - zoomAmount;

    // calculate how many pixels the midpoints have moved in the x and y direction
    const panX = midX - prevMidX;
    const panY = midY - prevMidY;
    // scale this movement based on the zoom level
    offsetX += panX / scale;
    offsetY += panY / scale;

    // Get the relative position of the middle of the zoom.
    // 0, 0 would be top left.
    // 0, 1 would be top right etc.
    const zoomRatioX = midX / canvas.clientWidth;
    const zoomRatioY = midY / canvas.clientHeight;

    // calculate the amounts zoomed from each edge of the screen
    const unitsZoomedX = trueWidth() * scaleAmount;
    const unitsZoomedY = trueHeight() * scaleAmount;

    const unitsAddLeft = unitsZoomedX * zoomRatioX;
    const unitsAddTop = unitsZoomedY * zoomRatioY;

    offsetX += unitsAddLeft;
    offsetY += unitsAddTop;

    redrawCanvas();
  }
  prevTouches[0] = event.touches[0];
  prevTouches[1] = event.touches[1];
}
function onTouchEnd(event) {
  singleTouch = false;
  doubleTouch = false;
}
