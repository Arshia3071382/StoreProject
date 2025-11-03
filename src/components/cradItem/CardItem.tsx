import Button from "../button/Button";
import Container from "../container/Container";

function CardItem() {
  return (
    <div className="">
      <Container>
        <div className="flex flex-row-reverse items-center gap-10 border-b pb-3">
          <img className="w-28 h-28 rounded" src="./../../../public/image/testImg.png" alt="" />

          <div>
            <h1 className="text-right">عنوان محصول</h1>
            <div className="flex gap-4 items-center">
              <Button  variant="primary">+</Button>
              <p className="mt-10">3</p>
              <Button variant="primary">-</Button>
              <Button variant="danger">حذف</Button>
            </div>
          </div>

          
        </div>
      </Container>
      
    </div>
  );
}

export default CardItem;
