import React from "react";

export interface IMouseProps {
  render?: (state: IMouseState) => React.ReactNode;
}

export interface IMouseState {
  x: number;
  y: number;
}

/**  */
class Mouse extends React.Component<IMouseProps, IMouseState> {
  state: IMouseState = {
    x: 0,
    y: 0,
  };

  constructor(props: IMouseProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const vm = this;

    vm.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }

  public render(): React.ReactNode {
    const vm = this;

    return (
      <div
        style={{
          height: "400px",
          border: "1px solid #000",
          borderRadius: "3px",
          padding: "20px",
        }}
        onMouseMove={vm.handleMouseMove}
      >
        {vm.props.render ? vm.props.render(vm.state) : <p>{`[${vm.state.x}, ${vm.state.y}]`}</p>}
      </div>
    );
  }
}

export { Mouse };
