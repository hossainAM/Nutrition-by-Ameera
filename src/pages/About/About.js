import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const About = () => {
    return (
        <>
        <Header></Header>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="aboutme" src="https://i.postimg.cc/hvrD8wtd/about-me.png"/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Amir Hossain</h1>
                    <p className="mb-8 leading-relaxed">My short term goal is to trained myself in full stack web development based on javascript based technologies and enrich myself with recent updates in tech. Long term goal is to flourish myself as a seasoned full stack web developer. To fulfill my goal, I will follow the guideline of Programming Hero team that I am going through since last couple of months and will be going through lifelong. I want to translate my knowledge and skill attained from Programming Hero into industry standards through regular practicing and engage myself with professionals so that I can fullfil my dream of becoming a fullstack developer. </p>
                </div>
            </div>
        </section>
        <Footer></Footer>
        </>
    );
};

export default About;