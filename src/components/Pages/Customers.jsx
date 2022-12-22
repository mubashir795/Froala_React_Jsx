import React from 'react';
import { Link } from 'react-router-dom';

function Customers() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>Successful Customers</h1>
                    <p className='text-bold'>Used by customers ranging from small businesses to Fortune 100</p>
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
                    <div className='box-text'>
                        <img src={require('../images/unbounce-square.png')} width="44" height="44"/>
                        <p className='edit-des'>"Thanks for making web based text editing great again."</p>
                        <div className='btn-onbounce'>
                            <Link to='/'>
                                <a className='plan-btn'>Read Story</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className='container'>
                <h1 className='main-heading'>Discover how customers succeed.</h1>
                <div className='discover-block'>
                    <div className='discover-card'>
                        <img src={require('../images/close.io.jpg')} width="56" height="56"/>
                        <p className='edit-title'>Don't reinvent the wheel.</p>
                        <p className='bounce-des'>Close.io deals with everyday seamless emails and Froala WYSIWYG HTML editor is key in making that happen.</p>
                        <div className='btn-onbounce'>
                            <Link to='/'>
                                <a className='plan-btn'>Read Story</a>
                            </Link>
                        </div>
                    </div>
                    <div className='discover-card'>
                        <img src={require('../images/artstation-square.png')} width="56" height="56"/>
                        <p className='edit-title'>Simple to extend.</p>
                        <p className='bounce-des'>ArtStation needed a rich text editor for media heavy content and Froala is the one to meet their expectations.</p>
                        <div className='btn-onbounce'>
                            <Link to='/'>
                                <a className='plan-btn'>Read Story</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-color'>
                <div className='container'>
                    <h1 className='thousands-heading'>Thousands Have Chosen Froala</h1>
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
                            <a className='plan-btn'>See More Customers</a>
                        </Link>
                    </div>
                </div>
          </section>
          <section className='container'>
                <h1 className='main-heading'>What People Are Tweeting</h1>
                    <div className='discover-block'>
                        <div className='tweet-card'>
                            <img src={require('../images/philfreo.jpeg')} width="66" height="66"/>
                            <p className='bounce-des'>I just want to complement you all with an excellent piece of code! There are plenty free WYSIWYG editors around, but I just love Froala! It is easy to implement, has enough features, well coded and updated when needed. Good job you all!</p>
                            <p className='bounce-des'>— Dave Reedijk</p>
                        </div>
                        <div className='tweet-card'>
                            <img src={require('../images/xtranophilist.jpeg')} width="66" height="66"/>
                            <p className='bounce-des'>We love all the recent updates. One of our customer JUST ASKED about a video upload option and we look like rockstars 🙂 Amazing work! Your happy customer,</p>
                            <p className='bounce-des'>— Marybeth Alexander, CEO at</p>
                        </div>
                    </div>
                    <div className='plan-btn-style'>
                        <Link to='/'>
                            <a className='plan-btn'>See More Tweets</a>
                        </Link>
                    </div>
          </section>
        </>         

  );
}

export default Customers;