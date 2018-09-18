import * as React from "react";
import { ApiRouteRender } from "../react-router/api/Route/render";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ApiRouteRender />
      </div>
    );
  }
}

export default App;
