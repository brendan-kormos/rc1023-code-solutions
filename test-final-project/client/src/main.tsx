// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// );

// these 3 variables are supposed to be let variables
const scale = 1;
const offsetX = 0;
const offsetY = 0;

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

function getScrollBarWidth(respectOverflow: true) {
  if (respectOverflow) {
    return window.innerWidth - document.body.offsetWidth;
  }
  const el = document.createElement('div');
  el.style.cssText = 'overflow:scroll; visibility:hidden; position:absolute;';
  document.body.appendChild(el);
  const width = el.offsetWidth - el.clientWidth;
  el.remove();
  return width;
}
function getScrollBarHeight(respectOverflow: boolean) {
  if (respectOverflow) {
    return window.innerWidth - document.body.offsetWidth;
  }
  const el = document.createElement('div');
  el.style.cssText = 'overflow:scroll; visibility:hidden; position:absolute;';
  document.body.appendChild(el);
  const height = el.offsetHeight - el.clientHeight;
  el.remove();
  return height;
}

// function getScrollbarWidth() {
//   // Creating invisible container
//   const outer = document.createElement('div');
//   outer.style.visibility = 'hidden';
//   outer.style.overflow = 'scroll'; // forcing scrollbar to appear
//   outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
//   document.body.appendChild(outer);

//   // Creating inner element and placing it in the container
//   const inner = document.createElement('div');
//   outer.appendChild(inner);

//   // Calculating difference between container's full width and the child width
//   const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

//   // Removing temporary elements from the DOM
//   outer.parentNode.removeChild(outer);

//   return scrollbarWidth;
// }
// function getScrollbarHeight() {
//   // Creating invisible container
//   const outer = document.createElement('div');
//   outer.style.visibility = 'hidden';
//   outer.style.overflow = 'scroll'; // forcing scrollbar to appear
//   outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
//   document.body.appendChild(outer);

//   // Creating inner element and placing it in the container
//   const inner = document.createElement('div');
//   outer.appendChild(inner);

//   // Calculating difference between container's full width and the child width
//   const scrollbarWidth = outer.offsetHeight - inner.offsetHeight;

//   // Removing temporary elements from the DOM
//   outer.parentNode.removeChild(outer);

//   return scrollbarWidth;
// }

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d') as CanvasRenderingContext2D;

// these won't render while the animate script is clearing the entire viewport of all drawings

// context.fillRect(200, 100, 100, 100);
// console.log('hi');

// context.beginPath();
// context.moveTo(0, 500); //start position
// context.lineTo(200, 200); // next line position
// context.lineTo(900, 800) // next line position
// context.strokeStyle = '#f05d5e';
// context.lineWidth = 1;
// context.stroke(); //render line with a stroke

// context.beginPath()
// context.arc(300, 300, 30, 0, Math.PI * 2, false)
// context.strokeStyle = "blue"
// context.stroke()

// for (let i = 0; i < 300; i ++){
//   context.beginPath();
//   const x = Math.random() * window.innerWidth
//   const y = Math.random() * window.innerHeight
//   context.arc(x, y, 30, 0, Math.PI * 2, false);
//   context.strokeStyle = 'blue';
//   context.stroke();
// }

// --implicitThis
// const cutCircle = function (x, y, radius) {
//   context.globalCompositeOperation = 'destination-out';
//   context.arc(x, y, radius, 0, Math.PI * 2, true);
//   context.fill();
// };

const mouse: { [key: string]: number } = {
  x: undefined,
  y: undefined,
};

// const minRadius = 2;
const maxRadius = 70;

window.addEventListener('mousemove', function (event) {
  console.log('movemouse');
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function randomColor(): string {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  // const color = '#' + (155).toString(16) + (102).toString(16) + (102).toString(16);
}

class Circle implements Circle {
  //writeable fields
  public color: string;
  private minRadius: number;
  public speed: number;
  constructor(
    //this is the same as defining the fields above. it is automatically applied to "this" object
    // private wouldn't allow fields to be accessed outside of this class
    public x: number,
    public y: number,
    public dx: number,
    public dy: number,
    public radius: number
  ) {
    //constructor can't have a this parameter
    this.color = randomColor();
    this.minRadius = this.radius;
    this.speed = 200;
  }
  draw = function (this: Circle) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = 'red';
    context.fillStyle = this.color;
    context.fill();
  };
  update = function (this: Circle, deltaTime: number) {
    // console.log('deltaTime', deltaTime)

    const speedIncrement = deltaTime * this.speed;


    // const remainderX = null
    // const remainderY = null

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx * (deltaTime / 1000);
    this.y += this.dy * (deltaTime / 1000);

    // interactivity

    if (Math.abs(mouse.x - this.x) < 50 && Math.abs(mouse.y - this.y) < 50) {
      // close enough
      if (this.radius < maxRadius) {
        this.radius = Math.min(this.radius + speedIncrement / 1000, maxRadius);
      }
    } else if (this.radius > this.minRadius) {
      //not close enough
      this.radius = Math.max(
        this.radius - speedIncrement / 1000,
        this.minRadius
      );
    }

    this.draw();
  };
}

const circleArray: Circle[] = [];
function init() {
  circleArray.splice(0, circleArray.length);
  for (let i = 0; i < 800; i++) {
    const radius = Math.random() * 3 + 1;
    const x = Math.random() * (canvas.width - radius * 2) + radius; // position
    const y = Math.random() * (canvas.height - radius * 2) + radius; //position
    const dx = Math.random() * 75 - 75; //velocity x
    const dy = Math.random() * 75 - 75; // velocity y
    // const dx = 50;
    // const dy = 50;

    circleArray.push(new Circle(x, y, dx, dy, radius));
    circleArray[i].draw();
  }
}

// context.beginPath();
// context.arc(200, 200, 30, 0, Math.PI * 2, false);
// context.strokeStyle = 'blue';
// context.stroke();

const fps = 20000;
const fpsDeltaTime = 1000 / fps;

const start = performance.now();
let lastStepTime = performance.now();

function step() {
  //timeStamp is an integer, divide by 1000 to get the decimal value
  const now = performance.now();
  const elapsedTime = now - start;

  let deltaTime;
  deltaTime = now - lastStepTime;

  if (!lastStepTime || fpsDeltaTime <= deltaTime) {
    // passes statement if the set frametime is reached

    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update(deltaTime || 0);
    }
    lastStepTime = now;
  }
  requestAnimationFrame(step);
}

init();
requestAnimationFrame(step);
