const numberOfSquares = 8;
const animationDuration = 18; // seconds

for (let i = 0; i < numberOfSquares; i++) {
  createFloatingSquare(i);
}

function createFloatingSquare(i) {
  const colors = [
    "#87bfc9",
    "#a9d8db",
    "#d5ebf1",
    "#f4ebd1",
    "#f6c788",
    "#fab098",
    "#9ec6ff",
    "#b599e1",
    "#e1d9f4",
    "#fcd994",
    "#ed655f",
  ];

  const element = document.createElement("div");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const squareSize = Math.min(window.innerWidth, window.innerHeight) * 0.09;

  element.className = "square";
  element.style.position = "absolute";
  element.style.zIndex = "-1";
  element.style.backgroundColor = randomColor;
  element.style.width = `${squareSize}px`;
  element.style.height = `${squareSize}px`;

  // Randomly position each square on the screen
  const x = i * (window.innerWidth / numberOfSquares);
  const y = window.innerHeight + squareSize;
  element.style.bottom = `-${3 * squareSize}px`;
  element.style.left = `${x}px`;

  const animationDelay = Math.random() * animationDuration;
  element.style.animation = `floatAnimation ${animationDuration}s linear ${animationDelay}s infinite`;

  document.body.appendChild(element);
}
