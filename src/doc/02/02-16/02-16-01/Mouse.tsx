import React from "react";

interface IProps {
  render?: (state: IState) => React.ReactNode;
}

interface IState {
  x: number;
  y: number;
}

/**  */
class Mouse extends React.Component<IProps, IState> {
  state: IState = {
    x: 0,
    y: 0
  };

  constructor(props: IProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const vm = this;

    vm.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render(): React.ReactNode {
    const vm = this;

    return (
      <div
        style={{
          height: "400px",
          border: "1px solid #000",
          borderRadius: "3px",
          padding: "20px"
        }}
        onMouseMove={vm.handleMouseMove}
      >
        {vm.props.render ? (
          vm.props.render(vm.state)
        ) : (
          <p>{`[${vm.state.x}, ${vm.state.y}]`}</p>
        )}
      </div>
    );
  }
}

export { Mouse };
