import Image from "next/image";
import styles from "./page.module.css";
import logoImg from "../../public/pemberton-landscaping-logo.png";
import EmailIconFilled from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={logoImg}
            alt="Pemberton Landscaping Logo"
            width={200}
            height={215}
            unoptimized
            priority
          />
        </div>
        <p>Landscaping installs, construction, renovations and maintenance from Pemberton and Whistler.</p> 
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} text>
            <Button variant="outline" href="tel:6049618558">
              <PhoneIcon fontSize="large"/>
            </Button>
          </Grid>
        </Grid>
      </main>
  );
}
