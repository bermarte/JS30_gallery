'use strict';

export const inputs = document.querySelectorAll('.controls input');

/**
 * 
 * updates CSS attributes
 */
export function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}