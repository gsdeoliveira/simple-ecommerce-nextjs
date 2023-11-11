"use client";

import { useCartStore } from '@/store';
import { ProductType } from '../types/ProductType';

const AddCart = ({product, className}: { product: ProductType, className?: string}) => {
  const { addProduct } = useCartStore();
  return (
    <button 
    onClick={
      () => addProduct(product)
    }
    className={`${className ? className : 'rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center'}`}>Adicionar ao carrinho</button>
  )
}

export default AddCart