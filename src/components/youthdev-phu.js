import React from 'react';
import Topnav from './detail-youthdev-component/top-nav';
import { StyledTopNav} from './styledComponent/styled-youthdev-phu';
import { StyledAllYouthDev } from './styledComponent/StyledAllYouthDev';

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
