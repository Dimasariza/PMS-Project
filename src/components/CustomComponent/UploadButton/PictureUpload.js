import { Card } from '@mui/material';
import {
  Divider,
  CardHeader,
  TextField,
  Avatar,
} from '@mui/material';
import UploadButton from "./UploadButton";

const PictureUpload = ({handleUpdate, picLink}) => {
    const url = process.env.PUBLIC_URL || ""
    return (
        <Card sx={{ height: '100%' }}>
            <CardHeader
                title="Add Ship Picture"
                />
            <Divider />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70%', boxSizing: 'border-box'}}>
                <Avatar variant="rounded" src={picLink} sx={{ width: {xs: '60%', sm:'40%', md: '50%', lg: '40%'}, height:{xs: '60%', sm:'80%', md: '80%', lg: '80%'}, aspectRatio: '1/1' }}/>
            </div>
            <UploadButton onUpload={handleUpdate('vesselImage')} />
        </Card>
    );
}

export default PictureUpload;