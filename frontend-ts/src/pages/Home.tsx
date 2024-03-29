import React from "react";

import Typewriter from 'typewriter-effect';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import "../styles/Home.css";

const Home: React.FC = () => {    
    return (
        <div className="home">
            <div className="about">
                <LazyLoadImage
                    src="https://res.cloudinary.com/dbdacfhye/image/upload/v1686461184/Portfolio/profile.png"
                    alt="profile"
                    effect="blur"
                    className="profileImage"
                />
                <div className="prompt">
                    <h2> Hi, I am James-Bond. </h2> <h3> Software Engineer </h3>
                    <p> Clean, simple & high-quality solution <br /> always sparks joy in my blood. </p>
                </div>
                <Typewriter
                    options={{
                        strings: [
                            '<strong>GROWTH MINDSET</strong>',
                            '<strong>GRIT</strong>',
                            '<strong>SELF-ACTUALIZATION</strong>'
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div className="footer">
                <div>
                    <p> &copy; JB, Running since October 23, 2022. </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
