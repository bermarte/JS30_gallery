'use striict';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

export let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('end', recognition.start);

recognition.start();