import React from 'react'
class TodoItem extends React.Component{
     // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
     constructor(props){
         super(props)
         this.handleDelete=this.handleDelete.bind(this)
     }
     handleDelete(){
        const {index}=this.props
         this.props.delete(index)
     }
     render(){
         const {item}=this.props
        return (
            <li>{item}<span onClick={this.handleDelete}>删除</span></li>
         )
     }
 }
 export default TodoItem