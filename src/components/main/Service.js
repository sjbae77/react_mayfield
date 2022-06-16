function Service() {
  const path = process.env.PUBLIC_URL;

  return (
    <section id="service">
      <div className="inner">
        <div className="title-wrap">
          <em>OUR SERVICES</em>
          <h1>
            What we can
            <br />
            do for you?
          </h1>
          <span className="shape_paral">
            <a href="#">aur all services</a>
          </span>
        </div>
        <div className="box-wrap">
          <div className="left">
            <div className="box box1">
              <img src={`${path}/img/main_visual1.jpg`} alt="visual image" />
              <div className="textBox">
                <em>01</em>
                <span>Movies & advertising videos</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente quia
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="box box2">
              <img src={`${path}/img/main_visual2.jpg`} alt="visual image" />
              <div className="textBox">
                <em>02</em>
                <span>Clips & music videos</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente quia
                </p>
              </div>
            </div>
            <div className="box box3">
              <img src={`${path}/img/main_visual3.jpg`} alt="visual image" />
              <div className="textBox">
                <em>03</em>
                <span>Shor film productions</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente quia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
