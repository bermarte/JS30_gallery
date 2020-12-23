'use strict';

// import all listener files so they can attach to the DOM
import './listeners/recognitionListener.js';
import './listeners/transcriptListeners.js';
// import './listeners/change-separator.js';

// // does your project have code that executes when the document or window are ready?
// // that code can go here

// import { data } from './data.js';

// document.getElementById('separator-input').value = data.separator;

// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//   const recognition = new SpeechRecognition();
//   recognition.interimResults = true;
//   recognition.lang = 'en-US';
  
//   let p = document.createElement('p');
//   const words = document.querySelector('.words');
//   words.appendChild(p);
