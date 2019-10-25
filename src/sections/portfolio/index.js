import React from 'react';
import {Container} from "react-bootstrap";

import Carrousel from "../../components/carrousel"
import "react-responsive-carousel/lib/styles/carousel.css";
import "./style.css"
import {graphql, StaticQuery} from "gatsby";


const portfolio = () => (
    <StaticQuery
        query={graphql`
    query MyQuery {
    allWordpressWpMedia {
        edges {
            node {
                id
                title
                alt_text
                link
            }
        }
    }
}
  `}
        render={data => (
            <div id={"portfolio"}>
            <Container>
            <h3 className="text-center">Portfolio</h3>
            <h5 className="text-center">
            Treffen Sie unsere Arbeitserfahrung von Kunden
            </h5>

            <Carrousel images={data} />

            </Container>
            </div>
        )}
    />
);



export default portfolio;


/*
*/



