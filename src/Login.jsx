import { Button, Grid, Typography } from "@mui/material";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from './assets/backgroundLogin.png'
import logo from './assets/logo.png'
import EastIcon from "@mui/icons-material/East";
const  Login=()=>{
    const navigate = useNavigate();
    const { oktaAuth, authState } = useOktaAuth();
  
    useEffect(() => {
      if (authState?.isAuthenticated) {
        navigate("/");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleLogin = () => {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      );
      oktaAuth.setOriginalUri(originalUri);
      oktaAuth.signInWithRedirect();
    };
    return(
        <React.Fragment>
        <Grid
          style={{
            height: "100vh",
            width: "100vw",
            position: "relative",
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <Grid
            style={{
              height: "100%",
              width: "100%",
              padding: 80,
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                flexDirection: "column",
                height: "100%",
                width: "100%",
              }}
            >
              <Grid item>
                <img src={logo} alt="logo" />
              </Grid>
              <Grid item>
                <Typography
                  style={{ color: "#fff", fontSize: 32, fontWeight: 200 }}
                >
                  Login to
                </Typography>
                <Typography
                  style={{ color: "#fff", fontSize: 32, fontWeight: 500 }}
                >
                  Ella Authoring Suite
                </Typography>
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  style={{
                    marginTop: 10,
                    backgroundColor: "#f9c747",
                    width: 125,
                    padding: 7,
                    color: "#11356b",
                    boxShadow: "4px 10px 20px -10px rgba(0,0,0,0.75)",
                  }}
                  elevation={5}
                  endIcon={<EastIcon />}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}

export default Login