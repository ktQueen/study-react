import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemeBar';

const themes={
  light:{
    classNames:'btn btn-primary',
    bgColor:'#eee',
    color:'#000'
  },
  dark:{
    classNames:'btn btn-light',
    bgColor:'#222',
    color:'#fff'
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      comments:['第一条评论'],
      theme:'light'
    }
    this.addComment=this.addComment.bind(this)
    this.changeTheme=this.changeTheme.bind(this)
  }
  addComment(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  changeTheme(theme){
    this.setState({
      theme
    })
  }
  render(){
    const {comments}=this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div className="App">
        <h1>context</h1>   
          <div>
            <a href="#theme-switcher" 
               className="btn btn-light"
               onClick={()=>{this.changeTheme('light')}}
            >浅色主题</a>
            <a href="#theme-switcher" 
               className="btn btn-secondary"
               onClick={()=>{this.changeTheme('dark')}}
            >深色主题</a>
          </div>
          <ThemeBar />
        <h1>React表单：From-留言板实例</h1>       
        <CommentList comments={comments}/>
        <CommentBox  commentsLength={comments.length}
                     onAddComment={this.addComment}
        />
        <h1>React生命周期</h1>       
        <DigitalClock />
        <h1>React状态：state</h1>
        <LikesButton />
        <h1>React属性：props</h1>
        <NameCard name="kangting" number={1234567890} ishuman tags={['善良','大方']}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>hahaha</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
       </ThemeContext.Provider>
    )
  }
}

export default App;
