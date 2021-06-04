/**
 *
 * Models
 *
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import data from '../../bannerInfo.json';


function Models() {
  // const params = useParams();
  // console.log(data);
  const { id } = useParams();
  const { models } = data[id];
  console.log(data[id].bannerName);
  console.log(models);
  return (
    <>
      <div>
        <h1>{data[id].bannerName}</h1>
      </div>


      <Container>
        <Row>
          {models.map(model => (
            <>

              <Col xs={12} md={3}>
                <Card className = 'px-1'>
                  <Row>
                    <Col>
                      <p>{model.modelTitle}</p>
                    </Col>
                  </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <div className='img-holder'>
                    </div>
                  </Col>

                  <Col xs={12} md={8}>
                    <p> {model.modelDesc}</p>
                  </Col>
                </Row>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>

    </>
  );
}

// Models.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };





export default Models;
