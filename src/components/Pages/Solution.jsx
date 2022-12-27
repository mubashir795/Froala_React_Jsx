import React from 'react';
import { Link } from 'react-router-dom';

function Solution() {
    return (
        <>
            <section className='back-img'>
                <div className='container'>
                    <h1 className='back-img-title'>The Fastest and Most Powerful WYSIWYG HTML Editor.</h1>
                    <p className='back-img-des'>Design Beautiful Things, Innovate Creation,<br/> Collaborate Optimize and Delight yours Customers</p>
                    <div className='back-center-img'>
                        <img src={require('../images/center-img.png')} width="768" height="273"/>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='solution-row top-row'>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/CRM-Icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/WebCRM-icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                </div>
                <div className='solution-row bottom-row'>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/Learning-Icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/CRM-Icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                    <div className='solution-box'>
                        <div className='solution-img-box'>
                            <img src={require('../images/WebCRM-icon.png')} width="60" height="60"/>
                        </div>
                        <h3 className='solution-img-tilte'>Learning and<br/>Training<br/>Management<br/>System</h3>
                        <p className='solution-img-des'>Explore</p>
                    </div>
                </div>
                <h2 className='solution-img-text'>Froala Editor Puts the Power of Website<br/>Creation in Your Hands.</h2>
                <div className='plan-btn-style'>
                  <Link to='/'>
                      <a className='plan-btn'>Download</a>
                  </Link>
                </div>
            </section>
            <section className='background-clr'>
                <div className='container'>
                    <div className='solution-row'>
                        <div className='solution-text'>
                            <h2 className='background-img-text'>Don’t see the right solution?</h2>
                            <div className='plan-btn-style'>
                                <Link to='/'>
                                    <a className='plan-btn btn-clr'>Download</a>
                                </Link>
                            </div>
                        </div>
                        <div className='solution-img'>
                            <img src={require('../images/Screenshot-20.png')} width="300" height="348"/>
                        </div>
                    </div>
                </div>
            </section>
        </>             
    );
}

export default Solution;