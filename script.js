function togglemode() {
  const html = document.documentElement

  const img = document.querySelector("#profile img")

  if (html.classList.toggle("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
