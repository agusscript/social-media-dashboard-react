import MainCards from './components/main-card.jsx';
import SecondaryCards from './components/secondary-card.jsx';
import ToggleButton from './components/toggle-button.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className='App'>

      <header>

        <div>
          <h1 className='header-title'>Social Media Dashboard</h1>
          <p className='header-subtitle'>Total followers: 23,004</p>
        </div>

        <div className='toggle-btn-container'>
          <p className='toggle-text'>Dark Mode</p>
          <ToggleButton />
        </div>

      </header>

      <main>

        <section className='main-cards-container'>
          {MainCards}
        </section>

        <h2 className='overview-title'>Overview - Today</h2>

        <section className='secondary-cards-container'>
          {SecondaryCards}
        </section>

      </main>
    </div>
  )
}

export default App
