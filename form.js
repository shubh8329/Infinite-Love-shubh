
// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const city = document.getElementById("city").value;
  
  // Store data in localStorage
  localStorage.setItem("loveName", name);
  localStorage.setItem("yourName", email);
  localStorage.setItem("loveMessage", number);
  localStorage.setItem("meetCity", city);
  
  // Redirect to success page
  window.location.href = "success.html";
}

const container = document.querySelector(".moving-background-container");

if (container) {
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
}
