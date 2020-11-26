import styled from 'styled-components';
import backGroundFirst from '../../picture/bigImage4.jpg';
import backGroundSecond from '../../picture/hand_stop_domino2.jpg';
import backGroundThird from '../../picture/agile1.jpg'

export const StyledHome = styled.div`
    border-bottom: 10px solid #FC4349;
    @media screen and (max-width: 768px){
        .slick-dots{
            left: 40%;
        }
        .home_animation-button{
            display: none;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
        .slick-dots{
            left: 30%;
        }
        .home_animation-button{
            display: none;
        }
    }
    @media screen and (min-width: 992px){
        .slick-dots{
            left: 30%;
        }
        .home_animation-button{
            display: flex;
        }
    }
    /* dot css */
    .slick-dots {
        top: 50vh;
        height: 20px;

        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        li{ 
            button{
                border: 2px solid #ffffff;
                border-radius: 50%;

                width: 15px;
                height: 15px;
                position: relative;
                :before{
                    width: 50px;
                    height: 50px;
                    top: -127%;
                    left: -150%;
                    margin: -4px -4px -4px -4px;

                    position: absolute;
                    border-radius: 50%;
                    
                    color: transparent;
                    background-color: transparent;
                                       
                    -webkit-transition: all .6s ease;
                    transition: all .6s ease;
                }
            }
        }
        li.slick-active button:before{
            background-color: #ffffff;

            top: 50%;
            left: 50%;
            width: 9px;
            height: 9px;
        }
    }
    /* animation */
    .slick-active{ 
        div.home_number{
            animation: opacity 1s ease-in both;
            animation-delay: .8s;
        }
        div.home_sub{
            animation: opacity 1s ease-in both, fadeInUp 1s ease-in both;
            animation-delay: 1s;
        }
        div.home_description{
            animation: zoomInDown 1s ease-in both;
            animation-delay: 1.2s;
        }
        div.button_contact{
            animation: opacity .7s ease-in both, fadeInUp .7s ease-in both;
            animation-delay: 1.2s;
        }
        div.button_portfolio{
            animation: opacity .7s ease-in both, fadeInUp .7s ease-in both;
            animation-delay: 1.8s;
        }
    }
    /* background-image dot */
    div.home_home-first{background-image: url(${backGroundFirst});}
    div.home_home-second{background-image: url(${backGroundSecond});}
    div.home_home-third{background-image: url(${backGroundThird});}
    /* main css */
    div.home_home{
        background-color: black;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        height: calc(100vh - 10px);
        width: 100vw;
        color: #ffffff;
        div.home_number{
            font-size: 5em;
            margin-top: 0.8em;
        }
        div.home_noted{
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 1em;
        }
        div.home_title{
            font-size: 48px;
        }
        span{
            width: 30px;
            height: 1px;
        }
        div.home_description{
            font-size: 15px;
            line-height: 30px;
        }
    }
    .home_animation-button{
        bottom: 3em;
        height: 100px;
        .animation-button_cover{
            border: 2px solid #ffffff;
            cursor: pointer;
            height: 50px;
            width: 50px;

            animation: pulse 1s ease-in both;
            animation-iteration-count: infinite;
            +div{
                cursor: pointer;
            }
            i{
                margin-top: 5px;
                animation: bounce 1s ease-in both;
                animation-iteration-count: infinite;
            }
        }
    }
`