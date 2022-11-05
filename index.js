window.onscroll = function () {
  scrollFunction();
};

// When the user scrolls down 20px from the top of the document, show the scroll to top button

const scrollFunction = function () {
  const backToTopElement = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopElement.className = "d-none d-sm-block";
  } else {
    backToTopElement.className = "d-none";
  }
};
const backToTop = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
