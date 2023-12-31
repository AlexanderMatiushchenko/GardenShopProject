import React, { useEffect, useState} from 'react';
import { Carousel } from 'antd';
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/slices/productsSlice';
import DiscountPercent from '../DiscountPercent';
import { Link } from 'react-router-dom';
import { backendURL,frontendURL } from '../../utils/var';

function DiscountCarousel() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const dispatch = useDispatch();
  const produktsArr = useSelector(({ products }) => products.list);
  const filteredDiscountedProducts = produktsArr.filter((el) => el.discont_price !== null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchAllProducts());
        setDataLoaded(true);
      } catch (error) {
        console.error('Error DiscountCarousel:', error);
        
      }
    };

    fetchData();
  }, [dispatch]);

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }
return (
    <>   
      <Carousel id={styles.carousel} autoplay   dots={false}  slidesToShow={4}>
        {filteredDiscountedProducts.map((el) => (
          <Link to={`${frontendURL}/products/${el.id}`} key={el.id}>
          <div key={el.id} className={styles.contentStyle}>
            <div className={styles.containerWithImg}>
              
            <img src={`${backendURL}${el.image}`} alt={el.title} />
            <div className={styles.discountContainer}>
            <DiscountPercent discontPrice={el.discont_price} price={el.price} />
            </div>
            </div>
            <div className={styles.containerWithTitleAndPrice}>
            <h3>{el.title}</h3>
            <div className={styles.priceContainer}>
            <h2>{el.discont_price} €</h2>
            <del><h4>{el.price} €</h4></del>
            </div>
            </div>
          </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}

export default DiscountCarousel;
