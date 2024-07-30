
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'




const Women = () => {
  const[proData, setProData] = useState([])
 

  
async function DisplayData(){
 
  try {
      
      let res = await axios.get(`http://localhost:3000/zara?category=women`)

      console.log(res.data);
      setProData(res.data)

  } catch (error) {
      console.log(error);
  }
  
}

useEffect(()=>{
DisplayData()
},[])



  return (
    <>
    
     {/* i add div here to style my product div you can also ignore the div */}
   <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)"}}>

{proData.map((ProductData)=>{
    
    return (
    <ProductDataItem key={ProductData.id} item={ProductData} />
    // <ProductDataItem key={uuidv4()} item={ProductData} />
  );

})}

</div>

    </>
  )
}




function ProductDataItem({ item }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const navigate = useNavigate();

  function HandlePre() {
    if (item.images) {
      setCurrentImgIdx((prevIdx) => (prevIdx === 0 ? item.images.length - 1 : prevIdx - 1));
    }
  }

  function HandleNxt() {
    if (item.images) {
      setCurrentImgIdx((nextIdx) => (nextIdx === item.images.length - 1 ? 0 : nextIdx + 1));
    }
  }

  return (
    <>
      <div style={{ maxWidth: "320px", padding: "20px", margin: "25px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        {item && ( // Add a check for item existence
          <>
            <h1>{item.category}</h1>
            <p style={{fontSize:"5xl",fontWeight:"bold",padding:"15px"}}>{item.title}</p>

            {/* 2nd div for image */}
            <div style={{ position: 'relative', width: '320px', height: '400px' }}>
              <button
                onClick={HandlePre}
                style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
              >
                &lt;
              </button>

              <img
                src={item.images[currentImgIdx]}
                alt={`${item.title} ${currentImgIdx + 1}`}
                style={{ width: '90%', height: '100%' }}
              />

              <button
                onClick={HandleNxt}
                style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
              >
                &gt;
              </button>
            </div>

            {/* image end */}

            <p style={{fontSize:"5xl", textShadow:"2px 2px 4px rgba(0, 0, 0, 0.4)",fontWeight:"bold"}}>{item.price}</p>
            <h2 style={{ color: "rgb(61,58,58)", fontWeight:"bold" , padding:"15px"}}>{item.des}</h2>

            <button
              style={{ border: "2px solid grey", height: "35px", width: "80px", color: "black", background: "grey",fontWeight:"bold" }}
              onClick={() => navigate(`/view/${item.id}`)}
            >
              View
            </button>
          </>
        )}
      </div>
    </>
  );
}


export default Women;




