import React from 'react'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        this.props.onAddComment(this.state.value)
        event.preventDefault()
    }
    render(){
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>  
                <button type="submit" className="btn btn-primary">提交</button> 
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}

export default CommentBox