import React, { Component } from "react";
import axios from "axios";

import MainProductList from "./MainProductList";
import MainBanner from "./MainBanner";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      productList: [],
    };
  }

  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      console.log(res);
      this.setState({
        banner: res.data.data.banner.list,
        productList: res.data.data.recommend.list,
      });
    });
  }

  render() {
    const { banner, productList } = this.state;
    return (
      <div>
        Main
        <MainBanner banners={banner}></MainBanner>
        <MainProductList productList={productList}></MainProductList>
      </div>
    );
  }
}
