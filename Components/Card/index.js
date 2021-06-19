import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = ({ data, actions,...rest }) => {
  const classes = useStyles();
console.log('data',data,'actions')
  return (
    <Card className={classes.root} {...rest}>
      <CardContent>{data}</CardContent>
      {actions && (
        <CardActions>
          {actions?.map((action, i) => {
            return (
              <Button onClick={action.func} color="primary" key={i}>
                {action.btn}
              </Button>
            );
          })}
        </CardActions>
      )}
    </Card>
  );
};

SimpleCard.prototypes = {
  data: PropTypes.object,
  actions: PropTypes.array,
};
export default SimpleCard;
