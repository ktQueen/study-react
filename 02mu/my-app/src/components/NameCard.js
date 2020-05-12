import React from 'react';

class NameCard extends React.Component{
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
                        <span key={index}>{tag} </span>
                        )
                    }
                </p>
            </div>
        )
    }
}
export default NameCard;