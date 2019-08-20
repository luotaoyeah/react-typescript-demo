/*
 * https://reactjs.org/docs/forms.html#the-textarea-tag
 */

import React from 'react';
import { Button, message } from 'antd';

/*
 * 在 HTML 中,  <textarea> 标签的内容是定义在标签之间的, 如: <textarea>hello</textarea>
 * 在 react 中, <textarea> 标签跟 <input> 标签一样, 通过 value 属性来定义它的文本内容
 */

interface IState {
  note: string;
}

class C010903 extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      note: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(e: React.SyntheticEvent) {
    this.setState({
      note: (e.target as HTMLTextAreaElement).value,
    });
  }

  public handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const { note } = this.state;
    message.info(note);
  }

  public render() {
    const { note } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <textarea
            name="note"
            rows={3}
            style={{
              width: '100%',
              borderRadius: '3px',
              outline: 'none',
            }}
            value={note}
            onChange={this.handleChange}
          />
        </div>

        <Button htmlType="submit">SUBMIT</Button>
      </form>
    );
  }
}

export { C010903 };
