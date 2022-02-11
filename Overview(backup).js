import React from "react";
import { Link } from "react-router-dom";
import { getTweets } from "./fetch";
import { submitMessage } from "./fetch";
import { getTweetsByUserName } from "./fetch";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      detailedtweets: [],
      detailedtweetsfetchByName: [],
    }
  }


  componentDidMount() {


 
    this.handelfetch();
    
  }

  handelfetch() {
    const TweetList = getTweets();
    TweetList.then((res) => {
      this.setState({
        tweets: res,
      });
    });
  }

  handelfetchByUserName(username){
    const TweetDetail = getTweetsByUserName(username);
    TweetDetail.then((res) => {
      this.setState({
        tweets: res,
      });
    });

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
  handleJobClick(jobID) {
   
    // const { history } = this.props;
    // history.push('/details');
    const jobDetails = [
      {
        username: jobID,
      
      },
    ];

    this.setState({
      detailedtweets: jobDetails,
    
    });

 

  }


  render(){
    const tweets = this.state.tweets.map((job) => {
      return (
        <div>
           {/* <Link to={`/details/${job.id}`}>
            {job.message}
          </Link> */}

        
        <li
        onClick={this.handleJobClick.bind(
          this,
          job.username,
        )}
        >
          {job.message}
          </li>
        </div>

      );
    });

    const detailedtweets = this.state.detailedtweets.map((noe)=> {
      return(
        <div>
          {/* <Link to={`/details/${noe.id}`}>
            {noe.id}
          </Link> */}

          <li
          onClick={this.handelfetchByUserName.bind(this, noe.username)}
          
          >
           {noe.username}
          </li>
        </div>
      )
    })

    const detailedtweetsfetchByName = this.state.detailedtweetsfetchByName.map((noe)=>{
      return(
        <div>
          {noe.id}

        </div>
      )
    })

    return(
      <div>
        
        <input
          ref="messageInput"
          type="text"
          placeholder="skriv en twaat bro"
          onKeyDown={this.handleKeyDown.bind(this)}
        />
           <button onClick={this.handleLogin.bind(this)}>Add new book</button>
           <div>{tweets}</div>
           <div>{detailedtweets}</div>
           <div>{detailedtweetsfetchByName}</div>
     </div>
    )
  }
}

export default App;


