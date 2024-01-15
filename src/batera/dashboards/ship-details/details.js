import { 
    Grid,
    Typography,
    CardContent,
    Box,
    Divider,
    Button,
    Avatar,
} from '@mui/material';
import { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';

function ShipDetailCard({data : { ship }}) {
    const shipDetail = {
        "Vessel Name" : "vesselName",
        "IMO Number" : "imoNumber",
        "Year Built" : "year",
        "Flag" : "flag",
        "DWT" : "dwt",
        "Gross Tonage" : "grossTonage",
        "Call Sign" : "callsign",
        "LOA" : "LOA",
        "Breadth" : "breadth",
        "Vessel Type - Generic" : "vesselTypeGeneric",
        "Vessel Type - Detailed" : "vesselTypeDetailed"
    }

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedValue, setSelectedValue] = useState({});

    const handleClickOpenDeleteModal = () => {
        setOpenDeleteModal(true);
    };

    const handleClickOpenEditModal = () => {
        setOpenEditModal(true);
    };

    const postData = async () => {
        const formData = new FormData();
        Object.values(shipDetail).forEach(val => {
            formData.append(val, selectedValue.IMO_Number)
        })
    }

    return (
        <>
            <Box
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h4" gutterBottom> Details </Typography>
            </Box>

            <Divider />

            <CardContent sx={{ p: 4 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Box>
                            {
                                Object.entries(shipDetail).map(([key, value], index) => 
                                    <Grid container spacing={1} marginBottom={1} key={index}>
                                        <Grid item xs={5}>
                                            { key }
                                        </Grid>
                                        <Grid item xs>:</Grid>
                                        <Grid item xs={5}>
                                            <Typography color="black" fontWeight="bold">
                                                { ship?.[value] }
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            }

                            <Box>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={handleClickOpenEditModal} 
                                    >
                                    Update Ship
                                </Button>
                                <Button 
                                    style={{ marginLeft : "1rem" }}
                                    variant="contained" 
                                    color="error" 
                                    onClick={handleClickOpenDeleteModal} 
                                    >
                                    Delete Ship
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Avatar      
                            variant="rounded" 
                            src={ship?.picture} 
                            sx={{ 
                                width: '80%', 
                                height: '80%', 
                                boxSizing: 'border-box' 
                            }}
                        >
                            <ImageIcon />
                        </Avatar >
                    </Grid>
                </Grid>

            </CardContent>
        </>
    );
}

export default ShipDetailCard;
