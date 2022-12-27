import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Home from './Home';
import Detail from './Detail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const MyRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/card">
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="*" element={<Text>404 Page not found!</Text>} />
      </Routes>
    );
  }; // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>
      <MyRouter />
    </div>
  );
};

export default App;
