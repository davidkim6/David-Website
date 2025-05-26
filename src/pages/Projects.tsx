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

interface ProjectCardProps {
    onClick?: () => void;
}

const ProjectCard = styled.div<ProjectCardProps>`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    background-color: #ddd;
    cursor: ${props => props.onClick ? 'pointer' : 'default'};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.3s ease-in-out;

    &:hover {
        ${({ onClick }) =>
            onClick &&
            `
            transform: translateY(-5px);
            box-shadow:0 8px 15px rgba(0, 0, 0, 0.1);
        `}
    }
`;

const VideoThumbnail = styled.video`
    width: 100%;
    height: 200px;
    object-fit: cover;
    background-color: #333;
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
    flex-grow: 1;
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

interface ProjectData {
    title: string;
    video: string;
    thumbnail: string;
    tech_used: string[];
    description: string;
    redirectUrl?: string;
    isExternal?: boolean;
}

const projects = [
    {
        title: 'David-Website',
        video: "/sample.mp4",
        thumbnail: "/sample.png",
        tech_used: ['React', 'TypeScript', 'Styled Components'],
        description: "This is my personal website built with React and TypeScript. It showcases my projects, and experience",
        redirectUrl: "",
        isExternal: false
    },
    {
        title: 'Wind-Mapper',
        video: "sample2.mp4",
        thumbnail: "/sample.png",
        tech_used: ["React", "TypeScript", "Styled Components", "Leaflet", "Edmonton Open Data API"],
        description: "Wind Mapper is ongoing project that visualizes data in Edmonton, Canada. It uses the Edmonton Open Data API to fetch data and displays it on a map using Leaflet.",
        redirectUrl: "",
        isExternal: false
    },
    {
        title: 'PetStore Locator',
        video: "petstore.mp4",
        thumbnail: "/gisfinal.png",
        tech_used: ["ArcGIS Pro", "Python", "Google Maps API"],
        description: "PetStore Locator is a GIS project that uses ArcGIS Pro and Python to analyze optimal locations for pet stores in Calgary. It utilizes the Google Maps API to get pet store locations and performs spatial analysis to find the best sites based on various factors.",
        redirectUrl: "https://drive.google.com/file/d/1iQMUtT4Fx7gLDEAaAWdNawM_XH2_-VLG/view?usp=sharing",
        isExternal: true
    }
]

const Projects = () => {
    const handleCardClick = (redirectUrl?: string, isExternal?: boolean) => {
        if (!redirectUrl){
            console.log("No Link Provided");
            return;
        }

        if (isExternal) {
            window.open(redirectUrl, '_blank', 'noopener, noreferrer');
        } else{
            window.location.href = `${process.env.PUBLIC_URL}/${redirectUrl}`;
        }
    };
                   

    return (
        <ProjectSection id="projects">
            <ProjectSectionTitle>Projects</ProjectSectionTitle>
            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}
                        onClick={() => handleCardClick(project.redirectUrl, project.isExternal)}>
                        <VideoThumbnail src={project.video ? `${process.env.PUBLIC_URL}${project.video}`: undefined} 
                        poster={`${process.env.PUBLIC_URL}${project.thumbnail}`}
                        loop
                        muted
                        playsInline 
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