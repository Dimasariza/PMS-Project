import { Card } from '@mui/material';
import {
  Divider,
  CardHeader,
  Avatar,
} from '@mui/material';
import UploadButton from "./UploadButton";

const PictureUpload = ({title="Add Ship Picture", target = 'vesselImage', handleUpdate, picLink}) => {
    return (
        <>
            <Card sx={{ height: '100%' }}>
                <CardHeader title={title} />
                <Divider />
                <div style={{ margin : "auto", display : "flex", justifyContent : "center" }}>
                    <Avatar variant="rounded" src={picLink} 
                        sx={{ 
                            width: {xs: '60%', sm:'60%', md: '60%', lg: '60%'}, 
                            height:{xs: '60%', sm:'60%', md: '60%', lg: '60%'}, 
                            aspectRatio: '4/3',
                        }}
                    />
                </div>  
            </Card>
            <div style={{ position : 'relative', bottom : '5rem', right : '1rem' }}>
                <UploadButton onUpload={handleUpdate(target)} />
            </div>
        </>
    );
}

export default PictureUpload;