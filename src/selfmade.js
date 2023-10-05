import React from 'react';
import './selfmade.css'; // Make sure to import your CSS file

function Selfmade() {
    const projects = [
        {
            title: 'Apple Pay Verify Website',
            description: 'This was a website where i used a telegram bot to send info from my website over to telegram.',
            link: 'https://tygojedema.xyz/apple',
            image: 'https://www.dutchcowboys.nl/uploads/posts/list/apple-logo-1.jpg',
        },
        {
            title: 'MB-Media',
            description: 'This is still a W.I.P website for a business idea i had.',
            link: 'https://tygojedema.xyz/mb-media',
            image: '../img/photo1.webp',
        },
        {
            title: 'PRIME Marketing',
            description: 'This is still a W.I.P website for a business idea i had for a telegram bot. This telegram bot would take care for someon to push messages every 5 minutes in a lot of groups at the same time. This was meant to be a subscription based platform.',
            link: 'https://tygojedema.xyz/prime',
            image: '../img/PRIME.webp',
        },
        {
            title: 'STORM SPOOFER',
            description: 'First website built for a client. Webshop in html, css, php, js (not fully functioning anymore)',
            link: 'https://tygojedema.xyz/storm',
            image: '../img/StormBox.webp',
        },
        {
            title: 'Emirates Login Page',
            description: 'Just a fun little html, css project made for improving my html, css and js skills ',
            link: 'https://tygojedema.xyz/emirates',
            image: 'https://dubailocal.ae/assets/business-thumbnail/590x375-1690777625_32997d2ac84cc99c07bd.jpg',
        },
    ];

    return (
        <section className="school">
            {projects.map((project, index) => (
                <div key={index} className="school__card">
                    <img className="school__cardImage" src={project.image} alt={`Project ${index + 1}`} />
                    <div className="school__cardContent">
                        <h2 className="school__cardTitle">{project.title}</h2>
                        <p className="school__cardDescription">{project.description}</p>
                        <a className="school__cardButton" href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Selfmade;