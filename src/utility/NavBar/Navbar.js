import './Navbar.css';
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';
import logoutAction from '../../actions/logoutAction';

class Navbar extends Component {
    componentDidUpdate(oldProps){
        if(oldProps.auth.token!==this.props.auth.token){
            this.props.openModal('closed','');
        }
    }


    render() {
        let navColor='black'
        // if(window.location.pathname !=="/"){
        //     navColor='black'
        // }
        return (
            <div className='container-fluid nav'>
                <div className='row'>
                    <nav className={navColor}>
                        <div className='nav-wrapper'>
                            <Link to="/" className='left'><img src="https://clipartcraft.com/images/cupcake-logo-transparent-background-1.png" style={{paddingLeft:'5px',paddingTop:'10px'}} width={'35px'} height={'35px'} alt="logo"/></Link>
                            <ul id="nav-mobile" className='right'>
                                <li><Link to ="/"> English (US)</Link></li>
                                <li><Link to ="/"> $ USD</Link></li>
                                <li><Link to ="/"> Become a host</Link></li>
                                <li><Link to ="/"> Help</Link></li>
                                {this.props.auth.email?
                                <>
                                <li className="login-signup">Hello {this.props.auth.email}</li>
                                <li onClick={()=>{this.props.logoutAction()}} className="login-signup">Log Out </li>
                                </>:
                                <>
                                <li onClick={()=>{this.props.openModal("open",<SignUp/>)}} className="login-signup"> SignUp</li>
                                <li onClick={()=>{this.props.openModal("open",<Login/>)}} className="login-signup"> LogIn</li>
                                </>
                                }
                                    
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal:openModal,
        logoutAction:logoutAction,
    },dispatcher)
}

function mapStateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);