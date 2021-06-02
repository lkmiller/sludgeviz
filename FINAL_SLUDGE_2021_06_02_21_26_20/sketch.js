
let start = true; 
var amp;
var fft;
var w;
var vol;
var canvas; 
let canvasSize = 500;
 

function startbttn() {
   if (start) {
    const img = document.getElementById("button");
     viz();
    start = false;
  }
}

function preload() {
  song = loadSound("kyoto.mp3");
}


function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
}
}


function setup() {
  createCanvas(canvasSize, canvasSize, WEBGL);
  colorMode(HSB);
  fft = new p5.FFT(0.9, 512);
  var w = width / 512;
  vol = new p5.Amplitude();

}

function viz() {
    song.pause();
  button = createButton("start/stop");
  button.mousePressed(toggleSong);
}

