import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

// Le puedes pasar como Props por ser Children "PropsWithChildren"
//And it works with this import

const ErrorMessage = ({children} : ErrorMessageProps) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">{children}</p>
  )
}

export default ErrorMessage