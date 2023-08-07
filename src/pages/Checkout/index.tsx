import { CheckoutContainer } from "./styles";
import { CompleteOrderForm } from "./Components/CompleteOrderForm";
import { SelectedProducts } from "./Components/SelectedProducts";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'

// enum PaymentMethods {
//   credit = 'credit',
//   debit = 'debit',
//   cash = 'cash',
// }

const PaymentMethods = ['credit', 'debit', 'money'] as const

const orderFormValidationSchema = zod.object({
  cep: zod.string().min(1, { message: "Informe o CEP" }),
  street: zod.string().min(1, { message: "Informe a Rua" }),
  number: zod.string().min(1, { message: "Informe o Número" }),
  complement: zod.string(),
  district: zod.string().min(1, { message: "Informe o Bairro" }),
  city: zod.string().min(1, { message: "Informe a Cidade" }),
  uf: zod.string().min(1, { message: "Informe o UF" }),
  // paymentMethod: zod.nativeEnum(PaymentMethods, {
  //   errorMap: () => {
  //     return { message: 'Informe o método de pagamento' }
  //   },
  // }),
  paymentMethod: zod.enum(PaymentMethods),
})

type orderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const orderForm = useForm<orderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
  })

  const { handleSubmit } = orderForm

  function handleOrderForm(data: orderFormData) {
    console.log('teste', data)
  }

  return (
    <FormProvider {...orderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleOrderForm)} >
        <CompleteOrderForm />
        <SelectedProducts />
      </CheckoutContainer >
    </FormProvider >
  )
}
