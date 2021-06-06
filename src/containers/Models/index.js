/**
 *
 * Models
 *
 */

import React , { useState , useEffect} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import './style.css'
// import ATV from '../../components/ATV'
import Car from '../../components/Cars'
// import Toys from '../../components/Toys'
import data from '../../bannerInfo.json';
function Models() {
  
  let [currentTitle, setTitle] = useState(null);
  let [type, setType] = useState(null);
  const { id } = useParams();
  const { models } = data[id];
  console.log(models[0].type);
  
  useEffect(
    ()=>{
     setType(models[0].type)
     console.log(`this is ${type}`);
    //  console.log(items);
    })

  // console.log(currentTitle);
  {  
  if(type !== 'car'){
      return (
        <>
          <h1>this is {type}</h1>
        </>
      )
    }
    
    else if (type === 'car'){
        return(
          <>
        <Car />
          </>
        )

      }
    }
}

// Models.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };





export default Models;
