const Projects = () => {
    return (
        <div className = "projects">
            <h1> Upcoming Projects </h1>
            <h2> Book Drive: Donation Box Decoration (10/23 after school room 354) & Actual Drive (10/28-11/26) </h2>
            <h2> Build Your Own Website Workshop </h2>
            <h2> Middle School Coding Crash Course </h2>
            <h2> Alumni College/Career Panel </h2>
            <h2> <a style={{color: "#008080"}}href="https://forms.gle/DQpFRTdm1QLpTtDaA"> Let us know if you have any other suggestions! </a></h2>
            <br /> <br />
            <h1> Past Projects/Initiatives </h1>
            <a href="/projects/cte-video"><button className="projectButton"> HCPSS CTE Course Introduction Video </button></a>
            <a href="projects/black-history-month"><button className="projectButton"> Black History Month Women In STEM </button></a>
            <a href="/projects/mvms-stem-fair"><button className="projectButton"> Mount View Middle School STEM Fair </button></a>
            <a href="projects/peer-mentoring"><button className="projectButton"> Peer Mentoring </button></a>
            <a href = "/projects/annual-book-drive"><button className="projectButton" > Annual Book Drive </button></a>
            <br /> <br />
            <h1> Workshops/Hackathons </h1>
            <a href="/projects/c++-workshop"><button className="projectButton"> C++ Workshop </button></a>
            <a href="projects/java-workshop"><button className="projectButton"> Java Workshop </button></a>
        </div>    
    )
}

export default Projects;