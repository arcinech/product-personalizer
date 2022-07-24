import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = useMemo(() => {
    return props.basePrice + currentSize.additionalPrice
  }, [currentSize.additionalPrice, props.basePrice])
  
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} alt={props.title} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
          {...props} 
          currentColor={currentColor}
          setCurrentColor={setCurrentColor} 
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          />
      </div>
    </article>
  )
};
Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number
}

export default Product;