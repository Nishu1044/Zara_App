
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CartView = () => {
  const [proData, setProData] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  async function DisplayData() {
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/addtocart`,
      });

      console.log(res.data);
      setProData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    DisplayData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      let res = await axios({
        method: "delete",
        url: `http://localhost:3000/addtocart/${productId}`
      });

      if (res.status === 200) {
        setProData(prevProData => prevProData.filter(product => product.id !== productId));
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, amount: 1 }];
      }
    });
  };

  const handleChange = (item, amount) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + amount } : cartItem
      ).filter(cartItem => cartItem.amount > 0)
    );
  };

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {proData.map((ProductData) => (
          <ProductDataItem
            key={ProductData.id}
            item={ProductData}
            handleDelete={handleDelete}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} handleRemove={handleRemove} />
    </>
  );
}

function ProductDataItem({ item, handleDelete, handleAddToCart }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const HandlePre = () => {
    if (item.images) {
      setCurrentImgIdx(prevIdx => (prevIdx === 0 ? item.images.length - 1 : prevIdx - 1));
    }
  };

  const HandleNxt = () => {
    if (item.images) {
      setCurrentImgIdx(nextIdx => (nextIdx === item.images.length - 1 ? 0 : nextIdx + 1));
    }
  };

  return (
    <>
      <div style={{ maxWidth: "320px", padding: "20px", margin: "25px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        {item && (
          <>
            <h1>{item.category}</h1>
            <p style={{ fontSize: "5xl", fontWeight: "bold", padding: "15px" }}>{item.title}</p>

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

            <p style={{ fontSize: "5xl", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", fontWeight: "bold" }}>{item.price}</p>
            <h2 style={{ color: "rgb(61,58,58)", fontWeight: "bold", padding: "15px" }}>{item.des}</h2>

            <button
              style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey", fontWeight: "bold", margin: "15px" }}
              onClick={() => alert(`Order Confirmed Successfully And Paid Rs ${item.price}.00 Only`)}
            >
              Buy
            </button>

            <button
              style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey", fontWeight: "bold", margin: "15px" }}
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>

            <button
              style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey", fontWeight: "bold", margin: "15px" }}
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </>
  );
}

const Cart = ({ cart, setCart, handleChange, handleRemove }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach(item => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div>
      <h1>Total Price of your Cart - Rs.{price}.00</h1>
      {cart.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div>
            <button onClick={() => handleChange(item, 1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartView;



















// {it is also corrected code code by ....ni}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const CartView = () => {
//   const [proData, setProData] = useState([]);
//   const { id } = useParams();

//   async function DisplayData() {
//     try {
//       let res = await axios({
//         method: "get",
//         url: `http://localhost:3000/addtocart`,
//       });

//       console.log(res.data);
//       setProData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     DisplayData();
//   }, []);

//   // Function to handle the deletion of a product and update state
//   const handleDelete = async (productId) => {
//     try {
//       let res = await axios({
//         method: "delete",
//         url: `http://localhost:3000/addtocart/${productId}`
//       });

//       if (res.status === 200) {
//         setProData(prevProData => prevProData.filter(product => product.id !== productId));
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {/* i add div here to style my product div you can also ignore the div */}
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//         {proData.map((ProductData) => {
//           return (
//             <ProductDataItem key={ProductData.id} item={ProductData} handleDelete={handleDelete} />
//           );
//         })}
//       </div>
//     </>
//   );
// }

// function ProductDataItem({ item, handleDelete }) {
//   const [currentImgIdx, setCurrentImgIdx] = useState(0);
//   const navigate = useNavigate();

//   function HandlePre() {
//     if (item.images) {
//       setCurrentImgIdx((prevIdx) => (prevIdx === 0 ? item.images.length - 1 : prevIdx - 1));
//     }
//   }

//   function HandleNxt() {
//     if (item.images) {
//       setCurrentImgIdx((nextIdx) => (nextIdx === item.images.length - 1 ? 0 : nextIdx + 1));
//     }
//   }

//   return (
//     <>
//       <div style={{ maxWidth: "320px", padding: "20px", margin: "25px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
//         {item && ( // Add a check for item existence
//           <>
//             <h1>{item.category}</h1>
//             <p style={{ fontSize: "5xl", fontWeight: "bold", padding: "15px" }}>{item.title}</p>

//             {/* 2nd div for image */}
//             <div style={{ position: 'relative', width: '320px', height: '400px' }}>
//               <button
//                 onClick={HandlePre}
//                 style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
//               >
//                 &lt;
//               </button>

//               <img
//                 src={item.images[currentImgIdx]}
//                 alt={`${item.title} ${currentImgIdx + 1}`}
//                 style={{ width: '90%', height: '100%' }}
//               />

//               <button
//                 onClick={HandleNxt}
//                 style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
//               >
//                 &gt;
//               </button>
//             </div>

//             {/* image end */}

//             <p style={{ fontSize: "5xl", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", fontWeight: "bold" }}>{item.price}</p>
//             <h2 style={{ color: "rgb(61,58,58)", fontWeight: "bold", padding: "15px" }}>{item.des}</h2>

              
              
//             <button
//               style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey", fontWeight: "bold", margin: "15px" }}
//               onClick={() => alert(`Order Confirmed Successfully And Paid Rs ${item.price}.00 Only`)}
//             >
//               Buy
//             </button>
              
//             <button
//               style={{ border: "2px solid grey", height: "35px", width: "100px", color: "black", background: "grey", fontWeight: "bold", margin: "15px" }}
//               onClick={() => handleDelete(item.id)}
//             >
//               Delete
//             </button>
 
            
//           </>
//         )}
//       </div>

//      <>
//          <div>
     
//                     <div>
//                         <button onClick={()=>handleChange(item, +1)}> + </button>
//                         <button>{item.amount}</button>
//                         <button onClick={()=>handleChange(item, -1)}> - </button>
//                     </div>
//                     <div>
                        
//                         <button onClick={()=>handleRemove(item.id)} >Remove</button>
//                     </div>
//           </div>


//           <div >
        
//             <h1>Total Price of your Cart-Rs.{item.price}.00</h1>
            
//         </div>
     
//      </>
     
//     </>
//   );
// }

// export default CartView;
