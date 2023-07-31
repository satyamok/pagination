import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState (1);

    const fetchProducts =async()=>{
    const res = await fetch ("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);

    if(data && data.products){
      setProducts(data.products);
    }
  }

  useEffect(()=>{

    fetchProducts();

},[]);

const selectPageHandler =(selectedPage)=>{
  setPage(selectedPage);
};

  return (
    <div className="">
     {products.length>0 && <div className='products'>
      {products.slice(page * 10-10,page*10).map((prod)=>{
          return <span className='products_single'> <img src={prod.thumbnail} alt={prod.title}/>
          {prod.title}
          </span>

        })
      }
      
    </div>
     }

     {
      products.length > 0 && <div className='pagination'>

        <span>◀️</span>
        {
           [...Array(products.length / 3)].map((_,i)=>{
             return <span onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
           })
           }
        <span>▶️</span>
        </div>
     }
    </div>
  );
}

export default App;
