import React from 'react';
import { Link } from 'react-router-dom';

function Inline() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>Inline WYSIWYG Editor Demo</h1>
                    <p className='main-des'><b>Double-click here</b> to test the inline rich text editor. <b>This entire page is a demo.</b></p>
                </div>
            </div>
            <section className='container'>
                <div className='froala-section inline-row'>
                    <div className='img-1'>
                        <p className='edit-title'>Innovative</p>
                        <p className='text-inline'>We believe that Froala WYSIWYG HTML Editor is the best Javascript rich text editor out there. It is our obsession to push the WYSIWYG editing limits further and create an outstanding experience.</p>
                    </div>
                    <div className='img-2'>
                    <img src={require('../images/editor-inline.png')} width="358" height="298"/>
                    </div>
                    <div className='img-3'>
                        <p className='edit-title'>Powerful</p>
                        <p className='text-inline'>Loved by users and friendly with developers, our rich text editor comes with a powerful API and comprehensive documentation - making it easy to integrate, customize and extend.</p>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='img-inline top-space'>
                            <img src={require('../images/connected_world.png')} width="553" height="289" />
                        </div>
                        <div className='inline-heading'>
                            <p className='edit-title'>International</p>
                            <p className='text-inline'>Froala Javascript WYSIWYG editor is used worldwide in many countries and in various languages. It has full RTL support, so writing in Arabic, Farsi or Hebrew will feel natural. Even the toolbar changes to give it the perfect feel.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='froala-section inline-row'>
                    <div className='img-1'>
                        <p className='edit-title'>Secure</p>
                        <p className='text-inline'>Froala WYSIWYG HTML text editor has a strong defense mechanism against all types of XSS attacks. It's built in the core of the editor and we're keeping it that way while adding new features.</p>
                    </div>
                    <div className='img-3'>
                        <p className='edit-title'>SEO</p>
                        <p className='text-inline'>Our JavaScript rich text editor respects the HTML5 standards and cleans all the unnecessary HTML. It produces clean output, waiting to be crawled by search engines.</p>
                    </div>
                    <div className='img-2'>
                        <img src={require('../images/editor-inline.png')} width="358" height="298"/>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='img-inline top-space'>
                            <img src={require('../images/editor-inline.png')} width="358" height="298" />
                        </div>
                        <div className='inline-heading'>
                            <p className='edit-title'>Impressive</p>
                            <p className='text-inline'>We care about UX almost more than anything else. It's what differentiates our rich text editor and it's also what makes it the world's most beautiful WYSIWYG editor.</p>
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
                        <a className='plan-btn'>Start Building</a>
                        </Link>
                    </div>
                </div>
            </section>
        </>         

  );
}

export default Inline;