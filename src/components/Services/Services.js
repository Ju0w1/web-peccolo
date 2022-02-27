import React from 'react'
import { ServiceContainer, ServiceWrapper, ServiceRowTitle, Title, CardsRow, Card, CardHover, TitleCard, TextCard, IconContainer, IconBg } from './ServicesElements'

const Services = (data) => {
    return (
        <>
            <ServiceContainer id={data.id}>
                <ServiceWrapper>
                    <ServiceRowTitle>
                        <Title>SERVICIOS</Title>
                    </ServiceRowTitle>
                    <CardsRow>
                        {
                            data.cards.map(card => (
                                <Card key={card.id}>
                                    <CardHover>
                                        <IconContainer>
                                            <IconBg>
                                                {card.icon}
                                            </IconBg>
                                        </IconContainer>
                                        <TitleCard>{card.title}</TitleCard>
                                        <TextCard>{card.paragraph}</TextCard>
                                    </CardHover>
                                </Card>
                            ))
                        }
                    </CardsRow>
                </ServiceWrapper>
            </ServiceContainer>
        </>
    )
}

export default Services
