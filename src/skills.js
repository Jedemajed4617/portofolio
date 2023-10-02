import "./skills.css";
import Python from "./img/Python.webp";
import Lua from "./img/Lua.webp";
import HTML from "./img/HTML.webp";
import CSS from "./img/CSS.webp";
import Php from './img/Php.webp';

// Want to learn/Learning:
import Raect from './img/React.webp';
import CPlusPlus from './img/cPlusPlus';
import Laravel from './img/Laravel';

function Skills() {
    return (
        <section className="about">
            <ul class="about__container">
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <img class="about__contentIMG" src={} alt=""/>
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle"></h1>
                        <p class="about__contentInfo"></p>
                    </div>
                </li>
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <img class="about__contentIMG" src={} alt=""/>
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle"></h1>
                        <p class="about__contentInfo"></p>
                    </div>
                </li>
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <img class="about__contentIMG" src={} alt=""/>
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle"></h1>
                        <p class="about__contentInfo"></p>
                    </div>
                </li>
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <img class="about__contentIMG" src={} alt=""/>
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle"></h1>
                        <p class="about__contentInfo"></p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default About;