import React from 'react';

function About() {
    return (
        <section className="about">
            <div className="pb-4 youthdev">
                <div className="container">
                    <div className="row d-flex flex-column flex-md-row-reverse flex-md-nowrap justify-content-between">
                        <div className="col-auto"><span className="m-text-color font-italic youthdev_number">01</span></div>
                        <div className="col-auto d-flex align-items-center">
                            <div className="youthdev_content">
                                <div className="content_introduction">we are youthdev.</div>
                                <div className="m-text-color content_development">We have a passion for development</div>
                            </div>
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="youthdev_description">
                                <div className='w-100 d-flex justify-content-center description_icon'><i className="icon-telescope"></i></div>
                                <div className="w-100 d-flex justify-content-center description">learn</div>
                                <div className="w-100 text-center mb-4 description_description">
                                    Every five years, 
                                    your skills are about half as valuable as they were before. 
                                    There is no doubt that developing and controlling a technology 
                                    product is a forever learning processes. The smarter you are, 
                                    the more opportunity you win.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="youthdev_description">
                                <div className='w-100 d-flex justify-content-center description_icon'><i className="icon-trophy"></i></div>
                                <div className="w-100 d-flex justify-content-center description">build</div>
                                <div className="w-100 text-center mb-4 description_description">
                                    Programming is not like a coder who write 
                                    programming language but we practice knowledge. 
                                    The more you build, the more you fail and the more 
                                    you succeed that why you need an industry expert 
                                    together who not only do your jobs but also tune your direction.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="youthdev_description">
                                <div className='w-100 d-flex justify-content-center description_icon'><i className="icon-presentation"></i></div>
                                <div className="w-100 d-flex justify-content-center description">refactor</div>
                                <div className="w-100 text-center mb-4 description_description">
                                    Refactoring does not generate business value directly 
                                    but it pay your technical debts. Refactoring is not came 
                                    from the technical side only but even processes which make 
                                    your products change adaptive and always ready to follow 
                                    the real business demands.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="py-5 rated">
                <div className="container">
                    <div className='d-flex flex-column justify-content-between flex-md-row-reverse rated_group-title'>
                        <div className='font-weight-bolder text-uppercase group-title_process'>process</div>
                        <div className='group-title_title'>
                            <div className="title_title">how we been rated</div>
                            <div className="font-weight-bolder m-text-color text-uppercase title_detail">this is what customers rate us</div>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className='rated_group-image'>
                                <div  className="w-100 d-flex justify-content-center ct-graphBox ct-graphBox--default">
                                    <div  className="ct-graphBox-graph">
                                        <canvas width="1" height="1" className="ct-js-pieChart" data-ct-percentage="94"
                                        data-ct-middlespace="85" data-ct-secondcolor="#eeeeee" data-ct-firstcolor="#00c5f9"></canvas>
                                        <span className="ct-graphBox-graphPercentage">94%</span>
                                    </div>  
                                </div>    
                                <div className="w-100 text-center rated_information-image">marketable product</div>
                                <div className="py-3 w-100 text-center rated_information_description">
                                    Nowadays modern programming languages and technologies make 
                                    programming easier without real low-level understanding what 
                                    a computer is. In YouthDev, we connect the actual engineers who 
                                    have to understand deeply about data structures and algorithms 
                                    that why we will be able to give our customer a plan to serve a large 
                                    number of users with suitable resources for their Marketable Product 
                                    rather than the Minimum Viable Product version only.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='rated_group-image'>
                                <div  className="w-100 d-flex justify-content-center ct-graphBox ct-graphBox--default">
                                    <div  className=" ct-graphBox-graph">
                                        <canvas width="1" height="1" className="ct-js-pieChart" data-ct-percentage="83"
                                        data-ct-middlespace="85" data-ct-secondcolor="#eeeeee" data-ct-firstcolor="#add260"></canvas>
                                        <span className="ct-graphBox-graphPercentage">83%</span>
                                    </div>  
                                </div>    
                                <div className="w-100 text-center rated_information-image">best practice</div>
                                <div className="py-3 w-100 text-center rated_information_description">
                                    Have you ever think about the picture that a software company 
                                    must be depended completely on other external tools providers. 
                                    Of course building from scratch the whole things is also not a 
                                    good practice, so here, at YouthDev we leverage the benefit of 
                                    opensource products such as redmine, gitlab, proxmox… and keep 
                                    our controlling on developing our internal tools which is so important 
                                    for refactoring our processes continuously.
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='rated_group-image'>
                                <div  className="w-100 d-flex justify-content-center ct-graphBox ct-graphBox--default">
                                    <div  className="ct-graphBox-graph">
                                        <canvas width="1" height="1" className="ct-js-pieChart" data-ct-percentage="74"
                                        data-ct-middlespace="85" data-ct-secondcolor="#eeeeee" data-ct-firstcolor="#ff9673"></canvas>
                                        <span className="ct-graphBox-graphPercentage">74%</span>
                                    </div>  
                                </div>    
                                <div className="w-100 text-center rated_information-image">human capital</div>
                                <div className="py-3 w-100 text-center rated_information_description">
                                    Training and tech sharing within internal team and external 
                                    cooperated partners is our key points for knowledge interchangeable 
                                    and improvable. Daily high-level technologies are good for catching 
                                    up with the world but fundamental low-level knowledge is must have for 
                                    generating new technologies to break the world and making differences.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 stuff">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='stuff_group-title'>
                                <div className="font-weight-bolder stuff_title">we create stuff</div>
                                <div className="text-uppercase stuff_detail_title">software engineer is not a coder</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="py-3 stuff_description">
                                In YouthDev, our mindset is that a good engineer does not like 
                                a translator who translate the human languages to computer languages, 
                                so that why here we have three main levels: coder, programmer and engineer 
                                in which coder is the one who understands how to write code base on documentations 
                                and requirements and of course can use the development tools fluently; programmer 
                                is the one who has to understand data structures and algorithms and basic security 
                                knowledge; the last one engineer has to understand the big picture of a product, 
                                the cooperation between many parts of a system and has a plan for scaling the system.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 fun-fact">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h1 className="my-3 fun-fact_title">fun fact</h1>
                            <div className="my-3 py-3 fun-fact-detail">There are some numbers we have achieved during business.</div>
                            <div className="by-3 py-2 d-flex mt-3 m_button">
                                <div className="px-3 py-2 m-bg-color button_contact">
                                    contact us
                                </div>
                                <div className="px-3 py-2 ml-3 text-dark bg-white button_portfolio">
                                    portfolio
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="py-3 fun-fact_fact">
                                <span className='d-block font-italic w-100 text-center m-text-color'>28</span>
                                <div className="w-100 py-3 text-center text-uppercase fun-fact_label">happy customers</div>
                                <i class="w-100 text-center fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="py-3 fun-fact_fact">
                                <span className='d-block font-italic w-100 text-center m-text-color'>92</span>
                                <div className="w-100 py-3 text-center text-uppercase fun-fact_label">projects we finalized</div>
                                <i class="w-100 text-center fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="py-3 fun-fact_fact">
                                <span className='d-block font-italic w-100 text-center m-text-color'>6</span>
                                <div className="w-100 py-3 text-center text-uppercase fun-fact_label">development awards</div>
                                <i class="w-100 text-center fa fa-trophy" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 treat-customers">
                <div className="container">
                    <div className="py-3 row">
                        <div className="col">
                            <div className="treat-customers_treat">
                                <div className="font-weight-bolder treat_title">we treat customers as a team</div>
                                <div className="py-2 text-uppercase font-weight-bold treat_wonder">ever wondered how we do ?</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="treat-customers_content">
                                <div className="content_content">
                                    Our Agile best practice methodologies is treating customers 
                                    as a team and it is the only way to create the transparent 
                                    processes which also make our customers peace of mind and believe 
                                    in the growing of products.
                                </div>
                                <div className="by-3 py-2 d-flex mt-3 m_button">
                                    <div className="text-white px-3 py-2 m-bg-color button_contact">
                                        contact us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;