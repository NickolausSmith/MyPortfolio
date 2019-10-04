// Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import './App.css';

// IMGS
import Nickface from '../src/Pics/Nickprofilepic.jpg';
import Linkedin from '../src/Pics/Linkedinwhite.png';
import Github from '../src/Pics/Githubwhite.png';
import ProjectGit from '../src/Pics/Github.png';
import Reactor from '../src/Pics/possible.png';

// Stylings
const Landing = styled.div`
display: flex; 

flex-wrap:wrap;
width: 100%;
height:100%;
color: white;


`
const Linkedinpic = styled.img`
cursor: pointer;
transition: .5s;
hover: {
opacity: .1;
}
`
const PictureAtag = styled.a`

cursor: pointer;
transition: .5s;
hover: {
opacity: .1;
}`


const Me = styled.div`
display: flex;
margin-left: 100px;
margin-top: 100px;
flex-wrap: wrap;
text-align: left;

`
const H1 = styled.h1`
display: flex;
font-size: 48px;
margin-bottom: 50px;

`

const H2 = styled.h1`

`
const H3 = styled.p`
font-size: 24px;

`
const Face = styled.img`
width: 175px;
height: 175px;

border-radius: 50%;
`

const Links = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
margin-top: 50px;
`
const ProjectHolder = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 100%;

`
const Project = styled.a`
width: 400px;
height: 400px;
background-color: cyan;
border-radius: 5px;
margin-right: 50px;
margin-left: 50px;
margin-top: 50px;
margin-bottom: 50px;
padding: 15px;
background-image: linear-gradient(to bottom right, #ff758c , #ff7eb3) ;
cursor: pointer;
text-decoration: none;
color: white;

:hover {
  brightness: 60%;
}
`
const ProjectTitle = styled.h1`

font-size: 36px;
padding-left: 10px;
width: 300px;
`
const Projdescription = styled.p`
font-size: 18px;
`
const Aboutdiv = styled.div`
display: flex; 
width: 100%;
flex-direction: column;
justify-content: center;
text-align:center;
`
const Abouth1 = styled.h1`


font-size: 48px;
`

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    interactivity: {
      
      events: {
        onhover: {
          enable: true,
          mode: `repulse`
        },
        style:{
          width: '100%',
          background: '#000000'
        }
      }
    }
  }
 }

class App extends Component {
  render() {
    return (
      <Landing>

      
      <Me>
        
      
      <H1>Hello, I'm Nickolaus Smith.</H1>
      <H2 > I'm creating web applications with my own <a className="glowy">flare</a>, here are some of my favorites: <br></br></H2>
      </Me>

      
       
<ProjectHolder>

<Project className='hvr-hang' href="https://labs8randomizer2.netlify.com/" target="_blank"> 

<ProjectTitle href="https://labs8randomizer2.netlify.com/" target="_blank">Randomizer</ProjectTitle>

<Projdescription>Randomizer is a web app that helps teachers track their student's participation in class. Built using React, Django, SQLite/Postgres SQL and deployed using Heroku.

  
  </Projdescription> 

  <a href="https://github.com/Lambda-School-Labs/Labs8-Randomizer/blob/master/README.md" target="_blank" rel="noopener noreferrer">
  <Linkedinpic src={ProjectGit}></Linkedinpic>
  </a>

</Project>

        <Project className='hvr-hang' href="https://nicksconwaygame.netlify.com/" target="_blank" >
          <ProjectTitle>Conway's Game of Life</ProjectTitle> 

          <Projdescription>My own stylized version of Conway's Game of Life. Made with React and CSS, it includes adjustable speed, board height, and board width 
          </Projdescription> 

          <a href="https://github.com/NickolausSmith/Conways-Life" target="_blank" rel="noopener noreferrer">
          <Linkedinpic src={ProjectGit}></Linkedinpic>
          </a>

          </Project>

      
        <Project className='hvr-hang'> 
        <ProjectTitle>MUD Dungeon Crawler</ProjectTitle>
        <Projdescription>The MUD Dungeon Crawler is a very simple MUD-style game built in my own style using React and Django.
        
          
        </Projdescription> 
        <a href="https://github.com/NickolausSmith/LambdaMUD-Client" target="_blank" rel="noopener noreferrer">
          <Linkedinpic src={ProjectGit}></Linkedinpic>
          </a>
        </Project>
        {/* <Project className='hvr-hang'> <ProjectTitle>Conway's Game of Life</ProjectTitle></Project>
        <Project className='hvr-hang'> <ProjectTitle>Conway's Game of Life</ProjectTitle></Project>
        <Project className='hvr-hang'> <ProjectTitle>Conway's Game of Life</ProjectTitle></Project> */}
        </ProjectHolder>
        
        <Aboutdiv>
        
        <Abouth1>Skill set</Abouth1>
        <H3>I have experience using, and creating projects in: HTML, JS, React.js, Node.js, Python, Django, and SQL. </H3>

          <Abouth1>About me </Abouth1> 
          <H3> I started my dive into the world of web devlopment with a 6 month, full time CS and Web Development <br></br> course at Lambda School and I loved every minute of it. 
          Now that I've learned as much as I have I believe <br></br> I'm ready to apply my education from Lambda School with a great team. </H3>
        <Abouth1>Contact me!</Abouth1>
          <H3>Feel free to contact me at Nickolaussmith721@gmail.com, or via LinkedIn. <br></br>You can also view more of my previous work at my Github, link below. </H3>
        </Aboutdiv>

      
      <Links>
      <a href="https://www.linkedin.com/in/nick-smith-9b7254167/" target="_blank" rel="noopener noreferrer">
      <Linkedinpic  src={Linkedin}></Linkedinpic>
      </a>
      <a href="https://github.com/NickolausSmith" target="_blank" rel="noopener noreferrer">
      <Linkedinpic src={Github}></Linkedinpic>
      </a>
      </Links>

      
      <Particles 
             className="particles"         params={particleOpt} />
                     

           </Landing>
    );
  }
}

export default App;
