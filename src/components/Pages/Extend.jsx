import React from 'react';
import { Link } from 'react-router-dom';

function Extend() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>How do I extend Froala Editor?</h1>
                    <p className='text-bold'>Our customers say it's easy. Let's see why!</p>
                    <div className='box-text'>
                        <img src={require('../images/artstation-square.png')} width="56" height="56"/>
                        <p className='edit-title'>Don't reinvent the wheel.</p>
                        <p className='bounce-des'>"ArtStation needed a WYSIWYG HTML editor for media heavy content and Froala was the one to meet their expectations."</p>
                        <div className='btn-onbounce'>
                            <Link to='/'>
                                <a className='plan-btn'>Read Story</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className='container'>
                <div className='ultra-block space-top'>
                    <div className='text-block'>
                    <img src={require('../images/design-2.png')} width="56" height="56"/>
                        <p className='edit-title'>Design</p>
                        <p className='edit-des'>Every website is unique, but Froala WYSIWYG HTML Editor has been designed to fit every single one.</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/concepts.png')} width="56" height="56"/>
                        <p className='edit-title'>Concepts</p>
                        <p className='edit-des'>Want a better understanding on how stuff works? Our concept docs will make it crystal clear for you.</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/examples.png')} width="56" height="56"/>
                        <p className='edit-title'>Examples</p>
                        <p className='edit-des'>Live working examples with custom elements are always a good starting point for any project.</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/plugins-2.png')} width="56" height="56"/>
                        <p className='edit-title'>Existing Plugins</p>
                        <p className='edit-des'>Easily add new functionality to the Javascript rich text editor by using existing plugins as a basis.</p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='ultra-section'>
                    <div className='img-inline top-space'>
                        <img src={require('../images/impressive.png')} width="565" height="213" />
                    </div>
                    <div className='inline-heading'>
                        <p className='edit-title'>Your own design.</p>
                        <p className='text-inline'>Personalize Froala WYSIWYG HTML Editor just the way you want by choosing one of our themes or building your own.</p>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='img-inline top-space'>
                            <img src={require('../images/concepts.png')} width="136" height="136" />
                        </div>
                        <div className='custom-box'>
                            <p className='text-inline'>Get in-depth information on how to successfully extend the Froala WYSIWYG HTML Editor:</p>
                            <div className='custom-box-row'>
                                <div className='custom-card'>
                                    <h3 className='custom-title'>Custom Elements</h3>
                                    <ul className='text-light'><li><Link to='/'><a>Plugin</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Toolbar Button</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Dropdown</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Icon</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Popup</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Shortcut</a></Link></li></ul>
                                </div>
                                <div className='custom-card'>
                                    <h3 className='custom-title'>Save</h3>
                                    <ul className='text-light'><li><Link to='/'><a>Autosave</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Save inside FORM</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Save button</a></Link></li></ul>
                                </div>
                                <div className='custom-card'>
                                    <h3 className='custom-title'>Media</h3>
                                    <ul className='text-light'><li><Link to='/'><a>File Upload</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Image Upload</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Delete Image</a></Link></li></ul>
                                    <ul className='text-light'><li><Link to='/'><a>Image Manager</a></Link></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
            <div className='ultra-section'>
                <div className='img-inline top-space'>
                        <img src={require('../images/examples.png')} width="136" height="136" />
                    </div>
                    <div className='custom-box'>
                        <p className='text-inline'>Our editor is built with an architecture that allows you to easily create custom elements and add them to the Javascript rich text editor:</p>
                        <div className='custom-box-row'>
                            <div className='custom-card'>
                                <ul className='text-light'><li><Link to='/'><a>Toolbar Button</a></Link></li></ul>
                                <ul className='text-light'><li><Link to='/'><a>Image Button</a></Link></li></ul>
                                <ul className='text-light'><li><Link to='/'><a>Dropdown</a></Link></li></ul>
                                <ul className='text-light'><li><Link to='/'><a>Popup</a></Link></li></ul>
                                <ul className='text-light'><li><Link to='/'><a>Color Picker Popup</a></Link></li></ul>
                                <ul className='text-light'><li><Link to='/'><a>Emoticons Popup</a></Link></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='inline-heading'>
                            <p className='edit-title'>Existing Plugins</p>
                            <p className='text-inline'>You have the freedom to create the most impressive functionality seen in a WYSIWYG editor so far. Almost everyone starts with an existing plugin.</p>
                        </div>
                        <div className='img-inline top-space'>
                            <img src={require('../images/existing-plugins.png')} width="565" height="382" />
                        </div>
                    </div>
                </div>
            </section>
            <div className='section'>
                <div className='container'>
                <h1 className='main-heading'>Still not sure where to start?</h1>
                    <p className='text-bold space-btm'>If you can't find an answer, check out our Help Center page or contact our Support team.</p>
                </div>
            </div>
        </>         

  );
}

export default Extend;