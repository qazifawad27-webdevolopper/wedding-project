// Random background color animation
setInterval(() => {
  const colors = ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a18cd1"];
  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];
}, 4000);