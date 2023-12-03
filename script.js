document.addEventListener("DOMContentLoaded", function () {
  const welcomeLink = document.getElementById("menu-welcome");
  const menuSkills = document.getElementById("menu-skills");

  welcomeLink.addEventListener("click", () => {
    console.log("läuft!");
  });

  menuSkills.addEventListener("click", () => {
    console.log("läuft!");
    document.getElementById("content-welcome").classList.add("hidden");
    document.getElementById("content-skills").classList.remove("hidden");
  });
});
