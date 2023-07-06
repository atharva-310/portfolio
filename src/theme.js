import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#000000')(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#f5cb5c')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts });
export default theme;
