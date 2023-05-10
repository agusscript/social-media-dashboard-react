import MainCards from './components/main-card.jsx';
import SecondaryCards from './components/secondary-card.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className='App'>

      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total followers: 23,004</p>
        </div>
      </header>

      <main>

        <section className='main-cards-container'>
          {MainCards}
        </section>

        <h2 className='subtitle'>Overview - Today</h2>

        <section className='secondary-cards-container'>
          {SecondaryCards}
        </section>

      </main>
    </div>
  )
}

export default App
