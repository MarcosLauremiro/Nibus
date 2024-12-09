import React from "react"
import { ConfigureAntdTheme } from "./utils/antdTheme"
import { RouterMain } from "./route/route"

export const App: React.FC = () => {

  return (
    <ConfigureAntdTheme>
      <RouterMain/>
    </ConfigureAntdTheme>
  )
}
