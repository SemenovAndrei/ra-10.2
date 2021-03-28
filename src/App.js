import './App.css'
import Filter from './components/Filter/Filter'
import ServiceAdd from './components/ServiceAdd/ServiceAdd'
import ServiceList from './components/ServiceList/ServiceList'

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <Filter />
      <ServiceList />
    </div>
  )
}

export default App
