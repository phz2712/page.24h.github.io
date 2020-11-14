import React from 'react';
import LogoYouthDev from '../../picture/logo-youthdev.png'

function TopNav() {
    return (
            <section className="top-nav">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col d-flex">
                            <ul className="my-4 list-inline d-flex top-nav_nav-link">
                                <li><a href=" ">home</a></li>
                                <li><a href=" ">about</a></li>
                                <li><a href=" ">services</a></li>
                                <li><a href=" ">portfolio</a></li>
                                <li><a href=" ">blog</a></li>
                                <li><a href=" ">contact</a></li>
                            </ul>
                            <a href=" " className="d-flex align-items-center mx-3 top-nav_search">
                                <i class="px-3 py-1 fas fa-search"></i>
                                <span className="">search</span>
                            </a>
                        </div>
                        <div className="d-flex justify-content-end align-items-center col">
                            <div className="top-nav_logo">
                                <img src={LogoYouthDev} alt=""></img>                         
                            </div>
                        </div>
                    </div>
                    <div className="top-nav_group-input">
                        <input placeholder="please type keywords..." type="text" className="group-input_input"/>
                        <i className="fas fa-search"></i>
                        </div>
                </div>
            </section>
    );
}

export default TopNav;