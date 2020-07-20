import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import api from '../../service/api'

import * as S from './style'
import { DivContainer, DivHeaderMatches } from '../../style/globalStyle'

import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles((theme) => ({
  home: {
    margin: '10px',
    color: 'black',
  },
  delete: {
    margin: '10px',
  }
}))

export default function Matches() {
  const [persons, setPersons] = useState([])
  const classes = useStyle()

  useEffect(() => {
      getMatches();
  },[])

  const getMatches = async () => {
    try{
      const response = await api.get('matches')
      setPersons(...persons, response.data.matches)
    } catch(err) {
      console.log(err)
    }
  }

  const clearMatches = async () => {
    try{
      const response = await api.put('clear')
      setPersons([])
    } catch (err) {
        console.log(err)
      }
  }

  return(
    <>
      <DivContainer>
        <DivHeaderMatches>
          <Link to="/">
              <HomeIcon className={classes.home} />
          </Link>
          <DeleteForeverIcon cursor="pointer" className={classes.delete} onClick={clearMatches} />
        </DivHeaderMatches>
        <S.DivScreenRoll>
        {persons.length > 0 ? persons.map((person) => (
          <S.DivScreen key={person.id}>
            <S.DivImage>
              <S.ImgPerfil key={person.id} src={person.photo} />
            </S.DivImage>
            <S.DivName key={person.id}>{person.name}</S.DivName>
          </S.DivScreen>
        )) : 
          <S.DivZeroMatches>
            Não tem Matches!!
          </S.DivZeroMatches>
        }
        </S.DivScreenRoll>
      </DivContainer>
    </>)
    
}