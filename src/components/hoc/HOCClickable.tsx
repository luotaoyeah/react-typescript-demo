import * as React from 'react';

interface HOCProps {
  handleClick: (displayName?: string) => void;
}

interface State {
}

export function clickable<TSourceProps extends {}>(WrappedComponent: React.ComponentClass<TSourceProps>): React.ComponentClass<TSourceProps & HOCProps> {
  class ClickComponent extends React.Component<TSourceProps & HOCProps, State> {
    static displayName: string = `clickable(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    constructor(props: TSourceProps & HOCProps) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.props.handleClick(WrappedComponent.displayName);
    }

    render() {
      return (
        <div
          onClick={this.handleClick}
          className="click-component"
        >
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return ClickComponent;
}