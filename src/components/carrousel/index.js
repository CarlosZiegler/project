import React from "react";
import {Carousel} from "react-responsive-carousel";

import "./style.css";

// Filter projects Images from Wordpress API
function filterImages(props) {

    const result =  props.images.allWordpressWpMedia.edges.filter(image => !image.node.alt_text.indexOf('Projekt-'))
    return result;
}

export default (props) => (
    <div>
        <Carousel autoPlay infiniteLoop>
            {

                filterImages(props).map((imagePortfolio) => (

                    <div key={imagePortfolio.node.id}>
                        <img src={imagePortfolio.node.link} alt={imagePortfolio.node.alt_text}/>
                        <p className="legend">{imagePortfolio.node.title}</p>
                    </div>

                ))}
        </Carousel>

    </div>
);


