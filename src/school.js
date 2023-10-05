import React from 'react';
import './school.css'; // Make sure to import your CSS file

function School() {
    const projects = [
        {
            title: 'Spatify',
            description: 'Spotify website clone made with HTML, CSS, JS & PHP.',
            link: 'https://tygojedema.xyz/spatify',
            image: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw',
        },
        {
            title: 'Daily Paper Clone',
            description: 'Daily paper website clone made with HTML, CSS, JS & PHP',
            link: 'https://tygojedema.xyz/dailypaper',
            image: 'https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/340650513_710278667518877_8639704211259016815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ijRqqEIGIQAAX_YFvMe&_nc_ht=scontent-ams4-1.xx&oh=00_AfB4y-_-b5y5uLks3GxSKX5GThvYZdNK7HelNRovYmFbJw&oe=6521DC3F',
        },
        {
            title: 'Tulpreizen',
            description: 'Tulip Travel website clone made with HTML and CSS',
            link: 'https://tygojedema.xyz/tulpreizen',
            image: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/9/4/e/b/38123.Jpg',
        },
        {
            title: 'Gameblog',
            description: 'Gamblog website with html, css and js',
            link: 'https://tygojedema.xyz/gameblog',
            image: 'https://images-platform.99static.com/R8e1MgAiYsM_uAVmaqpD_GOPy6o=/282x210:1272x1200/500x500/top/smart/99designs-contests-attachments/122/122777/attachment_122777816',
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

export default School;