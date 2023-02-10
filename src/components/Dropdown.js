import Dropdown from 'react-multilevel-dropdown';

const Dropdown= ()=>{return(

<Dropdown
  title='Dropdown title'
>
  <Dropdown.Item
    onClick={() => doSomething()}
  >
    Item 1
  </Dropdown.Item>
  <Dropdown.Item>
    Item 2
    <Dropdown.Submenu>
      <Dropdown.Item>
        Subitem 1
      </Dropdown.Item>
    </Dropdown.Submenu>
  </Dropdown.Item>
</Dropdown>)}

export default Dropdown;