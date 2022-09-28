// OPEN SEARCH NAVBAR

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
};

const searchButtonClosed = () => {
  navbar.style.display = "flex";
  searchBarBig.style.display = "none";
};

searchBarNavButton.addEventListener("click", () => {
  searchButtonOpen();
  openBlack();
});

closeSearchBarButton.addEventListener("click", () => {
  searchButtonClosed();
  closeBlack();
});

// BLACK SCREEN
const blackScreen = document.getElementById("area__giochi__blackScreen");

const openBlack = () => {
  blackScreen.style.visibility = "visible";
};

const closeBlack = () => {
  blackScreen.style.visibility = "hidden";
};
