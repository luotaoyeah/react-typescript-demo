/*
 * API
 *     <Route>
 *         children
 */

import * as React from "react";
import { Route, RouteComponentProps } from "react-router";
import { Button, Divider } from "antd";
import { Link, LinkProps } from "react-router-dom";

/*
 * 使用 RouteProps.children 可以实现个性化的导航链接，
 * 根据当前地址是否匹配，设置不同的样式；
 */
class MyLink extends React.Component<LinkProps> {
  public render() {
    const { to } = this.props;
    return (
      <Route path={to as any}>
        {({ match }: RouteComponentProps) => {
          return (
            <Button type={match ? "primary" : "default"}>
              <Link {...this.props} />
            </Button>
          );
        }}
      </Route>
    );
  }
}

/**  */
class ApiRouteChildren extends React.Component {
  render01(props: RouteComponentProps) {
    return <Button>{props.match ? "MATCH" : "NOT MATCH"}</Button>;
  }

  render02(props: RouteComponentProps) {
    return <Button>RENDER</Button>;
  }

  public render() {
    return (
      <div>
        <MyLink to={"/a"}>a</MyLink>
        <Divider />
        {/*
         * RouteProps.children 和 RouteProps.render 类似，
         * 区别在于：
         *     对于 render，当路径不匹配时，不会渲染组件；
         *     对于 children，当路径不匹配时，也会渲染组件，此时的 match 为 null，
         *         因此可以根据是否匹配，渲染不同的组件；
         */}
        <Route path={"/a"} children={this.render01} />
        <Route path={"/a"} render={this.render02} />
      </div>
    );
  }
}

export { ApiRouteChildren };
