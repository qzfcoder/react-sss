import React, { PureComponent } from "react";
import _ from "classnames";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isbbb: true,
      isccc: true,
    };
  }
  render() {
    const { isbbb, isccc } = this.state;
    const classList = ["aaa"];
    if (isbbb) classList.push("bbb");
    if (isccc) classList.push("ccc");
    const classNames = classList.join(" ");
    return (
      <div>
        <h2 className={`aaa ${isbbb ? "bbb" : ""} ${isccc ? "ccc" : ""}`}></h2>
        <h2 className={classNames}>121</h2>
        <h2 className={_("aaa", { bbb: isbbb, ccc: isccc })}>121</h2>
      </div>
    );
  }
}

export default App;
