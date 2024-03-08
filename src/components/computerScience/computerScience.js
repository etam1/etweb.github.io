import './computerScience.css';
import csHeader from "/Users/ethantam/Desktop/etweb/src/assets/CsHeader.png";
import CsExperience from '/Users/ethantam/Desktop/etweb/src/components/computerScience/csExperience.js'
import CsExperienceWithLink from '/Users/ethantam/Desktop/etweb/src/components/computerScience/csExperienceWithLink.js'
import JonesJamPic from "/Users/ethantam/Desktop/etweb/src/assets/JonesJamPicture.png"
import BYOWPic from "/Users/ethantam/Desktop/etweb/src/assets/BYOWPic.png"
import PersonalWebsitePic from "/Users/ethantam/Desktop/etweb/src/assets/PersonalWebsitePic.png";
import GitletPic from "/Users/ethantam/Desktop/etweb/src/assets/gitlet_Project_Image.jpeg";
import MLDCPic from "/Users/ethantam/Desktop/etweb/src/assets/Machine_Learning_Data_Compression_Project.jpeg";
import Chess_Endgame_Pic from "/Users/ethantam/Desktop/etweb/src/assets/Chess_Endgame_Project.png";
import CPU_Pic from "/Users/ethantam/Desktop/etweb/src/assets/CPU_Project.png";
import Scheme_Interpreter_Pic from "/Users/ethantam/Desktop/etweb/src/assets/Scheme_Interpreter_Pic.png";
import Typing_Pic from "/Users/ethantam/Desktop/etweb/src/assets/Typing_Project.png";
import AntVsBee_Pic from "/Users/ethantam/Desktop/etweb/src/assets/AntBeeProject.png";
import Mesh_Pic from "/Users/ethantam/Desktop/etweb/src/assets/TEAPOT.png";
import Rasterizer_Pic from "/Users/ethantam/Desktop/etweb/src/assets/mascotimage.jpeg";



function computerScience() {
  return (
    <div className="computerScience">
      <div className="csHeaderDescription">
        <img className="csHeader" src={csHeader} alt="chopper"></img>
        <CsExperienceWithLink name="Mesh Editor" time="2024" image={Mesh_Pic} text="Created a .dae file viewer that explores various techniques in manipulating a mesh such as flipping and splitting edges, Loop subdivision, surface smoothing, and modeling Bezier curves and surfaces. Also created a custom, rainbow-themed toon-shader visualizer, implemented using the OpenGL library. Project written in C++." link = "https://cal-cs184-student.github.io/hw-webpages-sp24-etam1/hw2/index.html"/>
        <CsExperienceWithLink name="SVG Rasterizer" time="2024" image={Rasterizer_Pic} text="I implemented a program that rasterizes SVG files using various sampling techniques from supersampling, pixel sampling, and mipmapping in order to render SVG classes and textures. Project written in C++." link ="https://cal-cs184-student.github.io/hw-webpages-sp24-oligonagon/hw1/index.html"/>
        <CsExperience name="Personal Website" time="2023" image={PersonalWebsitePic} text="My personal website serves as a dynamic showcase of my passions, accomplishments, and creativity. It functions as a professional portfolio, showcasing my skills and contributions to various fields. I self-taught myself HTML, CSS, JavaScript, and React to build my personal website, where I also designed every image and visual feature."/>
        <CsExperience name="Machine Learning Database Compression" time="2023" image={MLDCPic} text="With a team of 7, we created a game database compression by using PyTorch to combine a model and an exceptions table. We trained neural networks to categorize game positions into value-remoteness categories, ensuring vital game data preservation. One model employed regression techniques and delta calculations for exceptions, while another assessed primitive values and remoteness, using a temporary exceptions table. Trained initially on a small tic-tac-toe dataset, our third model trained on the larger Dao game dataset, has shown promising results in advancing compression techniques."/>
        <CsExperience name="Chess Endgame Solver" time="2023" image={Chess_Endgame_Pic} text="In a team of 3, we generated an original 6-man chess endgame database using C, addressing significant deficiencies present in online chess endgame databases. This was achieved by conceptualizing and implementing an algorithm that facilitated swift traversal of the database, significantly enhancing storage and retrieval processes. Presently, our focus lies in enhancing project interactivity through animation refinement, while concurrently optimizing the algorithm via parallelization techniques. Additionally, we are expanding the project scope to encompass 7-man endgames by addressing edge cases, debugging intricacies, and strategically reducing our solver's storage requirements by a substantial tenfold."/>
        <CsExperience name="Build Your Own World" time="2023" image={BYOWPic} text="In my Build Your Own World project, I created a game from scratch using Java. I took on the challenge of designing and developing all aspects, including graphics, interaction controls, and world-building. This game offers the unique ability to generate different worlds using various seeds, ensuring a fresh experience with every playthrough. Exploring the expansive map, players will encounter trap rooms that add an element of danger and excitement. To enhance usability, I implemented save, load, new, and quit options, allowing players to conveniently manage their progress."/>
        <CsExperience name="Central Processing Unit Simulation (CPU)" time="2023" image={CPU_Pic} text="In this Logisim project, I developed fundamental components of a pipelined processor. I constructed an ALU handling arithmetic, logical, and bitwise operations, a 32-register Register File, and an Immediate Generator for addi instructions. Additionally, I created a CPU Datapath featuring a pipelined architecture with five stages to execute addi instructions. This involved fetching, decoding, utilizing the ALU, and writing back results to designated registers. I conducted thorough testing and debugging using provided test benches and the test.sh script to ensure circuit accuracy."/>
        <CsExperience name="Gitlet (Simplified Control System)" time="2023" image={GitletPic} text="I created a custom version control system based on Github using Java. This system provides a range of functionalities such as init, add, remove, restore, reset, status, log, branch, and merge. Additionally, it enables users to locate commits based on commit messages, enhancing accessibility and usability."/>
        <CsExperience name="Typing Speed Test" time="2022" image={Typing_Pic} text="I created a Python program for typing speed measurement and spelling error correction using code written in the 'cats.py' file. Implemented within UC Berkeley’s CS61A course framework, the project involved text samples for typing exercises and a web server for a graphical user interface. My responsibilities revolved around file handling, string manipulation, debugging, and rigorous code testing using the 'ok' autograder to ensure accurate functionality and track progress throughout the development process."/>
        <CsExperience name="Scheme Interpreter" time="2022" image={Scheme_Interpreter_Pic} text="I developed an interpreter for a subset of the Scheme programming language using Python. My responsibilities included implementing Scheme expression evaluation, managing special forms, and defining Scheme expression classes. I gained insights into language design issues impacting interpreter implementation and quirks in languages due to interpreter decisions."/>
        <CsExperience name="Ants vs. Bees" time="2022" image={AntVsBee_Pic} text="I crafted 'Ants vs. Bees,' a strategic computer game centered on defending a colony against bee invasions, utilizing an object-oriented programming methodology. This involved implementing diverse ant types, each possessing unique abilities. Additionally, I devised a systematic approach enabling bees to navigate through tunnels and strategically engage ants. By integrating essential concepts like health, food costs, and turn order, I ensured the game's functionality and captivating gameplay experience."/>
        <CsExperience name="Jones Jam" time="2018 - 2022" title="Head Coordinator" image={JonesJamPic} text="Jones Jam, hosted by Jones High School's Computer Science Honor Society (CSHS), is an annual city-wide hackathon promoting and advancing STEM education through the exploration of new technology in a collaborative and inclusive environment. I played a pivotal role in organizing and overseeing the event, which included interactive workshops collaborated with Jones' own STEM clubs, industry panels with computer scientists from various companies, and lots of fun activities. In addition, I manage logistics, including purchasing materials, securing funding, and coordinating volunteers."/>
      </div>
    </div>
  );
}

export default computerScience;