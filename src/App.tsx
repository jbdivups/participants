import { Box, Container } from '@chakra-ui/react';
import { Button } from './components/Button';
import { Alert } from './components/Alert';

function App() {

  return (
    <Container>
      <Box p={8}>
        <Button label={'Hello'} />
        <Alert title={'Hello'} />
      </Box>
    </Container>
  );
}

export default App;