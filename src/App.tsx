import * as React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Basic from './components/react-router/basic';
import UrlParameter from './components/react-router/url-parameter';

interface Props {

}

interface State {
  time: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      },
      1000
    );
  }

  render() {
    return (
      <div>
        <div className="Border">{this.state.time}</div>
        <hr/>
        <Router>
          <div>
            <ol
              style={
                {
                  listStyle: 'initial'
                }
              }
            >
              <li><Link to="/basic">{Basic.name}</Link></li>
              <li><Link to="/url-parameter">{UrlParameter.name}</Link></li>
            </ol>
            <hr/>

            <Route
              path="/basic"
              component={Basic}
            />
            <Route
              path="/url-parameter"
              component={UrlParameter}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
