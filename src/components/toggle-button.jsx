import '../styles/toggle-button.scss';

function togglElementsColor(elements, color) {
  document.querySelectorAll(elements).forEach((e) => {
    e.classList.toggle(color);
  });
}

function toggleSingleElementColor(element, color) {
  document.querySelector(element).classList.toggle(color);
}

const toggleTheme = () => {
  toggleSingleElementColor('body', 'very-dark-blue');
  toggleSingleElementColor('.header-title', 'white');
  toggleSingleElementColor('.header-subtitle', 'desatured-blue');
  toggleSingleElementColor('.toggle-button', 'toggle-active');
  toggleSingleElementColor('.inner-toggle-button', 'inner-active');
  toggleSingleElementColor('.overview-title', 'white');
  toggleSingleElementColor('.footer-text', 'white');
  toggleSingleElementColor('.footer-link', 'lime-green');

  togglElementsColor('.main-card', 'dark-desaturated-blue');
  togglElementsColor('.main-card', 'main-card-dark');
  togglElementsColor('.user-name', 'desatured-blue');
  togglElementsColor('.follow-number', 'white');
  togglElementsColor('.follow-text', 'desatured-blue');

  togglElementsColor('.secondary-card', 'dark-desaturated-blue');
  togglElementsColor('.secondary-card', 'secondary-card-dark');
  togglElementsColor('.title-card', 'desatured-blue');
  togglElementsColor('.number-card', 'white');
}

function ToggleButton() {
  return (
    <button className='toggle-button' aria-label='active dark theme' onClick={toggleTheme}>
      <div className='inner-toggle-button' ></div>
    </button>
  )
}

export default ToggleButton;