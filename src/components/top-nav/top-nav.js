import React, {useState, useEffect} from 'react';
import LogoYouthDev from '../../picture/logo-youthdev.png';
import styled from 'styled-components';
import $ from 'jquery';

const SearchInput = styled.div`
    display: ${props => props.showSearch ? 'flex' : 'none'};
    z-index: 1;
`

function TopNav() {
    const [showSearch, setShowSearch] = useState(false);
    const searchChange = () => {
        setShowSearch(!showSearch);
    }
    const searchNoFocus = () => {
        setShowSearch(false);
    }
    useEffect(() => {
        $('.top-nav_group-input').on('mousedown',
            function (e) {
                e.preventDefault();
            }
        )
    }, [],);
    return (
        <section className="h-100 top-nav">
            <div className="position-relative h-100 container">
                <div className="row h-100 justify-content-between">
                    <div className="col d-none d-md-flex">
                        <ul className="my-4 list-inline d-flex top-nav_nav-link">
                            <li><a href=" ">home</a></li>
                            <li><a href=" ">about</a></li>
                            <li><a href=" ">services</a></li>
                            <li><a href=" ">portfolio</a></li>
                            <li><a href=" ">blog</a></li>
                            <li><a href=" ">contact</a></li>
                        </ul>
                        <div href=" " onClick={searchChange} className="d-flex align-items-center mx-3 top-nav_search">
                            <i className="pl-3 pr-1 py-1 fas fa-search"></i>
                            <span className="">search</span>
                        </div>
                    </div>
                    <div className="d-flex px-4 justify-content-end align-items-center col">
                        <div className="top-nav_logo">
                            <div className='h-100 d-md-none logo_navbar-icon'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <img src={LogoYouthDev} alt=""></img>
                        </div>
                    </div>
                </div>
                <SearchInput onBlur={searchNoFocus} className="position-absolute top-nav_group-input"
                             showSearch={showSearch}>
                    <input ref={input => input && input.focus()} className="py-2 col px-3 w-75 group-input_input"
                           placeholder="Please type keywords..." type="text"/>
                    <div type='button' className="col-auto px-3 py-2"><i className="fas fa-search"></i></div>
                </SearchInput>
            </div>
        </section>
    );
}

export default TopNav;