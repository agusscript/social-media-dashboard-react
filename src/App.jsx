import MainCards from './components/main-cards.jsx';
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
      </main>
    </div>
  )
}

export default App
