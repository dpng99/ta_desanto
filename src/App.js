import './App.css';
import Login from './Page/Login';
import {AuthProvider} from './Handler/LoginHandler';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import SignUp from './Page/SignUp';
import Dashboard from './Page/Dashboard';
import PrivateRouter from './Handler/PrivateRouter';
import AddData from './Page/AddData';

function App() {
  return (
    <>
<Router>
<AuthProvider>
<Switch>
    <PrivateRouter exact path='/' component={Dashboard}/>
    <PrivateRouter path='/adddata' component={AddData}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={SignUp}/>
    </Switch>
  </AuthProvider>
  </Router>
  </>
  );
}

export default App;
