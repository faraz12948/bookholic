
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Register from './pages/LoginPage/Register/Register';
import Home from './pages/HomePage/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/LoginPage/Login/Login';
import Explore from './pages/AddProduct/Explore/Explore';
import Order from './pages/OrderPage/Order/Order';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute'
import DashBoard from './pages/Dashboard/Dashboard/Dashboard';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Review from './pages/HomePage/Review/Review';
import NotFound from './pages/Shared/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Switch>
          <Route path="/register">
          <Register>
            
            </Register>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
           <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/order/:productId">
         <Order></Order>
          </PrivateRoute>
         

          <Route  path="/review">
            <Review></Review>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
         
        
          
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
            
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound path='*'></NotFound>
            
          </Route>

        </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
