import React , { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import data from '../../bannerInfo.json';
import API from '../../API/CarAPI'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Cars() {
  let [ items, setItems ] = useState(null);
  let [currentTitle, setTitle] = useState(null);
  let [type, setType] = useState(null);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const { id } = useParams();
  const { models } = data[id];

  console.log(models);

  useEffect(
    ()=>{
    API.findcars(data[id].bannerName).then(res=>{
      console.log(res.data);
     setItems(res.data)
     setTitle(data[id].bannerName)
     
    //  console.log(items);
    })
  },
)

  // console.log(currentTitle);
 
  return (
    <>
      <div>
        <h1>{currentTitle}</h1>
      </div>

    {!items ? <>
        
        <ClipLoader color={color} loading={loading} css={override} size={150} />
    </>
    :
    <>
    <Container>
        <Row>
          {items.map(model => (
            <>

              <Col xs={12} md={3}>
                <Card className = 'px-1'>
                  <Row>
                    <Col>
                      <p>{model.model}</p>
                    </Col>
                  </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <div className='img-holder'>
                    </div>
                  </Col>

                  <Col xs={12} md={8}>
                    <p> {model.type}</p>
                  </Col>
                </Row>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>

    </>
    }

     
    </>
  );
}

// Models.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };





export default Cars;