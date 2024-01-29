import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function checkIfNumber(newValue){
    const floatValue = parseFloat(newValue);
    const isFloat = !isNaN(floatValue);

    // Check if the value is convertible to an integer
    const intValue = parseInt(newValue, 10); // Assuming base 10
    const isInt = !isNaN(intValue);
    if (isFloat || isInt) {
      return true
    } else {
      return false
    }
}

function isFloat(value) {
    const floatValue = parseFloat(value);
    return !isNaN(floatValue);
  }
  
  function isInteger(value) {
    const intValue = parseInt(value, 10); // Assuming base 10
    return !isNaN(intValue);
  }

function CheckIfImageFits(key, inputValue, setValue, setError){
    if(inputValue === undefined || inputValue === null){
        setError((prev) => ({
        ...prev,
        [key]: 'Gambar tidak boleh kosong',
        }));
    }else{
        console.log(inputValue)
        const selectedFile = inputValue;
        if (selectedFile) {
            const fileSizeInKB = selectedFile.size / 1024;
            console.log(selectedFile.size, fileSizeInKB)
            if (fileSizeInKB > 1024) {
                setError((prev) => ({
                ...prev,
                [key]: "Ukuran gambar tidak boleh melebihi 1024 kilobytes",
                }));
            } else {
                setValue((prev) => ({
                ...prev,
                [key]: inputValue,
                }));
                setError((prev) => ({
                ...prev,
                [key]: null,
                }));
            }
        }
    }
}

function CheckIfInputNull(key, inputValue, setValue, setError, 
    nextStep = (key, inputValue, setValue, setError) => {
        setValue((prev) => ({
            ...prev,
            [key]: inputValue,
        }));
        setError((prev) => ({
            ...prev,
            [key]: null,
        }));
    }
){
    if(inputValue == null || inputValue == ''){
        console.log((inputValue, " is null, return error"))
        setValue((prev) => ({
            ...prev,
            [key]: inputValue,
        }));
        setError((prev) => ({
            ...prev,
            [key]: `Kolom ${capitalizeFirstLetter(key)} belum diisi`,
        }));
    }else{
        console.log((inputValue, " is acceptable"))
        nextStep(key, inputValue, setValue, setError)
    }
}  

function CheckIfDateFits(key, inputValue, setValue, setError, minYear = 1908, maxDigit = 4){
    if(checkIfNumber(inputValue)){
        if(inputValue < minYear){
            setValue((prev) => ({
                ...prev,
                [key]: inputValue,
            }));
            setError((prev) => ({
                ...prev,
                [key]: `Tahun minimal ${minYear}`,
            }));
        }else if(inputValue > Math.pow(10, maxDigit) - 1){
            // setError((prev) => ({
            //   ...prev,
            //   [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit`,
            // }));
        }else {
            setValue((prev) => ({
            ...prev,
            [key]: inputValue,
            }));
            setError((prev) => ({
            ...prev,
            [key]: null,
            }));
        }
    }else{
        // setError((prev) => ({
        //     ...prev,
        //     [key]: `${capitalizeFirstLetter(key)} hanya boleh diisi dengan angka`,
        //     }));
    }
    
}

function CheckIfInputInt(key, inputValue, setValue, setError, maxDigit = 7){
    if(isInteger(inputValue)){
        if(inputValue > Math.pow(10, maxDigit) - 1){
            // setError((prev) => ({
            //   ...prev,
            //   [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit`,
            // }))
        }else{
            setValue((prev) => ({
                ...prev,
                [key]: inputValue,
            }));
            setError((prev) => ({
                ...prev,
                [key]: null,
            }));
        }
    }else{
        // setError((prev) => ({
        // ...prev,
        // [key]: `${capitalizeFirstLetter(key)} hanya boleh diisi dengan angka`,
        // }));
    }
}

function CheckIfInputFloat(key, inputValue, setValue, setError, maxDigit = 6, maxDecimal = 2){
    // console.log(inputValue)
    
    const isFloat = /^[+-]?(\d*\.\d{0,2}|\d+)$/.test(inputValue);
    // console.log(isFloat)
    if (isFloat) {
      const [integerPart, decimalPart] = inputValue.split('.');
      
      if (integerPart.length > maxDigit || (decimalPart && decimalPart.length > maxDecimal)) {
        // setError((prev) => ({
        //   ...prev,
        //   [key]: `${capitalizeFirstLetter(key)} maximal ${maxDigit} digit with ${maxDecimal} decimal places`,
        // }));
      } else {
        setValue((prev) => ({
          ...prev,
          [key]: inputValue,
        }));
        setError((prev) => ({
          ...prev,
          [key]: null,
        }));
      }
    } else {
    //   setError((prev) => ({
    //     ...prev,
    //     [key]: `${capitalizeFirstLetter(key)} hanya boleh diisi dengan angka`,
    //   }));
    }
}

export  function checkAllErrorCleared(inputValue, setError ){
    var cheker = true;
    Object.keys(inputValue).forEach(key => {
      if (inputValue[key] !== '') {
        // console.log(key, ' is ', inputValue[key], true);
      } else {
        setError(prev => ({
          ...prev,
          [key]: `${capitalizeFirstLetter(key)} tidak boleh kosong`,
        }));
        // console.log(key, ' is ', inputValue[key], false);
        cheker = false;
      }
    });
    return cheker;
}

export function CheckInput(key, inputValue, inputType, setValue, setError){
    // console.log(inputType, inputValue)
    if(inputType == "image"){
        CheckIfImageFits(key, inputValue, setValue, setError)
    }else if(inputType == "float"){
        CheckIfInputNull(key, inputValue, setValue, setError, CheckIfInputFloat)
    }else if(inputType == "int"){
        CheckIfInputNull(key, inputValue, setValue, setError, CheckIfInputInt)
    }else if(inputType == "year"){
        CheckIfInputNull(key, inputValue, setValue, setError, CheckIfDateFits)
    }else{
        CheckIfInputNull(key, inputValue, setValue, setError)
    }
    
}  