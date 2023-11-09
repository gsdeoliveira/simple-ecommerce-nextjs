"use client"

import Image from 'next/image';
import { ProductType } from '../types/ProductType'
import { useState } from 'react';

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
  width?: number;
}

const ProductImage = ({ product, fill, width }: ProductImageProps) => {
  const [loading, setLoading] = useState(true);
  return fill ? (
   <Image 
   src={product.image} 
   fill 
   alt={product.name} 
   className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
   onLoadingComplete={() => setLoading(false)}
    />
  ): ( 
    <Image 
    src={product.image} 
    width={width ? width : 400}
    height={700}
    alt={product.name} 
    className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
    onLoadingComplete={() => setLoading(false)}
     />
    )
}

export default ProductImage