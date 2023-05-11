import {
  IconButton,
  useTheme
} from '@mui/material';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';

const UploadButton = ({ onUpload }) => {

  const theme = useTheme();
  const styles = {
    button: {
      backgroundColor: theme.colors.primary.main,
      color: theme.palette.primary.contrastText,
      boxShadow: theme.colors.shadows.primary,
      borderRadius: '50%',
      height: {
        xs: '70%',
        sm: '70%',
        md: '70%',
        lg: '70%',
      },
      aspectRatio: '1/1', // The button is round
      width: {
        xs: '70%',
        sm: '70%',
        md: '70%',
        lg: '70%',
      }, // The width is 80% of the height
    },
    icon: {
      fontSize: '40',
    },
    input: {
      display: 'none',
    },
  };

  const [fileName, setFileName] = useState('');
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    console.log(inputRef)
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
    <div style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', padding: '1%', height: '20%'}}>
      <IconButton style={styles.button} color="primary" onClick={handleButtonClick}>
        <UploadTwoToneIcon style={styles.icon} />
      </IconButton>
      <Input
        style={styles.input}
        type="file"
        ref={inputRef}
        onChange={handleFileSelect}
      />
      {fileName && <p>{fileName}</p>}
    </div>
  );
};

export default UploadButton;