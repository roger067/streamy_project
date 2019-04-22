import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '677824703853-kkre3lr166p83fuak8vdodl2f1rl2o9d.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (inSignedIn) => {
        if(inSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="btn btn-danger h-100">
                    <i className='fas fa-spinner'></i> Processando
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="btn btn-danger h-100">Sign Out</button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="btn btn-danger h-100">
                    <i className="fab fa-google"></i> Login with Google
                </button>
            );
        }
    }

    render() {
        return (
            <li className="nav-item">
                {this.renderAuthButton()}
            </li>
        );
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
    mapStateToProps, 
    { signIn, signOut } 
)(GoogleAuth);