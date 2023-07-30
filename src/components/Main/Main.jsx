import "./Main.scss";
import MainCards from "../MainCard/MainCard";
import SecondaryCards from "../SecondaryCard/SecondaryCard";

function Main() {
  return (
    <main>
      <section className="main-cards-container">{MainCards}</section>
      <h2 className="overview-title">Overview - Today</h2>
      <section className="secondary-cards-container">{SecondaryCards}</section>
    </main>
  );
}

export default Main;