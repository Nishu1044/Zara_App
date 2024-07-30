import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Select,HStack,Input} from '@chakra-ui/react'
// import { v4 as uuidv4 } from 'uuid';



const Products = () => {
 
 const[proData, setProData] = useState([])
 const [sortOrderValue, setSortOrderValue] = useState("")
 const [filterValue,setFilterValue] = useState("")
 const [searchQuery, setSearchQuery] = useState("");
//  const[loading, setLoading] = false


async function DisplayData(sortOrderValue,filterValue,searchQuery){

  let queryParams ={}
  if(filterValue){
    queryParams.category  = filterValue
  }

  if(sortOrderValue){
    queryParams._sort = "price";
    queryParams._order = sortOrderValue
    console.log(sortOrderValue)
  }


  if (searchQuery) {
      queryParams.q = searchQuery; 
      // console.log(searchQuery);
  }

 
  try {
        
        let res = await axios({
          method:"get",
          url:`http://localhost:3000/zara`,
          params:queryParams,
        })

        console.log(res.data);
        setProData(res.data)

    } catch (error) {
        console.log(error);
  }
    
}

useEffect(()=>{
 DisplayData(sortOrderValue,filterValue,searchQuery)
},[sortOrderValue,filterValue,searchQuery])


return(
    <>
     
     <HStack spacing={1050}  padding={5} >

        <Select placeholder='Sort by price🎞🎞' bg="gray.100" border="1px solid black"  
        value={sortOrderValue} onChange={(e)=>{
          setSortOrderValue(e.target.value)
        }}>
        <option value='asc'>Low to High</option>
        {/* <option value='desc'>High to Low</option> */}
        </Select>
       

        <Select placeholder='Filter By Category'bg="gray.100" border="1px solid black"
         value={filterValue} onChange={(e)=>{
          setFilterValue(e.target.value)
        }}>
        <option value='men'>Men👨‍⚖️</option>
        <option value='women'>Women👸</option>
        <option value='kids'>Kids👩🏼‍🤝‍👩🏻</option>
        <option value='beauty'>Beauty💅</option>
        </Select>
        </HStack>


        <Input
          maxW={500}
          marginLeft={515}
          placeholder="Search Products"
          bg="gray.100"
          border="1px solid black"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />

    
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

export default Products;