import React, { Component } from 'react';
import OrderItem from '../OrderItem'

const data={
    id:1,
    shop:'院落创意菜',
    product:'红烧排骨',
    price:'9.9',
    ifCommented:true
}
class OrderList extends Component {
    render() {
        return (
            <div>
                <OrderItem data={data}/>
            </div>
        );
    }
}

export default OrderList;