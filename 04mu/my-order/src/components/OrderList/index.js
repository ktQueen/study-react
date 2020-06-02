import React, { Component } from 'react';
import OrderItem from '../OrderItem'
import './style.css';

class OrderList extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        // html5的fetch属性
        fetch('/mock/orders.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        data
                    })
                })
            }
        })
    }
    handleSubmit(id,comment,star){
        // fetch('/saveComment').then(()=>{})
        const newData=this.state.data.map((item)=>{
            return item.id===id?{
                ...item,comment,star,ifCommented:true
            }:item
        })
        this.setState({
            data:newData
        })
    }
    render() {
        return (
            <div className="orderList">
                {
                    this.state.data.map((item)=>{
                        return <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit}/>
                    })
                }
            </div>
        );
    }
}

export default OrderList;