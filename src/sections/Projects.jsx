import ArrayManipulator from "../projects/ArrayManipulator";
import DrawingCanvas from "../projects/DrawingCanvas";
import GigasecondCalculator from "../projects/GigasecondCalculator";
import AgeGuesser from "../projects/GuessAge";
import NuclearReactor from "../projects/NuclearReactor";
import PangramChecker from "../projects/PangramChecker";
import SignBuilder from "../projects/SignBuilder";

const Projects = () => {
    return (
      <section id="projects" className='bodySection'>
        <h2 className="heading">Some Projects Of Mine</h2>
        <div className="projectContainer">
          <AgeGuesser/>
        </div>
        <div className="projectContainer">
          <DrawingCanvas/>
        </div>
        <div className="projectContainer">
          <GigasecondCalculator/>
        </div>
        <div className="projectContainer">
          <PangramChecker/>
        </div>
        <div className="projectContainer">
          <NuclearReactor/>
        </div>
        <div className="projectContainer">
          <ArrayManipulator/>
        </div>
        <div className="projectContainer">
          <SignBuilder/>
        </div>

      </section>
      
    );

}

export default Projects;