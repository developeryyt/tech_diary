import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const $root = document.getElementById('root')!
const $rootContainer = createRoot($root)



$rootContainer.render(
  <StrictMode>
    <></>
  </StrictMode>,
)
