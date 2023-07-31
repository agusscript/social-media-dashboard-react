import facebookImg from "../../../assets/icon-facebook.svg";
import twitterImg from "../../../assets/icon-twitter.svg";
import instagramImg from "../../../assets/icon-instagram.svg";
import youtubeImg from "../../../assets/icon-youtube.svg";
import iconUp from "../../../assets/icon-up.svg";
import iconDown from "../../../assets/icon-down.svg";

const mainCards = [
  {
    id: 1,
    userName: '@nathanf',
    followText: 'followers',
    followToday: '12 Today',
    image: facebookImg,
    icon: iconUp,
    target: 1987
  },
  {
    id: 2,
    userName: '@nathanf',
    followText: 'followers',
    followToday: '99 Today',
    image: twitterImg,
    icon: iconUp,
    target: 1044
  },
  {
    id: 3,
    userName: '@realnathanf',
    followText: 'followers',
    followToday: '1099 Today',
    image: instagramImg,
    icon: iconUp,
    target: 11,
    letter: "k"
  },
  {
    id: 4,
    userName: 'Nathan F.',
    followText: 'subscribers',
    followToday: '144 Today',
    image: youtubeImg,
    icon: iconDown,
    target: 8239
  }
];

export default mainCards;