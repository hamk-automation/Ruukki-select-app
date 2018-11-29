
import React from 'react'
import logo from '../img/logo.jpeg'
import Radium from 'radium'

const styles = {
    'img': {
        width: '18rem',
        height: '16rem',
        ':hover': {
            cursor: 'pointer',
            backgroundColor: '#f33a20',
            color: 'white'
        }
    }
}
class Header extends React.Component {

    render() {
        return (
            <div className="row" style={{ paddingTop: '0px' }}>
                <div className="col">
                    <a href="https://ruukki.com" target="_blank"><img src={logo} style={{ width: '150px' }} className="img-fluid" alt="ruukki-logo" /></a>
                </div>

                <div className="col">
                    <p className="text-right">
                        <a className="text-nowrap" target="_top" href="/boxcontrol/logoutservice?redirectUrl=apps/main/"><i className="fas fa-sign-out-alt mt-3"></i>&nbsp;Log&nbsp;in</a>
                </p>
            </div>
            </div>
        )
    }
}


export default Header
