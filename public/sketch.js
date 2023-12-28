let rectWidth;
let rectHeightOffset;
let rows = 10;
let charPerRow = 10;
let charCount = 0;
let backgroundColor = 256;
let canvasSize;

function setup() {
  canvasSize = min(windowWidth, windowHeight) * 0.8;
  canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent("canvas-container");
  buffer = createGraphics(canvasSize, canvasSize);
  buffer.noStroke();
  background(backgroundColor);
}

function draw() {
  rectWidth = canvasSize / charPerRow;
  rectHeightOffset = canvasSize / rows;
  background(256);
  image(buffer, 0, 0);
}

function keyPressed() {
  handleInput();
}

function handleInput() {
  if (
    (key.toLowerCase() >= "a" && key.toLowerCase() <= "z" && key.length == 1) ||
    (key >= "0" && key <= "9") ||
    key == " "
  ) {
    console.log(key.toLowerCase());
    const color = mapKeyToColor(key.toLowerCase());
    buffer.fill(color.r, color.g, color.b);
    buffer.rect(
      (charCount % charPerRow) * rectWidth,
      Math.floor(charCount / charPerRow) * rectHeightOffset,
      rectWidth,
      canvasSize
    );
    charCount++;
  } else if (key == "Enter") {
    buffer.background(256);
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

// function windowResized() {
//   // Ensure the canvas remains square
//   let newSize = min(windowWidth, windowHeight);
//   if (newSize < canvasSize) {
//     canvasSize = newSize;
//     let newBuffer = createGraphics(canvasSize, canvasSize);
//     newBuffer.image(buffer, 0, 0, canvasSize, canvasSize);
//     newBuffer.noStroke();
//     buffer = newBuffer;
//   }
// }
