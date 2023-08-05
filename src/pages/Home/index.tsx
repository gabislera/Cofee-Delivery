import {
  HomeContainer, ProductsContainer, ProductsSection,
} from './styles'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Main } from './components/Main'
import { ProductCard } from './components/ProductCard'

interface ProductProps {
  id: number
  name: string
  description: string
  category: string
  price: number
  image: string
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const search = ''

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?name=${search}`)
      setProducts(response.data.products)
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(product => product.category === 'cafe')

  return (
    <HomeContainer>
      <Main />

      <ProductsContainer>
        <strong>Nossos cafés</strong>
        <ProductsSection>
          {
            filteredProducts.map(product => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </ProductsSection>
      </ProductsContainer>
    </HomeContainer>
  )
}
