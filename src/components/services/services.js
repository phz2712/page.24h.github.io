import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import { useState } from 'react';

const TabCollapse = styled.div`
    position: relative;
    background-color: ${props => $(props).attr("aria-expanded") ? "#FC4349" : "#ffffff"};
    color: ${props => $(props).attr("aria-expanded") ? "#ffffff" : "#222222"};
    :before{
        font-family: 'Font Awesome\ 5 Free';
        content: '${props => $(props).attr("aria-expanded") ? "\f056" : "\f055"}';
        position: absolute;
    };
    @media screen and (min-width: 768px){
        padding: 20px 20px 20px 60px;
        :before{
            left: 20px;
        }
    }
    @media screen and (max-width: 768px){
        padding: 20px 20px 20px 20px;
        :before{
            left: calc(50% - 14px);
            top: -15px;
        }
    }
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
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q1">
                                        <div className="py-2 content_descripttion">
                                            Customers can easily access our project management system base on 
                                            redmine and can easily to cooperate remotely with the team and 
                                            understand what is going on.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_transparent-process.png')} alt=""/>
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
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q2">
                                        <div className="py-2 content_descripttion">
                                            Source version control is not just a remote system to store 
                                            and share the source code but it’s a perfect way for version 
                                            management. A good flow will allow development team to immediately 
                                            implement a quick fix on current production version while in new version development.                                                                               
                                        </div>
                                        <div className="py-2 content_descripttion">
                                            We follow gitflow process and use internal private git system customized on 
                                            gitlab which also provide docker registry management feature that why there 
                                            is not need to concern about leaking project source code due to using public 
                                            or free third party source control service like github or dockerhub…
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_control-flow.png')} alt=""/>
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
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q3">
                                        <div className="py-2 content_descripttion">
                                            Every role need a different way and different view to cooperate 
                                            with other members in a agile project. Our project management 
                                            system provides a high level for stories management and sprint 
                                            management for product owners/managers.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_right-role-1.jpg')} alt=""/>
                                        <div className="py-2 content_descripttion">
                                            And we don’t forget a super high level for business level or non-tech level management members.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_right-role-2.jpg')} alt=""/>
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
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q4">
                                        <div className="py-2 content_descripttion">
                                            Our process can generate clarify weekly report the amount 
                                            of worked time or story point visualized by burndown chart.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_monthly-report-1.png')} alt=""/>
                                        <div className="py-2 content_descripttion">
                                            As same as strictly and transparent team operations to customers 
                                            who want YouthDev to help to reduce the pains of human resource 
                                            or software development management.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_monthly-report-2.jpg')} alt=""/>
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
                                        objective code qualifying
                                    </TabCollapse>
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q5">
                                        <div className="py-2 content_descripttion">
                                            Worry-free about your product’s source code quality and 
                                            source code structure quality because we do static analysis 
                                            base on standards and trustable qualification methods.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_code-qualifying-1.jpg')} alt=""/>
                                        <div className="py-2 content_descripttion">
                                            Worry-free about transfering or switching technical solution 
                                            vendor our even building your in-house team later. All bad things 
                                            that affect your product development are measurable and transparent.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_code-qualifying-2.jpg')} alt=""/>
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
                                        automation testing
                                    </TabCollapse>
                                    <div className="px-3 py-3 collapse collapse-client_content" id="q6">
                                        <div className="py-2 content_descripttion">
                                            We don’t charge customers for 80% cost of doing testing because it is 
                                            automated here. Don’t worry about the super fast growing of your product 
                                            and it’s features, automation testing with a right good integrating to CI/CD 
                                            system make every small change of code become a release candidate.
                                        </div>
                                        <img className='py-2' src={require('../../picture/services_automation-test.jpg')} alt=""/>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="collapse-client_customer-like">
                                <div className="font-weight-bold customer-like_title">and they love us.</div>
                                <div className='mt-3 d-flex flex-md-column'>
                                    <div className="font-weight-bold customer-like_number-like">20290</div>
                                    <div className='pl-1 pl-md-0 d-flex flex-column justify-content-center'>
                                        <div className="font-weight-bold customer-like_facebook">facebook</div>
                                        <div className="text-uppercase font-weight-bold customer-like_like">likes</div>
                                    </div>
                                </div>
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
                                <div className="font-weight-bold group-title_title">you can trust us.</div>
                                <div className="text-uppercase font-weight-bold m-text-color group-title_ability">some of our abilities</div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trust_credibility">
                                <div className="font-weight-bold text-uppercase credibility-credibility">credibility</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="d-flex flex-column flex-md-row trust_cover-content">
                                <div className="mr-3 mb-4 cover-content_image"><div><i className="far fa-thumbs-up"></i></div></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title">high availability</div>
                                    <div className="my-2 group-content_description">
                                        Don’t you ever care about the fact that your system now is containing 
                                        a point of death even a technical or human resource problem which will 
                                        break your business in the not too long distance future. Right here, 
                                        YouthDev always have a solution.                                    
                                    </div>
                                    <img src={require('../../picture/services_high-availability.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="d-flex flex-column flex-md-row trust_cover-content">
                                <div className="mr-3 mb-4 cover-content_image"><div><i className='fa fa-leaf'/></div></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title">ci/cd</div>
                                    <img src={require('../../picture/services_ci.png')} alt=""/>
                                    <div className="my-2 group-content_description">
                                        Let the developers do their actual jobs: developing. Therefore, have you 
                                        ever think about how can the big products over the world can generate many 
                                        up to hundred revisions per release. Our experiences in CI/CD will do it that 
                                        bring customers to nightly builds.
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="d-flex flex-column flex-md-row trust_cover-content">
                                <div className="mr-3 mb-4 cover-content_image"><div><i className='fa fa-trophy'/></div></div>
                                <div className="cover-content_group-content">
                                    <div className="group-content_title">computer science</div>
                                    <div className="my-2 group-content_description">
                                        Have you ever think that your product will grow and quickly reach the high 
                                        technologies solution such as: artificial intelligent, big data, computer 
                                        vision… No need for trying to find out other external providers, right here 
                                        we will take your ideas into effect.
                                    </div>
                                    <img src={require('../../picture/services_ai.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-clients">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="our-client_group-content">
                                <div className="font-weight-bold group-content_title">some of our clients.</div>
                                <div className="group-content_detail">they are still going on with us.</div>
                                <div className="d-flex mt-3 m_button">
                                    <div className="px-3 py-2 m-bg-color button_contact">
                                        contact us
                                    </div>
                                    <div className="px-3 py-2 ml-3 text-dark bg-white button_portfolio">
                                        portfolio
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="our-client_carousel">
                                <div className='group_newsDoanhNghiep uk-position-relative uk-visible-toggle' uk-slider="autoplay: true; autoplay-interval: 3000">

                                    <ul className="uk-slider-items uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-4@m">
                                        <li>
                                            <img src="https://getuikit.com/docs/images/slider1.jpg" alt=""/>
                                            <div class="uk-position-center uk-panel"><h1>1</h1></div>
                                        </li>
                                        <li>
                                            <img src="https://getuikit.com/docs/images/slider2.jpg" alt=""/>
                                            <div class="uk-position-center uk-panel"><h1>2</h1></div>
                                        </li>
                                        <li>
                                            <img src="https://getuikit.com/docs/images/slider3.jpg" alt=""/>
                                            <div class="uk-position-center uk-panel"><h1>3</h1></div>
                                        </li>
                                        <li>
                                            <img src="https://getuikit.com/docs/images/slider4.jpg" alt=""/>
                                            <div class="uk-position-center uk-panel"><h1>4</h1></div>
                                        </li>
                                        <li>
                                            <img src="https://getuikit.com/docs/images/slider5.jpg" alt=""/>
                                            <div class="uk-position-center uk-panel"><h1>5</h1></div>
                                        </li>                                   
                                    </ul>

                                {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Services;