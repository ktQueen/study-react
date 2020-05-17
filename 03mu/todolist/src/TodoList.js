import React from 'react';
import TodoItem from './TodoItem'

// 通过属性的形式向子组件传递参数
// 通过props接受父组件传递过来的参数
//定义一个React组件
class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:[],
      inputValue:''
    }
    // 性能考虑
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleDelete(index){
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
  getTodoItem(){
    return  this.state.list.map((item,index)=>{
      return <TodoItem 
              delete={this.handleDelete} 
              key={index} 
              item={item} 
              index={index}>
              </TodoItem>
    })
  }
  render(){
    // jsx语法
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </div>
    );
  }
}

export default TodoList;
