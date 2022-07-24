import TourItem from './TourItem'
import {useState, useEffect} from 'react' 
import axios from 'axios';
// import Footer from './Footer/Footer';

export default function TourList () {
  const [tours, setTours] = useState([]);

  function getData(){


  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => setTours(response.data))
  }
  useEffect(getData,[])

  function items(element, index) {
    return <TourItem key={index} tourName={element.name}/>
  }


  return (
    <div>
      <h2>Список туров:</h2>
      <ul>
        {tours.map(items)}
      </ul>
    </div>
  )
}