export default function App() {
  return <h2>123</h2>;
}
// 这里不考虑hooks
// 通过传参来更改数据 ---- 主要是展示的作用
// 函数式组件没有生命周期，但是他也会被更新和挂载
// 他没有this关键字指向组件实例
// 没有内部状态