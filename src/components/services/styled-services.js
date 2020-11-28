import styled from 'styled-components';

export const StyledServices = styled.div`

    @media screen and (max-width: 768px){}
    @media screen and (min-width: 768px) and (max-width: 992px) {}
    @media screen and (min-width: 992px){}
    section.services{
        div.promise {  
            background-color: #222222;                 
            div.promise_content {
                div.content_title {
                    font-size: 5em;
                    line-height: 1;
                }
                div.content_believe {
                    font-size: 50px;
                    font-weight: 300;
                    line-height: 1;
                }
            }
            div.promise_number {
                span {
                    font-family: 'Farsan', cursive;
                    font-size: 14em;
                    line-height: 1;
                }
            }            
        }      
        div.collapse-client {  
            overflow: hidden;
            position: relative;
            ::after {
                position: absolute;        
                top: -25px;
                width: 140%;
                left: -20%;
                height: 50px;

                content: "";
                background-color: #333333;
                transform: rotate(-1.3deg);
            }   
            div.collapse-client_group-collapse {
                div.group-collapse_title {
                    font-size: 48px;
                }
                div.group-collapse_collapse {
                    div.collapse-client_title-tab {}
                    div.collapse-client_content {
                        div.content_descripttion {}
                        img {}
                    }
                }
            }
            div.collapse-client_customer-like {
                div.customer-like_title {
                    font-size: 48px;
                }
                div.customer-like_number-like {
                    font-size: 60px;
                    font-family: 'Open Sans',sans-serif;
                    color: #AAAAAA;
                }
                div.customer-like_facebook {
                    font-size: 30px;
                    color: #3B5998;
                }
                div.customer-like_like {
                    font-size: 14px;
                    color: #AAAAAA;
                }
            }
        }   
        div.trust {
            div.trust_group-title {
                div.group-title_title {}
                div.group-title_ability {}
            } 
            div.trust_credibility {
                div.credibility-credibility {}
            }
            div.trust_cover-content {
                div.cover-content_image {
                    img {}
                }
                div.cover-content_group-content {
                    div.group-content_title {}
                    div.group-content_description {}
                    img {}
                }
            }
        }
        div.our-clients {
            div.our-client_group-content {
                div.group-content_title {}
                div.group-content_detail {}                
            }
            div.our-client_carousel{}        
        }
    }
`