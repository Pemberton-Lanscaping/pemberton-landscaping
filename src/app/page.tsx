import Image from "next/image";
import styles from "./page.module.css";
import logoImg from "../../public/pemberton-landscaping-logo.png";
import EmailIconFilled from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { ThemeProvider } from '@mui/material/styles';
import {darkTheme, lightTheme} from './theme';

export default function Home() {

  return (
    <ThemeProvider theme={lightTheme}>
      <main className={styles.main}>
        <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Image
            className={styles.logo}
            src={logoImg}
            alt="Pemberton Landscaping Logo"
            width={200}
            height={215}
            unoptimized
            priority
          />
          <ul style={{listStyleType: "none", paddingInlineStart: "0px"}}>
              <li><h4>Garden installs</h4></li>
              <li><h4>Renovations</h4></li>
              <li><h4>Maintenance</h4></li>
              <li><h4>Patios</h4></li>
              <li><h4>Hardscaping</h4></li>
          </ul>
        </Grid>

        <Paper elevation={0} sx={{position: 'fixed', bottom: 0, left: 0, right: 0, padding: 3}}>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Button variant="contained" href="tel:6049618558">
                <PhoneIcon fontSize="large"/>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </ThemeProvider>
  );
}
