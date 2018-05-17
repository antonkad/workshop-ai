<template>
  <div class="webcam-ui-container">
    <div id="webcam-wrapper" style="display: none">
      <video autoplay playsinline muted
        id="webcam" width="416" height="416">
      </video>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import yolo, { downloadModel } from 'tfjs-yolo-tiny';

  import { Webcam } from './webcam';

  let model;
  const webcam = new Webcam(document.getElementById('webcam'));

  (async function main() {
    try {
      ga();
      model = await downloadModel();

      alert("Just a heads up! We'll ask to access your webcam so that we can " +
        "detect objects in semi-real-time. \n\nDon't worry, we aren't sending " +
        "any of your images to a remote server, all the ML is being done " +
        "locally on device, and you can check out our source code on Github.");

      await webcam.setup();

      doneLoading();
      run();
    } catch(e) {
      console.error(e);
      showError();
    }
  })();

  async function run() {
    while (true) {
      clearRects();

      const inputImage = webcam.capture();

      const t0 = performance.now();

      const boxes = await yolo(inputImage, model);

      const t1 = performance.now();
      console.log("YOLO inference took " + (t1 - t0) + " milliseconds.");

      boxes.forEach(box => {
        const {
          top, left, bottom, right, classProb, className,
        } = box;

        drawRect(left, top, right-left, bottom-top,
          `${className} Confidence: ${Math.round(classProb * 100)}%`)
      });

      await tf.nextFrame();
    }
  }

  const webcamElem = document.getElementById('webcam-wrapper');

  function drawRect(x, y, w, h, text = '', color = 'red') {
    const rect = document.createElement('div');
    rect.classList.add('rect');
    rect.style.cssText = `top: ${y}; left: ${x}; width: ${w}; height: ${h}; border-color: ${color}`;

    const label = document.createElement('div');
    label.classList.add('label');
    label.innerText = text;
    rect.appendChild(label);

    webcamElem.appendChild(rect);
  }

  function clearRects() {
    const rects = document.getElementsByClassName('rect');
    while(rects[0]) {
      rects[0].parentNode.removeChild(rects[0]);
    }
  }

  function doneLoading() {
    const elem = document.getElementById('loading-message');
    elem.style.display = 'none';

    const successElem = document.getElementById('success-message');
    successElem.style.display = 'block';

    const webcamElem = document.getElementById('webcam-wrapper');
    webcamElem.style.display = 'flex';
  }

  function showError() {
    const elem = document.getElementById('error-message');
    elem.style.display = 'block';
    doneLoading();
  }

  function ga() {
    if (process.env.UA) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', process.env.UA);
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .wrapper {
    width: 100%;
    min-width: 500px;
  }
  .logo-wrapper {
    margin: 0 auto 25px auto;
    text-align: center;
  }
  .logo {
    max-height: 90px;
  }
  #webcam-wrapper {
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 0 auto;
    width: 416px;
    height: 416px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
  .rect {
    position: absolute;
    border: 1px solid red;
    font-size: 24px;
  }
  .rect .label {
    background: white;
    color: black;
    display: inline;
    opacity: 0.8;
    font-size: 12px;
    padding: 3px;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .intro {
    max-width: 908px;
    margin: 0 auto;
    padding: 15px;
  }
  .intro h1 {
    font-weight: 300;
    font-weight: 2rem;
  }
  .intro p {
    font-weight: 300;
    font-size: 20px;
    line-height: 1.4;
  }

  #error-message {
    text-align: center;
    margin: 25px 0;
  }
  #success-message {
    text-align: center;
    max-width: 450px;
    margin: 25px auto;
    color: #00c13f;
    line-height: 1.5;
  }
  #loading-message {
    text-align: center;
  }
  .spin {
    width: 120px;
    height: 120px;
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
