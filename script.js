console.log("🚨 script.js loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const completeBtn = document.getElementById("complete-btn");
  const viewBadgesBtn = document.getElementById("badges-btn");
  const leaderboardBtn = document.getElementById("leaderboard-btn");
  const statusDiv = document.getElementById("mission-status");
  const codeInput = document.getElementById("code-input");
  const preview = document.getElementById("preview");

  // Start Mission Button
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      alert("🚀 Mission started! Time to code through the stars!");
    });
  }

  // Complete Mission Button
  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      alert("✅ Mission complete! You earned a badge!");
      localStorage.setItem("missionComplete", "true");
      if (statusDiv) {
        statusDiv.textContent = "✅ Mission Already Completed!";
        statusDiv.style.color = "green";
      }
    });
  }

  // View Badges Button (if it exists)
  if (viewBadgesBtn) {
    viewBadgesBtn.addEventListener("click", () => {
      window.location.href = "badges.html";
    });
  }

  // Leaderboard Button
  if (leaderboardBtn) {
    leaderboardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "leaderboard.html";
    });
  }

  // Show completed mission status on load
  if (statusDiv && localStorage.getItem("missionComplete") === "true") {
    statusDiv.textContent = "✅ Mission Already Completed!";
    statusDiv.style.color = "green";
  }

  // Live Preview for Code Editor
  if (codeInput && preview) {
    codeInput.addEventListener("input", () => {
      preview.textContent = codeInput.value;
    });
  }
});
