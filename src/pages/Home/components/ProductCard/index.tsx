import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { AddToCartQtd, ProductCardContainer, ProductFooter, ProductTags } from "./styled";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";

interface Tags {
  name: string
}

interface DataProps {
  id: number
  name: string
  description: string
  category: string
  price: number
  image: string
  ingredients?: Tags[]
}

export function ProductCard({ data }: { data: DataProps }) {
  const imageUrl = `${api.defaults.baseURL}/files/${data.image}`
  const [tags, setTags] = useState<DataProps>()

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${data.id}`);
      setTags(response.data);
    }
    fetchProduct();
  }, [data.id]);

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

        <AddToCartQtd>
          <div>
            <button><Minus size={14} /></button>
            <span>1</span>
            <button><Plus size={14} /></button>
          </div>

          <button>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddToCartQtd>
      </ProductFooter>
    </ProductCardContainer>
  )
}