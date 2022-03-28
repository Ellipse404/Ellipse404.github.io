import React from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
// import CustomToolTip from '../CustomToolTip';
// import Icons from '../../constants/icons';
import { pxToRem } from '../../utils';

const useStyles = makeStyles(({ spacing, palette }) => ({
  customInput: {
    '& .MuiInputAdornment-positionEnd': {
      height: 'auto',
      maxHeight: 'none',
      flexDirection: 'column',
      marginBottom: 'auto',
    },
    '& .MuiOutlinedInput-adornedEnd': {
      paddingRight: 0,
    },
    '& .MuiInputLabel-shrink ': {
      display: 'flex',
    },
    '& .MuiOutlinedInput-root': {
      maxWidth: '100%',
    },
    '&.MuiInputLabel-root': {
      color: palette.primary.light,
    },
  },

  InputInfo: {
    color: palette.primary.dark2,
    width: 14,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  InputMaxLength: {
    color: palette.primary.medium3,
    backgroundColor: palette.primary.accordian,
    fontSize: '10px !important',
    fontFamily: 'Nunito Sans',
    fontWeight: 'bold',
    fontstretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    width: 20,
    height: 20,
    top: '33px',
    borderRadius: pxToRem(4),
    // borderBottomRightRadius: pxToRem(2),
    position: 'absolute',
    right: 0,
    bottom: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: palette.lightGrey,
    height: 35,
    width: 20,
    textAlign: 'center',
    padding: spacing(0.5),
    borderBottomLeftRadius: pxToRem(2),
    borderTopRightRadius: pxToRem(2),
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: palette.primary.light2,
    color: palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  passwordIcon: {
    color: palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  infoList: {
    margin: 0,
    padding: spacing(1, 1, 1, 3),
  },
  inputIcons: {
    backgroundColor: '#c5cbcf',
    // display
  },
}));

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& label.Mui-focused': {
    color: `${theme.palette.primary.dark2} !important`,
  },
  '& .MuiFilledInput-root': {
    // height: '56px',
    border: `1px solid ${theme.palette.primary.light}`,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.white,
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#2f2f2f',
    '&:hover': {
      backgroundColor: theme.palette.white,
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.white,
      borderColor: '#5142b3',
    },
    '&.MuiInputBase-root.Mui-disabled': {
      backgroundColor: `${theme.palette.lightGrey} !important`,
      border: 'none',
    },
  },
}));

const TextBoxInputField = ({
  type = 'text',
  value,
  // setValue,
  placeholder,
  errorMessage,
  information,
  endAdornment,
  inputLengthRem,
  maxLength,
  toolTipClassName,
  minRows,
  multiline,
  variant = 'filled',
  name,
  onChange,
  error,
  helperText,
  defaultValue,
  ...props
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CustomTextField
        {...props}
        type={type}
        label={placeholder}
        name={name}
        id='filled-error-helper-text'
        error={Boolean(error)}
        helperText={helperText}
        variant={variant}
        style={{ width: props.width || 'inherit' }}
        value={value}
        defaultValue={defaultValue}
        minRows={props.minRows}
        multiline={props.multiline}
        autoComplete='off'
        onChange={onChange}
        InputLabelProps={{
          style: { color: '#c5cbcf' },
        }}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position='end'>
              <div className={classes.inputIcons}>
                {maxLength && (
                  <Typography
                    className={`${classes.InputMaxLength} custom-input-max-length`}>
                    {inputLengthRem < maxLength
                      ? maxLength - inputLengthRem
                      : inputLengthRem > maxLength ||
                        inputLengthRem === maxLength
                      ? '0'
                      : maxLength}
                  </Typography>
                )}
              </div>
              {endAdornment}
            </InputAdornment>
          ),
        }}
      />
    </React.Fragment>
  );
};

export default TextBoxInputField;
