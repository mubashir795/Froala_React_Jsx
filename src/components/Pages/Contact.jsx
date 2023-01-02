import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='centerlized-img'>
                        <img src={require('../images/froala.png')} width="285" height="140"/>
                    </div>
                    <p className='text-froala top-space'>We would love to hear from you!</p>
                    <p className='heading-des'>The Help Center page may answer your question faster. Don't forget to check it out.</p>
                    <p>If you wish to contact with our sales team, You can email support@froala.com directly.</p>
                    <form>
                        <label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="First Name*" />
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Last Name" />
                            <select id="field5" required="" name="Country" class="form-control" autocomplete="nope">
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                            </select>
                            <textarea class="form-control" rows="3"></textarea><br/>
                            <div className='sencha_button'>
                                <Link to='/sign-up' className='btn-explore'>
                                    <a className='btn-onliline-ex'>Send</a>
                                </Link>
                            </div>
                        </label>
                    </form>
                    <p className='contact-text'>We're social</p>
                    <p className='contact_social_text'>10801 N Mopac Expressway, Suite 100</p>
                    <p className='contact_social_text'>Austin Texas 78759</p>
                </div>
            </div>
        </>   
  );
}

export default Contact;