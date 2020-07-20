import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../service/api'

import * as S from './style'
import { DivContainer, DivButtons, DivHeaderMatch } from '../../style/globalStyle'

import { makeStyles } from '@material-ui/core/styles';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GroupIcon from '@material-ui/icons/Group';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { blue } from '@material-ui/core/colors';


const useStyle = makeStyles((theme) => ({
  home: {
    margin: '10px',
    color: 'black',
  },
  buttonMatch: {
    height: '2em',
    width: '2em',
    margin: '5px auto 10px auto',
    '&:hover': {color: '#00F'},
  },
  buttonUnMatch: {
    height: '2em',
    width: '2em',
    margin: '5px auto 10px auto',
    '&:hover': {color: '#F00',},
  },
  blurOnIcon: {
    display: 'block',
    padding: '0 46%',
    animation: '$blink .9s infinite'
  },
  search: {
    fontFamily: 'Balsamiq Sans - sans-serif',
    animation: "$blink .9s infinite"
  },
  '@keyframes blink': {
    from: { opacity: "0" },
    to: { opacity: "1" }
  }
}))

export default function Match() {
  const [person, setPerson] = useState({});
  const classes = useStyle();

  useEffect(() => {
    getApi()
  },[])

  const getApi = async () => {
    try{
      const response = await api.get('person')
      setPerson(response.data.profile)
    } catch(err) {
        console.log(err)
      }
  }
  
  const choosePerson = async (data) => {
    getApi()
    try{
      const response = await api.post('choose-person', data)
    } catch(err) {
      console.log(err)
    }
  }

  const onClickMatchTrue = (id) => {
    const data = {
      "id": id,
      "choice": true,
    }
    choosePerson(data)
  }

  const onClickMatchFalse = (id) => {
    const data = {
      "id": id,
      "choice": false,
    }
    choosePerson(data)
  }

  return(
    <DivContainer>
      <DivHeaderMatch>
        <Link to="/matches">
          <GroupIcon className={classes.home}/>
        </Link>
      </DivHeaderMatch>
      {person === null && (
        <S.DivZeroPerson>
          <BlurOnIcon className={classes.blurOnIcon}/>
          <text className={classes.search}>PROCURANDO...</text> 
        </S.DivZeroPerson>)
      }
      {person !== null && (
        <div>
          <S.ImagePerfil src={person.photo}/>
          <DivButtons>
            <CancelIcon cursor="pointer" color="secondary" viewBox="0 0 24 22" className={classes.buttonUnMatch} onClick={() => onClickMatchFalse(person.id)}/>
            <FavoriteIcon cursor="pointer" color="primary" viewBox="0 0 24 20" className={classes.buttonMatch} onClick={() => onClickMatchTrue(person.id)}/>
          </DivButtons>
        </div>)
      }
      
    </DivContainer>
    )
}