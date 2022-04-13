import React from 'react'
import { makeStyles } from "@mui/styles";
import TopBar from './TopBar'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));
const Layouts = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TopBar />
        <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layouts