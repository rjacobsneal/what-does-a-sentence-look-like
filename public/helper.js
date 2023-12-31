window.addEventListener("keydown", function (e) {
  if (e.key === " " && e.target === document.body) {
    e.preventDefault();
  }
});

function redactInput(input) {
  const placeholderChar = "*";
  const inputValue = input.value;
  const redactedValue = placeholderChar.repeat(inputValue.length);
  input.value = redactedValue;
}
