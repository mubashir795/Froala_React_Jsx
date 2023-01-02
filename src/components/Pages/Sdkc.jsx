import React from 'react';
import { Link } from 'react-router-dom';

function Sdkc() {
    return (
        <>
            <section className='container'>
                <div className='unbounce-section'>
                    <div className='unbounce-left'>
                        <div class="accordian-tab">
                            <button class="accordion">Getting Started<i class="fa fa-plus"></i></button>
                            <div class="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Customize the Editor<i class="fa fa-plus"></i></button>
                            <div class="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Migration Guides</button>
                            <div class="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Examples</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Plugins</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">APIs</button>
                            <div class="panel">
                                <p>Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className='unbounce-right left-space'>
                        <h1 className='closeio-heading'>Froala WYSIWYG Editor SDKs</h1>
                        <p className='closeio-des'>Froala Javascript WYSIWYG Editor has server side SDKs for multiple languages to help ease the editor's integration with your server.</p>
                        <div class="img-box grid-images">
                            <div class="img-align row-images">
                            <img src={require('../images/dotnet.png')} width="40" height="40" />
                                <p class="img-title">.Net</p>
                            </div>
                            <div class="img-align row-images">
                            <img src={require('../images/java.png')} width="40" height="40" />
                                <p class="img-title">Java</p>
                            </div>
                            <div class="img-align row-images">
                            <img src={require('../images/nodejs.png')} width="40" height="40" />
                                <p class="img-title">Node.Js</p>
                            </div>
                            <div class="img-align row-images">
                            <img src={require('../images/php.png')} width="40" height="40" />
                                <p class="img-title">PHP</p>
                            </div>
                            <div class="img-align row-images">
                            <img src={require('../images/python.png')} width="40" height="40" />
                                <p class="img-title">Python</p>
                            </div>
                            <div class="img-align row-images">
                            <img src={require('../images/rails-2.png')} width="40" height="40" />
                                <p class="img-title">Rails</p>
                            </div>
                        </div>
                        <div id="sdks-about" class="docs-group anchor">
                            <h2 class="title-left-border text-small">About</h2>
                            <p class="text-large">Each server SDK library contains information about how to install and configure it, how to handle different server side operations on images, files and how to use the image manager.</p>
                        </div>
                        <div id="sdks-image" class="docs-group anchor">
                            <h2 class="title-left-border text-small">Image</h2>
                            <p class="text-large">The Froala rich text editor SDKs offers detailed explanations, accompanied by code example for the following actions on images:</p>
                            <ul>
                                <li>Server Upload</li>
                                <li>Server Delete</li>
                                <li>S3 Upload</li>
                                <li>Resize</li>
                                <li>Validation</li>
                            </ul>
                        </div>
                        <div id="sdks-image-manager" class="docs-group anchor">
                            <h2 class="title-left-border text-small">Image Manager</h2>
                            
                            <p class="text-large">When using the Froala WYSIWYG Editor Image Manager, your server will need to receive and handle:</p>
                            
                            <ul>
                                <li>the load images request</li>
                                <li>the delete image from Image Manager request</li>
                            </ul>
                        </div>
                        <div id="sdks-file" class="docs-group anchor">
                            <h2 class="title-left-border text-small">File</h2>
                            
                            <p class="text-large">The Froala Editor SDKs also help you handle the following actions for files:</p>
                            
                            <ul>
                                <li>Server Upload</li>
                                <li>Server Delete</li>
                                <li>S3 Upload</li>
                                <li>Validation</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>             
    );
}

export default Sdkc;