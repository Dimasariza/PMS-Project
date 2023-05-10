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
                <Avatar variant="rounded" src={url + picLink} sx={{ width: '50%', height: '80%' }}/>
            </div>
            <UploadButton onUpload={handleUpdate('vesselImage')} />
        </Card>
    );
}

export default PictureUpload;