import { GradientContainer, IconSection, IconsContainer, SuccessContainer, SuccessSection } from "./styles";
import success from '../../assets/success.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { useCart } from "../../hooks/useCart";

export function Success() {
  const { userOrder } = useCart()

  function formatPaymentMethod(method: String) {
    if (method === 'credit') return 'Cartão de Crédito'
    if (method === 'debit') return 'Cartão de Débito'
    if (method === 'money') return 'Dinheiro'
  }

  const paymentFormatted = formatPaymentMethod(userOrder.data.paymentMethod)

  return (
    <SuccessContainer>
      <SuccessSection>
        <div>
          <strong>Uhu! Pedido confirmado</strong>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>

        <GradientContainer>

          <IconsContainer>
            <IconSection variant="purple">
              <span>
                <MapPin size={16} weight="fill" color="white" />
              </span>
              <div>
                <h2>Entrega em <strong>{userOrder.data.street}, {userOrder.data.number}</strong></h2>
                <h2> {userOrder.data.district} - {userOrder.data.city}, {userOrder.data.uf}</h2>
              </div>
            </IconSection>

            <IconSection variant="yellow">
              <span>
                <Timer size={16} weight="fill" color="white" />
              </span>
              <div>
                <h2>Previsão de entrega</h2>
                <strong>20 min - 30 min</strong>
              </div>

            </IconSection>

            <IconSection variant="orange">
              <span>
                <CurrencyDollar size={16} color="white" />
              </span>
              <div>
                <h2>Pagamento na entrega</h2>
                <strong>{paymentFormatted}</strong>
              </div>
            </IconSection>

          </IconsContainer>
        </GradientContainer>
      </SuccessSection>

      <img src={success} alt="" />
    </SuccessContainer >
  )
}
