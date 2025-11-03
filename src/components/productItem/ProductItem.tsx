import type { TProducts } from "../../type/ProductType.ts"

function ProductItem({ product }: { product: TProducts }) {
  return (
    <div className="text-left shadow rounded pb-5 mb-5 hover:shadow-lg transition">
      <img
        className="rounded w-full h-64 object-contain p-4"
        src={product.image}
        alt={product.title}
      />
      <div className="flex flex-col items-center gap-2 pb-5 px-4">
        <h2 className="text-lg font-bold line-clamp-1">{product.title}</h2>
        <h3 className="text-green-600 font-semibold">${product.price}</h3>
      </div>
      <p className="line-clamp-2 px-4 text-gray-600">
        {product.description}
      </p>
    </div>
  )
}

export default ProductItem
