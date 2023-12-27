let rectWidth;
let rectHeightOffset;
let rows = 10;
let charPerRow = 10;
let charCount = 0;
let backgroundColor = 256;

function setup() {
  createCanvas(720, 720).parent("canvas-container");
  noStroke();
  background(backgroundColor);
  rectWidth = width / charPerRow;
  rectHeightOffset = height / rows;
}

function draw() {
  // keep draw() here to continue looping while waiting for keys
}

function keyPressed() {
  let keyIndex = -1;
  if ((key >= "a" && key <= "z") || (key >= "0" && key <= "9") || key == " ") {
    const color = mapKeyToColor(key);
    fill(color.r, color.g, color.b);
    rect(
      (charCount % charPerRow) * rectWidth,
      Math.floor(charCount / charPerRow) * rectHeightOffset,
      rectWidth,
      height
    );
    charCount++;
  } else if (key == "Enter") {
    background(backgroundColor);
    charCount = 0;
  }
}

// Function to map key to color using HSV
function mapKeyToColor(key) {
  let keyIndex;
  let r, g, b;

  if (key != " ") {
    if (key >= 0 && key <= 9) {
      keyIndex = 26 + key.charCodeAt(0) - "0".charCodeAt(0);
    } else {
      keyIndex = key.charCodeAt(0) - "a".charCodeAt(0);
    }

    // Convert keyIndex to a hue value in the range [0, 1]
    const hue = keyIndex / 36;

    // Set constant values for saturation and value
    const saturation = 0.5;
    const value = 1;

    // Convert HSV to RGB
    const rgb = hsvToRgb(hue, saturation, value);
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  } else {
    r = 0;
    g = 0;
    b = 0;
  }

  return { r, g, b };
}

// Function to convert HSV to RGB
function hsvToRgb(h, s, v) {
  let r, g, b;

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function saveCanvasAsPNG() {
  saveCanvas("canvas", "png");
}
