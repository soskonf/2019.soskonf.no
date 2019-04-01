//@flow
import * as React from 'react';
import './Banner.less';
import SOSLogo from '../../assets/logo/sos-logo-flat-invert-1860x142.png';

function Banner() {
    return (
        <div className="banner">
            <div className='logos'>
                <img className='soslogo' src={SOSLogo} alt="SoS" />
                {/*<h1 className='sostext'>Sikkerhet og Sårbarhet 2019</h1>*/}
            </div>

            <div className="logo-text">
                <h2>Britannia Hotell 6.-8. Mai. 2019, Trondheim</h2>
            </div>
        </div>
    );
}

export default Banner;
