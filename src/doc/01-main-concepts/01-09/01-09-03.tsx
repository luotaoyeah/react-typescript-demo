/*
 * Forms: The <textarea> Tag
 */

import * as React from "react";
import { SyntheticEvent } from "react";

/*
 * 在 HTML 中，<textarea> 标签的内容是定义在标签之间的，
 * 如：<textarea>hello</textarea>
 *
 * 在 react 中，<textarea> 标签跟 <input> 标签一样，
 * 通过 value 属性，定义它的内容；
 */

interface IProps {}

interface IState {
  note: string;
}

class C010903 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      note: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: SyntheticEvent) {
    this.setState({
      note: (e.target as HTMLTextAreaElement).value
    });
  }

  handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log(this.state.note);
  }

  public render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          NOTE：
          <textarea
            name="note"
            cols={100}
            rows={10}
            placeholder="note"
            style={{
              outline: "none",
              borderRadius: "3px"
            }}
            value={this.state.note}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export { C010903 };
