import styled from "styled-components";

const ExperienceSection = styled.section`
    background-color: #f0f0f0;
    margin-top: 20px;
    padding: 60px;
    height: 74vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExperienceTitle = styled.h1`
    font-size: 3em;
    color: #333;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
`;

const ExperienceContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: flex-start;
    `

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 20px;
    font-family: 'Inter', sans-serif;
`;

const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 20px;
    font-family: 'Inter', sans-serif;
`;

const LeftTitle = styled.h2`
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
`;

const RightTitle = styled.h2`
    font-size: 1.2em;
    color: #333;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
`;

const LeftRightBody = styled.p`
    font-size: 1em;
    color: #666;
    text-align: center;
    font-family: 'Cascadia Code', 'Courier New', monospace;

`;

const LeftRightBodyTitle = styled.h3`
    font-size: 1.1em;
    color: #333;
    margin-bottom: 5px;
    font-family: 'Inter', sans-serif;
`;

const Experience = () => {
    return (
        <ExperienceSection>
            <ExperienceTitle>Experience</ExperienceTitle>
            <ExperienceContent>
                <LeftContainer>
                    <LeftTitle>Post Secondary</LeftTitle>
                    <LeftRightBody>
                        <LeftRightBodyTitle>Bachelor of Geographic Information System</LeftRightBodyTitle>
                        <p>Southern Alberta Institute of Technology</p>
                        <p>2024 - 2026</p>
                        <br></br>
                        <LeftRightBodyTitle>Diploma Information Technology</LeftRightBodyTitle>
                        <p>Southern Alberta Institute of Technology</p>
                        <p>2020 - 2022</p>
                    </LeftRightBody>
                </LeftContainer>
                <RightContainer>
                    <RightTitle>Professional</RightTitle>
                    <LeftRightBody>
                        <LeftRightBodyTitle>Enterprise Geospatial Platform Solution(Co-op)</LeftRightBodyTitle>
                        <p>City of Edmonton</p>
                        <p>May 2025 - Present</p>
                    </LeftRightBody>

                </RightContainer>
            </ExperienceContent>
        </ExperienceSection>
    );
};

export default Experience;