
import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import styles from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/slices/categoriesSlice';
import { Link } from 'react-router-dom';

function CategoriesCarousel() {
  const baseUrl = "http://localhost:3333";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesArr = useSelector(({ categories }) => categories.list);
  const frontendUrl = "http://localhost:3000"
  return (
    <div> 
      <Carousel id={styles.carousel} autoplay  dots={true}  slidesToShow={4}>
        {categoriesArr.map((el) => (
          <Link to={`${frontendUrl}/categories/${el.id}`}>
          <div key={el.categoryId} className={styles.contentStyle}>
            <img src={`${baseUrl}${el.image}`} alt={el.title} />
            <h3>{el.title}</h3>
          </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default CategoriesCarousel;
