import * as React from "react";
import { ApiRouteComponent } from "../react-router/api/Route/component";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ApiRouteComponent />
      </div>
    );
  }
}

export default App;
