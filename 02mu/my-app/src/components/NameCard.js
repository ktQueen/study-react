import React from 'react';

const NameCard=(props)=>{
    const {name,number,ishuman,tags}=props;
    return (
        <div className="alert alert-success">
            <p>姓名：{name}</p>
            <p>电话号码：{number}</p>
            <p>{ishuman?'人类':'外星人'}</p>
            <p>
                {
                    tags.map((tag,index)=>
                    <span key={index} className="badge badge-pill badge-primary">{tag} </span>
                    )
                }
            </p>
        </div>
    )
}
class NameCard1 extends React.Component{
    render(){
        const {name,number,ishuman,tags}=this.props;
        return(
            <div>
                <p>姓名：{name}</p>
                <p>电话号码：{number}</p>
                <p>{ishuman?'人类':'外星人'}</p>
                <p>
                    {
                        tags.map((tag,index)=>
                        <span key={index} className="badge badge-pill badge-primary">{tag} </span>
                        )
                    }
                </p>
            </div>
        )
    }
}
export default NameCard;