/*
 * Forms: The <textarea> Tag
 */

import React, { SyntheticEvent } from 'react';

/*
 * 在 HTML 中，<textarea> 标签的内容是定义在标签之间的，
 * 如：<textarea>hello</textarea>
 *
 * 在 react 中，<textarea> 标签跟 <input> 标签一样，
 * 通过 value 属性，定义它的内容；
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

  public handleChange(e: SyntheticEvent) {
    this.setState({
      note: (e.target as HTMLTextAreaElement).value,
    });
  }

  public handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const { note } = this.state;
    console.log(note);
  }

  public render() {
    const { note } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label>
          NOTE：
          <textarea
            name="note"
            cols={100}
            rows={10}
            placeholder="note"
            style={{
              outline: 'none',
              borderRadius: '3px',
            }}
            value={note}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export { C010903 };
