import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="headerHome w-100 min-vh-100">
        <Container>
          <Row className="header-box">
            <Col>
              <h1>Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa suscipit aperiam ullam doloribus commodi?</p>
              <button>Lihat Kelas</button>
              <button className="btn btn-outline-danger rounded-2">Lihat Promo</button>
            </Col>

            <Col>
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  )
}

export default HomePage
