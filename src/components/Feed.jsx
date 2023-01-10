import { Box,Stack, Typography } from '@mui/material'
import {useState,useEffect} from 'react'

const Feed = () => {
  return (
    <Stack sx = {{flexDirection:{sx:
    'column' , md:'row'}}}>
    <Box sx = {{height:{
      sx:'auto',
      md:'92vh'},
      borderRight:'5px solid #CC644E',
      px:{sx:0},md:2}}>
      Sidebar
      <Typography className='copyright' variant='body2'
      sx = {{ mt:1.5 , color:'#fff '}}>
        Copyright 2022 Hitaish kumar 
      </Typography>
      </Box>

    </Stack>
  )
}

export default Feed