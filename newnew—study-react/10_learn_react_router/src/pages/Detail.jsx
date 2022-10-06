import React, { PureComponent } from "react";
import { withRouter } from "../hoc/withRouter";
export class Detail extends PureComponent {
  render() {
    const { router } = this.props;
    console.log(router);
    return (
      <div>
        Detail
        <br />
        id:{router.params.id}
      </div>
    );
  }
}

export default withRouter(Detail);
