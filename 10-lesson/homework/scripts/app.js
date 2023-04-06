// @ts-nocheck
/*=================IconsContainer for all===============================*/
const iconsContainer = document.getElementById("iconsContainer");
/*=================IconsContainer for all===============================*/

// only for fontFamily for body background color
const fontFamily = document.getElementById("fontFamily");

fontFamily.addEventListener("change", ({ target: { value } }) => {
  document.body.style.fontFamily = value;
});

// only for fontSize for body fontSize
const fontSize = document.getElementById("fontSize");

fontSize.addEventListener("keyup", ({ target: { value } }) => {
  document.body.style.fontSize = value;
});

// only for backgroundColor for iconsContainer
const backgroundColor = document.getElementById("backgroundColor");

backgroundColor?.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.backgroundColor = value;
});

// only for color for iconsContainer
const color = document.getElementById("color");

color.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.color = value;
});

// only for gap for iconsContainer
const gap = document.getElementById("gap");

gap.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.gap = value;
});

// only for justifyContent for iconsContainer
const justifyContent = document.getElementById("justifyContent");

justifyContent.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.justifyContent = value;
});

// only for borderColor for iconsContainer
const borderColor = document.getElementById("borderColor");

borderColor.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.borderColor = value;
});

// only for padding for iconsContainer
const padding = document.getElementById("padding");

padding.addEventListener("keyup", ({ target: { value } }) => {
  iconsContainer.style.padding = value;
});

// creating icon
const googleIcon = document.getElementById("googleIcon");

googleIcon.addEventListener("change", ({ target: { value } }) => {
  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.innerHTML = value;
  iconsContainer.appendChild(span);
});
