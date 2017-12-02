import * as React from 'react';
import {
  Alert,
  Button,
  Form,
  Icon,
  Input
} from 'antd';
import { Prompt } from 'react-router-dom';

interface Props {
}

interface State {
  isBlocking: boolean;
  username: string;
}

export class FormPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isBlocking: false,
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    this.setState({
      username: '',
      isBlocking: false
    });
  }

  handleUsernameChange(e: React.SyntheticEvent<HTMLInputElement>) {
    const username = (e.target as HTMLInputElement).value;
    this.setState({
      username,
      isBlocking: !!(username && username.length > 0)
    });
  }

  render() {
    return (
      <div>
        <Prompt
          when={this.state.isBlocking}
          message={() => (`Sure to leave ?`)}
        />
        <Alert
          message={this.state.isBlocking ? 'BLOCKING' : 'NOT BLOCKING'}
          type={this.state.isBlocking ? 'error' : 'success'}
        />
        <Form
          layout="inline"
          onSubmit={this.handleSubmit}
        >
          <Form.Item>
            <Input
              value={this.state.username}
              placeholder="username"
              prefix={<Icon type="user"/>}
              onChange={this.handleUsernameChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>);
  }
}