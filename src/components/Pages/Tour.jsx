import React from 'react';
import { Link } from 'react-router-dom';

function Tour() {
    return (
        <>
            <section className='uploader-section'>
                <div className='container uploader-box'>
                    <div className='uploader-row'>
                        <div className='tour-row-1'>
                            <h1 className='main-heading'>Try Froala Editor</h1>
                            <p className='tour-des'>Start your trial today and receive 30 days of FREE technical support to get you started.</p>
                            <p className='text-bold'>Ranked Top WYSIWYG Editor 3 years in a row!</p>
                            <div className='tour-images'>
                                <div className='img-Spring'>
                                    <img src={require('../images/G2-Spring.png')} />
                                </div>
                                <div className='img-Spring'>
                                    <img src={require('../images/G2-Spring.png')} />
                                </div>
                                <div className='img-Spring'>
                                    <img src={require('../images/G2-Spring.png')} />
                                </div>
                                <div className='img-Spring'>
                                    <img src={require('../images/G2-Spring.png')} />
                                </div>
                            </div>
                            <p className='tour-des'>Here are some benefits you'll get from using Froala WYSIWYG Editor Trial:</p>
                            <ul className='download-quick-links'>
                                <li>30 days of Technical Support</li>
                                <li>Supports 15+ Tech Stacks</li>
                                <li>Easy to Extend</li>
                                <li>Out of the Box Plugins</li>
                            </ul>
                            <p className='editor-des clr-blue'>Wait no more - just fill out the form to start using the Froala Editor for FREE!</p>
                        </div>
                        <div className='tour-row-2'>
                            <form>
                                <label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="First Name*" />
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Last Name" />
                                    <select id="field5" required="" name="Country" class="form-control" autocomplete="nope">
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                    </select>
                                    <p>Note: By registering, you confirm that you agree to the processing of your personal data by Froala, Inc. - Froala as described in the Privacy Statement. Froala, Inc. - Froala is part of the Idera group and may share your information with its parent company Idera, Inc., and its affiliates. For further details on how your data is used, stored, and shared, please review our Privacy Statement.</p>
                                    <div className='sencha_button'>
                                        <Link to='/sign-up' className='btn-explore'>
                                            <a className='btn-onliline-ex'>Download</a>
                                        </Link>
                                    </div>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <p className='text-small'><a  href="#">Customize before downloading</a> | <a  href="#">Quick Start Guide</a></p>
                <p className='text-small top-space'>Please read the<a  href="#">License Agreement</a> before using our rich text editor</p>
            </section>
            <section className='uploader-section'>
                <div className='container uploader-box'>
                    <h1 className='thousands-heading tour-space'>Thousands Have Chosen Froala</h1>
                    <div className='discover-block'>
                        <div className='discover-card'>
                            <p className='bounce-des'>I just want to complement you all with an excellent piece of code! There are plenty free WYSIWYG editors around, but I just love Froala! It is easy to implement, has enough features, well coded and updated when needed. Good job you all!</p>
                            <p className='bounce-des'>— Dave Reedijk</p>
                        </div>
                        <div className='discover-card'>
                            <p className='bounce-des'>We love all the recent updates. One of our customer JUST ASKED about a video upload option and we look like rockstars 🙂 Amazing work! Your happy customer,</p>
                            <p className='bounce-des'>— Marybeth Alexander, CEO at</p>
                        </div>
                    </div>
                    <div className='plan-btn-style'>
                        <Link to='/'>
                            <a className='plan-btn'>See More</a>
                        </Link>
                    </div>
                    <div className='spring-images'>
                        <div className='comapnies-img'>
                            <img src={require('../images/samsung.png')} width="75" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/apple.png')} width="25" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/ibm.png')} width="62" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/amazon.png')} width="124" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/ebay.png')} width="62" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/intel.png')} width="38" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/netflix.png')} width="88" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/cisco.png')} width="44" height="25"/>
                        </div>
                        <div className='comapnies-img'>
                            <img src={require('../images/thomson.png')} width="107" height="25"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Tour;