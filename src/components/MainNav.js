import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 2) {
      history.push("/characters");
    } else if (value === 3) {
      history.push("/episodes");
    } else if (value === 4) {
      history.push("/search");
    } else if (value === 1) {
      history.push("/fav");
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
          style={{color: "white"}}
          label="home"
          icon={<HomeIcon />} />
        <BottomNavigationAction
          style={{color: "white"}}
          label="Favorites"
          icon={<FavoriteIcon />} />
        <BottomNavigationAction
         style={{color: "white"}}
         label="characters"
         icon={<PermIdentityIcon />} />
        <BottomNavigationAction
         style={{color: "white"}}
         label="Episodes"
          icon={<LocalMoviesIcon />} />
        <BottomNavigationAction
         style={{color: "white"}}
         label="search"
          icon={<SearchIcon />} />

    </BottomNavigation>
  );
}
