import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'

const NavBar=(props)=>{
    const { auth } = props;
    return(
        <nav className="nav-wrapper grey draken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>
{
    // console.log(state);
    return{
        auth: state.firebase.auth

    }
}


export default connect(mapStateToProps) (NavBar)