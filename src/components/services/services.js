import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useState } from 'react';

const TabCollapse = styled.div`
    position: relative;
    :before{
        font-family: 'Font Awesome\ 5 Free';
        content: '${props => $(props).attr("aria-expanded") ? "\f055" : "\f056"}';
        position: absolute;
        left: 20px;
    };
`
function Services() {
    const [collapse, setCollapse] =useState({
        collapse1: false,
        collapse2: false,
        collapse3: false,
        collapse4: false,
        collapse5: false,
        collapse6: false
    });
    const testHandle=(e)=>{
        const name = e.target.getAttribute('name');
        const stringState = e.target.getAttribute('aria-expanded');
        const booleanState = JSON.parse(stringState);
        setCollapse({[name]: booleanState})
    }

    return(
        <section className="services">
            <div className="promise">
                <div className='container'>
                    <div className="d-flex flex-column flex-md-row-reverse pt-5 row">
                        <div className="col-auto">
                            <div className="d-flex justify-content-center justify-content-md-start font-italic text-white promise_number"><span>03</span></div>
                        </div>
                        <div className="col">
                            <div className="pt-md-5 pb-5 promise_content">
                                <div className="text-center py-2 text-md-left font-weight-bold text-white content_title">the big promise.</div>
                                <div className="text-center text-md-left m-text-color content_believe">We believe in credibility so take us serious</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="py-5 collapse-client">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="collapse-client_group-collapse">
                                <div className="font-weight-bold group-collapse_title">we love our clients.</div> 
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab" 
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse1' 
                                        data-toggle     ="collapse" 
                                        href            ="#q1" 
                                        role            ="button" 
                                        aria-expanded   ={collapse.collapse1} 
                                        aria-controls   ="collapseExample">
                                        transparent process
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q1">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab"
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse2' 
                                        data-toggle     ="collapse" 
                                        href            ="#q2" 
                                        role            ="button" 
                                        aria-expanded   ={collapse.collapse2} 
                                        aria-controls   ="collapseExample">                                        
                                        source version control flow        
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q2">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab" 
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse3' 
                                        data-toggle     ="collapse" 
                                        href            ="#q3" 
                                        role            ="button" 
                                        aria-expanded   ={collapse.collapse3} 
                                        aria-controls   ="collapseExample">
                                        right view for right role
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q3">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab" 
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse4' 
                                        data-toggle="collapse" 
                                        href="#q4" 
                                        role="button" 
                                        aria-expanded={collapse.collapse4} 
                                        aria-controls="collapseExample">
                                        weekly/monthly report
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q4">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>                             
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab" 
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse5'
                                        data-toggle="collapse" 
                                        href="#q5" 
                                        role="button" 
                                        aria-expanded={collapse.collapse5} 
                                        aria-controls="collapseExample">
                                        Objective code qualifying
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q5">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>   
                                <div className="group-collapse_collapse">
                                    <TabCollapse className="collapse-client_title-tab" 
                                        onClick         ={e=>testHandle(e)} 
                                        name            ='collapse6'
                                        data-toggle="collapse" 
                                        href="#q6" 
                                        role="button" 
                                        aria-expanded={collapse.collapse6} 
                                        aria-controls="collapseExample">
                                        Automation testing
                                    </TabCollapse>
                                    <div className="collapse collapse-client_content" id="q6">
                                        <div className="content_descripttion">123</div>
                                        <img src="" alt=""/>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="collapse-client_customer-like">
                                <div className="font-weight-bold customer-like_title">and they love us.</div>
                                <div className="font-weight-bold customer-like_number-like">20290</div>
                                <div className="font-weight-bold customer-like_facebook">facebook</div>
                                <div className="text-uppercase font-weight-bold customer-like_like">likes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trust">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="trust_group-title">
                                <div className="group-title_title">you can trust us.</div>
                                <div className="group-title_ability">some of our abilities</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trust_credibility">
                                <div className="credibility-credibility">credibility</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="trust_cover-content">
                                <div className="cover-content_image"><img src="" alt=""/></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title"></div>
                                    <div className="group-content_description"></div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trust_cover-content">
                                <div className="cover-content_image"><img src="" alt=""/></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title"></div>
                                    <div className="group-content_description"></div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trust_cover-content">
                                <div className="cover-content_image"><img src="" alt=""/></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title"></div>
                                    <div className="group-content_description"></div>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-clients">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="our-client_group-content">
                                <div className="group-content_title">some of our clients.</div>
                                <div className="group-content_detail">they are still going on with us.</div>
                                <div className="group-content_button">
                                    <div className="button_contact">contact us</div>
                                    <div className="button_portfolio">portfolio</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="our-client_carousel"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;