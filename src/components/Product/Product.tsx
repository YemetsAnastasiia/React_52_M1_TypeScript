/* import './styles.css'; */
import { ProductProps } from "./types";
import { ProductCardStyles, ProductImg } from "./styles";

function Product({ product_name = "Unknown", price, img }: ProductProps) {
  return (
    <ProductCardStyles>
      <h2>{product_name}</h2>
      <ProductImg src={img} />
      {/*  пример тернарного оператора для скрытия элемента div, если цена не была передана  ДЛИННЫЙ СПОСОБ*/}
      {/*       {price !== undefined ? <h4>Price: {price} $</h4> : null} */}
      {/*  Пример использования оператора условного рендеринга */}
      {price !== undefined && <h4>Price: {price} $</h4>}
    </ProductCardStyles>
  );
}

export default Product;
