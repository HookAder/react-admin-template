import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ToastContainer, toast } from "react-toastify";
import { site } from '../../../../config.json';
import {
  actionChangeUser,
  actionChangePass,
  actionLogin,
  selectorStore,
} from "../../loginSlice";
import config from "../../../../config.json";
import "./styles.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {site}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// interface Props {
//   // onLogin(username: string, password: string): string;
//   onLogin?: (username: string, password: string) => string;
// }

const UserLogin: React.FC = () => {
  const classes = useStyles();
  const state = useSelector(selectorStore);
  const dispatch = useDispatch();

  const handleLogin = () => {
    toast.success("😊登录成功,请稍后", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
    // 延时1500
    setTimeout(() => {
      dispatch(actionLogin());
    }, 1500);
  };

  // 没登陆
  if (!state.isLogin) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={state.username}
              onChange={(e: any) =>
                dispatch(actionChangeUser({ value: e.target.value }))
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={(e: any) =>
                dispatch(actionChangePass({ value: e.target.value }))
              }
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleLogin()}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <span>欢迎您来到{config.site}系统</span>
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"前往注册"}
                </Link> */}
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        <ToastContainer />
      </Container>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default UserLogin;
