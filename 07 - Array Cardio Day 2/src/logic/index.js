'use strict';

import {
  comments
} from '../data.js';

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];