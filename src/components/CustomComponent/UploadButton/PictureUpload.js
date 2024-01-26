import { Card } from '@mui/material';
import {
  Divider,
  CardHeader,
  Avatar,
} from '@mui/material';
import UploadButton from "./UploadButton";

const PictureUpload = ({title="Add Ship Picture", target = 'vesselImage', handleUpdate, picLink, error}) => {
    return (
        <>
            <Card sx={{ height: '100%', boxSizing: 'border-box' }}>
                <CardHeader title={title} />
                <Divider />
                <div style={{padding: '5%', width: '100%', height: '80%',  display : "flex", justifyContent : "center", alignItems: 'center', flexDirection : 'column', boxSizing: 'border-box' }}>
                    <Avatar variant="rounded" src={picLink} 
                        sx={{
                            width: '80%',
                            height: '80%',
                            marginBottom: '2%',
                        }}
                        // sx={{ 
                        //     width: {xs: '60%', sm:'60%', md: '60%', lg: '60%'}, 
                        //     height:{xs: '60%', sm:'60%', md: '60%', lg: '60%'}, 
                        //     aspectRatio: '4/3',
                        // }}
                    />
                    {error != null && (
                    <div style={{ color: 'red', width: '100%', textAlign: 'center', fontSize: '16px', fontWeight: 'bold', marginBottom: '2%'}}>
                        {error}
                    </div>
                    )}
                    <UploadButton onUpload={handleUpdate(target, "image")} />
                </div>  
            </Card>
        </>
    );
}

export default PictureUpload;