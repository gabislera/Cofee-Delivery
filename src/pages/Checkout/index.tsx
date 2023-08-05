import { CheckoutContainer } from "./styles";
import { CompleteOrderForm } from "./Components/CompleteOrderForm";
import { SelectedProducts } from "./Components/SelectedProducts";

export function Checkout() {
  return (
    < CheckoutContainer >
      <CompleteOrderForm />
      <SelectedProducts />
    </CheckoutContainer >
  )
}
