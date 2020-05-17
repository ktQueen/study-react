import React from 'react'
 class TodoItem extends React.Component{
     // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
     handleDelete(){
         this.props.delete(this.props.index)
     }
     render(){
        return (
            <li>{this.props.item}<span onClick={this.handleDelete.bind(this)}>删除</span></li>
         )
     }
 }
 export default TodoItem