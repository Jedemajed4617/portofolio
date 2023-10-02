import "./about.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

function About() {
    return (
        <section className="about">
            <div class="about__contentManagement">   
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <FontAwesomeIcon class="about__contentIcon" icon={faNewspaper} />
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle">Introductie:</h1>
                        <p class="about__contentInfo">
                            Mijn naam is Tygo, Ik ben 21 jaar oud en word momenteel opgeleidt als full stack software developer. 
                            Ik hou van dieren en doe graag aan fitness, golf, tennis en coderen in mijn vrije tijd.
                        </p>
                    </div>
                </li>
            </div>
            <div class="about__contentManagement1">   
                <li class="about__content1">
                    <div class="about__contentImgContainer">
                        <FontAwesomeIcon class="about__contentIcon" icon={faCompass} />
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle">Wat ik wil bereiken:</h1>
                        <p class="about__contentInfo">
                            Ik wil graag zoveel mogelijk codeertalen leren, en zoveel mogelijk informatie opdoen over het vak waarvoor ik nu studeer. 
                            Naast mijn interesse voor code wil ik graag meer leren over het bedrijfs aspect van software development om zo later ook mijn eigen bedrijf 
                            te kunnen opstarten.
                        </p>
                    </div>
                </li>
            </div>
            <div class="about__contentManagement">   
                <li class="about__content">
                    <div class="about__contentImgContainer">
                        <FontAwesomeIcon class="about__contentIcon" icon={faClipboard} />
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle">Wat ik wil leren:</h1>
                        <p class="about__contentInfo">
                            Op het moment ben ik aan het leren hoe ik mijn code beter kan schrijven, 
                            duidelijker en meer efficient. Ik wil nog graag projecten maken met Lua, 
                            Laravel, React en meer bekend te raken met de kiant van het bedrijfsleven.
                        </p>
                    </div>
                </li>
            </div>
            <div class="about__contentManagement1">   
                <li class="about__content1">
                    <div class="about__contentImgContainer">
                        <FontAwesomeIcon class="about__contentIcon" icon={faFaceLaugh} />
                    </div>
                    <div class="about__contentTextArea">
                        <h1 class="about__contentTitle">Over mij</h1>
                        <p class="about__contentInfo">
                            Zoals vermeld houd ik graag van sporten zoals fitness en golf, 
                            maar game ik natuurlijk ook in mijn vrije tijd. Ik ben momenteel nog 
                            thuiswonend bij mijn 2 lieve ouders samen met 2 honden in een knus huis in de binnenstad van het mooie Medemblik.
                        </p>
                    </div>
                </li>
            </div>
        </section>
    );
}

export default About;