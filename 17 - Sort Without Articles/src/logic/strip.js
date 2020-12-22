'use strict';

export function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}