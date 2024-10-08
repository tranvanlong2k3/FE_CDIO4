import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import Medical from "./Section/Medical";
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // slickGoTo: this.handleAfterChange
        };

        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Specialty 
                    settings = {settings} 
                />
                <Medical 
                    settings = {settings} 
                />
                <OutStandingDoctor 
                    settings = {settings}
                />
                <HandBook 
                    settings = {settings}
                />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
