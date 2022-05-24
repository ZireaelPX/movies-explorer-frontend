import { Route, Switch } from 'react-router-dom';
// import Header from '../Header/Header';
import Main from '../Main/Main';
import PageNotFound from "../PageNotFound/PageNotFound";
// import Footer from '../Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                {/*<Header loggedIn={false} />*/}
                <Main />
                {/*<Footer />*/}
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
