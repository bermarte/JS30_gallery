'use strict';

/**
 * removes a transition
 * @param {Event} event - when the property name is not transform, it removes the class 'playing'
 */
export function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}