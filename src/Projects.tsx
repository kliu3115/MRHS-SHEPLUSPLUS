const Projects = () => {
    return (
        <div className = "projects">
            <h1> Upcoming Projects </h1>
            <button className="projectButton"> Build Your Own Website Workshop </button>
            <button className="projectButton"> Women in Tech Week Presentation</button>
            <button className="projectButton"> Middle School Coding Crash Course </button>
            <button className="projectButton"> Alumni College/Career Panel </button>
            <br /> <br />
            <h1> Projects/Initiatives </h1>
            <a href="/projects/cte-video"><button className="projectButton"> HCPSS CTE Course Introduction Video </button></a>
            <a href="projects/black-history-month"><button className="projectButton"> Black History Month Women In STEM </button></a>
            <a href="/projects/mvms-stem-fair"><button className="projectButton"> Mount View Middle School STEM Fair </button></a>
            <a href="projects/peer-mentoring"><button className="projectButton"> Peer Mentoring </button></a>
            <a href = "/projects/annual-book-drive"><button className="projectButton" > Annual Book Drive </button></a>
            <br /> <br />
            <h1> Workshops/Hackathons </h1>
            <a href="/projects/c++-workshop"><button className="projectButton"> C++ Workshop </button></a>
            <a href="projects/java-workshop"><button className="projectButton"> Java Workshop </button></a>
            <button className="projectButton"> Hour of Code Mini-Hackathon </button>
        </div>    
    )
}

export default Projects;