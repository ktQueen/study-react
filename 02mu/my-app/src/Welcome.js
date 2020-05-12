import React from 'react';

// ES6的语法
class Welcome extends React.Component{
    render(){
        const todoList=['learn react','learn redux'];
        const islogin=false;
    return <div>
            <h1 className='ddd' htmlFor="">
                hello React12
                {'123'}
                <p>{1+2}</p>
                <p>{[4,5,6]}</p>
            </h1>
            <ul>
                {
                    todoList.map(item=>
                        <li>{item}</li>
                    )
                }
            </ul>
            <p>{islogin?'你已经登录了':'你没登录'}</p>
        </div>
    }
}

export default Welcome