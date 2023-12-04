import MainContent from './components/MainContent'
import Sidebar from './components/SideBar'
import './assets/sass/components/app.sass'

export default function App() {
  return (
    <div id="portfolio">
      <h1>Weler Martins</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}


