import React from 'react'

// 没有生命周期，没有state,就可以写成一个function的形式，比较简单
const CommentList =({comments})=>{
    return (
        <div className="comment -list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment,index)=>
                        <li key={index} className="list-group-item">{comment}</li>
                    )
                }
                
            </ul>
        </div>
    )
}
export default CommentList