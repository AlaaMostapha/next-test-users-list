import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";

const SwitchComponent = ({checked,onChange}) => {
  return (
      <Switch
        checked={checked}
        onChange={onChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
  );
};
SwitchComponent.prototypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
export default SwitchComponent;
