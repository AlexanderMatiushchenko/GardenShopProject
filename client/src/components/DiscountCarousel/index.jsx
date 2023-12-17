

import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import DiscountPercent from '../DiscountPercent';

function DiscountCarousel() {
  const baseUrl = "http://localhost:3333";
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const produktsArr = useSelector(({ products }) => products.list);
const filteredDiscountedProducts= produktsArr.filter((el)=>el.discont_price !==null);
console.log(filteredDiscountedProducts);
return (
    <div> 
        
      <Carousel id={styles.carousel} autoplay  dots={false}  slidesToShow={4}>
        {filteredDiscountedProducts.map((el) => (
          <div key={el.id} className={styles.contentStyle}>
            <DiscountPercent discontPrice={el.discont_price} price={el.price} />
            <img src={`${baseUrl}${el.image}`} alt={el.title} />
            <h3>{el.title}</h3>
            <div className={styles.priceContainer}>
            <h2>{el.discont_price} €</h2>
            <del><h4>{el.price} €</h4></del>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default DiscountCarousel;
