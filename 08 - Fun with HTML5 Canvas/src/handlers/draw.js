'use strict';


import { data } from '../data.js';

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

export function draw(e) {
    if (!data.isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${data.hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(data.lastX, data.lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [data.lastX, data.lastY] = [e.offsetX, e.offsetY];

    data.hue++;
    if (data.hue >= 360) {
        data.hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        data.direction = !data.direction;
    }

    if (data.direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}