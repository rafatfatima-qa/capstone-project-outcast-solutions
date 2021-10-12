import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import map from "../assets/world-map.png";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Img variant="top" src={map} width="150"
          height="300" />
          <Card.Body>
            <Card.Text>
              <p className="aboutus-page-text">
                24/7 Propane is a name that you can rely on to be at your
                service whenever, and wherever, you need us in the United States
                of America. Located in North Miami, we have been serving
                countless consumers and industries for 20 years in propane gas
                business. We take pride in having built our name on trust and
                providing quality propane products with reliability. Our
                products include propane burners, pots, pans, stoves,
                regulators, fittings, hoses and other accessories from top
                brands like Bayou Classic.
                <br />
                <br />
                Furthermore, we also take extreme pleasure in making our
                contribution to making the American industry the best in the
                world. Our products comprise industrial gases for commercial and
                consumer use. These include Helium, Oxygen, Acetylene, Argon,
                Nitrogen and Carbon Dioxide. All the products are available in a
                range of volumes and cylinder sizes to best cater your needs.
                <br />
                <br />
                At 24/7 Propane, we sell fully inspected, tested and
                precision-filled products that are perfect for commercial and
                domestic use – including gas grills, Stove, Burners, Hose and
                Regulators, paint ball tanks and CO2 refilling, patio heaters
                and insect control devices. All Sizes in stock. You can trust to
                always be there for you when you need us, no matter what time of
                the day, night, holidays and even in hurricane season.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default AboutUs;