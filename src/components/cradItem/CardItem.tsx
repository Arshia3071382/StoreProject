import axios from "axios";
import type { TProducts } from "../../type/ProductType";
import Button from "../button/Button";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCardContext } from "../../context/ShoppingContext";
import  delteIcon from "./../../../public/image/delete_32dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png"

interface CardItem {
  id: number;
  qty: number;
}

function CardItem({ id, qty }: CardItem) {

  const [ product , setProduct] = useState<TProducts>()
  const{handleDecreaseProductQty , handleIncreaseProductQty ,handleRemoveProduct} = useShoppingCardContext()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data))

  } , [id])
  return (
    <div>
      <Container>
        <div className="flex flex-row items-center gap-10 border-b pb-3">
          <Link to={`/productDet/${id}`}>
           <img
            className="w-28 h-28 rounded"
            src={product?.image}
            alt="ProductImg"
          />
          </Link>

          <div>
            <h1 className="text-right">{product?.title}</h1>
            <div className="flex gap-4 items-center">
              <Button onClick={() => handleIncreaseProductQty(id)} variant="primary">+</Button>
              <p className="mt-10">{qty}</p>
              <Button onClick={() => handleDecreaseProductQty(id)} variant="primary">-</Button>
              <Button onClick={() => handleRemoveProduct(id)} variant="danger">
                <img src={delteIcon} alt="deleteIcon" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CardItem;
