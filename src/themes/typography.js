import {pxToRem} from '../utils';

const typography = {
  fontFamily: 'Nunito Sans',
};

function createTypographyOverrides(breakpoints) {
  return {
    MuiTypography: {
      h4: {
        fontSize: pxToRem(40),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(30),
        },
      },
      h5: {
        fontSize: pxToRem(20),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(15),
        },
      },
      subtitle1: {
        fontSize: pxToRem(22),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(20),
        },
      },
      subtitle2: {
        fontSize: pxToRem(24),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(22),
        },
      },
      body1: {
        fontSize: pxToRem(18),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(16),
        },
      },
      body2: {
        fontSize: pxToRem(20),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(18),
        },
      },
      caption: {
        fontSize: pxToRem(16),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(14),
        },
      },
    },
  };
}

export {typography as default, createTypographyOverrides};
