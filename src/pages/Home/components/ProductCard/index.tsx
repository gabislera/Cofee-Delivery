import { ProductCardContainer, ProductFooter, ProductTags } from "./styled";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { AddToCartQtd } from "../../../../components/AddToCartQtd";
import { CartProps } from '../../../../contexts/cartContext'

export function ProductCard({ data }: { data: CartProps }) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`
  const [tags, setTags] = useState<CartProps>()
  const [quantity, setQuantity] = useState<number>(0)


  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${data.id}`);
      setTags(response.data);
    }
    fetchProduct();
  }, [data.id]);

  function handleIncreaseQty() {
    setQuantity(prevstate => prevstate + 1)
  }

  function handleDecreaseQty() {
    if (quantity > 0) setQuantity(prevstate => prevstate - 1)
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt="" />

      <ProductTags>
        {tags?.ingredients?.map((tag, index) => (
          <span key={index}>{tag.name}</span>
        ))}
      </ProductTags>

      <h1>{data.name}</h1>

      <p>{data.description}</p>

      <ProductFooter>
        <span>R$<strong>{data.price}</strong></span>

        <AddToCartQtd
          data={data}
          quantity={quantity}
          onIncrease={handleIncreaseQty}
          onDecrease={handleDecreaseQty} />
      </ProductFooter>
    </ProductCardContainer>
  )
}