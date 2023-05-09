import MainCard from './main-card.jsx';
import facebookImg from '../assets/icon-facebook.svg';
import twitterImg from '../assets/icon-twitter.svg';
import instagramImg from '../assets/icon-instagram.svg';
import youtubeImg from '../assets/icon-youtube.svg';
import iconUp from '../assets/icon-up.svg';
import iconDown from '../assets/icon-down.svg';

const mainCards = [
  {
    id: 1,
    userName: '@nathanf',
    followNumber: '1987',
    followText: 'followers',
    followToday: '12 Today',
    image: facebookImg,
    icon: iconUp
  },
  {
    id: 2,
    userName: '@nathanf',
    followNumber: '1044',
    followText: 'followers',
    followToday: '99 Today',
    image: twitterImg,
    icon: iconUp
  },
  {
    id: 3,
    userName: '@realnathanf',
    followNumber: '11K',
    followText: 'followers',
    followToday: '1099 Today',
    image: instagramImg,
    icon: iconUp
  },
  {
    id: 4,
    userName: 'Nathan F.',
    followNumber: '8239',
    followText: 'subscribers',
    followToday: '144 Today',
    image: youtubeImg,
    icon: iconDown
  }
];

const MainCards = mainCards.map(card => {
  return <MainCard
    key={card.id}
    userName={card.userName}
    followNumber={card.followNumber}
    followText={card.followText}
    followToday={card.followToday}
    image={card.image}
    icon={card.icon}
  />
});

export default MainCards;