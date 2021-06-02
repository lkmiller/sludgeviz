
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
  song = loadSound("nobodymitski.mp3");
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else song.play();
}

function setup() {

  createCanvas(canvasSize, canvasSize);
  colorMode(HSB);
  fft = new p5.FFT(0.9, 512);
  vol = new p5.Amplitude();
  var w = width / 512;

}

function viz() {
  button = createButton("start/stop");
  button.mousePressed(toggleSong);
  song.play();
  
  let lines = 6;
  let gap = canvasSize / lines;

  for (let row = 0; row < lines; row++) {
    for (let col = 0; col < lines; col++) {
      const x = gap * col;
      const y = gap * row;
      const width = gap;
      const height = gap;

      noStroke();
      if ((row + col) % 2 === 0) {
        fill("black");
      } else {
        col % 2 === 0;
        fill("grey");
      }

      rect(x, y, width, height);
    }
  }
  
  let spectrum = fft.analyze();
  noFill();
  translate(height/2, width/2);
  strokeWeight(1);
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    let r = map(spectrum[i], 0, 255, height, 255)
    let x = r*cos(i);
    let y = r*sin(i)
    stroke(i, 255, 255);
   line(i, map(spectrum[i], 0, 255, width, 255), 0, 0);
  line(i, map(spectrum[i], 255, 0, height, 0), 0, 0);
     vertex(x, y)
  }
 endShape();
}


