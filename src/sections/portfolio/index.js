import React from 'react';
import {Container} from "react-bootstrap";

import Carrousel from "../../components/carrousel"
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css"
import {graphql, StaticQuery} from "gatsby";


const ImagesWP = () => (
    <StaticQuery
        query={graphql`
    query MyQuery {
    allWordpressWpMedia {
        edges {
            node {
                id
                title
                link
            }
        }
    }
}
  `}
        render={data => (
            <div>
                {console.log(data)}
            </div>)
        }
    />
);

const portfolio = () => {

    return (
        <div id={"portfolio"}>
        <Container>
            <h3 className="text-center">Portfolio</h3>
            <h5 className="text-center">
                Treffen Sie unsere Arbeitserfahrung von Kunden
            </h5>

            <Carrousel/>
        <ImagesWP/>
        </Container>
        </div>
    );
};


export default portfolio;


/*
*/



