import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddProduct from '../../AddProduct/AddProduct/AddProduct'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import ManageAllProduct from '../../AddProduct/ManageAllProduct/ManageAllProduct';
import ManageAllOrder from '../../OrderPage/ManageAllOrder/ManageAllOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../LoginPage/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import PrivateRoute from '../../LoginPage/PrivateRoute/PrivateRoute';
import MyOrder from '../../OrderPage/MyOrder/MyOrder';
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const {admin,user,logout} = useAuth()
   
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar >
            </Toolbar>
            
            <Box>
            <Link style={{textDecoration:'none'}} to="/"><Button color="inherit">Back to home </Button></Link>
            <Link  style={{textDecoration:'none'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            </Box>
            {
                admin&&<Box>
                <Link  style={{textDecoration:'none'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link  style={{textDecoration:'none'}} to={`${url}/addproduct`}><Button color="inherit">Add products</Button></Link>
                <Link  style={{textDecoration:'none'}} to={`${url}/manage`}><Button color="inherit">Manage all orders</Button></Link>
                <Link  style={{textDecoration:'none'}} to={`${url}/manageproduct`}><Button color="inherit">Manage all products</Button></Link>
                <Button onClick={logout} color="inherit">Log Out</Button>
            </Box>
            }
            {
                !admin&&<Box>
                {/* <Link  style={{textDecoration:'none'}} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link  style={{textDecoration:'none'}} to={`${url}/addproduct`}><Button color="inherit">Add products</Button></Link> */}
               
                <Link style={{textDecoration:'none'}} to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
                <br/>
                <Link style={{textDecoration:'none'}} to={`${url}/myorders`}><Button color="inherit">My orders</Button></Link>
                <br/>
                <Link style={{textDecoration:'none'}} to={`${url}/addreview`}><Button color="inherit">Review</Button></Link>
                <br/>
                <Button onClick={logout} color="inherit">Log Out</Button>
            </Box>
            }
            
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                   
                    
                }}
                // style={{
                //     backgroundImage: "linear-gradient(to right,#7f8c8d,#000000)"
                // }}
//                 style={{backgroundColor:" #000000",
// backgroundImage: "linear-gradient(147deg, #000000 0%, #04619f 74%)"}}
style={{backgroundColor:"#212529"}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{}} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <PrivateRoute path={`${path}/myorders`}>
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    {/* <PrivateRoute path={`${path}/addproduct`}>
                    <AddProduct></AddProduct>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myorders`}>
                    <MakeAdmin></MakeAdmin>
                    </PrivateRoute> */}
                    <PrivateRoute path={`${path}/payment`}>
                       <Pay></Pay>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/addreview`}>
                       <AddReview></AddReview>
                    </PrivateRoute>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageAllProduct></ManageAllProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage`}>
                       <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
   
    window: PropTypes.func,
};

export default Dashboard;
