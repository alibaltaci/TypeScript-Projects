import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './App.styles.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App />
        <GlobalStyle />
    </>
)
