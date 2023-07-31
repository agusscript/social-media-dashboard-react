import "./Main.scss";
import MainCard from "../MainCard/MainCard";
import mainCardsInfo from "../MainCard/mainCardsInfo";
import SecondaryCard from "../SecondaryCard/SecondaryCard";
import secondaryCardsInfo from "../SecondaryCard/secondaryCardsInfo";

function Main({ theme }) {
  const MainCards = mainCardsInfo.map((card) => {
    return (
      <MainCard
        key={card.id}
        userName={card.userName}
        followText={card.followText}
        followToday={card.followToday}
        image={card.image}
        icon={card.icon}
        target={card.target}
        letter={card.letter}
        theme={theme}
      />
    );
  });

  const SecondaryCards = secondaryCardsInfo.map((card) => {
    return (
      <SecondaryCard
        key={card.id}
        title={card.title}
        percentage={card.percentage}
        image={card.image}
        icon={card.icon}
        target={card.target}
        letter={card.letter}
        theme={theme}
      />
    );
  });

  return (
    <main>
      <section className="main-cards-container">{MainCards}</section>
      <h2 className={`overview-title ${theme ? "white" : ""}`}>Overview - Today</h2>
      <section className="secondary-cards-container">{SecondaryCards}</section>
    </main>
  );
}

export default Main;
