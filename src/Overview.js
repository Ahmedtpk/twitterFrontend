import React from "react";
import { Link } from "react-router-dom";
import { getTweets } from "./fetch";
import { submitMessage } from "./fetch";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      detailedtweets: [],
    }
  }

  componentDidMount() {
    this.handelfetch(); 
  }

  async handelfetch() {
    const TweetList = await getTweets();
    this.setState({
      tweets: TweetList
    })
  }

  handleKeyDown(e) {
    if(e.keyCode !== 13) {
      return
    }
    const inputText = this.refs.messageInput;
    console.log(inputText.value);
  
    submitMessage({message: inputText.value});
    inputText.value = "";
    this.handelfetch();
  }
  handleLogin() {
    const { history } = this.props;
    history.push('/login');
  }

  handleLogout() {
    const { history } = this.props;
    history.push('/logout');
  }

  handleFeed(){
    const { history } = this.props;
    history.push(`/user/${history}`);

  }


  render(){
  
    const tweets = this.state.tweets.map((job) => {
      return (
        <div>
           <Link to={`/details/${job.username}`}>
            {job.message}
          </Link>
        </div>
      );
    });


    return(
      <div> 
        <input
          ref="messageInput"
          type="text"
          placeholder="skriv en twaat bro"
          onKeyDown={this.handleKeyDown.bind(this)}
        />
           <button onClick={this.handleLogin.bind(this)}>Login</button>
           <button onClick={this.handleLogout.bind(this)}>logout</button>
           <button onClick={this.handleFeed.bind(this)}>feed</button>
           <div>{tweets}</div>
     </div>
    )
  }
}

export default App;


