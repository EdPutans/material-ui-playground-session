import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import RecipeReviewCard from './CardToSHow'

function App() {
  const [count, setCount] = useState(0)

  const hasError = count % 2 !== 0;

  const userList = [
    { id: 1, name: "Nico" },
    { id: 2, name: "Ed" },
    { id: 3, name: "Marsel" }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <Stack spacing={2} direction="row">
          <Button onClick={() => setCount(count => count + 1)} variant="text">Add moar!</Button>
          <Button color='' variant="contained">blabla</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <TextField label="Outlined" error={hasError} helperText={hasError ? "oop, found an error!" : "Hey, all good yo"} />
        <Autocomplete
          options={userList}
          renderInput={params => <TextField {...params} label="Autocomplete" variant="outlined" />}
          getOptionLabel={(user) => user.name}
        />
        <RecipeReviewCard />
      </header>
    </div>
  )
}

export default App
