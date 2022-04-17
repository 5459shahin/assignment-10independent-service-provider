import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css';
import bannerImg from '../../../images/banner.jpg'


const Banner = () => {
    return (
        <div>
            <div className="banner-img">
                <Card className="bg-dark text-white">
                    <Card.Img className="banner-img" src={bannerImg} alt="Card image" />

                </Card>
            </div>

        </div>
    );
};

export default Banner;