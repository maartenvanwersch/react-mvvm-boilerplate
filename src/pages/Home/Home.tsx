import { observer } from "mobx-react-lite"
import { FC } from "react"
import { useAppContext, useVm } from "@hooks"
import { HomeVm } from "./HomeVm"
import logo from '../../logo.svg'
import './Home.css'

export const Home: FC = observer(() => {
  const viewModel = useVm(HomeVm, { document, rootStore: useAppContext() })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => viewModel.handleCountChange(viewModel.count + 1)}>
            count is: {viewModel.count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
})
