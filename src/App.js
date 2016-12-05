import React from 'react';
// import ReactDOM from 'react-dom';
import { PrismCode } from "react-prism";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.functions = ['React'];

    this.state = { code: "import _____ from 'react';", answer: '_____' };

    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    window.foo = this.handleButtonClick;
  }

  handleButtonClick(targrt, index) {
    console.log('handleButtonClick:',targrt, index);
    targrt.innerHTML = this.functions[index]
  }

  handleClick(e) {
    console.log(this.functions[e.target.dataset.foo]);
    this.setState(Object.assign({},
      {
        answer: this.functions[e.target.dataset.foo]
      }
    ))
  }

  /*
  componentDidMount() {
    ReactDOM.render(
      <button>111</button>,
      document.getElementById('a')
    )
  }
          <code>
          <span className="token keyword">import</span>
          <a onClick={this.handleClick} data-foo="abc"> {this.state.answer} </a>
          <span className="token keyword">from</span>
          <span className="token string">'react'</span>
          <span className="token punctuation">;</span>
        </code>
  */

  render() {
    console.log('render');
    return (
      <div>
        <PrismCode className="language-jsx">
          {this.state.code}
        </PrismCode>
      </div>
    );
  }
}

/*
App.propTypes = {
  code: React.PropTypes.string.isRequired,
};
*/

export default App;
