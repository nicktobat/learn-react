import React from 'react'
import styled from 'styled-components'

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 64px auto;
    grid-gap: 24px;
    align-items: center;
    min-width: 320px;
`

const CellImage = styled.div`
    width: 64px;
    height: 64px;
    background: #212C4F;
    border-radius: 8px;
    background-image: url(${props => props.image});
    background-size: 64px;
    background-repeat: no-repeat;
    background-position: center;
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 32px 0;
`

export default Cell