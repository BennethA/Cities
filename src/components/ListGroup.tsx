import { useState } from "react";

// Props are the inputs to our components
interface Props {
  items: string[],
  heading: string,
  onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {
  
  // useState is a hook,allows us to tap into built in features in react
  // Using this, we tell react that this component can have data/state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && 'No items found'}
      <ul className="list-group">
        {items.map((item, index) => (
        <li 
        className={
          selectedIndex === index 
            ? 'list-group-item active'
            : 'list-group-item'
        }
        key={item} 
        onClick={() => {
          setSelectedIndex(index)
          onSelectItem(item)
          }}>
          {item}
        </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
