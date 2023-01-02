import React from 'react';
import { Link } from 'react-router-dom';

function Toolbar() {
    return (
        <>
            <section className='container'>
                <div className='unbounce-section'>
                    <div className='unbounce-left'>
                        <div class="accordian-tab">
                            <button class="accordion">Getting Started</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Browser Support</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Languages Support</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Shortcuts</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Activation</button>
                        </div>
                        <div class="accordian-tab">
                            <button class="accordion">Examples</button>
                        </div>
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
                    </div>
                    <div className='unbounce-right left-space'>
                        <h2 class="toolbar-title">Toolbar</h2>
                        <h3 class="title-left-border toolbar-head">Toolbar Offset</h3>
                        <p class="closeio-des">The toolbarStickyOffset option is useful if you have toolbarSticky: true and you need the toolbar not to go all the way to the top of the page. E.g. you have a sticky header on the page and the editor's toolbar should remain below the header.</p>
                        <p class="closeio-des">The toolbarStickyOffset option also works when toolbarBottom option is set to true. In this case the offset is relative to the bottom of the page.</p>
                        <h3 class="toolbar-bold"><b>Try it yourself:</b></h3>
                        <form>
                            <textarea class="form-control" rows="3"></textarea>
                        </form>
                        <p><b>Dummy text to enable scroll.</b></p>
                        <p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare lorem ut pellentesque tempor. Vivamus ut ex vestibulum velit rich text editor eleifend fringilla. Sed non metus dictum, elementum mauris wysiwyg html editor non, sagittis odio. Nullam pellentesque leo sit amet ante suscipit wysiwyg html editor sagittis. Donec tempus vulputate suscipit. Ut non felis rich text editor ac dolor pulvinar lacinia eu eget urna. Sed tincidunt sapien vulputate tellus fringilla sodales. Morbi accumsan dui wysiwyg html editor sed massa pellentesque, quis vestibulum lectus scelerisque. Nulla ultrices mi id felis luctus aliquet. Donec nec ligula wysiwyg html editor pretium sapien semper dictum eu id quam. Etiam ut sollicitudin nibh. Quisque eu ultrices dui. Nunc rich text editor congue, enim vitae dictum dignissim, libero nisl sagittis augue, non aliquet nibh tortor sit amet ex. Aliquam cursus maximus rich text editor mi eu consequat. Nullam tincidunt erat et placerat mattis. Nunc rich text editor congue, enim vitae dictum dignissim, libero nisl sagittis augue, non aliquet nibh tortor sit amet ex. Aliquam cursus maximus mi eu consequat. Nullam tincidunt erat et placerat mattis.</p></p>
                        <p class="closeio-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare lorem ut pellentesque tempor. Vivamus ut ex vestibulum velit rich text editor eleifend fringilla. Sed non metus dictum, elementum mauris wysiwyg html editor non, sagittis odio. Nullam pellentesque leo sit amet ante suscipit wysiwyg html editor sagittis. Donec tempus vulputate suscipit. Ut non felis rich text editor ac dolor pulvinar lacinia eu eget urna. Sed tincidunt sapien vulputate tellus fringilla sodales. Morbi accumsan dui wysiwyg html editor sed massa pellentesque, quis vestibulum lectus scelerisque. Nulla ultrices mi id felis luctus aliquet. Donec nec ligula wysiwyg html editor pretium sapien semper dictum eu id quam. Etiam ut sollicitudin nibh. Quisque eu ultrices dui. Nunc rich text editor congue, enim vitae dictum dignissim, libero nisl sagittis augue, non aliquet nibh tortor sit amet ex. Aliquam cursus maximus rich text editor mi eu consequat. Nullam tincidunt erat et placerat mattis. Nunc rich text editor congue, enim vitae dictum dignissim, libero nisl sagittis augue, non aliquet nibh tortor sit amet ex. Aliquam cursus maximus mi eu consequat. Nullam tincidunt erat et placerat mattis.</p>
                        <div class="btn-inline toolbar-btn"><a class="plan-btn" href="#contact">Edit in JSFiddle</a></div>
                        <h3 class="text-light text-xxlarge">HTML</h3>
                        <pre id="tlbar_offst_copy_1" class="prettyprint linenums:1 hljs xml">
                            <div id="froala-editor">
                            <p><strong>Dummy text to enable scroll.</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </pre>
                        <h3 class="text-light text-xxlarge">JAVASCRIPT</h3>
                        <pre id="tlbar_offst_copy_1" class="prettyprint linenums:1 hljs xml">
                            <div id="froala-editor">
                                <p><strong>Dummy text to enable scroll.</strong></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                        </pre>
                    </div>
                </div>
            </section>
        </>             
    );
}

export default Toolbar;