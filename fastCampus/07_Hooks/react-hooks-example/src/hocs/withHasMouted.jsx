import React from "react";

const withHasMouted = (Component) => {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
    }

    componentDidMount() {
      this.setState({ hasMounted: true });
    }
  }

  NewComponent.displayName = `withHasMouted(${Component.name})`;

  return NewComponent;
};

export default withHasMouted;
