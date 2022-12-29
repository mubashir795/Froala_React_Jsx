import React from 'react';
import { Link } from 'react-router-dom';

function Artstation() {
    return (
        <>
            <section className='container'>
                <div className='unbounce-section'>
                    <div className='unbounce-left'>
                        <img src={require('../images/artstation.png')} width="185" height="33" />
                        <p className='closeio-sidebar-text'>Before Froala, we had been through 5 different editors. Every single editor failed us in some way.</p>
                        <Link to='/'>
                            <a className='unbounce-text-link'>Leonard Teo</a>
                        </Link>
                        <p className='closeio-sidebar-text'>Head of Product/Engineering</p>
                        <h3 className='text-xxlarge'>Why Froala?</h3>
                        <ul className='unbounce-bullets'>
                            <li>Worked out of the box</li>
                            <li>Developer documentation is great</li>
                            <li>Code is well architected and documented</li>
                            <li>Slim - only add the plugins that you need</li>
                            <li>Simple to extend</li>
                            <li>Well maintained</li>
                            <li>Has many integrations</li>
                        </ul>
                    </div>
                    <div className='unbounce-right'>
                        <h1 className='closeio-heading'>Fantastic architecture. Simple to extend.</h1>
                        <p className='closeio-title'>About ArtStation</p>
                        <p className='closeio-des'>ArtStation is the leading showcase platform for artists working in the games, film, media & entertainment industry. The platform is used by major studios such as Riot Games (League of Legends), Blizzard Entertainment (World of Warcraft), Industrial Light & Magic (Star Wars) to source talented artists.</p>
                        <div className='closeio-img-one'>
                            <img src={require('../images/unbounce-swags.jpeg')} width="760" height="505" />
                        </div>
                        <p className='closeio-des'>The great value ArtStation creates is due to the fact that all decisions regarding software are grounded in providing the best business value and impact for their customers. They make this possible thanks to being a bootstrapped and profitable company that did not get any venture capital funding.</p>
                        <p className='closeio-des'>In 3 years, ArtStation has grown into the premier platform with almost 3 million unique visitors every month and hundreds of thousands of registered members.</p>
                        <blockquote>
                            <p className='text-xlarge'><em>The way we are using Froala is quite unique because it is very media heavy.</em></p>
                            <p className='unbounce-text-tint'>— Leonard Teo</p>
                        </blockquote>
                        <p className='closeio-title'>ArtStation & Froala</p>
                        <p className='closeio-des'>In many places of the application, they needed a WYSIWYG editor that enables our users to write formatted content along with all kinds of media such as images, video embeds (YouTube, Vimeo), Sketchfab 3D embed, Marmoset Viewer 3D uploads and in the future they are looking to support 360 panos and other media types.</p>
                        <blockquote>
                            <p className='text-xlarge'><em>Within one week, I was able to create the custom uploaders to integrate with our application.</em></p>
                            <p className='unbounce-text-tint'>— Leonard Teo</p>
                        </blockquote>
                        <div className='closeio-img-two'>
                            <div className='unbounce-section'>
                                <div className='unbounce-row-images'>
                                    <img src={require('../images/artstation-marmoset.jpeg')} width="365" height="222" />
                                </div>
                                <div className='unbounce-row-images'>
                                    <img src={require('../images/artstation-sketchfab.jpeg')} width="365" height="222" />
                                </div>
                            </div>
                            <p className='closeio-des'>Technology-wise, the ArtStation is a Ruby on Rails application. Froala is being used on both a traditional HTML view + Javascript, as well as in AngularJS parts of the website that are running as a single page application.</p>
                            <blockquote>
                                <p className='text-xlarge'><em>We’re really happy that Froala came out of the box with the AngularJS directive ready to use.</em></p>
                                <p className='unbounce-text-tint'>— Leonard Teo</p>
                            </blockquote>
                            <p className='closeio-des'>"Before Froala, we had been through 5 different editors. Every single editor failed us in some way. It was really bad. Whether it was being able to copy/paste content from MS Word without problems, or being able to develop custom media types/uploaders, or just work in AngularJS, every editor we tested in production did not work well."</p>
                            <p className='closeio-des'>After going through all those other editors, they found Froala: "I was really pleasantly surprised by how well it worked out of the box. The developer documentation was great. The best part was seeing the code for it. It is well architected and simple to extend."</p>
                            <blockquote>
                                <p className='text-xlarge'><em>Everything in Froala is a plugin already, so to extend it, you can take an existing plugin and use that as starting point for creating your own plugin.</em></p>
                                <p className='unbounce-text-tint'>— Leonard Teo</p>
                            </blockquote>
                            <p className='closeio-des'>"ArtStation enables artists to showcase their portfolios in a slick way and studios can search for artists and hire them via the platform. A WYSIWYG HTML editor in such a media heavy application is a tough job, but Froala Editor’s engineering came up to meet the expectations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>             
    );
}

export default Artstation;