import { formatPrice } from '@/lib/formatPrice';
import { ProductType } from '../types/ProductType'
import AddCart from './AddCart';
import Link from 'next/link';
import Image from 'next/image';

type ProductProps = {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className='w-[100%] mb-10 overflow-hidden min-h-72 flex flex-col mx-1 rounded-xl cursor-pointer transition-all hover:text-slate-900 hover:bg-slate-900 group bg-slate-100 shadow-xl'>
    <Link href={`/product/${product.id}`} >
    <Image src={product.image} width={300} height={300} alt={product.description!} priority />
    <p className='text-slate-900 group-hover:text-slate-100 text-sm  truncate p-2 text-start' title={product.description!}>{product.name}</p>
    <p className='text-md text-start font-bold transition-all p-2 text-cyan-400'>{formatPrice(product.price)}</p>
    <p className='text-sm text-start  p-2 text-slate-900 group-hover:text-slate-100'>Em até <span className='font-bold'>12x</span> de <span className='font-bold text-cyan-400'>{formatPrice(product.price! / 12)}</span></p>
    </Link>
    </div>
)
}

export default Product