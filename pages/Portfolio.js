import React from 'react';
import '../style.css'
import Fitness from '../images/fitness-tracker.PNG';
import Event from '../images/event-finder-img.png';
import Dayplanner from '../images/day-planner.PNG';
import Weather from '../images/weather-dashboard.PNG';

export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col s6 m6'>
                    <div className='card'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' alt='fitness-tracker' src={Fitness}/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Fitness Tracker</span>
                            <p><a href='https://secure-headland-44408.herokuapp.com/?id=5f29820b6120f200171ec972'>View Site</a></p>
                        </div>
                        <div className='card-reveal'>
                            <span className='card-title grey-text text-darken-4'><b>Fitness Tracker</b><i class="material-icons right">close</i></span>
                            <p className='col s6'>This is an application using MongoDB Database to add or track previous workouts.</p>
                            <p className='col s6'><b>Tools:</b> MongoDB, Express, HTML, CSS, Javascript</p>
                        </div>
                    </div>
                </div>
                <div className='col s6 m6'>
                    <div className='card'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' alt='event-finder' src={Event} style={{maxHeight: '19.9rem'}}/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Event Finder</span>
                            <p><a href='https://tylerphopho.github.io/event-finder/'>View Site</a></p>
                        </div>
                        <div className='card-reveal'>
                            <span className='card-title grey-text text-darken-4'><b>Event Finder</b><i class="material-icons right">close</i></span>
                            <p className='col s6'>This was a group project utilizing TicketMaster API which allows users to input a desired event and find it in the nearest location.</p>
                            <p className='col s6'><b>Tools:</b> TicketMaster API, Materialize-CSS Framework, jQuery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col s6 m6'>
                    <div className='card'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' alt='day-planner' src={Dayplanner} style={{maxHeight: '20rem'}}/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Day Planner</span>
                            <p><a href='https://tylerphopho.github.io/weekly-day-planner/'>View Site</a></p>
                        </div>
                        <div className='card-reveal'>
                            <span className='card-title grey-text text-darken-4'><b>Day Planner</b><i class="material-icons right">close</i></span>
                            <p className='col s6'>My day planner application allows users to input daily tasks for work with the time ranges from 9:00AM to 5:00PM.
                            The app also saves the notes with local storage.
                            </p>
                            <p className='col s6'><b>Tools:</b> Javascript, jQuery, Moment.js, Bootstrap CSS Framework</p>
                        </div>
                    </div>
                </div>
                <div className='col s6 m6'>
                    <div className='card'>
                        <div className='card-image waves-effect waves-block waves-light'>
                            <img className='activator' alt='weather-dash' src={Weather}/>
                        </div>
                        <div className='card-content'>
                            <span className='card-title activator grey-text text-darken-4'>Weather Dashboard</span>
                            <p><a href='https://secure-headland-44408.herokuapp.com/?id=5f29820b6120f200171ec972'>View Site</a></p>
                        </div>
                        <div className='card-reveal'>
                            <span className='card-title grey-text text-darken-4'><b>Weather Dashboard</b><i class="material-icons right">close</i></span>
                            <p className='col s6'>A basic weather app that dynamically displays cards for the weekly forecast with the user inputing their location.</p>
                            <p className='col s6'><b>Tools:</b> OpenWeatherMap API, jQuery, Bootstrap CSS Framework.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}