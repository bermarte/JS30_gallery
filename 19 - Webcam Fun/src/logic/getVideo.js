'use strict';

const video = document.querySelector('.player');


export function getVideo() {
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(localMediaStream => {
            console.log(localMediaStream);

            //  DEPRECIATION : 
            //       The following has been deprecated by major browsers as of Chrome and Firefox.
            //       video.src = window.URL.createObjectURL(localMediaStream);
            //       Please refer to these:
            //       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
            //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`OH NO!!!`, err);
        });
}