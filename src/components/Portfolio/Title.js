import "./Portfolio.css";

function PortfolioTitle() {
  return (
    <section id="top_container">
      <div className="container">
        <div className="row">
          <div className="col-12-lg">
            <h1>I'm Anton</h1>
          </div>
        </div>
        <div className="row">
          <div className="title col-12-lg text-white">
            <h2>a lorem impusim</h2>
          </div>
        </div>
        <div className="profile row">
          <div className="col-12-lg">
            <img className="welcome-img" src="images/cyber.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioTitle;
