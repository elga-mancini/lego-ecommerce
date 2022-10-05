// SEARCH NAVBAR - OPEN / CLOSED FEATURE

const searchBarNavButton = document.getElementById(
  "area__giochi__searchBarButton"
);
const navbar = document.querySelector(".area__giochi__nav");
const searchBarBig = document.getElementById("area__giochi__activeSearchBar");
const closeSearchBarButton = document.getElementById(
  "area__giochi__close_activeSearchBar"
);

const searchButtonOpen = () => {
  navbar.style.display = "none";

  searchBarBig.style.display = "block";
  window.setTimeout(function () {
    searchBarBig.style.opacity = 1;
    // searchBarBig.style.transform = "scale(1)";
  }, 0);
};

const searchButtonClosed = () => {
  navbar.style.display = "flex";
  searchBarBig.style.display = "none";
  window.setTimeout(function () {
    searchBarBig.style.opacity = 0;
    // searchBarBig.style.transform = "scale(0)";
  }, 0);
};

searchBarNavButton.addEventListener("click", () => {
  searchButtonOpen();
  openBlack();
});

closeSearchBarButton.addEventListener("click", () => {
  searchButtonClosed();
  closeBlack();
});

// SEARCH NAVBAR - BLACK SCREEN FEATURE
const blackScreen = document.getElementById("area__giochi__blackScreen");

const openBlack = () => {
  blackScreen.style.visibility = "visible";
};

const closeBlack = () => {
  blackScreen.style.visibility = "hidden";
};

// HAMBURGHER MENU - OPEN/CLOSED FEATURE

const hamburgherMenu = document.getElementById(
  "area__giochi__activeHamburgerM"
);
const hamburgerButton = document.getElementById("area__giochi__hamburgerB");

const openHamburgher = (toggle) => {
  if (toggle) {
    // hamburgherMenu.style.display = "flex";
    window.setTimeout(function () {
      // hamburgherMenu.style.opacity = 1;
      hamburgherMenu.style.transform = "translate(0px,0px)";
      // searchBarBig.style.transform = "scale(1)";
    }, 0);
  } else {
    // hamburgherMenu.style.display = "none";
    window.setTimeout(function () {
      // hamburgherMenu.style.opacity = 0;
      hamburgherMenu.style.transform = "translate(0px,-80px)";
      // searchBarBig.style.transform = "scale(1)";
    }, 0);
  }
};

let toggle = false;
hamburgerButton.addEventListener("click", () => {
  toggle = !toggle;
  console.log(toggle);
  openHamburgher(toggle);
});

const closeHamburgherMenu = () => {
  toggle = false;
  window.setTimeout(function () {
    // hamburgherMenu.style.opacity = 0;
    hamburgherMenu.style.transform = "translate(0px,-80px)";
    // searchBarBig.style.transform = "scale(1)";
  }, 0);
};

// This function selects the entire body except for one particular element
const myFunction = (e) => {
  let containsActiveClass = false;
  let reviewNode = e.target;

  while (reviewNode.nodeName !== "BODY") {
    if (reviewNode.classList.contains("active")) {
      containsActiveClass = true;
      break;
    }

    reviewNode = reviewNode.parentNode;
  }

  if (containsActiveClass === false) {
    console.log("close");
    closeHamburgherMenu();
  }
};

document.body.addEventListener("click", myFunction, false);
