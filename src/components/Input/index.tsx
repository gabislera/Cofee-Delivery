import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"
import { InputContainer, DataInput } from './styles'
import { FieldError, FieldErrors } from "react-hook-form";

type FormError = FieldError | FieldErrors<any>

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  id: string
  error?: FormError
  $hasError?: any
}

export const TextInput = forwardRef(({ id, error, ...rest }: InputProps, ref: any) => {
  return (
    <InputContainer id={id}>
      <DataInput $hasError={error} type="text" ref={ref} {...rest} />
      {/* {error && <span>{error.message}</span>} */}
    </InputContainer>
  )
}
)