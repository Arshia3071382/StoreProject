
import { Link } from 'react-router-dom'
import Container from '../container/Container'
import basketIcon from "./../../../public/image/shopping_cart_47dp_000000_FILL0_wght400_GRAD0_opsz48.png"
import { ShoppingCardContext, useShoppingCardContext } from '../../context/ShoppingContext'

export default function 
() {

  const {productQty} = useShoppingCardContext()
  return (
    <div className='border-b border-gray-300 shadow-2xl h-14 flex items-center  '>
       <Container>
         <div className='flex justify-between flex-row '>
            <ul className='flex flex-row justify-between gap-4'>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"./store"}>
              <li>Store</li>
            </Link>
        </ul>

        <div>
          <Link className='relative' to={"./card"}>
            <button>
              <img className='w-7' src={basketIcon}  alt="basketIcon" />
            </button>
            <p className='absolute bg-red-600 px-2 rounded-2xl text-white -right-4 -top-5'>{productQty}</p>
          </Link>
        </div>
         </div>
       </Container>
        
    </div>
  )
}
