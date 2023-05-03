import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react"

interface ITokenContext {
  token: string
  setToken: Dispatch<SetStateAction<string>>
}

export const TokenContext = createContext<ITokenContext>({
  token: "",
  setToken: () => {}, //eslint-disable-line
})

function TokenContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState("")
  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}
export default TokenContextProvider
