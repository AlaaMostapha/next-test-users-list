import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Btn = props => {
  const { content, ...rest } = props;
  return (
    <Button variant="contained" color="primary" {...rest}>
      {content}
    </Button>
  );
};
Btn.prototypes = {
  content: PropTypes.string.isRequired,
  rest: PropTypes.object
};

export default Btn;
