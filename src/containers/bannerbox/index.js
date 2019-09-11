import React from 'react';

import BannerWrapper from './bannerBox.style';
import {Button, Col} from "react-bootstrap";


const content = {
    "branche":"LÖSUNGEN FÜR'S WEB UND MOBIL"

}

const BannerBox = () => {
    return (
        <div  style={{
            paddingLeft: "14%",
        }}>
        <BannerWrapper>

            <Col lg={4}>
            <h3>{content.branche}</h3>

            </Col>
            <Col lg={4}><p>Wir bieten Ihnen Lösungen für jedes Endgerät. Egal ob Desktop, Laptop, TV oder mobil. Unsere Web-
               und App-Lösungen passen zu Ihren Bedürfnissen.</p>


            </Col>
            
            <Col lg={6}>
                <p>Interesse an einer professionellen WordPress-Website?</p>
                <Button className="button__wrapper" variant="outline-primary">Jetzt Kontaktieren</Button>
            </Col>
        </BannerWrapper>
        </div>
    );
};

export default BannerBox;
