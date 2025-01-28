/* import './styles.css'; */
import { ProductProps } from "./types";
import { ProductCardStyles, ProductImg, ProductNameBlock } from "./styles";

function Product({ product_name = "Unknown", price, img }: ProductProps) {
  return (
    <ProductCardStyles>
      <ProductNameBlock>{product_name}</ProductNameBlock>
      <ProductImg src={img} />
      {/*  пример тернарного оператора для скрытия элемента div, если цена не была передана  ДЛИННЫЙ СПОСОБ*/}
      {/*       {price !== undefined ? <h4>Price: {price} $</h4> : null} */}
      {/*  Пример использования оператора условного рендеринга */}
      {price !== undefined && <h4>Price: {price} $</h4>}
    </ProductCardStyles>
  );
}

export default Product;
