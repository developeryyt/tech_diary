import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import App from "./layout/App.tsx";


const $root = document.getElementById('root')!
const $rootContainer = createRoot($root)


$rootContainer.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
