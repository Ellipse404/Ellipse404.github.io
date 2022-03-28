import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material';

import palette from './palette';
import typography, {createTypographyOverrides} from './typography';

const breakpoints = createBreakpoints({});

const overrides = createTypographyOverrides(breakpoints);

const theme = createMuiTheme({palette, typography, breakpoints, overrides});

export default theme;