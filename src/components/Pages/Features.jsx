import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
    return (
        <>
            <div className='section'>
                <h1 className='main-heading'>Froala Editor Features</h1>
                <p className='heading-des'>The smartest and world's most beautiful WYSIWYG HTML text editor<br />
                High performance and simple design make our JavaScript text editor easy to use for developers,<br />
                loved by users and consistently rated the top web page editors by G2.</p>
                <div className='plan-btn-style'>
                  <Link to='/'>
                      <a className='plan-btn'>Download Free</a>
                  </Link>
                </div>
            </div>
            <section className='container'>
                <div className='ultra-section'>
                    <div className='ultra-text'>
                        <p className='head-title'>General Information</p>
                        <p className='color-grey'>Beautiful JavaScript web editor that's easy to integrate for developers and your users will simply fall in love with its clean design.</p>
                    </div>
                    <div className='ultra-img'>
                        <img src={require('../images/general-information.png')} width="300" height="264" />
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <p className='edit-title'>Easy to Integrate</p>
                        <p className='edit-des'>The editor can be integrated in any kind of project in no time. It requires only basic javascript and HTML coding knowledge.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Popular</p>
                        <p className='edit-des'>Our editor is a very popular HTML editor among developers and it has plugins for the most popular development Frameworks.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Easy to Upgrade</p>
                        <p className='edit-des'>Keep all your customizations separated from the editor folder and upgrading is just a matter of downloading the new version.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>High-Quality Code</p>
                        <p className='edit-des'>For us high quality code means LTFCE, in other words: Legible, Testable, Flexible, Compliant and Economical.</p>
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <p className='edit-title'>Unit Tests</p>
                        <p className='edit-des'>We know you hate testing and want a product that really works, so most of the editor's functionality is covered by unit tests.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Inline Editing</p>
                        <p className='edit-des'>We managed to achieve the best editing experience ever. Using the inline editor, what you see is actually what you get.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Shortcuts</p>
                        <p className='edit-des'>Functionality at your fingertips, shortcuts allow you to activate specific commands by using only the keyboard.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Cross Browser</p>
                        <p className='edit-des'>Are you an Apple fan? Or Microsoft? It doesn't matter, our editor will work the same on Safari, Internet Explorer and other browsers.</p>
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <p className='edit-title'>Cross-Platform</p>
                        <p className='edit-des'>It's tested! A busy day won't stop you from editing your website. Use your tablet or even smartphone for it.</p>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='ultra-text top-space'>
                            <p className='head-title'>Design</p>
                            <p className='color-grey'>Not your grandmother's WYSIWYG text<br /> editor</p>
                        </div>
                        <div className='ultra-img top-space'>
                            <img src={require('../images/design.png')} width="300" height="264" />
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Modern Design</p>
                            <p className='edit-des'>We carefully analysed the latest industry trends and designed a nice modern interface that the users will just love.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Retina Ready</p>
                            <p className='edit-des'>Why Retina? More detail, better aesthetics and sharper fonts. Otherwise, millions of users will think your website is ugly.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Themes</p>
                            <p className='edit-des'>The editor will fit on any website. Use the default or the dark theme, or create your own theme using the LESS theme file.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Intuitive Interface</p>
                            <p className='edit-des'>Froala rich text editor offers complete functionality through a very intuitive interface that users will find natural to use.</p>
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Popups</p>
                            <p className='edit-des'>Modern all the way. Froala dumps the old and classic popups, adding in new, styled popups for an awesome user experience.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>SVG icons</p>
                            <p className='edit-des'>The editor uses in-house made SVG icons, scalable vectorial icons that look gorgeous at any size.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Custom Style</p>
                            <p className='edit-des'>Our WYSIWYG HTML editor is the only one that has a special customizer tool to change the look and feel the way you want.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Custom Toolbar</p>
                            <p className='edit-des'>Too many buttons? Perhaps not in the right order? You have full control over the editor's toolbar functionality on each screen size.</p>
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Sticky Toolbar</p>
                            <p className='edit-des'>To ease your editing experience the WYSIWYG editor's toolbar will remain at the top of the screen while you scroll down.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Toolbar Offset</p>
                            <p className='edit-des'>The rich text editor's toolbar does not have to overlap with the header on your webpage, just set an offset for it.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Toolbar At The Bottom</p>
                            <p className='edit-des'>Easily change the WYSIWYG HTML editor toolbar's position from top to bottom, while also using the sticky toolbar or an offset.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Full Screen</p>
                            <p className='edit-des'>Dealing with large amounts of content requires a large editing space. The fullscreen button will expand the editing area to the whole webpage space.</p>
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Full Page</p>
                            <p className='edit-des'>Writing and editing an entire HTML page is also possible. Helpful for emails, but not only, the usage of HTML, HEAD, BODY tags and DOCTYPE declaration is permitted.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Iframe</p>
                            <p className='edit-des'>The WYSIWYG HTML editor's content can be isolated from the rest of the page using iframe so there is no style or script conflicts.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Document Ready</p>
                            <p className='edit-des'>the best options for creating online documents.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Min and Max Height</p>
                            <p className='edit-des'>The editor's height will automatically adjust between the Min and Max height values to fit the content inside the editable area.</p>
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Predefined Height</p>
                            <p className='edit-des'>Set a specific height to the WYSIWYG HTML editor using the height option. If the text inside is longer, then the rich text editor will get a vertical scrollbar</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='section'>
                <h1 className='main-heading'>Build great things with style</h1>
                <div className='plan-btn-style'>
                  <Link to='/'>
                      <a className='plan-btn'>Strat Designing</a>
                  </Link>
                </div>
            </div>
            <section className='container'>
                <div className='ultra-section'>
                    <div className='ultra-text'>
                        <p className='head-title'>Performance</p>
                        <p className='color-grey'>Six times faster than the blink of an eye, our rich text editor will initialize in less than 40ms.</p>
                    </div>
                    <div className='ultra-img'>
                        <img src={require('../images/performance.png')} width="300" height="264" />
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <p className='edit-title'>Lightweight</p>
                        <p className='edit-des'>With its gzipped core of only 50KB, you can bring in an amazing editing experience to your app without losing loading speed.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Plugin Based</p>
                        <p className='edit-des'>The modular structure makes our WYSIWYG HTML editor more efficient, easier to understand, extend and maintain.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>Multiple Editors on a Page</p>
                        <p className='edit-des'>One or ten text editors on the same page? You won't feel a difference, just set them to be initialized on click.</p>
                    </div>
                    <div className='text-block'>
                        <p className='edit-title'>HTML 5</p>
                        <p className='edit-des'>Froala Rich Text Editor is built respecting and taking advantage of the HTML 5 standards.</p>
                    </div>
                </div>
                <div className='ultra-block'>
                    <div className='text-block'>
                        <p className='edit-title'>CSS 3</p>
                        <p className='edit-des'>What better way to improve user experience than using CSS 3? Subtle effects makes the editor even greater.</p>
                    </div>
                </div>
            </section>
            <section className='bgd-color'>
                <div className='container'>
                    <div className='ultra-section'>
                        <div className='ultra-text top-space'>
                            <p className='head-title'>Optimized for Mobile</p>
                            <p className='color-grey'>Froala is a responsive WYSIWYG editor that fit in any screen size.</p>
                        </div>
                        <div className='ultra-img top-space'>
                            <img src={require('../images/optimized.png')} width="300" height="264" />
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Android and iOS</p>
                            <p className='edit-des'>We know how used mobile devices are and we are running tests on both Android and iOS devices.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Image Resize</p>
                            <p className='edit-des'>Froala Rich Text Editor is the first WYSIWYG HTML editor with image resize that works even on mobile devices.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Video Resize</p>
                            <p className='edit-des'>We are the first to introduce resize for videos even when they are playing. And of course we made it work on mobile too.</p>
                        </div>
                        <div className='text-block'>
                            <p className='edit-title'>Responsive Design</p>
                            <p className='edit-des'>The content you are editing will be responsive. Our WYSIWYG HTML editor can handle image resize using percentages.</p>
                        </div>
                    </div>
                    <div className='ultra-block'>
                        <div className='text-block'>
                            <p className='edit-title'>Toolbar by Screen Size</p>
                            <p className='edit-des'>For the first time in a rich text editor, the toolbar can be customized for each screen size.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='section'>
                <h1 className='main-heading'>Fast and responsive? We got you</h1>
                <div className='plan-btn-style'>
                  <Link to='/'>
                      <a className='plan-btn'>Start Building</a>
                  </Link>
                </div>
            </div>            
        </>
        
        
            
    
  );
}

export default Features;