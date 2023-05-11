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
import { useState } from 'react';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

const GridInfoDetails = ({title, value, gridSizes=[6,6,5,6,6,7]}) => {
    return(
        <>
        <Grid item xs={gridSizes[0]} sm={gridSizes[1]} md={gridSizes[2]} textAlign={{ sm: 'left' }}>
            <Box pr={3} pb={2} minHeight={'5vh'}>
            {title}
            </Box>
        </Grid>
        <Grid item xs={gridSizes[3]} sm={gridSizes[4]} md={gridSizes[5]}>
            <Box minHeight={'5vh'}>
            <Text color="black" width='100%'>
                <b>{value}</b>
            </Text>
            </Box>
        </Grid>
        </>
    );
}

export default GridInfoDetails;