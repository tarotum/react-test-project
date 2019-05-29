import React from "react";
import ToogleContext from "../ToogleContext.js";

const ToogleList = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.set = value => {
        this.setState(() => ({
          isOpen: value
        }));
      };

      this.state = {
        isOpen: false,
        set: this.set
      };
    }

    render() {
      return (
        <ToogleContext.Provider value={this.state}>
          <Component {...this.props} isOpen={this.state.isOpen} />
        </ToogleContext.Provider>
      );
    }
  };
};

export default ToogleList;
