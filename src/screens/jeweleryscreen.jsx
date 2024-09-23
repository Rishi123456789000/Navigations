
import Basiccard from '../card/card1';
import axios from "axios";
import React,{useEffect,useState} from 'react'

const Jeweleryscreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        if (status === 200) {
          console.log(data);
          setData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); 



  return (
    
    <>

<h2>jewelery</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {data.map((item) => (
        <Basiccard
          key={item.id}
          title={item.title}
          category={item.category}
          description={item.description}
          image={item.image}
          rate={item.rating.rate}
          rat={item.rating.count}
          price={`$${item.price}`}
        />
      ))}
    </div>
    </>
  )
}

export default Jeweleryscreen
