import React from 'react';
import { Link } from 'react-router-dom';

function Sencha() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>GRUI by Sencha: High-performance, feature-rich<br/> grid for react applications</h1>
                </div>
            </div>
            <section className='container'>
                <div className='ultra-section'>
                    <div className='sencha-text'>
                        <p className='sencha-title'>Quick integration</p>
                        <p className='sencha-title'>Easy customization</p>
                        <p className='sencha-title'>Custom data loading</p>
                        <p className='sencha-title'>Handles massive amount of data</p>
                        <p className='sencha-title'>No additional plugins required</p>
                        <p className='sencha-title'>Smaller footprint/payload than other grid solutions</p>
                        <div className='sencha_button'>
                            <Link to='/sign-up' className='btn-explore'>
                                <a className='btn-onliline-ex'>Start Trial</a>
                            </Link>
                            <Link to='/sign-up' className='btn-download'>
                                <a className='btn-onliline-ex'>Open Sandbox</a>
                            </Link>
                        </div>
                    </div>
                    <div className='ultra-img'>
                        <img src={require('../images/banner_1.png')} width="445" height="409" />
                    </div>
                </div>
            </section>
            <div className='section'>
                <h1 className='main-heading'>All the power of Sencha grid with the ease of React</h1>
                <p className='main-des'>Mission critical apps rely on the performance of their data grid components. With custom layouts and simple<br/> integration with React, GRUI by Sencha renders unparalleled performance to enterprise applications.</p>
            </div>
            <section className='bg-color'>
                <div className='container'>
                    <h1 className='main-heading'>GRUI – Sencha Grid for React User Interfaces</h1>
                    <div className='feature-img'>
                        <Link to='/'>
                        <img src={require('../images/Group-201.png')} width="936" height="311"/>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='main-heading'>Key Features</h1>
                <div className='sencha-section'>
                    <div className='sencha-inline-heading'>
                        <p className='sencha-edit-title'>Virtual Columns</p>
                        <p className='sencha-text-inline'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                    </div>
                    <div className='sencha-img ProductCalloutIMG'>
                        <img src={require('../images/VirtualColumns.gif')} width="532" height="255" />
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='sencha-section top-space'>
                        <div className='sencha-img ProductCalloutIMG top-space'>
                            <img src={require('../images/VirtualColumns.gif')} width="532" height="255" />
                        </div>
                        <div className='sencha-inline-heading bg-section'>
                            <p className='sencha-edit-title top-space'>Infinite Scrolling</p>
                            <p className='sencha-text-inline bg-text'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='sencha-section top-space'>
                    <div className='sencha-inline-heading'>
                        <p className='sencha-edit-title'>Slider Paging Toolbar</p>
                        <p className='sencha-text-inline'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                    </div>
                    <div className='sencha-img ProductCalloutIMG'>
                        <img src={require('../images/VirtualColumns.gif')} width="532" height="255" />
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='sencha-section top-space'>
                        <div className='sencha-img ProductCalloutIMG top-space'>
                            <img src={require('../images/VirtualColumns.gif')} width="532" height="255" />
                        </div>
                        <div className='sencha-inline-heading bg-section'>
                            <p className='sencha-edit-title top-space'>Column Drag and Drop</p>
                            <p className='sencha-text-inline bg-text'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='sencha-section top-space'>
                    <div className='sencha-inline-heading'>
                        <p className='sencha-edit-title'>Column Editors</p>
                        <p className='sencha-text-inline'>Virtualized rendering isn’t just for rows with GRUI Configure an unlimited number of columns; GRUI will only render the visible columns</p>
                    </div>
                    <div className='sencha-img ProductCalloutIMG'>
                        <img src={require('../images/VirtualColumns.gif')} width="532" height="255" />
                    </div>
                </div>
            </section>
            <section class="container">
                <h1 className='main-heading'>GRUI Pricing – simple, transparent, per developer pricing for all of your products/projects</h1>
                <div className='sencha-section block-pricing-inner '>
                    <div className='block-inner'>
                        <p className='price-box-title'>FREE</p>
                        <div className='pricing-block-inner'>
                            <ul>
                                <li>Unlimited end users</li>
                                <li>Unlmited products</li>
                                <li>Includes apps in production</li>
                                <li>Includes internal apps</li>
                                <li>Perpetual license</li>
                                <li><b>Attribution watermark required</b></li>
                                <li>12 months of updates & technical support</li>
                                <li>Optional maintenance – 70% discount</li>
                            </ul>
                            <Link to='/'>
                                <a className='trial-btn'>Start Trial</a>
                            </Link>
                        </div>
                    </div>
                    <div className='block-inner'>
                        <p className='price-box-title'>$499</p>
                        <div className='pricing-block-inner'>
                            <ul>
                                <li>Unlimited end users</li>
                                <li>Unlmited products</li>
                                <li>Includes apps in production</li>
                                <li>Includes internal apps</li>
                                <li>Perpetual license</li>
                                <li>Attribution watermark required</li>
                                <li>12 months of updates & technical support</li>
                                <li>Optional maintenance – 70% discount</li>
                            </ul>
                            <Link to='/'>
                                <a className='trial-btn'>Start Trial</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row-center'>
                    <div className='inline-tilte-head'>
                        <h2 className='main-heading'>Find a plan that's right for you!</h2>
                    </div>
                    <div className='img-inline-btn'>
                        <Link to='/'>
                        <a className='plan-btn'>See Our Plans</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>             
    );
}

export default Sencha;