import "./SecondaryCard.scss";
import CountUp from 'react-countup';

function SecondaryCard({ title, percentage, image, icon, target, letter, theme }) {
  return (
    <div className={`secondary-card ${theme? "dark-desaturated-blue dark" : ""}`} >

      <div className='header-container'>
        <p className={`title-card ${theme? "desatured-blue" : ""}`}>{title}</p>
        <img src={image} alt={`${image} icon`} />
      </div>

      <div className='number-card-container'>
        <p className={`number number-card ${theme? "white" : ""}`} target={target}>
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

export default SecondaryCard;