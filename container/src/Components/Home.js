import React, { useState } from 'react';
import './Home.scss';

const Home = () => {
    return(
        <>
            <div className={"container-home"}>
                <p className={"lyrics"}>
                    Home is behind, the world ahead <br />
                    And there are many paths to tread <br />
                    Through shadow, to the edge of night <br />
                    Until the stars are all alight <br />
                    Mist and shadow <br />
                    Cloud and shade <br />
                    All shall fade <br />
                    All shall fade <br />
                </p>

                <p className={"copyrights"}>"A Walking Song" from Peter Jackson's 2003 The Lord of the Rings</p>
            </div>
        </>
    );
};

export default Home;