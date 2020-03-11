import React from "react"

class Joke extends React.Component {
  render() {
    return(
      <div>
        <h3 style={{display:this.props.question ? "block":"none",color:!this.props.punchLine && "green"}}>Question: {this.props.question}</h3>
        <h3 style={{display:!this.props.punchLine && "none",color:!this.props.question && "red"}}>Answer: {this.props.punchLine}</h3>
        <hr/>
      </div>
    );
  }
}

export default Joke
