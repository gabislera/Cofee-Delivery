import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { MainContainer, MainSection, IconsSection, Icon } from "./styles";
import coffee from '../../../../assets/Imagem.png'

export function Main() {
  return (
    <MainContainer>
      <MainSection>
        <strong>Encontre o café perfeito para qualquer hora do dia</strong>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <IconsSection>
          <Icon $variant="orange">
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <strong>Compra simples e segura</strong>
          </Icon>
          <Icon $variant="grey">
            <span>
              <Package size={16} weight="fill" />
            </span>
            <strong>Embalagem mantém o café intacto</strong>
          </Icon>
          <Icon $variant="yellow">
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <strong>Entrega rápida e rastreada</strong>
          </Icon>
          <Icon $variant="purple">
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <strong>O café chega fresquinho até você</strong>
          </Icon>
        </IconsSection>
      </MainSection>

      <img src={coffee} alt="" />
    </MainContainer>
  )
}