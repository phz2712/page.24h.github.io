import styled from 'styled-components';

export const StyledAllYouthDev = styled.div`
    
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 768px){
        font-size: 5px;
    }
    @media screen and (min-width: 768px) and  (max-width: 992px) {
        font-size: 10px;
    }
    @media screen and (min-width: 992px){
        font-size: 15px;
    }
    main{
        text-align: left;
    }
    .m-text-color{
        color: #FC4349;
    }
    .m-bg-color{
        background-color: #FC4349;
    }
    @keyframes opacity {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes fadeInUp{
        from{
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 60%, 0);
        }
        to{
            -webkit-transform: none;
            transform: none;
        }
    }
    @keyframes zoomInDown{
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(.55, .055, .675, .19);
            animation-timing-function: cubic-bezier(.55, .055, .675, .19);
        }
        60% {
            opacity: 1;
            -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 1);
            animation-timing-function: cubic-bezier(.175, .885, .32, 1);
        }
    }
    @keyframes pulse{
        0% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        50% {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
        100% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
        40% {
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        60% {
            -webkit-transform: translateY(-15px);
            -ms-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }
`