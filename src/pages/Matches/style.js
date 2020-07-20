import styled from 'styled-components'

export const ImgPerfil = styled.img`
    height: 50px;
    width: 60px;
    border-radius: 50%;
`

export const ButtonMain = styled.button`
    margin: 10px;
`

export const DivScreenRoll = styled.div`
    overflow: auto;
    height: 366px;
    background-color: #F7F7F7;
`

export const DivScreen = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin: 5px;
`

export const DivZeroMatches = styled.div`
    display: grid;
    margin: auto;
    justify-content: center;
    align-items: center;
    height: 365px;
    background-color: #F7F7F7;
`

export const DivImage = styled.div`
    grid-column: 1/2;
    padding: auto;
    height: 50px;
`

export const DivName = styled.div`
    grid-column: 2/5;
    margin: auto 0;
`