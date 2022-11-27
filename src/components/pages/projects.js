import React from "react";
import '../../css/projects.css';
import cocktail from '../../images/cocktail.png';
import workout from '../../images/workout.png';
import grind from '../../images/grind.png';



const projects = [
    
    {
        title: "Cocktail DB",
        image: cocktail,
        liveLink: "https://jessalane.github.io/cocktail-group-application/",
        gitLink: "https://github.com/Tjex07/CocktailAPI",
        projectType: "Group Homework Project",
        about: "On this I collbarotaed as a member of a team to help tackle the grading criteria set by our project 1 metrics."
    }, {
        title: "Workout Tracker",
        image: workout,
        liveLink: "https://brotherwidower-workout-tracker.herokuapp.com/",
        gitLink: "https://github.com/kyle-vance/Project-2",
        projectType: "Group Homework Project",
        about: "As a team member on this project I primarily worked both the front and back end. Collaboratively we tackled the application "
    }, {
        title: "Daily Grind Scheduler",
        image: grind,
        liveLink: "https://tjex07.github.io/DailyGrindScheduler/",
        gitLink: "https://github.com/Tjex07/DailyGrindScheduler",
        projectType: "Homework Project",
        about: "This daily scheduler was created to demonstrate the use of Jquery and Bootstrap."
    }

]

function Projects() {
    return (
        <div id="portfolio">
            <br></br>
        {projects.map( item => (
            <div class="card">
            <h4>{item.title}</h4>

                <img src={item.image} />
                <a href={item.liveLink} target="_blank">
                    <i class="fas fa-external-link-square-alt"></i> 
                    live
                </a>
                <a href={item.gitLink} target="_blank">
                    <i class="fab fa-github"></i> 
                    repository
                </a>
                <div class="cardHover"><h6>{item.projectType}</h6>
                {item.about}</div>
            </div>
        ))}
        </div>
    );
}

export default Projects;