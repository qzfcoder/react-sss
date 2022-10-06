import React, { PureComponent } from "react";
import { withRouter } from "../hoc/withRouter";
export class User extends PureComponent {
  render() {
    const { router } = this.props;
    const { query } = router;
    return (
      <div>
        User ---name:{query.name} == age: {query.age}
      </div>
    );
  }
}

export default withRouter(User);
