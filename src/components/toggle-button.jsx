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

  togglElementsColor('.main-card', 'card-dark-active');
  togglElementsColor('.user-name', 'desatured-blue');
  togglElementsColor('.follow-number', 'white');
  togglElementsColor('.follow-text', 'desatured-blue');

  togglElementsColor('.secondary-card', 'card-dark-active');
  togglElementsColor('.title-card', 'desatured-blue');
  togglElementsColor('.number-card', 'white');
}

function ToggleButton() {
  return (
    <button className='toggle-button' onClick={toggleTheme}>
      <div className='inner-toggle-button'></div>
    </button>
  )
}

export default ToggleButton;