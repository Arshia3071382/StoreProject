import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import type { TProducts } from "../../type/ProductType.ts";
import axios from "axios";
import { useShoppingCardContext } from "../../context/ShoppingContext.tsx";

function ProductDet() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProducts | null>(null);

  const {
    handleIncreaseProductQty,
    cardItems,
    handleDecreaseProductQty,
    getProductQty,
  } = useShoppingCardContext();

  console.log(cardItems);

  useEffect(() => {
    if (!params.id) return;

    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("خطا در واکشی محصول:", err));
  }, [params.id]);

  if (!product) {
    return (
      <Container>
        <p className="text-center text-gray-500 mt-10">در حال بارگذاری...</p>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <div className="shadow-amber-950 h-auto mt-4 grid grid-cols-1 md:grid-cols-12 rounded-2xl">
          <div className="bg-stone-200 col-span-2 p-4 flex flex-col items-center">
            <img
              className="rounded object-contain w-full h-48"
              src={product.image}
              alt={product.title}
            />
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                variant="success"
                className="mt-2 w-full"
              >
                Add to Basket
              </Button>
            ) : (
              <div className="flex flex-row gap-4 sm:flex-col justify-between items-center">
                <Button
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  className="mt-2 w-full"
                >
                  +
                </Button>
                <span className="text-3xl mt-8">{getProductQty(parseInt(params.id as string))}</span>
                <Button
                  onClick={() =>
                    handleDecreaseProductQty(parseInt(params.id as string))
                  }
                  variant="danger"
                  className="mt-2 w-full"
                >
                  -
                </Button>
              </div>
            )}
          </div>

          <div className="col-span-10 text-left p-4 bg-stone-100">
            <h1 className="text-xl font-bold mb-2">{product.title}</h1>
            <div>
              <p className=" mt-10 text-green-500">price : {product.price} $</p>
              <p className="text-gray-500 mt-10">{product.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDet;
