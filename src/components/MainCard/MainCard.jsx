import "./MainCard.scss";
import mainCardsInfo from "./MainCardsInfo";
import CountUp from 'react-countup';

function MainCard({ userName, followText, followToday, image, icon, target, letter }) {
  return (
    <div className='main-card'>
      <div className='user-container'>
        <img src={image} alt={`${image} icon`} />
        <p className='user-name'>{userName}</p>
      </div>
      <div className='follow-container'>
        <h2 className='number follow-number' target={target}>
          <CountUp end={target} separator="" duration={4} suffix={letter} />
        </h2>
        <p className='follow-text'>{followText}</p>
      </div>
      <div className='follow-today-container'>
        <img src={icon} alt={`${icon} image`} />
        <p className='follow-today'>{followToday}</p>
      </div>
    </div>
  )
}

const MainCards = mainCardsInfo.map(card => {
  return <MainCard
    key={card.id}
    userName={card.userName}
    followText={card.followText}
    followToday={card.followToday}
    image={card.image}
    icon={card.icon}
    target={card.target}
    letter={card.letter}
  />
});

export default MainCards;