import React from "react";
import styles from "../app.module.css";
import { motion } from "framer-motion";
import { SkillsSvg } from "./SkillsSvg";

const Section = (props) => {
    const { children, backgroundColor, className } = props;

    return (
        <>
            <section className={`${styles.interfaceSection} ${className}`}
                style={{ backgroundColor }}
                
              >
                {children}
            </section>

        </>
    )
}




export function Interface(props) {
    const {section, device} = props;
    return (
        
        <div className={`${styles.interface} interface`}>
            <AboutSection />
            <Skills section={section} device={device} />
            <Courses />
            <Contact />

        </div>
    )
};

const AboutSection = () => {
    return (
        <Section className='interface-part interface-welcome'>
            <h1>Welcom to GWWM education</h1>
        </Section>
    )
}

const Skills = (props) => {
    const {section, device} = props;
    return (
        <Section className='interface-part interface-skills'>
            <SkillsSvg section={section}></SkillsSvg>
        </Section>
    )
}

const Courses = () => {
    return (
        <Section backgroundColor="rgb(255, 204, 153)">
            <h1>Courses</h1>
        </Section>
    )
}

const Contact = () => {
    return (
        <Section >
            <h1>Contact</h1>
        </Section>
    )
}