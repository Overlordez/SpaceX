import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component{
    state = {
        burgerOpen: false
    }

    toggleMenu() {
        this.setState({ burgerOpen: !this.state.burgerOpen })
    }
    render () {
    return (
        <React.Fragment>
            <header className="head">
                <a href="/">
                <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/UNESCO_logo_white.png/744px-UNESCO_logo_white.png" height="150" alt="..." /> 
                </div>
                </a>

                <div className="navig">
                <ul id="menu">
                   <Link to="/planets"><li>Planets</li> </Link> 
                   <Link to="/galaxy"><li>Galaxy</li> </Link> 
                   <Link to="/aboutus"><li>About us</li> </Link> 
                   <Link to="/"><li>Project</li> </Link> 
                </ul>
                </div>


                <div className='burger'>
                        <div className={this.state.burgerOpen ? 'open' : ''} onClick={() => this.toggleMenu()}>

                            <div className="nav">
                                <a id="trigger" className={this.state.burgerOpen ? 'menu-trigger type7 active' : 'menu-trigger type7'}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                   
                                </a>
                            </div>
                            {this.state.burgerOpen ? <ul id="content" className="show">
                                <li onClick={() => this.toggleMenu()} > <Link to="/">Planets</Link></li>
                                <li onClick={() => this.toggleMenu()}> <Link to="/"> Galaxy </Link></li>
                                <li onClick={() => this.toggleMenu()}> <Link to="/">About us</Link></li>
                                <li onClick={() => this.toggleMenu()}> <Link to="/">Project</Link></li>
                            </ul> : ''}
                        </div>
                    </div>
            </header>
        </React.Fragment>
    )
}
}

export default Nav;