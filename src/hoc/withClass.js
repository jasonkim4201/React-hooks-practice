import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => ( //{name: "Jason", Age: 27}
    <div className={className}>
      <WrappedComponent {...props} /> {/* name="Jason"  Age="27" */} {/* spread operator is needed to pass down props dymanically */}
    </div>
  );
};


export default withClass;