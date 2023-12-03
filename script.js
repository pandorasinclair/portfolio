document.addEventListener("DOMContentLoaded", function () {
  function toggleMenuVisibility(contentIdString) {
    const contentContainer = document.getElementById("content");

    console.log("ich habe dies und das geklickt", contentContainer);

    console.log(
      "das sind die Kinder vom contentContainer",
      contentContainer.children
    );

    Array.from(contentContainer.children).forEach((element) => {
      console.log(element);
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
        element.classList.remove("visible");
      }
    });
    const hiddenContent = document.getElementById(contentIdString);
    hiddenContent.classList.add("visible");
    hiddenContent.classList.remove("hidden");

    /*  if (container.classList.contains("hidden")) {
      var allMenuItems = clickedMenuItem.parentElement.children;
      for (var i = 0; i < allMenuItems.length; i++) {
        var menuItem = allMenuItems[i];
        menuItem.classList.add("hidden");
        menuItem.classList.remove("visible");
        menuItem.style.opacity = 0;
        menuItem.style.transform = "translateX(100%)";
      }

      clickedMenuItem.classList.remove("hidden");
      clickedMenuItem.classList.add("visible");
      clickedMenuItem.style.opacity = 1;
      clickedMenuItem.style.transform = "translateX(0)";
    } */
  }

  var menuItemWelcome = document.getElementById("menu-welcome");
  menuItemWelcome.addEventListener("click", function () {
    toggleMenuVisibility("content-welcome");
  });

  var menuItemSkills = document.getElementById("menu-skills");
  menuItemSkills.addEventListener("click", function () {
    toggleMenuVisibility("content-skills");
  });

  var menuItemProjekte = document.getElementById("menu-projekte");
  menuItemProjekte.addEventListener("click", function () {
    toggleMenuVisibility("content-projekte");
  });

  var menuItemZertifikate = document.getElementById("menu-zertifikate");
  menuItemZertifikate.addEventListener("click", function () {
    toggleMenuVisibility("content-zertifikate");
  });

  var menuItemLebenslauf = document.getElementById("menu-lebenslauf");
  menuItemLebenslauf.addEventListener("click", function () {
    toggleMenuVisibility("content-lebenslauf");
  });
});
