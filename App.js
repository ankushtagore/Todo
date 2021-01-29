import React from 'react'
import './App.css'
import logo from './logo512.png'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      newItem: '',
      list: []
    }
  }
  addItem(todoValue){
    if (todoValue !== '') {
      const newItem= {
        id: Date.now(),
        value: todoValue,
        isDone: false
      }
      const list = [...this.state.list]
      list.push(newItem)

      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedlist = list.filter(item => item.id !== id)
    this.setState({list: updatedlist})
  }

  updatedInput(input) {
    this.setState({newItem:input})
  }

  render() {
    return (
      <div> 
        <img src={logo} width='100' height='100' className='logo' />
        <h1 className='app-title'>  To-do App </h1>
        <div className='container'> 
          Add an Item...
          <br/>
          
          <input 
            type='text'
            className='input-text'
            placeholder='Try something, Buddy'
            value = {this.state.newItem}
            onChange= {e => this.updatedInput(e.target.value)}
          />

          <button
          className='add-btn'
          onClick={() => this.addItem(this.state.newItem)}
          disabled= {!this.state.newItem.length}
          > Add To-do </button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key= {item.id}>
                    <input type='checkbox'
                    name= 'idDone'
                    checked= {item.isDone}
                    
                    />
                    {item.value}
                    <button className='btn'
                    onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                )
              })}

            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default App