import React from 'react';
import { Link } from 'react-router-dom';

function Docs() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='head-title'>Documentation</h1>
                    <p className='docs-text'>Learn how to use Froala WYSIWYG HTML Editor starting with the Quick Start Guide and API basics; going all the way to more complex how-to guides and examples.</p>
                    <div className='single-line'>
                        <div className='doc-card'>
                            <h3 className='text-light'>Getting Started</h3>
                            <img className='entered lazyloaded' src={require('../images/settings.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Migration Guides</h3>
                            <img className='entered lazyloaded' src={require('../images/archive.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Concepts</h3>
                            <img className='entered lazyloaded' src={require('../images/file-text.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='single-line'>
                        <div className='doc-card'>
                            <h3 className='text-light'>API</h3>
                            <img className='entered lazyloaded' src={require('../images/sliders.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Framework Plugins</h3>
                            <img className='entered lazyloaded' src={require('../images/package.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Server Integrations</h3>
                            <img className='entered lazyloaded' src={require('../images/framer.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='single-line'>
                        <div className='doc-card'>
                            <h3 className='text-light'>Server SDKs</h3>
                            <img className='entered lazyloaded' src={require('../images/server.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Plugins</h3>
                            <img className='entered lazyloaded' src={require('../images/plus-square.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                        <div className='doc-card'>
                            <h3 className='text-light'>Examples</h3>
                            <img className='entered lazyloaded' src={require('../images/book-open.png')} width="40" height="40" />
                            <p className='text-light'>Useful information for getting started with the Froala WYSIWYG Editor.</p>
                            <div className='btn-inline'>
                                <Link to='/'>
                                    <a className='btn r-btn highlight'>Learn more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='container container-box'>
                    <h2 className='heading-title'>Still Have Questions?</h2>
                    <p className='text-center'>If you can't find an answer, check out our Help Center page or contact our Support team.</p>
                </div>
            </div>
        </>         

  );
}

export default Docs;