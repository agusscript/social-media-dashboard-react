import "./MainCard.scss";
import CountUp from 'react-countup';

function MainCard({ userName, followText, followToday, image, icon, target, letter, theme }) {
  return (
    <div className={`main-card ${theme? "dark-desaturated-blue dark" : ""}`}>
      <div className='user-container'>
        <img src={image} alt={`${image} icon`} />
        <p className={`user-name ${theme? "desatured-blue" : ""}`}>{userName}</p>
      </div>
      <div className='follow-container'>
        <h2 className={`number follow-number ${theme? "white" : ""}`} target={target}>
          <CountUp end={target} separator="" duration={4} suffix={letter} />
        </h2>
        <p className={`follow-text ${theme? "desatured-blue" : ""}`}>{followText}</p>
      </div>
      <div className='follow-today-container'>
        <img src={icon} alt={`${icon} image`} />
        <p className='follow-today'>{followToday}</p>
      </div>
    </div>
  )
}

export default MainCard;