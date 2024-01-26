import {
  IconButton,
  useTheme
} from '@mui/material';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';

const UploadButton = ({ onUpload }) => {
  const [fileName, setFileName] = useState('');
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    onUpload(file);
  };

  const Input = styled('input')({
    display: 'none'
  });

  return (
    <div style={{display : "flex", justifyContent : "center", flexDirection : 'row', boxSizing: 'border-box'}}>
      {/* <IconButton color="primary" variant="contained" onClick={handleButtonClick}>
        <UploadTwoToneIcon />
      </IconButton> */}
      <Button variant="contained" color="primary" onClick={handleButtonClick} endIcon={<UploadTwoToneIcon />}>
        Upload
      </Button>
      <Input
        type="file"
        ref={inputRef}
        onChange={handleFileSelect}
      />
      {/* {fileName && <p>{fileName}</p>} */}
    </div>
  );
};

export default UploadButton;