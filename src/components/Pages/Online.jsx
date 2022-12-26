import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagic, FaRegEdit, FaRegImage, FaPuzzlePiece } from 'react-icons/fa';

function Online() {
    return (
        <>
            <div className='section'>
                <h1 className='main-heading'>Free Online HTML Editor Powered by Froala</h1>
                <p className='main-des'>A Real-time Editor to Quickly Create Clean and Valid HTML Code.</p>
                <h2 className='med-hed'>How do I use this online HTML Editor?</h2>
                <p className='short-text'>Convert text to HTML, sanity check your HTML code, or use it like an online notepad to save text in a PDF or word file.</p>
                <p className='short-desc'>Compose or copy text in the left editor and see clean and directly usable HTML code in the right window.</p>
                <p className='short-desc'>Love to write code? Simply paste your HTML on the right and see the text output in the left editor.</p>
            </div>
            <section className='bg-color'>
              <div className='container'>
                  <p className='text-froala'>Looking for an HTML Editor for your personal or enterprise<br /> application?</p>
                  <p className='short-desc'>Froala WYSIWYG Editor is your perfect choice.</p>
                    <div className='plan-btn-style'>
                        <Link to='/'>
                            <a className='plan-btn'>Try Froala Editor for Free</a>
                        </Link>
                    </div>
                    <p className='text-froala'>Simply Beyond Words and Letters</p>
                    <p className='short-desc'>Froala Editor enables rich editing and formatting capabilities for your web and mobile applications.</p>
                    <div className='spring-images'>
                        <div className='online-card'>
                            <div className='online-icon'>
                                <FaRegEdit/>
                            </div>
                            <h3 className='online-light'>Editing</h3>
                            <p className='online-text-light'>Enhance text with basic to advanced editing—bold, italic, underline, subscript, superscript, strikethrough, and more.</p>
                        </div>
                        <div className='online-card'>
                            <div className='online-icon'>
                                <FaMagic/>
                            </div>
                            <h3 className='online-light'>Styling and Formatting</h3>
                            <p className='online-text-light'>Change fonts, align text, create ordered list, bullets, quotes, indentation, apply color themes, inline classes, line heights, paragraph styles, drag-drop, add shortcuts, and so much more.</p>
                        </div>
                        <div className='online-card'>
                            <div className='online-icon'>
                                <FaRegImage/>
                            </div>
                            <h3 className='online-light'>Images and Media</h3>
                            <p className='online-text-light'>Insert images, audio, and video to the editor. Add urls, apply styles to images, or customize image editing, add custom color pickers, or express yourself with emoticons.</p>
                        </div>
                        <div className='online-card'>
                            <div className='online-icon'>
                                <FaPuzzlePiece/>
                            </div>
                            <h3 className='online-light'>30+ Plugins and Easy</h3>
                            <p className='online-text-light'>3rd party Integration Font awesome? Spell and grammar checker? Froala has easy 3rd party integration. Plus over 30 out-of-the-box plugins and customization options.</p>
                        </div>
                  </div>
                    <div className='plan-btn-style'>
                        <Link to='/'>
                            <a className='plan-btn'>Explore All Features</a>
                        </Link>
                    </div>
                    <p className='short-desc'>Froala is the perfect editor for your website builder, blogging platform, web development,<br/> notepad apps, email, chat apps, and many diverse applications that utilize editing.</p>
                    <div className='button'>
                        <Link to='/sign-up' className='btn-explore'>
                            <a className='btn-onliline-ex'>Take a Tour</a>
                        </Link>
                        <Link to='/sign-up' className='btn-download'>
                            <a className='btn-onliline-ex'>See our Plans</a>
                        </Link>
                    </div>
              </div>
            </section>
            <div className='section'>
                <h1 className='main-heading'>Frequently Asked Questions</h1>
            </div> 
            <section className='container'>
                <button className='accordion'>What is an HTML Editor?</button>
                <div className='panel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className='accordion'>Can I use the Froala online HTML Editor for free?</button>
                <div className='panel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className='accordion'>Can I edit and test HTML files online?</button>
                <div className='panel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className='accordion'>What’s the difference between Froala WYSIWYG Editor vs Online HTML Editor?</button>
                <div className='panel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className='accordion'>Which programming languages and frameworks does Froala Editor support?</button>
                <div className='panel'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div> 
            </section>
            <div className='section'>
                <h1 className='main-heading'>The Next Generation WYSIWYG HTML Editor</h1>
                <div className='button'>
                    <Link to='/sign-up' className='btn-explore'>
                        <a className='btn-onliline-ex'>Download for Free</a>
                    </Link>
                    <Link to='/sign-up' className='btn-download'>
                        <a className='btn-onliline-ex'>See our Plans</a>
                    </Link>
                </div>
            </div>
        </>
        
        
            
    
  );
}

export default Online;