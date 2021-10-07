import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Characters from "./Pages/Characters/Characters";
import Episodes from "./Pages/Episodes/Episodes";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import { CharacterDetailContainer } from "./components/Container/CharacterDetailContainer";
import { EpisodeDetailContainer } from "./components/Container/EpisodeDetailContainer";
import Fav from "./Pages/Fav/Fav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
              <Route path="/characters" component={Characters} />
            <Route path="/fav" component={Fav} />
            <Route path="/episodes" component={Episodes} />
              <Route path="/search" component={Search} />
            <Route exact path={`/character/:id`}
                 component={CharacterDetailContainer}/>
                 <Route exact path={`/episode/:id`}
                 component={EpisodeDetailContainer}/>


          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}


export default App;
