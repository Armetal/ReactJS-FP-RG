// TODO: answer here
import { Box, Text, Heading, Button, Image, Stack, SimpleGrid, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Detail() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const dDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    dDetail();
  }, [id]);
  return (
    <div>
      {loading ? (
        <Heading as="h1">Loading...</Heading>
      ) : (
        <div>
          <Link to="/">
            <Button m="3" colorScheme="orange" variant="outline">
              Back
            </Button>
          </Link>
          <Box ml="150" mr="150">
            <Stack direction="row">
              <Image w="200px" src={datas?.data[0].card_images[0].image_url} />
              <Stack>
                <Heading size="lg">{datas?.data[0].name}</Heading>
                <Text>Level: {datas?.data[0].level}</Text>
                <Text as="b">{datas?.data[0].attribute}</Text>
                <Text as="b">
                  ATK/{datas?.data[0].atk} DEF/{datas?.data[0].def}
                </Text>
                <Text>
                  [ {datas?.data[0].type} / {datas?.data[0].race} ]
                </Text>
                <Text>{datas?.data[0].desc}</Text>
              </Stack>
            </Stack>
            <VStack>
              <Heading size="sm">Card Set</Heading>
              <SimpleGrid columns={4}>
                {datas?.data[0].card_sets.map((sets) => {
                  return (
                    <Box borderWidth="1px" borderRadius="lg" m="10px">
                      <Text fontSize="xm">Name: {sets.set_name}</Text>
                      <Text fontSize="xm">Code: {sets.set_code}</Text>
                      <Text fontSize="xm">Rarity: {sets.set_rarity}</Text>
                      <Text fontSize="xm">Price: {sets.set_price}</Text>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </VStack>
          </Box>
        </div>
      )}
    </div>
  ); // TODO: replace this
}

export default Detail;
