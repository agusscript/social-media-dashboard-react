import mainCards from './main-card-list';
import '../styles/main-card.scss';

function MainCard({ userName, followText, followToday, image, icon, target }) {
  return (
    <div className='main-card'>
      <div className='user-container'>
        <img src={image} alt={`${image} icon`} />
        <p className='user-name'>{userName}</p>
      </div>
      <div className='follow-container'>
        <h2 className='number follow-number' target={target}>0</h2>
        <p className='follow-text'>{followText}</p>
      </div>
      <div className='follow-today-container'>
        <img src={icon} alt={`${icon} image`} />
        <p className='follow-today'>{followToday}</p>
      </div>
    </div>
  )
}

const MainCards = mainCards.map(card => {
  return <MainCard
    key={card.id}
    userName={card.userName}
    followText={card.followText}
    followToday={card.followToday}
    image={card.image}
    icon={card.icon}
    target={card.target}
  />
});

export default MainCards;