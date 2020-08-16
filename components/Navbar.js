import React, { useEffect } from 'react'
import '../style.css'
import Resume from '../utils/TP-Resume.pdf';
import MeTwo from '../images/me2.JPG'
import M from 'materialize-css';
import { Spring } from "react-spring/renderprops";
import {Link} from 'react-router-dom';

export default function Navbar({portfolio, navClick}) {
    
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    })

    return (
        // Navbar Section
        <div>
        <nav className='nav-wrapper indigo lighten-1' style={{fontFamily: 'Courgette'}}>
            <div className='container'>
                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                    <i class="material-icons">menu</i>   
                </a>    

                <ul id='nav-mobile' className='left hide-on-med-and-down'>
                    <Spring
                    from={{opacity: 0, marginTop: -500}}
                    to={{opacity:1, marginTop: 0}}
                    >
                    {props => (
                    <div style={props}>
                        <li className={portfolio}><Link to='/portfolio' name='portfolio' onClick={navClick} style={{fontSize: '1.5rem'}}>Portfolio</Link></li>
                        <li><a href={Resume} style={{fontSize: '1.5rem'}}>Resume</a></li>
                        <li><a className='sidenav-trigger show-on-large' style={{fontSize: '1.5rem'}} data-target='slide-out'>Contact</a></li>
                        <li><Link to='/' name='home' onClick={navClick} style={{fontSize: '1.5rem'}}>Home</Link></li>
                    </div>
                        )}
                    </Spring>
                </ul>
            </div>
        </nav>

        <ul className='sidenav' id='mobile-links' style={{fontFamily: 'Courgette'}}>
            <li className={portfolio}><Link to='/portfolio' name='portfolio' onClick={navClick} style={{fontSize: '1.5rem'}}>Portfolio</Link></li>
            <div className='divider'></div>
            <li><a href={Resume} style={{fontSize: '1.5rem'}}>Resume</a></li>
            <div className='divider'></div>
            <li><a className='sidenav-trigger show-on-large' style={{fontSize: '1.5rem'}} data-target='slide-out'>Contact</a></li>
            <div className='divider'></div>
            <li><Link to='/' name='home' onClick={navClick} style={{fontSize: '1.5rem'}}>Home</Link></li>
        </ul>

        {/* SideNav Contact section */}
            <ul id='slide-out' className='sidenav'>
                <li><div className='user-view indigo darken-1'>
                    <img src={MeTwo} className='circle' style={{maxHeight:'10rem'}}></img>
                    <span className='white-text name'>Tyler Phothirath</span>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnJMlrbvfqSsQfvMzsqKqbdbkmVwdWPMcdjJRdVzbTgdjswLSWTQthrKKXfLFrtgbnpsq'><span className='white-text email'>tyler.phopho@gmail.com</span></a>
                </div></li>
                <li className='subheader'><a style={{fontSize:'1.5rem'}}><i className='material-icons black-text' style={{marginRight: '1rem'}}>contact_phone</i>801-946-5454</a></li>
                <li><div className="divider"></div></li>
                <li><a href='https://www.linkedin.com/in/tyler-phothirath-bb2a07194/' className='fab fa-linkedin' style={{fontSize:'2rem'}}> LinkedIn</a></li>
                <li><div className="divider"></div></li>
                <li><a href='https://github.com/tylerphopho' className='fab fa-github-square' style={{fontSize:'2rem'}}> GitHub</a></li>
                <li><div className="divider"></div></li>
            </ul>
        </div>

        

        
    )
}
