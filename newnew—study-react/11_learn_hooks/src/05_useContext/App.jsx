import React, { memo, useContext } from "react";
import { UserContext, ThemeContext } from "./context";
const App = memo(() => {
  // 使用Context
  let user = useContext(UserContext);
  let theme = useContext(ThemeContext);
  console.log(user, theme);
  return (
    <div>
      App{theme.color}
      <hr />
      {user.name}
    </div>
  );
});

export default App;
