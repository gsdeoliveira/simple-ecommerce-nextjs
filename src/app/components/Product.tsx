import { formatPrice } from '@/lib/formatPrice';
import { ProductType } from '../types/ProductType'
import ProductImage from './ProductImage';
import AddCart from './AddCart';
import Link from 'next/link';

type ProductProps = {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className='flex flex-col shadow-lg h-[30rem] sm:h-96 bg-slate-800 text-gray-300 p-5'>
      <Link href={`/product/${product.id}`} className='flex flex-col h-96'>
        <div className='relative max-h-90 flex-1'>
          <ProductImage product={product} fill />
        </div>
        <div className='flex justify-between font-bold my-3'>
          <p className='w-40 truncate'>{product.name}</p>
          <p className='text-md text-teal-300'>{formatPrice(product.price)}</p>
          
          </div>
      </Link>
          <AddCart product={product} />
      </div>
  )
}

export default Product