import React from 'react';


class ClickityClick extends React.Component {
    
    constructor() {
      super();
      this.state = {
        hasBeenClicked: false
      };
    }
   
    handleClick = () => {
      this.setState({
          hasBeenClicked: !this.state.hasBeenClicked
        //   hasBeenClicked: true
      }, () => console.log(this.state.hasBeenClicked));
    };

    // handleClick = () => {
    //     this.setState(previousState => {
    //         return {
    //             count: previousState.count + 1
    //         }
    //     })
    // }
   
    render() {
      return (
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
   
  export default ClickityClick;
