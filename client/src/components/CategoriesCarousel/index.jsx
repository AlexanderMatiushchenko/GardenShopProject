
import React, { useEffect, useState} from 'react';
import { Carousel } from 'antd';
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { Link } from 'react-router-dom';
import { backendURL,frontendURL } from '../../utils/var';

function CategoriesCarousel() {

  const categoriesArr = useSelector(({ categories }) => categories.list);
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCategories());
        setDataLoaded(true);
      } catch (error) {
        console.error('Error CategoriesCarousel:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  
 
  return (
    <div> 
      <Carousel id={styles.carousel} autoplay  dots={true}  slidesToShow={4}>
        {categoriesArr.map((el) => (
          <Link key={el.id} to={`${frontendURL}/categories/${el.id}`}>
          <div  className={styles.contentStyle}>
            <img src={`${backendURL}${el.image}`} alt={el.title} />
            <h3>{el.title}</h3>
          </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default CategoriesCarousel;
