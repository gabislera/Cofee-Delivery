import { GradientContainer, IconSection, IconsContainer, SuccessContainer, SuccessSection } from "./styles";
import success from '../../assets/success.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

export function Success() {
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
                <h2>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></h2>
                <h2> Farrapos - Porto Alegre, RS</h2>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </IconSection>

          </IconsContainer>
        </GradientContainer>
      </SuccessSection>

      <img src={success} alt="" />
    </SuccessContainer >
  )
}
