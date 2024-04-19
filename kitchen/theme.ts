import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/raleway'
import '@fontsource/ubuntu';

const theme = extendTheme({
  fonts: {
    heading: 'Ubuntu',
    body: `'Ubuntu', sans-serif`,
  },
})

export default theme