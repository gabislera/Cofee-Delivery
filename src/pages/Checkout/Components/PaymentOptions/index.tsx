import { CreditCard, Bank, Money } from "@phosphor-icons/react";
import { PaymentMethodOptionsContainer, PaymentMethodContainer, ContentContainer } from "./styles";
import { useTheme } from "styled-components";
import { useFormContext } from "react-hook-form";

export function PaymentOptions() {
  const { colors } = useTheme()

  const { register } = useFormContext()

  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodContainer>
        <input id='credit' type="radio" value='credit' {...register('paymentMethod')} />
        <label htmlFor='credit'>
          <ContentContainer>
            <CreditCard size={22} color={colors['brand-purple']} />
            <span>Cartão de crédito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>

      <PaymentMethodContainer>
        <input id='debit' type="radio" value='debit' {...register('paymentMethod')} />
        <label htmlFor='debit'>
          <ContentContainer>
            <Bank size={22} color={colors['brand-purple']} />
            <span>Cartão de débito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>

      <PaymentMethodContainer>
        <input id='money' type="radio" value='money' {...register('paymentMethod')} />
        <label htmlFor='money'>
          <ContentContainer>
            <Money size={22} color={colors['brand-purple']} />
            <span>Dinheiro</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>

    </PaymentMethodOptionsContainer>
  )
}