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
  closeHamburgherMenu();

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
    window.setTimeout(function () {
      hamburgherMenu.style.transform = "translate(0px,0px)";
    }, 0);
  } else {
    window.setTimeout(function () {
      hamburgherMenu.style.transform = "translate(0px,-80px)";
    }, 0);
  }
};

let toggle = false;
hamburgerButton.addEventListener("click", () => {
  toggle = !toggle;
  openHamburgher(toggle);
});

const closeHamburgherMenu = () => {
  toggle = false;
  window.setTimeout(function () {
    hamburgherMenu.style.transform = "translate(0px,-80px)";
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
    // console.log("close");
    closeHamburgherMenu();
    popupButtonClosed();
    searchButtonClosed();
    closeBlack();
  }
};

document.body.addEventListener("click", myFunction, false);

// POPUP - OPEN/CLOSED

const popUp = document.getElementById("area__giochi__popUpA");
const buttonLogIn = document.getElementById("area__giochi__shadowLb");

const popupButtonOpen = () => {
  openBlack();
  popUp.style.display = "flex";
  console.log("test");
  window.setTimeout(function () {
    popUp.style.opacity = 1;
  }, 0);
};

const popupButtonClosed = () => {
  popUp.style.display = "none";
  window.setTimeout(function () {
    popUp.style.opacity = 0;
  }, 0);
};

buttonLogIn.addEventListener("click", () => {
  popupButtonOpen();
});

// GALLERY THUMB "FOCUS" EFFECT IN JAVASCRIPT

var navUl = document.getElementById("area__giochi__bigSliderImgThumb");
navUl.addEventListener("click", checkLi);

function checkLi(event) {
  // Just for testing... remove the following line:
  // console.log("clicked on", event.target.tagName);
  // Only apply our actions if we really clicked on the link.
  if (event.target.tagName === "IMG") {
    navUl
      .querySelectorAll("a")
      .forEach((el) => el.classList.remove("thumbActive"));
    event.target.parentNode.classList.add("thumbActive");
  }
}
