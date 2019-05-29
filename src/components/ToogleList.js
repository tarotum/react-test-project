import React from "react";
import ToogleContext from "../ToogleContext.js";

const ToogleList = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.toogle = () => {
        this.setState(state => ({
          isOpen: !state.isOpen
        }));
      };

      this.state = {
        isOpen: false,
        toogle: this.toogle
      };
    }

    render() {
      return (
        <ToogleContext.Provider value={this.state}>
          <Component {...this.props} />
        </ToogleContext.Provider>
      );
    }
  };
};

export default ToogleList;
