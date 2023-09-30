import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { blue } from "@mui/material/colors";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "80%"
});

export default function BasicExample1(props) {
  const { messages } = props;
  //console.log(props)
  return (
    <>
      {messages.map((message, idx) => {
        return (
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              marginTop: 5,
              marginBottom: 5,
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2} key={idx}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img  alt="complex" src="https://www.shutterstock.com/shutterstock/photos/1676159821/display_1500/stock-photo-beautiful-african-woman-dietologist-holding-apple-in-her-hand-recommending-fresh-fruits-posing-at-1676159821.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      color="blue"
                    >
                      Dr. {message}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Dietitian
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      10 years experience overall
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cannaught Place, Dehradun
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    ₹300 consulatation fee at clinic
                    </Typography>
                    
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" , color: "green"}} variant="body2">
                      Book Appointment
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}

