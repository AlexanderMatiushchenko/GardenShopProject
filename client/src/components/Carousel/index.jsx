
import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categoriesSlice';

function CategoriesCarousel() {
  const baseUrl = "http://localhost:3333";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesArr = useSelector(({ categories }) => categories.list);

  return (
    <div> 
      <Carousel id={styles.carousel} autoplay  dots={true}  slidesToShow={4}>
        {categoriesArr.map((el) => (
          <div key={el.categoryId} className={styles.contentStyle}>
            <img src={`${baseUrl}${el.image}`} alt={el.title} />
            <h3>{el.title}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CategoriesCarousel;
