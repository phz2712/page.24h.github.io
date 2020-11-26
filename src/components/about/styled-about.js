import styled from 'styled-components';
import BGRated from '../../picture/bigImage1.jpg';

export const StyledAbout = styled.div`
    
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 768px){}
    @media screen and (min-width: 768px) and  (max-width: 992px) {}
    @media screen and (min-width: 992px){}
    div.youthdev {
        div.youthdev_content {
            div.content_introduction {
                font-size: 5.3em;
            }
            div.content_development {
                font-size: 3.5em;
                font-weight: 300;
            }
        }
        .youthdev_number{
            font-family: 'Farsan', cursive;
            font-size: 14em;
        }
        div.youthdev_description {
            div.description_icon {
                color: black;
                font-size: 100px;
                i {}
            }
            div.description {
                font-size: 30px;
                font-weight: 600;
            }
            div.description_description {
                font-family: 'Open Sans', sans-serif;
                line-height: 30px;
                font-size: 15px;
            }
        }
    }

    div.rated {
        background-image: url(${BGRated}); 
        background-attachment: fixed;
        div.rated_group-title {
            div.group-title_title {
                div.title_title {
                    font-size: 48px;
                }
                div.title_detail {
                    font-size: 14px;
                }
            }
            div.group-title_process {
                font-size: 80px;
                color: #eeeeee
            }
        }
        div.rated_group-image {
            div.ct-graphBox.ct-graphBox--default {
                div.ct-graphBox-graph {
                    position: relative;
                    width: 200px;
                    canvas.ct-js-pieChart {
                        
                    }
                    span.ct-graphBox-graphPercentage {
                        position: absolute;
                        left: calc(50% - 49px);
                        top: calc(50% - 37px);
                        font-size: 50px;
                        font-family: 'Open Sans', sans-serif;
                        color: #555555;
                    }
                }
            }
            div.rated_information-image {
                font-size: 30px;
            }
            div.rated_information_description {
                font-size: 15px;
                line-height: 30px;
            }
        }
    }

    div.stuff {   
        .stuff_group-title {   
            div.stuff_title {
                font-size: 48px;
            }
            div.stuff_detail_title {
                font-size: 14px;
                font-weight: 600;
            }   
        }
        .stuff_description{
            line-height: 30px;
            font-size: 15px;
        }
    }

    div.fun-fact {
        background-color: #222222;
        color: #ffffff;

        h1.fun-fact_title {
            font-weight: 600;
            font-size: 48px;
        }
        div.fun-fact-detail {
            font-size: 15px;
        }
        div.fun-fact_fact {
            span {
                font-size: 140px;
                font-family: 'Farsan', cursive;
                line-height: 0.7;
            }
            div.fun-fact_label {
                font-size: 20px;
                font-weight: 700px;
            }
            i {
                font-size: 50px;
            }
        }
   
    }

    div.treat-customers {
        div.treat-customers_treat {
            div.treat_title {
                font-size: 48px;
                line-height: 50px;
            }
            div.treat_wonder {}
        }
        div.treat-customers_content{
            div.content_content{
                font-size: 15px;
                line-height: 2em;
                color: #555555;
            }
        }
    }
`