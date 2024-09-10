import image1 from "./assets/Screenshot 2024-09-10 181654.png"

const Workshop2 = () => {
    return (
        <div className = "projects">
            <h1>Java Workshop</h1>
            <h3>The Java workshop was created to introduce members to yet another programming language. In this workshop, we went through a little about the history of programming and then jumped into teaching members about how to create variables and boolean comparisons. At the end, the challenge was to create an app that could sort a list of numbers.</h3>
            <br />
            <h3> Link to workshop presentation!</h3>
            <a href="https://docs.google.com/presentation/d/1pnFr9Kioq7k8YSyeYJ1bd1nYdPIzD20Ks-kayR_av7M/edit?usp=sharing"> Java Workshop Google Slides </a>
            <br /> <br />
            <h3> Link to Repl.it! </h3>
            <a href="https://replit.com/@ghua4748/Sorting-Numbers"> Java Workshop Repl.it </a>
            <br /> <br />
            <img src={image1} width="960px" height="432px"/>
        </div>    
    )
}

export default Workshop2;