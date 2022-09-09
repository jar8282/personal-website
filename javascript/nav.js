//script is currently depreciated - may bring back functionality at a later date.
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', function() {
  navbarLinks.classList.toggle('active')
});