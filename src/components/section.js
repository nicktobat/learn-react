import React from 'react'
import styled from 'styled-components'

import Wave from './wave';

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionTitleGroup>
            <SectionLogo src={props.logo} />
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

const SectionGroup = styled.div`
    margin: 96px 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 296px auto;
    grid-gap: 20px;
    position: relative;
 
    @media (max-width: 640px) {
        height: 824px;
    }
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    height: 320px;
    margin: 200px auto;
    display: grid;
    grid-gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: white;
    font-size: 56px;
    margin: 0;
    line-height: 1.2;
    text-align: center;
 
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
    text-align: center;
    margin: 0;
`

export default Section