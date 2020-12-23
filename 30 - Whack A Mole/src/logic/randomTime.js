'use strict';

export function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}