function redactInput(input) {
  const placeholderChar = "*";
  const inputValue = input.value;
  const redactedValue = placeholderChar.repeat(inputValue.length);
  input.value = redactedValue;
}
