import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import { UserContext } from "../App";
import INFO from "../data/user";
import EnINFO from "../data/enUser";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import { useContext } from 'react';
import "./styles/homepage.css";
import Stack from "../components/homepage/stack";
import Education from "../components/homepage/education";

const Homepage = () => {
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(80);
    const [oldLogoSize, setOldLogoSize] = useState(80);

    const { lang, setLang } = useContext(UserContext);
    const [text, setText] = useState(INFO);
    useEffect(() => {
        if (!lang) {
            setText(EnINFO);
        } else {
            setText(INFO);
        }
        setLang(lang);
    }, [lang]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = Math.round(window.pageYOffset, 2);

            let newLogoSize = 80 - (scroll * 4) / 10;

            if (newLogoSize < oldLogoSize) {
                if (newLogoSize > 40) {
                    setLogoSize(newLogoSize);
                    setOldLogoSize(newLogoSize);
                    setStayLogo(false);
                } else {
                    setStayLogo(true);
                }
            } else {
                setLogoSize(newLogoSize);
                setStayLogo(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [logoSize, oldLogoSize]);

    const currentSEO = SEO.find((item) => item.page === "home");

    const logoStyle = {
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    };

    return (
        <React.Fragment>
            {text &&
                <>
                    <Helmet>
                        <title>{text.main.title}</title>
                        <meta name="description" content={currentSEO.description} />
                        <meta
                            name="keywords"
                            content={currentSEO.keywords.join(", ")}
                        />
                    </Helmet>

                    <div className="page-content">
                        <NavBar active="home" />
                        <div className="content-wrapper">
                            <div className="homepage-logo-container">
                                <div style={logoStyle}>
                                    <Logo width={logoSize} link={false} />
                                </div>
                            </div>

                            <div className="homepage-container">
                                <div className="homepage-first-area">
                                    <div className="homepage-first-area-left-side">
                                        <div className="title homepage-title">
                                            {text.homepage.title}
                                        </div>

                                        <div className="subtitle homepage-subtitle">
                                            {text.homepage.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="homepage-technologies">
                                    <div className="sub-header homepage-title">
                                        {text.technology.title}
                                    </div>
                                    <div className="subtitle homepage-title">
                                        {text.technology.description}
                                    </div>
                                    <div className="subtitle homepage-title">FrontEnd</div>
                                    {text.technology.fonrtend.map((item, index) => <Stack key={index} {...item} />)}
                                    <div className="subtitle homepage-title">BackEnd</div>
                                    {text.technology.backend.map((item, index) => <Stack key={index} {...item} />)}
                                    <div className="subtitle homepage-title">
                                        CI/CD
                                    </div>
                                    {text.technology.cicd.map((item, index) => <Stack key={index} {...item} />)}
                                    <div className="subtitle homepage-title">
                                        Languages
                                    </div>
                                    {text.technology.etc.map((item, index) => <Stack key={index} {...item} />)}
                                </div>
                                <div className="homepage-projects">
                                    <AllProjects projects={text.projects} />
                                </div>
                                <div className="homepage-after-title">
                                    <div className="homepage-works">
                                        <Education education={text.education} />
                                    </div>
                                    <div className="homepage-works">
                                        <Works works={text.works} />
                                    </div>
                                </div>
                                <div className="page-footer">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </React.Fragment>
    );
};

export default Homepage;
