import React from 'react';

// ES6的语法
class Welcome extends React.Component{
    render(){
        const todoList=['learn react','learn redux'];
        const islogin=false;
        const test=<p>123</p>
        console.log(test);
    return <div>
            <h1 className='ddd' htmlFor="">
                hello React
                <p>{'123'}</p>
                <p>{1+2}</p>
                <p>{[4,5,6]}</p>
            </h1>
            <ul>
                {
                    todoList.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
            <p>{islogin?'你已经登录了':'你没登录'}</p>
        </div>
    }
}

export default Welcome