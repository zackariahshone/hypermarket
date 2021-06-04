/**
 *
 * BrandBanners
 *
 */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './style.css';
import { Link } from 'react-router-dom';


function BrandBanners({ brands }) {
  // console.log(`data for banners: ${data}`);
  return (
    <div>
      <Container>
        <Row>
          {brands.map((brand, i) => (
            <Col key={brand[i]} className="col " xs={12} md={4}>
              <Link to={`/model/${brand.id}`}>
                <Card
                  className="brandBanner"
                  style={{
                    backgroundImage: `url(${brand.img})`,
                  }}
                >
                  <h1>{brand.bannerName}</h1>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}


export default BrandBanners;
