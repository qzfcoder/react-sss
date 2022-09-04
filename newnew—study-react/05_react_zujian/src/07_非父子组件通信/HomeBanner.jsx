import ThemeContext from "./context/theme-context";
function HomeBanner() {
  return (
    <div>
      HomeBanner----
      {/* 函数式组件中使用context */}
      <ThemeContext.Consumer>
        {(value) => {
          return value.color;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default HomeBanner;
