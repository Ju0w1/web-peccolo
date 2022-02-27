import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, Title1, Title2, Paragraph1, SeparationLine, ImageStack, ImageStackItemTop, ImageStackItemBottom, Img } from './AboutElements'

const About = ({ id, title1, title2, paragraph1, paragraph2, img1, img2 }) => {
    return (
        <>
            <AboutContainer id={id}>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <Title1>{title1}</Title1>
                                <Title2>{title2}</Title2>
                                <Paragraph1>{paragraph1}</Paragraph1>
                                <Paragraph1>{paragraph2}</Paragraph1>
                            </TextWrapper>
                        </Column1>
                        <SeparationLine></SeparationLine>
                        <Column2>
                            <ImageStack>
                                <ImageStackItemTop>
                                    <Img src={img1} />
                                </ImageStackItemTop>
                                <ImageStackItemBottom>
                                    <Img src={img2} />
                                </ImageStackItemBottom>
                            </ImageStack>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About