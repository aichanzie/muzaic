import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, Divider, Link, makeStyles } from "@mui/material";
import darkLogo from "../../assets/muzaic_dark.svg";
import SvgIcon from "@mui/material/SvgIcon";
import Grid from "@mui/material/Grid2";
import SearchBar from "../search/searchBar";
import {
  AccountCircleTwoTone,
  DarkModeRounded,
  LightModeRounded,
  WbSunnyRounded,
} from "@mui/icons-material";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";
import { red } from "@mui/material/colors";

interface Props {
  isDarkMode: boolean;
  onSelectTheme: () => void;
}

function NavigationBar({ isDarkMode, onSelectTheme }: Props) {
  return (
    <AppBar
      position="static"
      elevation={0}
      style={{ paddingRight: 5, paddingLeft: 5 }}
    >
      {/* <img src={darkLogo} alt="muzaic" style={{ maxHeight: 45 }} /> */}
      <Grid container spacing={0}>
        <Grid size={1}>
          <img
            src={darkLogo}
            alt="muzaic"
            style={{ height: 55, padding: "10px 5px" }}
          />
        </Grid>
        <Grid>
          <Link
            href={"/"}
            color="inherit"
            underline="none"
            variant="button"
            style={{ padding: 8, height: "100%" }}
          >
            MUSIC
          </Link>
          <Link
            href={"/"}
            color="inherit"
            underline="none"
            variant="button"
            style={{ padding: 8 }}
          >
            PODCASTS
          </Link>
          <Link
            href={"/"}
            color="inherit"
            underline="none"
            variant="button"
            style={{ padding: 8 }}
          >
            AUDIOBOOKS
          </Link>
          <Link
            href={"/"}
            color="inherit"
            underline="none"
            variant="button"
            style={{ padding: 8, lineHeight: 4.5 }}
          >
            MY LIBRARY
          </Link>
        </Grid>
        <Grid size="grow" style={{ padding: "10px 5px" }}>
          <SearchBar></SearchBar>
        </Grid>
        <Grid size="auto" sx={{ display: "inline", margin: "auto" }}>
          <Button
            variant="text"
            color="inherit"
            disableRipple
            style={{ backgroundColor: "transparent" }}
          >
            SIGN IN
          </Button>
          <Button variant="contained" color="secondary" disableRipple>
            LOG IN
          </Button>
          <IconButton disableRipple>
            <AccountCircleRounded style={{ paddingRight: 2 }} />
          </IconButton>
          <IconButton
            onClick={() => {
              onSelectTheme();
            }}
          >
            {isDarkMode ? (
              <DarkModeRounded style={{ paddingLeft: 5 }} />
            ) : (
              <LightModeRounded style={{ paddingLeft: 5 }} />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default NavigationBar;
