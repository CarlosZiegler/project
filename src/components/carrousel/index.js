import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./style.css";



export default () => (
    <Carousel autoPlay infiniteLoop  >
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/project_derclou.png" alt={"test"} />
            <p className="legend">Projekt Der Clou</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/bsv-oeter.png" alt={"test"} />
            <p className="legend">bsv-oeter</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/alemaner.png" alt={"test"} />
            <p className="legend">alemaner</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/mobileheaderold.png" alt={"test"}/>
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/gorli.png" alt={"test"} />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2019/05/Knobelsdorff-Schule-1.png" alt={"test"} />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2017/10/referenz_inkozell.png" alt={"test"} />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2017/10/referenz_inkozell-lp.png" alt={"test"} />
            <p className="legend">Legend 8</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2017/10/referenz_easylearner.png" alt={"test"} />
            <p className="legend">Legend 9</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2016/10/project_flatmate.png" alt={"test"} />
            <p className="legend">Legend 10</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2016/10/project_lrt.png" alt={"test"} />
            <p className="legend">Legend 11</p>
        </div>
        <div>
            <img src="https://visyu.de/wp-content/uploads/2016/10/project_kepobt-1.png" alt={"test"} />
            <p className="legend">Legend 12</p>
        </div>

    </Carousel>
);


