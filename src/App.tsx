import ListGroup from "./components/ListGroup";
 
function App() {
  let items = [
    'New York',
    'Fransisco',
    'Tokyo',
    'London',
    'Paris' 
  ]
  
  let handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
  <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  </div>
  )
}

export default App;