import '../BackButton/backButton.css';
export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Show or hide the "Go Up" button based on scroll position
window.onscroll = function () {
  var goUpBtn = document.getElementById('go-up-btn');
  goUpBtn.style.display = window.scrollY > 20 ? 'block' : 'none';
};
