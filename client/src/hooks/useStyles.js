import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignitems: "center",
    boxSizing: "border-box",
    position: "absolute",
    width: "700px",
    height: "650px",
    left: "25%",
    right: "20%",
    top: "15%",
    bottom: "5%",
    background: "#FFFFFF",
    border: "3px solid #EDEDED",
    paddingLeft: "70px",
    paddingRight: "70px",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignitems: "center",
    justifycontent: theme.spacing(10),
    left: "5%",
    right: "5%",
    width: "350px",
    height: "300px",
  },
  buttons: {
    backgroundColor: "#6F38C5",
    color: "white",
    height: "60px",
    borderRadius: "15.08px",
  },
}));
