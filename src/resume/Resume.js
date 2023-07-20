import React from "react";
import "./Resume.css";
import { useHistory } from "react-router-dom";
import {motion} from "framer-motion"

function Resume() {
    const history = useHistory();

    function goToProjects(event) {
        history.push('/projects')
    }
    return (
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1, transition: {duration: 1}}} 
            // exit={{opacity: 0, transition: {duration: 0.5}}} 
            className="container-fluid"
        >
            <h1>Resume</h1>
            <div className="resume">
                <p className="mainTitle">Diego Chavez - Software Developer</p>
                <p>STANTON, CA | 818-284-9264 | diegochavez3.0@hotmail.com | <a className="text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/d1ego-chavez/" >LinkedIn</a> | <a className="text-decoration-none" rel="noopener noreferrer" target="_blank" href="https://github.com/diegochavezversion2" >GitHub</a> </p>
                <p className="subTitle">SUMMARY</p>
                <p>Full-Stack software engineer proficient in using Javascript for front-end and back-end programming, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and frameworks like Bootstrap. Previous experience allows quick decisions based on current information and team communication. Looking to apply technical skills in an entry-level software development position, in a fast-paced team environment that provides challenge while fostering growth.</p>
                <p className="subTitle">TECHNICAL SKILLS</p>
                <ul>
                    <li>Frontend: HTML, CSS, JavaScript, React, jQuery</li>
                    <li>Backend: Node.js, Express, RESTful APIs, PostgreSQL</li>
                    <li>Tools: Mocha, Chai, Knex, Git, GitHub, Heroku, Node, Package Manager, Visual Studio Code </li>
                    <li>Additional Skills: Experience with SaaS, such as a CRM and Zendesk, Spanish (fluent), algorithms, and data structures.</li>
                </ul>
                <p className="subTitle">PROJECT AND PROFESSIONAL EXPERIENCE</p>
                <p>Thinkful Online</p>
                <p>Software Engineering Program 01/2023 - 05/2023</p>
                <ul>
                    <li>Learned software development industry best practices and standards in a full-time, five-month program.</li>
                    <li>Completed several modules and assessments while learning new languages and frameworks, and under the guidance of a senior software engineer in a mentor-student relationship.</li>
                    <li>Completed several hands-on role-based and scenario-based projects and virtual labs designed to simulate real-world tasks and challenges.</li>
                    <li>As part of the program, produced professional projects from concept to completion, <button  onClick={goToProjects}>see here</button></li>
                </ul>
                <p>iTrustCapital Irvine, CA</p>
                <p>Client Relationship Manager 11/2021 - 7/2022</p>
                <ul>
                    <li>Excelled in the KYC (Know-Your-Customer) team, which verifies over 50 new customers per day, and helped implement new verification procedures.</li>
                    <li>Collaborated with the IRA Transfer Team, a detail-oriented, high-volume department that ensures all documentation is in good order before transmitting to another custodian.</li>
                    <li>Worked extensively and created workflow within custom CRM (Customer Relationship Management) Software.</li>
                    <li>Contributed to onboarding new clients, personally aiding 10+ individuals per day through a step-by-step process.</li>
                </ul>
                <p>Costco Northridge, CA</p>
                <p>Merchandiser 10/2020 - 11/2021</p>
                <ul>
                    <li>Received, unloaded, and stocked merchandise in an accurate and timely manner.</li>
                    <li>Organized and maintained inventory levels on the sales floor, ensuring shelves were well-stocked and products were easily accessible to customers.</li>
                    <li>Collaborated with team and supervisors ensuring efficient workflow.</li>
                    <li>Provided excellent customer service by assisting customers with inquiries, locating products, and offering assistance as required.</li>
                </ul>
                <p className="subTitle">EDUCATION</p>
                <p>Thinkful Online</p>
                <p>Certificate, Software Engineering Program 05/2023</p>
            </div>
            {/* <a href="../images/profilePicture.jpg" download="Diego's Resume">Download Resume</a> */}
            {/* <embed src="../images/flashcard-app.png" type="application/pdf" width={500} height="600px" /> */}
        </motion.div>
    )
}

export default Resume;