import styled from 'styled-components'

export const DivContainer = styled.div`
    width: 300px;
    min-height: 400px;
    margin: auto;
    border: 1px solid;
    background-color: #F7F7F7
`

export const DivButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);  
    background-color: #CCC;
    border-top: 1px solid;
`

export const DivHeaderMatch = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 1px solid;
    background-color: #CCC;
`

export const DivHeaderMatches = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    background-color: #CCC;
`