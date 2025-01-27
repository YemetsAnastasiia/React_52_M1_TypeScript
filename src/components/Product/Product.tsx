import './styles.css';
import { ProductProps } from './types';

function Product({ product_name = 'Unknown', price, img }:ProductProps) {

    return (
        <div className='product-wrapper'>
            <h2>{product_name}</h2>
            <img src={img} className='product-image' />
            {/*  пример тернарного оператора для скрытия элемента div, если цена не была передана  ДЛИННЫЙ СПОСОБ*/}
            {/*       {price !== undefined ? <h4>Price: {price} $</h4> : null} */}
            {/*  Пример использования оператора условного рендеринга */}
            {price !== undefined && <h4>Price: {price} $</h4>}  
        </div>
    );
};

export default Product;