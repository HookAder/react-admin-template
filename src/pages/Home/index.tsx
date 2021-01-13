import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  List,Divider,ListItem,ListItemIcon,
    ListItemText,  LinearProgress
} from '@material-ui/core';
import ExitToApp from "@material-ui/icons/ExitToApp";
import { confirmAlert } from "react-confirm-alert";
import { selectorStore } from "./homeSlice";
import { actionExitLogin } from "../Login/loginSlice";
import Header from "./components/Header";
import Main from "../Main";
import Data from "../Data";
import Setting from "../Setting";
import About from "../About";
import config from "../../config.json";
import "./styles.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "flex",
    },
    root1: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 0,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

const Home = (props: any) => {
  const classes = useStyles();
  const state = useSelector(selectorStore);
  const dispatch = useDispatch();

  const exitToLogin = (): void => {
    confirmAlert({
      title: config.author,
      message: "您确定退出吗?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(actionExitLogin());
            props.history.replace("/login");
          },
        },
        {
          label: "No",
          onClick: () => {
            return false;
          },
        },
      ],
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title={config.site} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left">
        <div className={classes.toolbar} style={{ backgroundColor: "#333" }}>
          <h2 style={{ color: "#fff", textAlign: "center" }}>
            {config.author}
          </h2>
        </div>
        <Divider />
        <List>
          {state.drawerList.map((item: any, index: number) => (
            <ListItem
              button
              key={index}
              onClick={() => props.history.push(item.to)}>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
          <ListItem
            button
            style={{ color: "red" }}
            onClick={() => exitToLogin()}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="退出" />
          </ListItem>
        </List>
        <div className={classes.root1}>
          <LinearProgress />
          <LinearProgress color="secondary" />
        </div>
        {/* 分割线 */}
        <Divider />
      </Drawer>

      <div className="content">
        <Switch>
          <Route path="/home/main" component={Main} />
          <Route path="/home/data" component={Data} />
          <Route path="/home/setting" component={Setting} />
          <Route path="/home/about" component={About} />
          <Redirect from="/home" to="/home/main" />
        </Switch>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} style={{marginTop: 50}}>
          
        </div>
      </main>
    </div>
  );
};

export default Home;
