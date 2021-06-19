import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const Input = ({ id, name, label, variant, error, helperText ,...rest }) => {
  return (
    <>
      <TextField
        id={id}
        name={name}
        variant={variant}
        label={label}
        error={error}
        helperText={helperText}
        fullWidth
        {...rest}
      />
    </>
  );
};
Input.prototypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  error :PropTypes.bool,
  helperText: PropTypes.string
};
export default Input;
