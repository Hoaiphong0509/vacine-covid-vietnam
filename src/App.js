import logo from './logo.svg'
import './App.css'

import Footer from './component/Footer/Footer'
import PowerBi from './component/PowerBi/PowerBi'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBi />
      </header>
      <Footer />
    </div>
  )
}

export default App
