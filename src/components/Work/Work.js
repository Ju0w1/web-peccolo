import React, { useState } from 'react'
import './work.css'
import { WorksContainer, TitleContainer, Title, WorksWrapper, MobileWrapper } from './WorkElements'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import WorkCard from '../WorkCard'

const Work = (data) => {

    const { height, width } = useWindowDimensions();

    const [appState, changeState] = useState({
        activeObject: null,
        objects: data.cards
    })

    function toggleActive(index) {
        changeState({
            ...appState, activeObject: appState.objects[index]
        })
    }

    function toggleActiveStyle(index) {
        if (appState.objects[index] === appState.activeObject) {
            return "option active"
        } else {
            return "option"
        }
    }
    return (
        <WorksContainer id={data.id}>
            <WorksWrapper>

                <TitleContainer>
                    <Title>TRABAJOS</Title>
                </TitleContainer>
                {width >= 975 ?
                    <div className='body'>
                        <div className="options">
                            {

                                appState.objects.map((element, index) => (

                                    <div key={index} className={toggleActiveStyle(index)} onClick={() => { toggleActive(index) }} style={{ backgroundImage: `url(${element.image})` }}>
                                        <div className="shadow"></div>
                                        <div className="label">
                                            <div className="icon">
                                                {element.icon}
                                            </div>
                                            <div className="info">
                                                <div className="main">{element.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <MobileWrapper>
                        {
                            appState.objects.map((element, index) => (
                                <WorkCard src={element.image} alt={element.title} icon={element.icon} />
                            ))
                        }
                    </MobileWrapper>

                }
            </WorksWrapper>

        </WorksContainer>
    )
}

export default Work