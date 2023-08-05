import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { AddressContainer, CompleteOrderContainer, OrderSection, SectionTitle } from "./styles";
import { useTheme } from "styled-components";
import { PaymentOptions } from "../PaymentOptions";

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderContainer>
      <h1>Complete seu pedido</h1>

      <OrderSection>
        <SectionTitle >
          <MapPin size={22} color={colors['brand-yellow-dark']} />
          <div>
            <strong>Endereço de Entrega</strong>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </SectionTitle>

        <AddressContainer>
          <input type="text" id="cep" placeholder="CEP" />
          <input type="text" id="street" placeholder="Rua" />
          <input type="text" id="number" placeholder="Número" />
          <input type="text" id="complement" placeholder="Complemento" />
          <input type="text" id="neighborhood" placeholder="Bairro" />
          <input type="text" id="city" placeholder="Cidade" />
          <input type="text" id="uf" placeholder="UF" />
        </AddressContainer>
      </OrderSection>

      <OrderSection>
        <SectionTitle>
          <CurrencyDollar size={22} color={colors['brand-purple']} />
          <div>
            <strong>Pagamento</strong>
            <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </SectionTitle>

        <PaymentOptions />

      </ OrderSection>
    </CompleteOrderContainer>
  )
}