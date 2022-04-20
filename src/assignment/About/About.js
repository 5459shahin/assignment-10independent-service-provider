import React from 'react';
import img from '../../images/my-pictur.png';
import './About.css';

const About = () => {
    return (
        <div className=' bg-dark p-5 m-0'>
            <h2 className='text-center text-white m-5'>About Me </h2>
              <div className="about-container container d-flex ">
                <div className="about-contain text-white">
                    <p>I'm im Shahin Ahmed. I had no idea about web development in the course of the course starting.But insha-llah now I understand a lot.I hope I can learn a lot more in the future. In the next 2/3 months I will try to mend the deficiencies in my work.I want to build my career as a web developer. So I will be looking for a job along with the course in the next 2/3 months. I will slowly prepare myself for the job.</p>
                </div>
                <div className="about-img">
                    <img src={img} alt="" />

                </div>
            </div> 
        </div>
    );
};

export default About;