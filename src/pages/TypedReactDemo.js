import React from 'react';
import Typed from 'typed.js';

class TypedReactDemo extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 120,
      loop: true

    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <h2> Hello....🎄 </h2>

        <div className="type-wrap">
          <h2>I'm 
            <span class="pl-3 span_1"
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </h2>
        </div>
      </div>
    );
  }
}

export default TypedReactDemo;