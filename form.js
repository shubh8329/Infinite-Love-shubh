
const container = document.querySelector(".moving-background-container");

container.addEventListener("mousemove", (e) => {
  // Get the container's position relative to the viewport
  const { x, y } = container.getBoundingClientRect();
  
  // Calculate mouse position relative to the container
  const mouseX = e.clientX - x;
  const mouseY = e.clientY - y;

  // Update CSS variables in real-time
  container.style.setProperty("--mouse-x", `${mouseX}px`);
  container.style.setProperty("--mouse-y", `${mouseY}px`);
});

// Optional: Hide the effect when the mouse leaves the container
container.addEventListener("mouseleave", () => {
  container.style.setProperty("opacity", "0");
});
