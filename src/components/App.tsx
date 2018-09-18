import * as React from "react";
import { ApiRouteChildren } from "../react-router/api/Route/children";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ApiRouteChildren />
      </div>
    );
  }
}

export default App;
