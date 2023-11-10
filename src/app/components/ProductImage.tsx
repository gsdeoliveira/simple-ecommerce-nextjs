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
   priority
   src={product.image} 
   fill
   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   alt={product.name} 
   className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
   onLoad={() => setLoading(false)}
    />
  ): ( 
    <Image
    priority
    src={product.image} 
    width={width ? width : 400}
    height={700}
    alt={product.name} 
    className={`object-cover ${loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
    onLoad={() => setLoading(false)}
     />
    )
}

export default ProductImage