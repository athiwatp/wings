import React from 'react';
import ReactDOM from 'react-dom';
import { PrismCode } from "react-prism";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.functions = { abc: 'React' };

    this.state = { code: "import ________ from 'react';" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.functions[e.target.dataset.foo]);
  }

  componentDidMount() {
    const me = ReactDOM.findDOMNode(this);
    console.log(me);
  }

  render() {
    return (
      <div>
        <code className="language-jsx">
          <span className="token keyword">import</span> <a onClick={this.handleClick} data-foo="abc" > ________ </a> <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span>
        </code>
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
