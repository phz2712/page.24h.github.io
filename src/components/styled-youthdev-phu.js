import styled from 'styled-components';

export const StyledAllYouthDev = styled.div`
    font-size: 14px;
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    .m-text-color{
        color: #FC4349;
    }
    .m-bg-color{
        background-color: #FC4349;
    }
`

export const StyledTopNav = styled.div`
    /* background-color: #1d1d1d; */
    background-color: #333333;
    a:hover{
        text-decoration: none;
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
                }
            }
        }
    }
    a.top-nav_search{
        color:#ffffff;
        text-transform: uppercase;
        font-weight: bold;
        :hover{
            color: #FC4349;
        }
        i{border-left: 1px solid #ffffff;}
        span{}
    }
    div.top-nav_logo img{

    }
`