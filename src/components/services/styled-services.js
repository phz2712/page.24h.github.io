import styled from 'styled-components';

export const StyledServices = styled.div`

    @media screen and (max-width: 768px){
        .collapse-client_content {
            margin-left: 7px;
        }
        .collapse-client_title-tab {
            padding: 20px 20px 20px 20px;
            :before{
                left: calc(50% - 14px);
                top: -15px;
            }
        }
        div.credibility-credibility {
            font-size: 50px
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        .collapse-client_content {
            margin-left: 60px;
        }
        .collapse-client_title-tab {
            padding: 20px 20px 20px 60px;
            :before{
                left: 20px;
            }
        }
        div.credibility-credibility {
            font-size: 80px
        }
    }
    @media screen and (min-width: 992px){
        .collapse-client_content {
            margin-left: 60px;
        }
        .collapse-client_title-tab {
            padding: 20px 20px 20px 60px;
            :before{
                left: 20px;
            }
        }
        div.credibility-credibility {
            font-size: 80px;
        }
    }
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
            background-color: #fbfbfb;
            border-bottom: 1px solid #ddd;
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
                    .collapse-client_title-tab {
                        font-size: 28px;
                        font-weight: bold;
                        display: block;

                        border: solid 1px #d3d3d3;
                        margin: 0.2em;
                    }
                    div.collapse-client_content {
                        margin-right: 7px;
                        margin-top: 5px;

                        background-color: #f9f9f9;
                        border: 1px solid #d3d3d3;

                        -webkit-transition: all .17s ease;
                        transition: all .17s ease;
                        div.content_descripttion {
                            color: #555555;
                            font-size: 15px;
                            line-height: 2em;
                        }
                        img {
                            width: 100%;
                        }
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
                    line-height: 1;
                }
                div.customer-like_facebook {
                    font-size: 30px;
                    color: #3B5998;
                    line-height: 1;
                }
                div.customer-like_like {
                    font-size: 14px;
                    color: #AAAAAA;
                }
            }
        }   
        div.trust {
            div.trust_group-title {
                div.group-title_title {
                    font-size: 47px;
                }
                div.group-title_ability {
                    font-size: 14px;
                }
            } 
            div.trust_credibility {
                div.credibility-credibility {
                    color: #eeeeee;
                }
            }
            div.trust_cover-content {
                div.cover-content_image {                    
                    div{
                        border-radius: 50%;
                        border: 2px solid #222222;
                        padding: 8px;
                        width: 42px;
                        height: 42px;
                        i {font-size: 20px;}
                    }
                }
                div.cover-content_group-content {
                    div.group-content_title {
                        font-size: 30px;
                        font-weight: 600;
                    }
                    div.group-content_description {
                        color: #555555;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                }
            }
        }
        div.our-clients {
            background-color: #222222;
            color: #ffffff;
            div.our-client_group-content {
                div.group-content_title {
                    font-size: 48px;
                }
                div.group-content_detail {
                    font-size: 15px;
                }                
            }
            div.our-client_carousel{
                ul {
                    li {
                        div{
                            border: 2px solid #fff;
                            border-radius: 50%;
                            height: 164px;
                            width: 164px;
                        }
                    }
                }
                div.carousel_arrow {
                    a {
                        i {
                            font-size: 40px;
                            color: #ffffff;
                        }
                    }
                }
            }        
        }
    }
`