import React from 'react';
import Topnav from './detail-youthdev-component/top-nav';
import {StyledAllYouthDev, StyledTopNav} from './styled-youthdev-phu'

function Youthdev() {
    return (
        <StyledAllYouthDev>
            {/* header top-nav */}
            <header>
                <StyledTopNav>
                    <Topnav></Topnav>
                </StyledTopNav>
            </header>
            
        </StyledAllYouthDev>
    );
}

export default Youthdev;
