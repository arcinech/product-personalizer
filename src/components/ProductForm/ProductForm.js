import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
const ProductForm = props => {
  console.log(props);
  const addToCart = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name : ', props.title);
    console.log('Price: ', props.getPrice);
    console.log('Size: ', props.currentSize.name);
    console.log('Color: ', props.currentColor);
  }

  return (
    <form>
          <OptionSize
           sizes={props.sizes}
           currentSize={props.currentSize}
           setCurrentSize={props.setCurrentSize}
          />
          <OptionColor 
            colors={props.colors}
            setCurrentColor={props.setCurrentColor}
            currentColor={props.currentColor}
            />
          <Button onClick={addToCart} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
  )
}

export default ProductForm;