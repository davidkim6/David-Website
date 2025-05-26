import styled from 'styled-components';

const ProjectSection = styled.section`
    background-color: #f0f0f0;
    margin-top: 20px;
    padding: 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectSectionTitle = styled.h1`
    font-size: 3em;
    color: #333;
    text-align: center;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
    margin-bottom: 10px;
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 80%;
    justify-content: center;
`;

const ProjectCard = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: #ddd;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoThumbnail = styled.video`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.4s ease-in-out;
`;

const ProjectTitle = styled.h2`
    font-size: 1.2em;
    color: #333;
    text-align: center;
    margin-top: 10px;
    font-family: 'Inter', sans-serif;
    padding: 15px;
    margin: 0;
    `;

const ProjectDescription = styled.p`
    font-size: 14px;
    color: #666;
    text-align: center;
    padding: 0 15px;
    margin-top: 0;
    font-family: 'Cascadia Code', 'Courier New', monospace;
`;

const TechList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;

const TechItem = styled.li`
    background-color: #BEBDB8;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
    color: #333;
    font-family: 'Cascadia Code', 'Courier New', monospace;
`;

const projects = [
    {
        title: 'David-Website',
        video: "/sample.mp4",
        thumbnail: "/sample.png",
        tech_used: ['React', 'TypeScript', 'Styled Components'],
        description: "This is my personal website built with React and TypeScript. It showcases my projects, and experience"
    },
    {
        title: 'Wind-Mapper',
        video: "sample2.mp4",
        thumbnail: "/sample.png",
        tech_used: ["React", "TypeScript", "Styled Components", "Leaflet", "Edmonton Open Data API"],
        description: "Wind Mapper is ongoing project that visualizes data in Edmonton, Canada. It uses the Edmonton Open Data API to fetch data and displays it on a map using Leaflet."
    }
]

const Projects = () => {
    return (
        <ProjectSection id="projects">
            <ProjectSectionTitle>Projects</ProjectSectionTitle>
            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <VideoThumbnail src={project.video} poster={project.thumbnail} loop muted 
                        onMouseEnter={(e: React.MouseEvent<HTMLVideoElement>) => e.currentTarget.play()}
                        onMouseLeave={(e: React.MouseEvent<HTMLVideoElement>) => e.currentTarget.pause()}/>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>
                            <p>{project.description}</p>
                            <p>Technology Used</p>
                            <TechList>
                                {project.tech_used.map((tech, index) => (
                                    <TechItem key={index}>{tech}</TechItem>
                                ))}
                            </TechList>
                        </ProjectDescription>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectSection>
    );
};

export default Projects;