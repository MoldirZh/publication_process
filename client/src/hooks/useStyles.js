import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignitems: "center",
    boxSizing: "border-box",
    position: "absolute",
    width: "500px",
    height: "450px",
    left: "30%",
    top: "15%",
    background: "#FFFFFF",
    border: "2px solid #EDEDED",
    padding: "0 70px",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "200px",
    height: "100px",
  },
  buttons: {
    backgroundColor: "#6F38C5",
    color: "white",
    height: "60px",
  },
}));
