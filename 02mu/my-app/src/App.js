import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      comments:['第一条评论']
    }
    this.addComment=this.addComment.bind(this)
  }
  addComment(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render(){
    const {comments}=this.state
    return (
      <div className="App">
        <CommentList comments={comments}/>
        <CommentBox  commentsLength={comments.length}
                     onAddComment={this.addComment}
        />
        <DigitalClock />
        <LikesButton />
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
    )
  }
}

export default App;
