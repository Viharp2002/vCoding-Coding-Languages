import React from 'react'
import vihar from "../images/vihar.jpg";
import "../css/about.css";

const About = () => {
  return (
    <>
     <header class='masthead'>
        <img src={vihar} alt=""/>
        <p class='masthead-intro'>Hi I'm</p>
        <h1 class='masthead-heading'>Vihar Prajapati!</h1>
    </header>

    <section class="introduction-section">
        <h1 class="vihs">About this website</h1>
        <p>I have created this website using MERN technology. This website is useful for coders who want a proper guidence or just want to learn any specific language. Because this website provides the `Official Documentation` for every language.And here admin can update the language details by time to time</p>     
    </section>

    <section class="introduction-section">
        <h1 class="vihs">Introduction</h1>
        <p>I am currently pursuing my B.Tech in Computer Engineering at <a href="https://www.bvmengineering.ac.in/">Birla Vishwakarma Mahavidyalaya</a> I am a MERN Developer and good at Problem Solving. My areas of intrest are Machine Learning and Web Development.</p>
        <p>I love communicating with people clearly and creatively and I like arts, culture, and technology which is why I’m trying to learn more about code.</p>
    </section>
    <section class="location-section">
        <h1 class="vihs">Where I'm From</h1>
        <p>I'm originally from Anand, Gujarat.</p>
    </section>
    <section class="questions-section">
        <h1 class="vihsa">More About Me</h1>
        <h2 class="vihs">What are my favorite hobbies?</h2>
        <p>I love to solve puzzeles, learn about new things and also reading novels.</p>
        <h2 class="vihs">What's my dream job?</h2>
        <p>My goal is to achieve a good job where I can utilize and enhanced my skills as well as knowledge also I would like to work independently after gaining corporate area experience.</p>
        <h2 class="vihs">What's my background?</h2>
        <p>I learned C and C++ before my college journey started and I started solving some problems based on these two technology. In my 2nd year of Engineering,I learned the basics of Web Development and made some basic projects on JavaScript. After gaining enough confidence and knowledge I made some intermediate level projects based on MERN technology. Apart from Coding and Web Development, I have keen interest in Machine Learning and Deep Learning. I have also made some projects that you can refer in 'Projects' Section. Since I graduated I've revisited my old knowledge and tried to bring it up to date.</p>
        <p>Because programming is awesome and programming for the internet is even more awesome.</p>
    </section> 
    </>
  )
}

export default About
