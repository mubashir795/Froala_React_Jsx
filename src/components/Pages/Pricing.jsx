import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import Accordian from"./Accordian";
import data from "./data";

function Pricing() {
    const [questions, setquestions] = useState(data);
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1 className='main-heading'>Froala Editor Plans</h1>
                    <p className='text-bold'>Level up your rich text editing today with the plan that best suits your needs</p>
                </div>
            </div>
            <section className='container'>
                <div className='pricing-section'>
                    <div className='pricing-tab-1'>
                        <p className='text-left'>Compare Plans</p>
                        <p className='basic_plan_conatiner'>&nbsp;</p>
                        <p className='basic_plan_type'>&nbsp;</p>
                        <p className='text-small-des'>&nbsp;</p>
                        <div className='btn-group-hide'>
                            &nbsp;
                        </div>
                        <p className='plan-text'>Advantages</p>
                        <p className='tippy-content'>License duration</p>
                        <p className='tippy-content'>Monthly Active Users</p>
                        <p className='tippy-content'>Number of Products</p>
                        <p className='tippy-content'>Number of Domains</p>
                        <p className='tippy-content'>Activation Key</p>
                        <p className='tippy-content'>Free Updates</p>
                        <p className='tippy-content'>Support</p>
                        <p className='tippy-content'>Self-Hosted</p>
                        <p className='tippy-content'>Watermark Free</p>
                        <p className='plan-text'>Usage</p>
                        <p className='tippy-content'>Unminified Source Code</p>
                        <p className='tippy-content'>SaaS / Subscription</p>
                        <p className='tippy-content'>Mobile Apps</p>
                        <p className='tippy-content'>Internal Apps</p>
                        <p className='tippy-content'>Redistribution/OEM</p>
                    </div>
                    <div className='pricing-tab-2'>
                        <p className='text-xlarge-price'>Free Trial</p>
                        <p className='basic_plan_conatiner'>$0</p>
                        <p className='basic_plan_type'>&nbsp;</p>
                        <p className='text-small-des'>Perfect to test drive the editor with no commitments</p>
                        <div className='btn-group'>
                            <Link to='/'>
                                <a className='btn-price-plan'>Start Trial</a>
                            </Link>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='highlight-plan'>1</p>
                        <p className='highlight-plan'>1</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>Community only</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='highlight-plan'>―</p>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                    </div>
                    <div className='pricing-tab-3'>
                        <p className='text-xlarge-price'>Basic</p>
                        <p className='basic_plan_conatiner'>$199</p>
                        <p className='basic_plan_type'>/year</p>
                        <p className='text-small-des'>Perfect to test drive the editor with no commitments</p>
                        <div className='btn-group'>
                            <Link to='/'>
                                <a className='btn-price-plan'>Buy now</a>
                            </Link>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>12 months</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='highlight-plan'>1</p>
                        <p className='highlight-plan'>3</p>
                        <p className='tippy-content-center'>Wildcard</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='highlight-plan'>Community only</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                        <p className='highlight-plan'>―</p>
                    </div>
                    <div className='pricing-tab-4'>
                        <p className='text-xlarge-price'>Professional</p>
                        <p className='basic_plan_conatiner'>$449</p>
                        <p className='basic_plan_type'>/year</p>
                        <p className='text-small-des'>Perfect to test drive the editor with no commitments</p>
                        <div className='btn-group'>
                            <Link to='/'>
                                <a className='btn-price-plan'>Buy now</a>
                            </Link>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>12 months</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='highlight-plan'>1</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='tippy-content-center'>Wildcard</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='highlight-plan'>Included</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='highlight-plan'>―</p>
                    </div>
                    <div className='pricing-tab-5'>
                        <p className='text-xlarge-price'>Enterprise</p>
                        <p className='basic_plan_conatiner'>$999</p>
                        <p className='basic_plan_type'>/year</p>
                        <p className='text-small-des'>Perfect to test drive the editor with no commitments</p>
                        <div className='btn-group'>
                            <Link to='/'>
                                <a className='btn-price-plan'>Buy now</a>
                            </Link>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <p className='highlight-plan'>12 months</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='highlight-plan'>UNLIMITED</p>
                        <p className='tippy-content-center'>Wildcard</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='highlight-plan'>Included</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <p className='plan-text'>&nbsp;</p>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                        <div className='price-icon'>
                            <FaCheck/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h1 className='text-froala-price'>Powering web editing for customers ranging from startups to the world’s largest companies.</h1>
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
            </section>
            <section className='container'>
                <div className='et_section'>
                    <div className='et_section_regular-1'></div>
                    <div className='et_section_regular-2'>
                        <div className='plan-box-row'>
                            <div className='plan-img'>
                                <img src={require('../images/rocket-1.png')} width="117" height="117"/>
                            </div>
                            <div className='plan-img-text'>
                                <h1 className='regular-head'>Ignition discount</h1>
                                <p className='regular-text'>We support new businesses with a 35% discount for the Pro & Enterprise plans. If you have under 50 monthly active users request a discount</p>
                            </div>
                        </div>
                    </div>
                    <div className='et_section_regular-3'></div>
                </div>
            </section>
            <section className='container'>
                <p className='text-bold'>Top WYSIWYG Editor</p>
                <div className='plan-images-1'></div>
                <div className='plan-images-2'>
                    <div className='price-images'>
                        <div className='img-Spring-price'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring-price'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring-price'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                        <div className='img-Spring-price'>
                            <img src={require('../images/G2-Spring.png')} />
                        </div>
                    </div>
                </div>
                <div className='plan-images-3'></div>
            </section>
            <div className='section'>
                <h1 className='price-faq-heading'>FAQ</h1>
            </div> 
            <section className='container'>
                {questions.map((questions) => {
                return <Accordian key={questions.id} {...questions} />;
                })}
            </section>
        </>
    );
}

export default Pricing;