import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const PokeMonAPI = () => {
  const [num, setNum] = useState('');
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  const classes = useStyles();


  useEffect(()=>{
    async function getData(){
         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name)
        console.log(res.data.order)
        setMoves(res.data.order)
    }
    getData()
  })
  return (
    <>
     
      <h1>you choose number {num}</h1>
      <h1>you choose name {name}</h1>
      <h1>you choose order {moves}</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">poke</InputLabel>
        <Select value={num} onChange={(e)=>{ 
            setNum(e.target.value);
            console.log(num)
        }}>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="25">25</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
