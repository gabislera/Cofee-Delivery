import { CreditCard, Bank, Money } from "@phosphor-icons/react";
import { PaymentMethodOptionsContainer, PaymentMethodContainer, ContentContainer } from "./styles";
import { useTheme } from "styled-components";

export function PaymentOptions() {
  const { colors } = useTheme()

  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodContainer>
        <input id='credit' type="radio" name="paymentMethod" />
        <label htmlFor='credit'>
          <ContentContainer>
            <CreditCard size={22} color={colors['brand-purple']} />
            <span>Cartão de crédito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>

      <PaymentMethodContainer>
        <input id='credit' type="radio" name="paymentMethod" />
        <label htmlFor='credit'>
          <ContentContainer>
            <Bank size={22} color={colors['brand-purple']} />
            <span>Cartão de débito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>

      <PaymentMethodContainer>
        <input id='credit' type="radio" name="paymentMethod" />
        <label htmlFor='credit'>
          <ContentContainer>
            <Money size={22} color={colors['brand-purple']} />
            <span>Dinheiro</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    </PaymentMethodOptionsContainer>
  )
}