import { ReactNode } from "react"

const MessageError = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-red-500 font-bold mt-2">{ children }</div>
  )
}

export default MessageError