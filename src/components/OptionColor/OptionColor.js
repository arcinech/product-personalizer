import styles from './OptionColor.module.scss';
import clsx from 'clsx';
const OptionColor = props => {

  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {props.colors.map((color, i) => {
        const capitalize = string => {
          return 'color' + string[0].toUpperCase() + string.substr(1).toLowerCase();
        }
        return (
          <li key={i}>
            <button 
              type="button" 
              className={clsx(styles[capitalize(color)], (color===props.currentColor) && styles.active)} 
              onClick={() => props.setCurrentColor(color)}
            />
          </li>
        )
      })}
    </ul>
  </div>
  );
};

export default OptionColor;

