import './App.css';
import firebase, { FirebaseContext } from './firebase'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import useAuth from './authentication/useAuth'
import Login from './authentication/Login'
import ForgotPassword from './authentication/ForgotPassword'
import Home from './components/Home'

function App() {

  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase}}>
        <div className="app-container">
          <div className="route-container">
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/home' />} />
              <Route path='/home' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/forgotpassword' component={ForgotPassword} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
