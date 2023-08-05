import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { AddToCartQtd, DetailsSection, RemoveButton, SelectedProductContainer } from "./styles";
import teste from '../../../../assets/Image.png'

export function SelectedProductCard() {
  return (
    <SelectedProductContainer>
      <div>
        <img src={teste} alt="" />
        <DetailsSection>
          <strong>Expresso Tradicional</strong>

          <div>
            <AddToCartQtd>
              <button><Minus size={14} /></button>
              <span>1</span>
              <button><Plus size={14} /></button>
            </AddToCartQtd>

            <RemoveButton>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </DetailsSection>
      </div>

      <strong>R$ 9,90</strong>
    </SelectedProductContainer>
  )
}