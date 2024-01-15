import { 
    Typography,
    Button,
    IconButton,
    Grid,
    Box,
    CardContent,
    Card,
    CardHeader,
    Divider,
    TextField
  } from '@mui/material';
  import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
  import NextLink from 'next/link';
  import PropTypes from 'prop-types';
  import DialogTitle from '@mui/material/DialogTitle';
  import Dialog from '@mui/material/Dialog';
  import Text from 'src/components/Text';
  import { useState, useEffect } from 'react';
  import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const GridInfoDetailsSelectable = ({title, value, handleEntryUpdate, gridSizes=[6,6,5,6,6,7], 
    options=[
      {text: 'A', value: 'A'}, 
      {text: 'B', value: 'B' }]
    }) => {
    // useEffect(() => {
      
    // }, [value])
    return(
      <>
        <Grid item xs={gridSizes[0]} sm={gridSizes[1]} md={gridSizes[2]} textAlign={{ sm: 'left' }}>
          <Box pr={3} pb={2} minHeight={'5vh'}>
            {title}
          </Box>
        </Grid>
        <Grid item xs={gridSizes[3]} sm={gridSizes[4]} md={gridSizes[5]}>
          <Box minHeight={'5vh'}>
            <div >
              <TextField
                id="outlined-select-currency-native"
                select
                value={value}
                onChange={(event) => {
                  console.log("ON CHANGE Grid")
                  console.log(event.target.value)
                  handleEntryUpdate(event.target.value)
                  // handleEntryUpdate(value);
                  // setActivateEdit(value)
                }}
                SelectProps={{
                  native: true
                }}
                size="small"
                sx={{
                  width: '100%', 
                  marginBottom: '5%'
                }}
              >
                {options.map((option) => (
                  <option key={option.text} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </TextField>
            </div>
            {/* <div style={{display: activateEdit ? 'none' : 'block'}} onClick={() => setActivateEdit((prev) => {return !prev})}>
              <Text color="black" width='100%'>
                <b>{value}</b>
              </Text>
            </div>
            <div style={{display: activateEdit ? 'block' : 'none'}}>
              <TextField
                sx={{ width: {
                  xs:'60%',
                  md:'76%'
                }, paddingBottom: '2%'}}
                required
                id="standard-required"
                variant="standard"
                defaultValue={value}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <IconButton sx={{ width: {
                xs:'20%',
                md:'12%'
              }, paddingBottom: '2%'}} onClick={() => {
                setActivateEdit(false);
                handleEntryUpdate(inputValue);
                }}>
                <CheckTwoToneIcon />
              </IconButton>
              <IconButton sx={{ width: {
                xs:'20%',
                md:'12%'
                }, paddingBottom: '2%'}} onClick={() => setActivateEdit(false)}>
                <CloseTwoToneIcon />
              </IconButton>
            </div> */}
          </Box>
        </Grid>
      </>
    );
  }

  export default GridInfoDetailsSelectable;