import React from 'react';
import './skills.css'; // Make sure to import your CSS file

const javascript = '/img/JS.webp';   
const python = '/img/Python.webp';   
const php = '/img/Php.webp';         
const lua = '/img/Lua.webp';  
const css = '/img/css.webp';  
const html = '/img/html.webp';
const react = '/img/react.webp';
const c = '/img/c++.webp';

function Skills() {
    return (
        <section className="skills">
            <ul className="skills__container">
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={javascript} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">JavaScript</h1>
                        <p className="skills__contentInfo">I fully understand this coding language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={python} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">Python</h1>
                        <p className="skills__contentInfo">I fully understand this coding language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={php} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">PHP</h1>
                        <p className="skills__contentInfo">I'm still learning this language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={lua} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">Lua</h1>
                        <p className="skills__contentInfo">I'm still practicing with this language.</p>
                    </div>
                </li>
            </ul>
            <ul className="skills__container">
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={css} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">CSS</h1>
                        <p className="skills__contentInfo">I fully understand this coding language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={react} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">React</h1>
                        <p className="skills__contentInfo">I fully understand this coding language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={html} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">HTML</h1>
                        <p className="skills__contentInfo">I fully understand this coding language.</p>
                    </div>
                </li>
                <li className="skills__content skills__content--flipped">
                    <div className="skills__contentImgContainer">
                        <img className="skills__contentIMG" src={c} alt="" />
                    </div>
                    <div className="skills__contentTextArea">
                        <h1 className="skills__contentTitle">C++</h1>
                        <p className="skills__contentInfo">A coding language i would love to learn and understand.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Skills;