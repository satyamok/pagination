import React, { useEffect, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState([]);
  
  const [page, setPage] = useState(1);


  const pageChange =(newpage)=>{
  
        setPage(newpage)
  }
const fetchProducts =async()=>{
     
const res = await fetch("https://dummyjson.com/products");
const data = await res.json();

console.log(data);

setProducts(data.products);

}

useEffect(()=>{

  fetchProducts();

},[]);


  return (
    <div>
{

  products.slice(page * 10-10, page*10 ).map((prod)=>(
     <span>{prod.title}</span>
  ))
}


  <span>◀️</span>
  {
  [...Array(products.length/3)].map((_,i)=>( 
    <span onClick={()=>pageChange(i+1)}>{i+1}</span>        
  ))
  }
  <span>▶️</span>
       

    </div>
  )
}

export default App;