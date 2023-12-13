import React from "react";
import { useParams} from "react-router-dom";
import {styles} from "./index.module.css"

function OneItem({ products }) {
  const baseURL = "http://localhost:3333";
 
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (  
    <div><div>
        <div className={StyleSheet}>
            <img src={`${baseURL}${product.image}`} alt={product.title} />
            <img src={`${baseURL}${product.image}`} alt={product.title} />
            <img src={`${baseURL}${product.image}`} alt={product.title} />
       </div>
       <img src={`${baseURL}${product.image}`} alt={product.title} />
       </div>
       <div>
      <h3>{product.title} </h3>
      <h2>{product.price} €</h2>
      <h4>{product.discont_price} €</h4>
      <div></div>
      <div><button>Add to cart</button>
      </div>
      <p>{product.description}</p>
      
      </div> 
      
      
    </div>
  );
}

export default OneItem;
