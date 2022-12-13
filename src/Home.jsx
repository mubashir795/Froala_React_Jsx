import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
          <div className='section'>
              <h1 className='main-heading'>The Next Generation WYSIWYG HTML Editor</h1>
              <p className='main-des'>Beautiful JavaScript web editor that's easy to integrate for developers<br></br>
              and your users will simply fall in love with its clean design.</p>
              <div className='button'>
                  <Link to='/sign-up' className='btn-explore'>
                      <a className='btn-inline-ex'>Explore</a>
                  </Link>
                  <Link to='/sign-up' className='btn-download'>
                      <a className='btn-inline-down'>Dwonload</a>
                  </Link>
              </div>
              <div className='feature-img'>
                  <Link to='/'>
                  <img src={require('./components/images/MultiFeatureDemo3.gif')}/>
                  </Link>
              </div>
              <p className='text-bold'>These companies are changing the world, and they use Froala.</p>
          </div>
          <section className='bg-color'>
              <div className='container'>
                  <p className='text-froala'>Why Froala Editor?</p>
                  <div className='froala-section'>
                      <div className='img-1'>
                          <img src={require('./components/images/devs.png')} width="100" height="100" />
                          <p className='edit-title'>Developer friendly</p>
                          <p className='edit-des'>A WYSIWYG HTML editor created by developers, for developers. With a powerful API and documentation you can get started in minutes.</p>
                          <p className='edit-link'><a href="/wysiwyg-editor/docs/overview/">Quick start<i className='fa fa-angle-right icon-after'></i></a></p>
                      </div>
                      <div className='img-2'>
                          <img src={require('./components/images/custom.png')} width="100" height="100" />
                          <p className='edit-title'>Easy to extend</p>
                          <p className='edit-des'>You can literally do anything with the Froala Editor. Well written, structured and documented code is very easy to understand and further extend.</p>
                          <p className='edit-link'><a href="/wysiwyg-editor/docs/overview/">Custom build<i className='fa fa-angle-right icon-after'></i></a></p>
                      </div>
                      <div className='img-3'>
                          <img src={require('./components/images/plugins.png')} width="100" height="100" />
                          <p className='edit-title'>Out of the box plugins</p>
                          <p className='edit-des'>There's no need to reinvent the wheel. Our rich text editor comes with over 30 out of the box plugins to choose from and use in your project.</p>
                          <p className='edit-link'><a href="/wysiwyg-editor/docs/overview/">See plugins<i className='fa fa-angle-right icon-after'></i></a></p>
                      </div>
                  </div>
              </div>
          </section>
          <section className='container'>
              <div className='froala-section inline'>
                  <div><img src={require('./components/images/editor-inline.png')} width="390" height="262"/></div>
                  <div>
                      <p className='inline-title'>Classic and Inline</p>
                      <p className='inline-des'>There's no need to reinvent the wheel. Our rich text editor comes with over 30 out of the box plugins to choose from and use in your project.</p>
                      <Link to='/'>
                          <a className='inline-btn'>Inline Demo</a>
                      </Link>
                  </div>
              </div>
          </section>
          <section className='container block-sec'>
              <p className='text-bold'>Use it right away with your existing tech stack.</p>
              <div className='froala-section'>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/rails.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/react.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/aurelia.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/angular.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/ionic.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/vue.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/yii.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/meteor.png')} width="86" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/django.png')} width="86" height="30"/>
                  </div>
              </div>
              <div className='froala-section'>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/ember.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/knockoutjs.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/cakephp.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/symfony.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/ionic.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/wordpress.png')} width="78" height="30"/>
                  </div>
                  <div className='space-img rails-img'>
                      <img src={require('./components/images/sencha.jpeg')} width="78" height="30"/>
                  </div>
              </div>
          </section>
          <section className='container'>
              <p className='get-started'>Get Started Now</p>
              <p className='heading-des'>Unlimited users and developers no matter which plan you choose.</p>
              <p className='text-small'>For any questions <a className='text-normal' href="/wysiwyg-editor/contact/"><i className='fa fa-envelope'></i></a> contact us or check out our <a  href="https://wysiwyg-editor.froala.help/hc/en-us">Help Center</a>.</p>
              <div className='plan-btn-style'>
                  <Link to='/'>
                      <a className='plan-btn'>See Our Plans</a>
                  </Link>
              </div>
          </section>
      </>
    );
  }
  
  export default Home;