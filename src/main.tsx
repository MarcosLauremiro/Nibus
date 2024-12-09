import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/resetCss.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
