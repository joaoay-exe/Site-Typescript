import './style.css'
import typescriptLogo from './typescript.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript</h1>
    <p class="read-the-docs">
      Click on the TypeScript logo to learn more
    </p>
  </div>
`
