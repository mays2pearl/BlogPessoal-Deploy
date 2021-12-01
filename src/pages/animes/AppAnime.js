import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import { Box, Button} from '@material-ui/core';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useHistory } from 'react-router';import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './styles.css'

const api = 'https://kitsu.io/api/edge/';

  function AppAnime() {
   
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${api}anime?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
       <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link to='/home' className='text-decoration-none'>
                        <Button variant="outlined" className='botao'>Voltar</Button>
                        </Link>
                    </Box>
      <h1>Pesquise um Anime:</h1>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />
      {text && !info.data && <span>Carregando...</span>}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
 export default AppAnime;