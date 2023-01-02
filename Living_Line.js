let track = [];
let circleX = [];
let circleY = [];
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider (0, 100, 50);
}

function draw() {
  background("white");
  LivingLine();
}
let n = 50;
function mouseMoved(n){
  LivingLine();
  let val = slider.value();
  if (track.length > val){
    track.shift();
    track.length = val - 1;}
}

  function LivingLine() {
    fill("black");
  track[track.length] = [mouseX, mouseY];
  for (i = 0; i < track.length-1; i++){
    const x = track[i][0];
    const y = track[i][1];
    const xi = track[i+1][0];
    const yi = track[i+1][1];
    line(x, y, xi, yi);
  }
  }
