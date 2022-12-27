import React from 'react';
import { Link } from 'react-router-dom';

function Uploader() {
    return (
        <>
            <section className='uploader-section'>
                <div className='container uploader-box'>
                    <h1 className='main-heading'>All the power of Sencha grid with the ease of React</h1>
                    <p className='heading-des'>Enhance your forms with a sleek image uploader.</p>
                    <div className='uploader-row'>
                        <div className='gif-img-box'>
                            <img src={require('../images/FRO-image-uploader.gif')} width="500" height="436" />
                        </div>
                        <div className='img-gif-row'>
                            <div className='undraw-img'>
                                <img src={require('../images/undraw_1.png')} width="77" height="51" />
                            </div>
                            <div className='undraw-text'>
                                <p className='edit-title'>Drag and Drop</p>
                                <p className='edit-des'>Upload your images just by dragging them to the upload area</p>
                            </div>
                            <div className='undraw-img'>
                                <img src={require('../images/undraw_3.png')} width="77" height="51" />
                            </div>
                            <div className='undraw-text'>
                                <p className='edit-title'>Image Manager Included</p>
                                <p className='edit-des'>Helps your users browse through or delete images they have uploaded.</p>
                            </div>
                            <div className='undraw-img'>
                                <img src={require('../images/undraw_2.png')} width="77" height="51" />
                            </div>
                            <div className='undraw-text'>
                                <p className='edit-title'>Insert Images From A Link</p>
                                <p className='edit-des'>Upload images from any location on the web</p>
                            </div>
                        </div>
                    </div>
                    <div className='undraw-text'>
                        <p className='heading-des'>Enhance your forms with a sleek image uploader.</p>
                    </div>
                    <div className='plan-btn-style'>
                        <Link to='/'>
                            <a className='plan-btn'>Download Froala Image Uploader For Free</a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='main-heading'>Features</h1>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <img src={require('../images/weight-love.png')} width="40" height="40"/>
                        <p className='edit-title'>Lightweight</p>
                        <p className='edit-des'>Give your users amazing image uploading experience with less than 50KB file.</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/ajax.png')} width="30" height="40"/>
                        <p className='edit-title'>Ajax Ready</p>
                        <p className='edit-des'>Upload images without reloading the page.</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/design-validation.png')} width="40" height="40"/>
                        <p className='edit-title'>File Validation</p>
                        <p className='edit-des'>Limit your users to a specific file type, size, image dimensions, or write your own custom validator.</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/fetch-upload-cloud.png')} width="40" height="40"/>
                        <p className='edit-title'>Upload to the Cloud</p>
                        <p className='edit-des'>Send files directly to Amazon’s Storage Service (S3)</p>
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <img src={require('../images/customizeable.png')} width="40" height="40"/>
                        <p className='edit-title'>Simple to Style and Customize</p>
                        <p className='edit-des'>It starts with an image placeholder from your choice and pop up menu can be easily styled using CSS</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/responsive.png')} width="30" height="40"/>
                        <p className='edit-title'>Responsive design</p>
                        <p className='edit-des'>Use it on any device, the image uploader will automatically adabted to the screen size.</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/progress.png')} width="40" height="40"/>
                        <p className='edit-title'>Progress Bar</p>
                        <p className='edit-des'>Let users know the image uploading progress.</p>
                    </div>
                    <div className='text-block'>
                        <img src={require('../images/scale.png')} width="40" height="40"/>
                        <p className='edit-title'>Image Previews & Scaling</p>
                        <p className='edit-des'>Once file is uploaded, the user will be able to preview & resize it.</p>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='ultra-text top-space'>
                            <p className='head-title'>By Devs, for Devs</p>
                            <p className='edit-des'>Since it's part from Froala Editor, it is developed and maintained by experts.</p>
                            <p className='edit-des'>Code quality and architecture, documentation and guides make the Froala image uploader a pleasure to use for any developer.</p>
                        </div>
                        <div className='ultra-img top-space'>
                            <img src={require('../images/developer-2.png')} width="352" height="190" />
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Blazing Fast</p>
                            <p className='edit-des'>Ten times faster than the blink of an eye, our rich text editor will initialize in less than 40ms.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Lightweight</p>
                            <p className='edit-des'>Bring in an amazing editing experience to your application without losing loading speed.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Well Structured</p>
                            <p className='edit-des'>Our engineers came up with a fantastic architecture that made this the best Javascript rich text editor.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Secure</p>
                            <p className='edit-des'>We know it’s bullet proof, but don’t take our word for it, just go ahead and hack it. #hackFroala</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='main-heading'>Get Started</h1>
                <div className='get-started-block'>
                    <div className='get-started-left'></div>
                    <div className='get-started-middle'>
                        <ul className='bullets-text'>
                            <li className='bullets-style'><p><Link to='/'><a className='text-read-more'>Install Froala WYSIWYG Editor.</a></Link></p></li>
                            <li className='bullets-style'>Add image element in your HTML file</li>
                            <div className='prettyprint'><span>"img id="logo" src="https://i.ibb.co/g9gGYPX/avatar-g177d581fb-640.png" 
alt="User placeholder" height="100" </span></div>
                            <li className='bullets-style'>Initialize Froala editor on that image</li>
                            <div className='prettyprint'><span>"const editor = new FroalaEditor('#logo')" </span></div>
                            <li className='bullets-style'>Upload images to your server using our ready SDK or upload to the cloud</li>
                            <div className='prettyprint'><span>"const editor = new FroalaEditor('#logo',<br/> 
                            pluginsEnabled ['image', 'imageManager'],<br/>
                            imageEditButtons ['imageReplace', 'imageRemove'],<br/>
                            imageInsertButtons ['imageBack', '|', 'imageUpload'],<br/>
                            imageDefaultWidth [150],<br/>
                            imageUploadMethod[POST],<br/>
                            // Set the image upload URL.<br/>
                            imageUploadURL ['upload.php'],<br/>

                            imageManagerLoadURL ['image_manager/load_images.php'],<br/>
                            // Set the image delete URL.<br/>
                            imageManagerDeleteURL ['delete_image.php'],<br/>

                            //Validation                           
                            imageAllowedTypes ['jpeg', 'jpg', 'png'],<br/>
                            // Set max image size to 10MB.<br/>
                            imageMaxSize[1024 * 1024 * 10] ,<br/>
        );" </span></div>
                            <li className='bullets-style space'>Upload images to your server using our ready SDK or upload to the cloud</li>
                        </ul>
                    </div>
                    <div className='get-started-right'></div>
                </div>
            </section>
        </>          
    );
}

export default Uploader;