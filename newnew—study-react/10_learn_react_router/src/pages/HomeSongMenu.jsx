import React, { PureComponent } from "react";
import { withRouter } from "../hoc/withRouter";
export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      songMenus: [
        {
          id: "1",
          name: "华语",
        },
        {
          id: "2",
          name: "流行",
        },
        {
          id: "3",
          name: "冲冲冲",
        },
      ],
    };
  }
  NavigateToDetails(e) {
    const { navigate } = this.props.router;
    navigate("/Detail/" + e);
  }
  render() {
    const { songMenus } = this.state;
    return (
      <div>
        HomeSongMenu
        {songMenus.map((item) => {
          return (
            <li key={item.id} onClick={(e) => this.NavigateToDetails(item.id)}>
              {item.name}
            </li>
          );
        })}
      </div>
    );
  }
}

export default withRouter(HomeSongMenu);
