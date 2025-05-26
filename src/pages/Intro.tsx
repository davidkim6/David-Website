import styled from "styled-components";

const IntroSection = styled.section`
    background-color: #eeeeef;
    display: flex;
    padding: 60px;
    height: 80vh;
    flex-direction: row;
    align-items: center;
    `;

const LeftContainer = styled.div`
    flex: 4;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    align-items: center;
    `

const ProfileImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;`

const RightContainer = styled.div`
    flex: 6;
    `

const IntroTitle = styled.h1`
    font-size: 3em;
    color: #333;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
`;

const IntroSubtitle = styled.p`
    font-size: 14px;
    margin-top: 0.2em;
    font-family: 'Cascadia Code', 'Courier New', monospace;
    `

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`
const Button = styled.a`
    padding: 10px 20px;
    background-color: #067FD0;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #128FC8;
    }
`

const Intro = () => {
    return (
        <IntroSection id="intro">
            <LeftContainer>
                <ProfileImage src="https://media.licdn.com/dms/image/v2/D5603AQHXdfkJPwpb3A/profile-displayphoto-shrink_400_400/B56ZP3ZhzbHoAk-/0/1735022485009?e=1753920000&v=beta&t=ijy_y6m7oAXodF280voArKD7K15YwshgU-iba-64xHc" alt="David Soojong Kim" />
            </LeftContainer>
            <RightContainer>
                <IntroTitle>David Soojong Kim</IntroTitle>
                <IntroSubtitle>GIS Developer with a Passion for Cloud & Systems Architecture </IntroSubtitle>
                <IntroSubtitle>- Bachelor in Geographic Information System</IntroSubtitle>
                <IntroSubtitle>- Information Technology Diploma</IntroSubtitle>

                <ButtonContainer>
                    <Button href="/public/David_Soojong_Kim_Resume.pdf" target="_blank">Resume</Button>
                    <Button href="https://www.linkedin.com/in/soojongkim6/" target="_blank">LinkedIn</Button>
                    <Button href="https://github.com/davidkim6" target="_blank">GitHub</Button>
                </ButtonContainer>
            </RightContainer>
        </IntroSection>
    );
};

export default Intro;