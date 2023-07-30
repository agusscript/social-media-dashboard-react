import "./SecondaryCard.scss";
import SecondaryCardsInfo from "./SecondaryCardsInfo";
import CountUp from 'react-countup';

function SecondaryCard({ title, percentage, image, icon, target, letter }) {
  return (
    <div className='secondary-card' >

      <div className='header-container'>
        <p className='title-card'>{title}</p>
        <img src={image} alt={`${image} icon`} />
      </div>

      <div className='number-card-container'>
        <p className='number number-card' target={target}>
          <CountUp end={target} separator="" duration={4} suffix={letter} />
        </p>

        <div>
          <img src={icon} alt={`${icon} image`} />
          <p className='percentage-card'>{percentage}</p>
        </div>
      </div>

    </div>
  )
}

const SecondaryCards = SecondaryCardsInfo.map(card => {
  return <SecondaryCard
    key={card.id}
    title={card.title}
    percentage={card.percentage}
    image={card.image}
    icon={card.icon}
    target={card.target}
    letter={card.letter}
  />
});

export default SecondaryCards;