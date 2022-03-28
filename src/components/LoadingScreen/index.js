import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box } from '@mui/material';

const LoadingScreen = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#5142b3',
        minHeight: '100%',
      }}
    />
  );
};

export default LoadingScreen;
