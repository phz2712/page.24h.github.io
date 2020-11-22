import React from 'react';
import Topnav from './detail-youthdev-component/top-nav';
import Home from './detail-youthdev-component/home'
import { StyledTopNav} from './styledComponent/styled-top-nav';
import { StyledHome } from './styledComponent/styled-home';
import { StyledAllYouthDev } from './styledComponent/Styled-all-youth-dev';

function Youthdev() {
    return (
        <StyledAllYouthDev>
            {/* header top-nav */}
            <header>
                <StyledTopNav>
                    <Topnav></Topnav>
                </StyledTopNav>
            </header>
            <main>
            {/* home */}
                <StyledHome>
                    <Home></Home>
                </StyledHome>
            </main>
        </StyledAllYouthDev>
    );
}

export default Youthdev;
