import React from "react";
import { getTweetsByUserName } from "./fetch";

class details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTweet: [],
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const detailTweet = getTweetsByUserName(id);
    detailTweet.then((res) => {
      this.setState({
        detailTweet: res,
      });
    });
    
  }

  render(){
    console.log(this.state.detailTweet)
    console.log(this.state.Id)
    const detailTweet = this.state.detailTweet.map((tweet)=>{
      return(
        <li>
          {tweet.created_at}
          {tweet.username}
          {tweet.message}
        </li>
      )
    })
    return(         
           <div>{detailTweet}</div>
    )
  }
}

export default details;


