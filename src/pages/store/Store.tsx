import { Link } from 'react-router-dom'
import Container from '../../components/container/Container'
import ProductItem from '../../components/productItem/ProductItem'
import { useEffect, useState } from 'react'
import axios from 'axios'
import type { TProducts } from '../../type/ProductType.ts'

export default function Store() {
  const [products, setProducts] = useState<TProducts[]>([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('خطا در واکشی محصولات:', err))
  }, [])

  return (
    <div>
      <Container>
        <h1 className='mb-10 text-right'> New Products</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-4'>
          {products.map((product) => (
            <Link key={product.id} to={`/productDet/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
