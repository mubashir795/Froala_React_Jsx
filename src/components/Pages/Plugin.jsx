import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

function Plugin() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>Out Of the Box Plugins!</h1>
                    <p className='text-bold'>Plug and play features to create your own version of the Froala WYSIWYG HTML Editor.</p>
                    <div className='box-text'>
                        <img src={require('../images/close.io.jpg')} width="56" height="56"/>
                        <p className='edit-title'>Fantastic Architecture. Simple to extend.</p>
                        <p className='bounce-des'>"ArtStation needed a WYSIWYG HTML editor for media heavy content and Froala was the one to meet their expectations.</p>
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
                    <img src={require('../images/blocks.png')} width="66" height="66"/>
                        <p className='edit-title'>30+ Plugins</p>
                        <p className='edit-des'>Our rich text editor has over 30 plugins to choose from and use out of the box in you project.​​</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/play.png')} width="66" height="66"/>
                        <p className='edit-title'>Plug & Play</p>
                        <p className='edit-des'>Include the plugin you need for the rich text editor and you’re ready to start playing.</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/customizeable.png')} width="66" height="66"/>
                        <p className='edit-title'>Customize</p>
                        <p className='edit-des'>With lots of well documented options for each plugin, the editor can be customized in seconds.</p>
                    </div>
                    <div className='text-block'>
                    <img src={require('../images/plugins-2.png')} width="66" height="66"/>
                        <p className='edit-title'>Extend</p>
                        <p className='edit-des'>All of the plugins’ code is all well commented and simple to use as a basis for your own plugins.</p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='head-title top-space'>Froala Plugin</h1>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>New Plugin</h3>
                        <p className='plugin-text-light'>Create your custom plugin.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Image</h3>
                        <p className='plugin-text-light'>Basic image editing.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Draggable</h3>
                        <p className='plugin-text-light'>Drag and drop elements.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Link</h3>
                        <p className='plugin-text-light'>Advanced link editing.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Code View</h3>
                        <p className='plugin-text-light'>View editor content code.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Code Beautifier</h3>
                        <p className='plugin-text-light'>Beautify the code view.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Emoticons</h3>
                        <p className='plugin-text-light'>Makes your users smile.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Font Family</h3>
                        <p className='plugin-text-light'>Select different font type.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Font Size</h3>
                        <p className='plugin-text-light'>Change the font size.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Paragraph Format</h3>
                        <p className='plugin-text-light'>Change the paragraph type.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Lists</h3>
                        <p className='plugin-text-light'>Insert lists in the editor.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Table</h3>
                        <p className='plugin-text-light'>Basic and advanced tables.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Word</h3>
                        <p className='plugin-text-light'>Clean Word and Excel paste.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Video</h3>
                        <p className='plugin-text-light'>Multiple ways to insert videos.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Line Breaker</h3>
                        <p className='plugin-text-light'>Add new line between blocks.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Inline Class</h3>
                        <p className='plugin-text-light'>Add inline classes on selected text.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Inline Style</h3>
                        <p className='plugin-text-light'>Add styles on selected text.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>File</h3>
                        <p className='plugin-text-light'>Upload any kind of files.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Colors</h3>
                        <p className='plugin-text-light'>Background and text colors.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Fullscreen</h3>
                        <p className='plugin-text-light'>Edit content in fullscreen.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Char Counter</h3>
                        <p className='plugin-text-light'>Limits or counts characters.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Align</h3>
                        <p className='plugin-text-light'>Align editor content.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Entities</h3>
                        <p className='plugin-text-light'>Use HTML entities.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Help</h3>
                        <p className='plugin-text-light'>See shortcuts in the editor.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Line Height</h3>
                        <p className='plugin-text-light'>Change the line height.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Image Manager</h3>
                        <p className='plugin-text-light'>Browse and delete images.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Paragraph Style</h3>
                        <p className='plugin-text-light'>Add style to a paragraph.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Print</h3>
                        <p className='plugin-text-light'>Print editor content.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Quick Insert</h3>
                        <p className='plugin-text-light'>Insert elements easier.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Quote</h3>
                        <p className='plugin-text-light'>Add quotes in the editor.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Save</h3>
                        <p className='plugin-text-light'>Enable AJAX saving.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Special Characters</h3>
                        <p className='plugin-text-light'>Insert special characters.</p>
                    </div>
                </div>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Url</h3>
                        <p className='plugin-text-light'>Convert to URL as you type.</p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='head-title top-space'>TUI Editor</h1>
                <div className='single-line'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Spellchecker</h3>
                        <p className='plugin-text-light'>Spell check as you type.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Wiris</h3>
                        <p className='plugin-text-light'>Edit equations and formulas.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Tribute.js</h3>
                        <p className='plugin-text-light'>Mentions inside the editor.</p>
                    </div>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>TUI Editor</h3>
                        <p className='plugin-text-light'>Advanced image editing.</p>
                    </div>
                </div>
                <div className='single-line btm-row'>
                    <div className='plugin-card'>
                        <div className='online-icon'>
                            <FaCode/>
                        </div>
                        <h3 className='online-light'>Embed.ly</h3>
                        <p className='plugin-text-light'>Embed rich content.</p>
                    </div>
                </div>
            </section>
        </>
        
        
            
    
  );
}

export default Plugin;