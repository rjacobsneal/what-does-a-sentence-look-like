const numberOfSquares = 10;
const animationDuration = 25; // seconds

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
  const squareSize = (window.innerWidth * 0.75) / numberOfSquares;

  element.className = "square";
  element.style.position = "absolute";
  element.style.zIndex = "-1";
  element.style.backgroundColor = randomColor;
  element.style.width = `${squareSize}px`;
  element.style.height = `${squareSize}px`;
  element.style.opacity = 0;

  const x = i * (window.innerWidth / numberOfSquares) + squareSize / 5;
  const y = window.innerHeight + squareSize;
  element.style.bottom = `${-squareSize}px`;
  element.style.left = `${x}px`;

  const animationDelay = Math.random() * animationDuration;
  element.style.animation = `floatAnimation ${animationDuration}s linear ${animationDelay}s infinite, fadeIn 0s ${animationDelay}s forwards`;

  document.body.appendChild(element);
}
