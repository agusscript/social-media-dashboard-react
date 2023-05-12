import secondaryCards from './secondary-card-list';
import '../styles/secondary-card.scss';

function SecondaryCard({ title, percentage, image, icon, target }) {
  return (
    <div className='secondary-card' >

      <div className='header-container'>
        <p className='title-card'>{title}</p>
        <img src={image} alt={`${image} icon`} />
      </div>

      <div className='number-card-container'>
        <p className='number number-card' target={target}>0</p>

        <div>
          <img src={icon} alt={`${icon} image`} />
          <p className='percentage-card'>{percentage}</p>
        </div>
      </div>

    </div>
  )
}

const SecondaryCards = secondaryCards.map(card => {
  return <SecondaryCard
    key={card.id}
    title={card.title}
    percentage={card.percentage}
    image={card.image}
    icon={card.icon}
    target={card.target}
  />
});

export default SecondaryCards;