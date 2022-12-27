import { Link } from 'react-router-dom';
import { Box, Heading, Image } from '@chakra-ui/react';

function Card({ card }) {
  return (
    <Link to={`/card/${card.id}`} key={card.id}>
      <Box w="170px" className="yugioh-card">
        <Image src={card.card_images[0].image_url}></Image>
        <Heading as="h2" size="sm">
          {card.name}
        </Heading>
      </Box>
    </Link>
  ); // TODO: replace this
}

export default Card;
