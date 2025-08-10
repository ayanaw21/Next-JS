import ProductDetail from '@/components/product-detail';
import { stripe } from '@/lib/stripe';
import React from 'react'

const ProductPage = async({params}:{params:{id:string}}) => {
    const  {id} = await params;
    const product = await stripe.products.retrieve(id,{
        expand:["default_price"]
    })
    const plainProduct = JSON.parse(JSON.stringify(product))
  return (
        <ProductDetail product={plainProduct} />
  )
}

export default ProductPage