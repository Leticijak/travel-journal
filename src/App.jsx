import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
