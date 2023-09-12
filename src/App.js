import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import { createContext } from 'react';

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
export const UserContext = createContext({
    lang: 'ko',
    setLang: () => { },
});

function App() {
    const [lang, setLang] = useState(true);
    const value = useMemo(
        () => ({ lang, setLang }),
        [lang]
    );
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return (
        <UserContext.Provider value={value}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:slug" element={<ReadArticle />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </UserContext.Provider>
    );
}

export default App;
