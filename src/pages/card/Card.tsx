import CardItem from "../../components/cradItem/CardItem";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useShoppingCardContext } from "../../context/ShoppingContext";

function Card() {

  const {cardItems} = useShoppingCardContext() ;
  return (
    <div>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <Container>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-200 rounded text-right flex justify-around py-3">
            <p>قیمت کل</p>
            <p>تخفیف</p>
            <p>تعداد کالا</p>
          </div>
          <Button style={{ width: "60%", margin: "auto" }} variant="success">
            ثبت سفارش
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Card;
