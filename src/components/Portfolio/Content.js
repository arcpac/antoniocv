function Content() {
  return (
    <section id="middle-container">
      <div className="container">
        <div class="row align-items-center justify-content-center">
          <h2 className="fw-bold pb-5">Skills</h2>
          <div className="col-lg-4 col-sm-12 d-sm-none d-lg-block">
            <img
              src="images/webdev.png"
              class="skill-img"
              alt="web development"
            />
          </div>
          <div className="col-lg-4 col-sm-12 text-lg-start text-sm-center">
            <h3 class="skill-title">Web Development</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div className="col-lg-4 col-sm-12 text-lg-end text-sm-center">
            <h3 class="skill-title">Web Development</h3>
            <p className="text-end">
              Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
              Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
              nam, lectus ante, ut lorem eros.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 d-sm-none d-lg-block">
            <img
              src="images/binary-code.png"
              class="skill-img"
              alt="web development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
