import React from 'react'
import './MembersStyles.css'
import LinkedIn from './linkedin.png';
import Github from './github.png';
import san from './san.png';
import dung from './dung.png';
import jun from './jun.png';
import bill from './bill.png';
import max from './max.png';
import vanessa from './vanessa.png';


const Members = () => {
    return (
        <div className="members">
            <h1>Meet the team.</h1>
            <div className="container">
                <div className="box">
                    <img src={max} alt="san" className="image" />
                    <h3>Maxwell Panec</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/maxwellpanec/">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={san} alt="san" className="image" />
                    <h3>San Vu</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/sanvu/ ">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={jun} alt="san" className="image" />
                    <h3>Jun Wu</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/jun-wu-computer-scientist">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                        <div className="contact">
                            <a href=" https://github.com/SuperJunlw">
                                <img src={Github} alt="github" className="icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="box">
                    <img src={dung} alt="san" className="image" />
                    <h3>Dung Vuong</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/dung-vuong-94b496202/">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                        <div className="contact">
                            <a href="https://github.com/dung-vuong">
                                <img src={Github} alt="github" className="icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={vanessa} alt="san" className="image" />
                    <h3>Vanessa Tang</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/vanessa-ly-tang ">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                        <div className="contact">
                            <a href="https://github.com/VTyiu">
                                <img src={Github} alt="github" className="icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={bill} alt="san" className="image" />
                    <h3>Bill Li</h3>
                    <div className="content">
                        <div className="contact">
                            <a href="https://www.linkedin.com/in/bmltera/">
                                <img src={LinkedIn} alt="linkedin" className="icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members