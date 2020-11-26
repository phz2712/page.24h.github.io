import React from 'react';
import Topnav from './top-nav/top-nav';
import Home from './home/home';
import About from './about/about';

import { StyledAllYouthDev } from './Styled-all-youth-dev';
import { StyledTopNav} from './top-nav/styled-top-nav';
import { StyledHome } from './home/styled-home';
import { StyledAbout } from './about/styled-about';

function Youthdev() {
    return (
        <StyledAllYouthDev>
            {/* header top-nav */}
            <header style={{"zIndex": "3"}} className='w-100 position-fixed'>
                <StyledTopNav>
                    <Topnav></Topnav>
                </StyledTopNav>
            </header>
            <main>
            {/* home */}
                <StyledHome>
                    <Home></Home>
                </StyledHome>
            {/* about */}
                <StyledAbout>
                    <About></About>
                </StyledAbout>
                
            </main>
        </StyledAllYouthDev>
    );
}

export default Youthdev;
