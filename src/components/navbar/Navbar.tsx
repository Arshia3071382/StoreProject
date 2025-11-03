
import { Link } from 'react-router-dom'
import Container from '../container/Container'

export default function 
() {
  return (
    <div className='border-b border-gray-300 shadow-2xl h-14 flex items-center  '>
       <Container>
         <div className='flex justify-between flex-row-reverse '>
            <ul className='flex flex-row-reverse justify-between gap-4'>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"./store"}>
              <li>Store</li>
            </Link>
        </ul>

        <div>
          <Link to={"./card"}>
            <button>Basket</button>
          </Link>
        </div>
         </div>
       </Container>
        
    </div>
  )
}
