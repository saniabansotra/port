import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/study.jpg";
import projImg2 from "../assets/img/todo.jpg";
import projImg3 from "../assets/img/comp.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Course Management",
      description: "Design & Development",
      imgUrl: projImg1,
      url:"https://studyapp-eeha.onrender.com",
    },
    {
      title: "Task Management",
      description: "Design & Development",
      imgUrl: projImg2,
      url:"https://saniabansotra.github.io/task_management/",
    },
    {
      title: "Image Compressor",
      description: "Design & Development",
      imgUrl: projImg3,
      url:"https://saniabansotra.github.io/comp_img/",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> Developed dynamic, responsive websites and web applications using modern frameworks like React, Node.js, and Next.js, focused on enhancing user experience and performance.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
  {
    projects.map((project, index) => (
      <Col key={index} sm={6} md={4}>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <ProjectCard
            {...project}
          />
        </a>
      </Col>
    ))
  }
</Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>The projects section showcases a diverse range of web development work, highlighting expertise in building responsive, user-friendly websites and robust web applications. Each project demonstrates proficiency in modern technologies like React, Node.js, and Next.js, with a strong emphasis on delivering seamless user experiences and optimal performance. Additionally, projects include the creation of custom RESTful APIs, third-party integrations, and scalable solutions designed for real-world challenges. This portfolio reflects a commitment to solving complex problems through clean, maintainable code and a collaborative approach to development.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>The projects section showcases a diverse range of web development work, highlighting expertise in building responsive, user-friendly websites and robust web applications. Each project demonstrates proficiency in modern technologies like React, Node.js, and Next.js, with a strong emphasis on delivering seamless user experiences and optimal performance. Additionally, projects include the creation of custom RESTful APIs, third-party integrations, and scalable solutions designed for real-world challenges. This portfolio reflects a commitment to solving complex problems through clean, maintainable code and a collaborative approach to development.quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}