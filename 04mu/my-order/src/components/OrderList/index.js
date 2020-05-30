import React, { Component } from 'react';
import OrderItem from '../OrderItem'
import './style.css';

const data=[
    {
        id:1,
        shop:'院落创意菜',
        product:'红烧排骨',
        price:'9.9',
        ifCommented:true
    },
    {
        id:2,
        shop:'院落创意菜',
        product:'红烧带鱼',
        price:'9.9',
        ifCommented:false
    },
    {
        id:3,
        shop:'院落创意菜',
        product:'凉拌黄瓜',
        price:'9.9',
        ifCommented:false
    },
    {
        id:4,
        shop:'院落创意菜',
        product:'啤酒鸭',
        price:'9.9',
        ifCommented:false
    }
]
class OrderList extends Component {
    render() {
        return (
            <div className="orderList">
                {
                    data.map((item)=>{
                        return <OrderItem key={item.id} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default OrderList;