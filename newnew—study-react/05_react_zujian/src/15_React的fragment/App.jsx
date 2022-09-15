import React, { PureComponent, Fragment } from "react";

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      section: [
        { title: "title", content: "title" },
        { title: "asd", content: "asd" },
        { title: "fff", content: "fff" },
      ],
    };
  }
  render() {
    const { section } = this.state;
    return (
      <Fragment>
        <h2>h2-app</h2>
        <p>content</p>
        <hr />
        {section.map((item, index) => {
          return (
            <Fragment key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

export default App;
