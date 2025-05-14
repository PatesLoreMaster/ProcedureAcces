document.getElementById("start-btn").addEventListener("click", function () {
  // Hide landing, show prank
  document.getElementById("landing").style.display = "none";
  document.getElementById("prank").style.display = "flex";

  // Play audio
  const audio = document.getElementById("idiot-audio");
  audio.play().catch(err => {
    console.error("Audio playback failed:", err);
  });
});
