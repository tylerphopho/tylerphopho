import React, { Component } from 'react'
import Me from '../images/me.JPG'
import Badge from '../images/badge.png'
import M from 'materialize-css'
import { Spring, config } from 'react-spring/renderprops';
import '../style.css'

export default class Card extends Component {
    componentDidMount() {

        let dropdowns = document.querySelectorAll('.dropdown-trigger')
        M.Dropdown.init(dropdowns, {
            inDuration: 300,
            outDuration: 225,
            coverTrigger: false,
            gutter: 0,
            alignment: 'left'
        })
    }
    render() {
        return (
            <div className='container' style={{marginTop: '10rem'}}>
                <div className='card'>
                    <div className='card indigo lighten-1'>
                        <div className='card-content white-text'>
                            <Spring config={config.slow}
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            >
                                {props => (
                                <div style={props}>
                                    <span className='card-title center flow-text'><h1 style={{margin:'5rem', fontFamily:'Courgette' }}>Tyler Phothirath</h1></span>
                                </div>
                                )}
                            </Spring>
                            <div className='divider'></div>
                            <p className='center' style={{marginTop: '2rem',fontSize: '2rem', fontFamily: 'Courgette'}}>Full Stack Web-Developer</p>
                        </div>
                        <div className='card-action btn-grid'>
                            <button className='white-text waves-effect btn indigo lighten-2 modal-trigger' data-target='about-modal'>About</button>
                            <a className='white-text waves-effect btn indigo lighten-2' href='https://www.linkedin.com/in/tyler-phothirath-bb2a07194/'>LinkedIn</a>
                            <a href='https://github.com/tylerphopho' className='white-text waves-effect waves-light btn indigo lighten-2'>GitHub</a>
                        </div>
                    </div>
                </div>
    
                <div id='about-modal' className='modal' style={{marginTop: '2rem'}}>
                    <div className='modal-content'> 
                        <h3 style={{fontFamily:'Courgette'}}>About Me</h3>
                        <div className='divider white-text' style={{maxWidth: '25rem'}}></div>
                        <div className='row'>
                            <div className='col s7 push-s5'>
                                <img src={Me} alt='profile' style={{height: '20rem'}}></img>
                                <p style={{paddingTop: '4rem'}}> I received this certificate through the University of Utah Boot Camp which was a 24 week program building from the ground up to helping me develop my skills with React, MySQL, Bootstrap and more.<br/>
                                <a href='https://www.youracclaim.com/badges/72e337a6-bf3b-4a19-bf09-f35f3ca1017b'>View Certificate</a>
                                </p>
                            </div>
                            <div className='col s5 pull-s7'>
                            <p>
                            Hello my name is Tyler Phothirath, I'm a Full Stack Web-Developer.<br/>
                            Here is my Portfolio to demonstrate some of my work, I hope you enjoy!<br/><br/> A little about me, I love art (everything.. art)
                            and love to be creative. I also enjoy learning and trying new things and finding time to perfect them if I actually do enjoy it. My family and friends
                            mean everything to me and I'm always on the look out to meeting new people.  I may seem shy at first but once I get comfortable I'm very outgoing and we'd love to meet you!  
                            </p>
                        </div>
                        <div className='row'>
                            <div className='col s5 pull-s7'>
                                <img src={Badge} alt='certificate' style={{height: '20rem', paddingTop: '1rem'}}></img>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

   