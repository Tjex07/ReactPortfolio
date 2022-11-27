import '../../css/home.css';

// importing different sections
import BioIntro from '../bioIntro';
import Skills from '../skills';
import AboutMe from '../aboutMe';
import bioImg from '../../images/bioImg.jpg';

function App() {
  return (
    <section id="aboutMe"> 
      <div class="bioImg" >
        <div class="bioContainer">
        <br></br><br></br>
        
          <h1>Trevor Jex</h1>
  
          <h2>Cybersecurity SME devops wannabe</h2>
        </div>
      </div>
      <div class="bioContent">
        <bioImg />
        <BioIntro />
        <Skills />
        <AboutMe />
      </div>
    </section>
  );
}

export default App;
