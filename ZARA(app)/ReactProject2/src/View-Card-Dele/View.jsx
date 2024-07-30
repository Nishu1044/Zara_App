import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const View = () => {
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
 


  async function fetchAndDisplayData(id) {
    setLoading(true);
    try {
      let res = await axios.get(`http://localhost:3000/zara/${id}`);
      let data = res.data;
      setTicket(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndDisplayData(id);
  }, [id]);

  function handlePre() {
    if (ticket.images) {
      setCurrentImgIdx((prevIdx) => (prevIdx === 0 ? ticket.images.length - 1 : prevIdx - 1));
    }
  }

  function handleNxt() {
    if (ticket.images) {
      setCurrentImgIdx((nextIdx) => (nextIdx === ticket.images.length - 1 ? 0 : nextIdx + 1));
    }
  }

  async function addToCart() {
    try {
      let updatedCard = {
        title: ticket.title,
        description: ticket.des,
        price: ticket.price,
        category: ticket.category,
        images: ticket.images,
      };

      let res = await axios.post(`http://localhost:3000/addtocart`, updatedCard);
      console.log(updatedCard);

      if (res.status === 201) {
        alert("Item added to cart successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add item to cart");
    }
  }


 





  const { price, category, des, title, images } = ticket;

  return (
    <>
      <div style={{ maxWidth: "450px", padding: "20px", margin: "25px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1>{category}</h1>
        <p style={{ fontSize: '16px', color: 'red', fontWeight: 'bold' }}>{title}</p>

        {/* 2nd div for image */}
        <div style={{ position: 'relative', width: '520px', height: '700px' }}>
          <button
            onClick={handlePre}
            style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
          >
            &lt;
          </button>

          <img
            src={images && images[currentImgIdx]}
            alt={`${title} ${currentImgIdx + 1}`}
            style={{ width: '100%', height: '100%' }}
          />

          <button
            onClick={handleNxt}
            style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
          >
            &gt;
          </button>
        </div>

        <p>{price}</p>
        <h3>{des}</h3>

        <button  style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey",fontWeight:"bold" ,margin:"15px"}}
         onClick={addToCart}>
          AddToCart
        </button>

        
      </div>
    </>
  );
}

export default View;


















