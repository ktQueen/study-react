import React from 'react';

class likesButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0
        }
        // this指向的第一种方法
        // this.increaseLikes=this.increaseLikes.bind(this)
    }
    increaseLikes(){
        let num=this.state.likes
        this.setState({
            likes:++num
        })
    }
    render(){
        return (
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-lg btn-outline-primary"
                    // onClick={this.increaseLikes}
                    // this指向的第二种方法
                    onClick={()=>{this.increaseLikes()}}
                >
                    👍{this.state.likes}
                </button>
            </div>
        )
    }
}

export default likesButton