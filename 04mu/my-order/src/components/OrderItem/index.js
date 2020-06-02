import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
    constructor(props){
        super(props)
        this.state={
            editing:false,
            star:props.data.star||0,
            comment:props.data.comment||''
        }
        this.clickEvaluate=this.clickEvaluate.bind(this)
        this.changeTextarea=this.changeTextarea.bind(this)
        this.handleSubmie=this.handleSubmie.bind(this)
        this.handleCancle=this.handleCancle.bind(this)
    }
    // 点击评价
    clickEvaluate(){
        this.setState({
            editing:true
        })
    }
    // 输入框改变值
    changeTextarea(e){
        this.setState({
            comment:e.target.value
        })
    }
    // 提交
    handleSubmie(){
       const {id}=this.props.data
       const {comment,star}=this.state
       this.setState({
        editing:false
       })
       this.props.onSubmit(id,comment,star)
    }
    //取消
    handleCancle(){
        this.setState({
            editing:false,
            star:this.props.data.star||0,
            comment:this.props.data.comment||''
        })
    }
    // 点击星星
    clickStar(value){
        this.setState({
            star:value
        })
    }
    render() {
        const { shop, product, price, picture,ifCommented}=this.props.data;
        return (
            <div className="orderItem">
                <div className="orderItem__wrap">
                    <div className="orderItem__picContainer">
                        <img className="orderItem__pic" src={picture}/>
                    </div>
                    <div className="orderItem__content">
                        <div className="orderItem__product">{product}</div>
                        <div className="orderItem__shop">{shop}</div>
                        <div className="orderItem__detail">
                            <div className="orderItem__price">{price}</div>
                            <div>
                                {
                                    ifCommented
                                    ?<button className="orderItem__btn orderItem__btn--gray">已评价</button>
                                    :<button className="orderItem__btn orderItem__btn--red" onClick={this.clickEvaluate}>评价</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderEditArea()}
            </div>
        );
    }
    renderEditArea(){
        return (
            this.state.editing?
            <div>
                <textarea onChange={this.changeTextarea} value={this.state.comment}></textarea>
                {this.renderStars()}
                <div>
                    <button className="btn__submit" onClick={this.handleSubmie}>提交</button>
                    <button className="btn__cancle" onClick={this.handleCancle}>取消</button>
                </div>
            </div>
            :null
        )
    }
    renderStars(){
        return (
            <div>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        return <span key={index} onClick={this.clickStar.bind(this,item)} className={this.state.star>=item?"star__red":""}>☆</span>
                    })
                }
            </div>
        )
    }
}

export default OrderItem;