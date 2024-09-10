import image1 from "./assets/Screenshot 2024-09-10 172209.png"

const Workshop1 = () => {
    return (
        <div className = "projects">
            <h1>C++ Workshop</h1>
            <h3>The C++ Workshop was one of many workshops that we hold throughout the year. In this one, we learned about standard libraries and imports that are used in C++. Members learned how to code a calculator app using C++ as their final project. </h3> 
            <br />
            <h3> Link to workshop guide/notes!</h3>
            <a href="https://docs.google.com/document/d/1qIgTVPPwSNR8NFxz7HsUP6dYN-XHb8IkksgvfSNp5ck/edit?usp=sharing"> C++ Workshop Google Doc </a>
            <br /> <br />
            <h3> Link to Repl.it! </h3>
            <a href="https://replit.com/join/enbghrnewf-kliu31151"> C++ Workshop Repl.it </a>
            <br /> <br />
            <img src={image1} width="960px" height="432px"/>
        </div>    
    )
}

export default Workshop1;