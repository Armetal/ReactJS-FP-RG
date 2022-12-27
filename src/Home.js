// TODO: answer here
import { Center, SimpleGrid, Select } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Cards';

function Home() {
  // TODO: answer here
  const [kartu, setKartu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [opsi, setOpsi] = useState('name');
  useEffect(() => {
    // fetch data dari API
    setLoading(true);
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4`)
      .then((response) => response.json())
      .then((json) => {
        setKartu(json.data);
        setLoading(false);
      });
  }, []);
  const pindah = (e) => {
    setOpsi(e.target.value);
  };

  function sortData(type) {
    if (opsi === 'atk') {
      const filterByAtk = type.sort((a, b) => (a.atk > b.atk ? 1 : -1));
      return filterByAtk;
    } else if (opsi === 'def') {
      const filterByDef = type.sort((a, b) => (a.def > b.def ? 1 : -1));
      return filterByDef;
    } else if (opsi === 'name') {
      const filterByName = type.sort((a, b) => (a.name > b.name ? 1 : -1));
      return filterByName;
    }
  }

  return (
    <div>
      <Select onChange={pindah} name="sort">
        <option value="name">Name</option>
        <option value="atk">Attack</option>
        <option value="def">Defence</option>
      </Select>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Center>
          <SimpleGrid columns={4} spacing={10}>
            {sortData(kartu).map((cek) => {
              return <Card card={cek} />;
            })}
          </SimpleGrid>
        </Center>
      )}
    </div>
  ); // TODO: replace this
}

export default Home;
