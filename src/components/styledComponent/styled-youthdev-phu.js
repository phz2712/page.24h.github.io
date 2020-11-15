import styled from 'styled-components';


export const StyledTopNav = styled.div`
    /* background-color: #1d1d1d; */
    background-color: #333333;
    height: 4rem;
    @media screen and (max-width: 768px){
        div.top-nav_logo img{
            display: none;
        }
        .container{
            max-width: 100%;
        }
    }
    @media screen and (min-width: 768px) and  (max-width: 992px) {
        div.top-nav_logo img{
            width: 60%;
        }
        .top-nav_search span{
            display: none;
        }
    }
    @media screen and (min-width: 992px){
        div.top-nav_logo img{
            width: 90%
        }
    }
    
    ul.top-nav_nav-link{
        li{
            a{
                margin-left: 0.7em;
                font-weight: bold;
                text-transform: uppercase;
                color: #ffffff;
                :hover{
                    color: #FC4349;
                    text-decoration: none;
                }
            }
        }
    }
    div.top-nav_search{
        color:#ffffff;
        text-transform: uppercase;
        font-weight: bold;
        :hover{
            color: #FC4349;
        }
        i{border-left: 1px solid #ffffff;}
        span{}
    }
    div.top-nav_logo{ 
        img{}
        .logo_navbar-icon{
            /* width: 30px;
            height: 30px; */
            span{
                display: block;
                width: 20px;
                height: 2px;
                margin: 4px 0;
                background-color: #ffffff;
            }
        }
    }
    div.top-nav_group-input{
        width: 98%;
        font-size: 2.5em;
        font-weight: 300;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        input{
            border-radius: 0px;
            border: none;
            :focus{
                outline: none;
            }
            ::placeholder {
                color: black;
                opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: black;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
                color: black;
            }
        }
        div{
            background-color: #eeeeee;
            color: #cccccc;
            width: 2.3em;
            height: 2em;
            cursor: pointer;
            margin-top: 2px;
        }
    }
`