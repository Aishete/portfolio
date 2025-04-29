function toggleColorSchemeIcon(element) {
  const colorScheme = document.querySelector("html").dataset.colorScheme;
  const svgElements = element.querySelectorAll("svg");
  svgElements.forEach((svg) => {
    svg.style.display = svg.classList.contains(colorScheme)
      ? "inline-block"
      : "none";
  });
}

// function type(i , t, ie, oe) {
//     input = d
// }
