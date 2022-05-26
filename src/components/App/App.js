import {Route, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from '../Footer/Footer';

import './App.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Header loggedIn={false}/>
                    <Main/>
                    <Footer/>
                </Route>
                <Route path="/movies">
                    <Header loggedIn={true}/>
                    <Movies/>
                    <Footer/>
                </Route>
                <Route path="/saved-movies">
                    <Header loggedIn={true}/>
                    <SavedMovies/>
                    <Footer/>
                </Route>
                <Route path="/profile">
                    <Header loggedIn={true}/>
                    <Profile/>
                </Route>
                <Route exact path="/signin">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Register/>
                </Route>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
