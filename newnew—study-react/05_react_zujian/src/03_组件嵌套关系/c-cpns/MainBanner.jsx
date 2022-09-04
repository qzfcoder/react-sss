import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MainBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, banners } = this.props;
    console.log(banners);

    return (
      <div>
        MainBanner----------{title}
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
};
// 给默认值
MainBanner.defaultProps = {
  title: "gg",
};
