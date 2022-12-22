import React from 'react';
import { Link } from 'react-router-dom';

function Download() {
    return (
        <>
            <div className='section'>
                <h1 className='main-heading'>All-purpose, easy to use WYSIWYG editor with elegance</h1>
                <p className='main-des'>We make web editing easier, more powerful and more enjoyable with every single click.</p>
                <div className='button'>
                    <Link to='/sign-up' className='btn-explore'>
                        <a className='btn-inline-ex'>Start Free Trial</a>
                    </Link>
                    <Link to='/sign-up' className='btn-download'>
                        <a className='btn-inline-down'>Check our Pricing</a>
                    </Link>
                </div>
                <p className='use-text'>Or simply use NPM <span className='box-color'> npm install froala-editor</span></p>
            </div>
            <section className='bg-color'>
              <div className='container'>
                  <p className='text-froala'>G2’s top WYSIWYG editor for over two years</p>
                  <div className='spring-images'>
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
                        <div className='img-Spring'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                  </div>
                  <p className='text-bold'>These companies are changing the world, and they use Froala.</p>
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
                    <p className="text-read-more"><Link to='/customers'><a className='text-read-more'>Read more about our customers</a></Link></p>
              </div>
            </section>
            <section className='container'>
                <p className='get-started'>Mobile Friendly</p>
                <div className='froala-tint'>
                    <p className="text-tint">
                        With over 1.9 billion mobile web users worldwide, mobile is more than a trend and it is not the future, it's the present. This has convinced us that mobile has to be on the first place.
                    </p>
                    <p className="text-tint">
                        With over 1.9 billion mobile web users worldwide, mobile is more than a trend and it is not the future, it's the present. This has convinced us that mobile has to be on the first place.
                    </p>
                </div>
                <div className='froala-section'>
                    <div className='img-1'>
                        <p className='edit-title'>Mobile First</p>
                        <p className='edit-des'>Our WYSIWYG HTML editor was designed using a progressive enhancement strategy to ensure mobile users the best possible experience.</p>
                    </div>
                    <div className='img-2'>
                        <p className='edit-title'>Mobile Resize</p>
                        <p className='edit-des'>For the first time in a rich text editor, resizing images and videos on mobile devices is no longer a demand, but an achievement.</p>
                    </div>
                    <div className='img-3'>
                        <p className='edit-title'>Custom Toolbar by Screen Size</p>
                        <p className='edit-des'>Small screens require increased attention. Every detail matters and we made several options available for you to change the toolbar buttons for each screen size.</p>
                    </div>
                </div>
          </section>
          <section className='container'>
            <p className='get-started'>Next Generation UX</p>
            <div className='editior_img'>
                <img src={require('../images/new-editor.jpeg')} width="805" height="411"/>
            </div>
            <div className='froala-section'>
                <div className='img-1'>
                    <p className='edit-title'>Simple</p>
                    <p className='edit-des'>We designed a simple and intuitive toolbar where every feature is easy to find and your most wanted ones are right there.</p>
                </div>
                <div className='img-2'>
                    <p className='edit-title'>Smart</p>
                    <p className='edit-des'>We designed a Smart Editor Toolbar made of contextually relevant groups of buttons, displays only the most common or most used ones.</p>
                </div>
                <div className='img-3'>
                    <p className='edit-title'>Full of features</p>
                    <p className='edit-des'>It's simple and smart and it can hold all the buttons you ever wished without overwhelming the end user.</p>
                </div>
            </div>
          </section>
          <section className='bg-color'>
                <div className='container'>
                    <p className='text-froala'>Impressive Popups</p>
                    <div className='froala-tint'>
                        <p className="text-tint"><p className='tint-title'>Inline Popup</p>
                            WYSIWYG has a strong meaning for us and we achieved our goals with an amazing and unique inline editor.
                        </p>
                        <p className="text-tint"><p className='tint-title'>Editing Popups</p>
                            We designed all popups and toolbars in just the right way to make the editor look natural on any modern website.
                        </p>
                    </div>
                    <p className='modern-text'>Modern and Highly Customizable</p>
                    <div className='froala-section'>
                        <div className='img-1'>
                            <p className='edit-title'>Modern Design</p>
                            <p className='edit-des'>The perfect editor is the one that fits best on your website. The unitary feel and modern design will exceed your expectations.</p>
                        </div>
                        <div className='img-2'>
                            <p className='edit-title'>Customizer</p>
                            <p className='edit-des'>We strive to make your work easier and more pleasant and we created the first customizing tool for a rich text editor.</p>
                        </div>
                        <div className='img-3'>
                            <p className='edit-title'>Retina</p>
                            <p className='edit-des'>Be a professional, don't cut any corners and offer your users the best visual experience possible.</p>
                        </div>
                    </div>
                    <div className='button'>
                        <Link to='/sign-up' className='btn-explore'>
                            <a className='btn-inline-ex'>Start Free Trial</a>
                        </Link>
                        <Link to='/sign-up' className='btn-download'>
                            <a className='btn-inline-down'>Check our Pricing</a>
                        </Link>
                    </div>
                </div>
          </section>
          <section className='container'>
                <div className='container'>
                    <p className='modern-text'>Rich Image & Video Handling</p>
                    <div className='froala-tint'>
                        <p className="text-tint"><p className='tint-title'>Wrap Text</p>
                            Desired and yet missing from all other WYSIWYG HTML text editors. Froala makes wrapping text around images and videos possible.
                        </p>
                        <p className="text-tint"><p className='tint-title'>Cross-Browser Reposition</p>
                            You know how important it is for your users to be able to use whatever browser they want. Yes, image reposition works on all browsers.
                        </p>
                    </div>
                    <div className='froala-tint'>
                        <p className="text-tint"><p className='tint-title'>Video Preview and Resize</p>
                            Wouldn't it be nice to preview videos while still editing? Yes, that's possible and you can also resize them at the same time.
                        </p>
                        <p className="text-tint"><p className='tint-title'>All Like One</p>
                            You might as well have multiple Froala WYSIWYG HTML editors on the same page, your users may drag & drop images from one to another.
                        </p>
                    </div>
                </div>
          </section>
          <section className='bg-color'>
                <div className='container'>
                    <p className='text-froala'>Clever Table Tool</p>
                    <div className='froala-tint'>
                        <p className="text-tint"><p className='tint-title'>Cell Selection</p>
                            Cell selection was never the same on two different browsers. Starting with the Froala WYSIWYG HTML Editor Version 2 we developed a special table cell selection feature.
                        </p>
                        <p className="text-tint"><p className='tint-title'>Table Editing</p>
                            Table editing will never be the same after trying our new tool. Using right click to edit tables in a web browser is wrong. Most users want the right click context menu untouched. And that's exactly what we are doing.
                        </p>
                    </div>
                </div>
          </section>
          <section className='container'>
                <div className='container'>
                    <p className='modern-text'>Powerful</p>
                    <div className='froala-section'>
                        <div className='img-1'>
                            <p className='edit-title'>Clean HTML</p>
                            <p className='edit-des'>The outputted HTML has always been a problem. We have taken the challenge and created and algorithm that solves it.</p>
                        </div>
                        <div className='img-2'>
                            <p className='edit-title'>Secure</p>
                            <p className='edit-des'>It is a known fact that our WYSIWYG HTML editor is one of the most secure rich text editors out there. This is a top concern for us.</p>
                        </div>
                        <div className='img-3'>
                            <p className='edit-title'>Fast</p>
                            <p className='edit-des'>It was designed with performance in mind and therefore it is prepared to withstand rigorous tests.</p>
                        </div>
                    </div>
                    <div className='button'>
                        <Link to='/sign-up' className='btn-explore'>
                            <a className='btn-inline-ex'>Start Free Trial</a>
                        </Link>
                        <Link to='/sign-up' className='btn-download'>
                            <a className='btn-inline-down'>Check our Pricing</a>
                        </Link>
                    </div>
                    <p className='text-froala'>Popular features</p>
                    <div className='froala-section bottom-space'>
                        <div className='img-1'>
                            <img src={require('../images/international.png')} width="70" height="70" />
                            <p className='edit-title'>International</p>
                            <p className='edit-des'>Used all over the world, in more than 100 countries, our Javascript rich text editor simply works in every language, including East Asian languages.</p>
                        </div>
                        <div className='img-2'>
                            <img src={require('../images/paste.png')} width="70" height="70" />
                            <p className='edit-title'>Word & Excel Paste</p>
                            <p className='edit-des'>Choose if you wish to keep or clean formatting when pasting from Microsoft Word and Excel and the rich text editor does it all for you.</p>
                        </div>
                        <div className='img-3'>
                            <img src={require('../images/accessible.png')} width="70" height="70" />
                            <p className='edit-title'>Accessibility</p>
                            <p className='edit-des'>Web rich text editing should be for everyone, and that's why we made our Javascript editor compliant with Section 508, WCAG 2.0 and WAI-ARIA.</p>
                        </div>
                    </div>
                </div>
          </section>
        </>
        
        
            
    
  );
}

export default Download;