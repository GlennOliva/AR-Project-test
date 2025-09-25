// Wait until A-Frame scene is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("AR Project Loaded 🚀");

  // Get the cake model
  const cake = document.querySelector("[gltf-model]");

  // Example: Rotate the cake continuously
  let rotation = 0;
  function animate() {
    rotation += 1;
    cake.setAttribute("rotation", `0 ${rotation} 0`);
    requestAnimationFrame(animate);
  }
  animate();

  // Example: Click on cake to scale up
  cake.addEventListener("click", () => {
    cake.setAttribute("scale", "1 1 1"); // Bigger
    console.log("Cake clicked 🍰");
  });
});
