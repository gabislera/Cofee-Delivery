import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { AddressContainer, CompleteOrderContainer, OrderSection, SectionTitle } from "./styles";
import { useTheme } from "styled-components";
import { PaymentOptions } from "../PaymentOptions";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../../../../components/Input";

export function CompleteOrderForm() {
  const { colors } = useTheme()

  const { register, formState } = useFormContext()
  const { errors } = formState

  console.log(errors.cep) // arrumar

  return (
    <CompleteOrderContainer >
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
          <TextInput id="cep" placeholder="CEP" {...register('cep')} error={errors.cep} />
          <TextInput id="street" placeholder="Rua" {...register('street')} error={errors.street} />
          <TextInput id="number" placeholder="Número" {...register('number')} error={errors.number} />
          <TextInput id="complement" placeholder="Complemento" {...register('complement')} error={errors.complement} />
          <TextInput id="district" placeholder="Bairro" {...register('district')} error={errors.district} />
          <TextInput id="city" placeholder="Cidade" {...register('city')} error={errors.city} />
          <TextInput id="uf" placeholder="UF" {...register('uf')} error={errors.uf} />
        </AddressContainer>
        {errors.cep && <p>Revise os campos em vermelho</p>}
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
        {errors.paymentMethod && <p>Escolha a forma de pagamento</p>}

      </ OrderSection>
    </CompleteOrderContainer >
  )
}