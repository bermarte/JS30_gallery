'use strict';

import { comments } from '../data.js';

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);