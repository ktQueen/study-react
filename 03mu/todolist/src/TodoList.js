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
  handleClickItem(index){
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
  handleDelete(index){
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
  render(){
    // jsx语法
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <TodoItem delete={this.handleDelete.bind(this)} key={index} item={item} index={index}></TodoItem>
              // return  <li key={index}>{item}<span onClick={this.handleClickItem.bind(this,index)}>删除</span></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
