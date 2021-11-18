import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import {useHistory} from 'react-router-dom';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './ListaTema.css';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
        });
      history.push("/login")
    }
  }, [token])


  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    <Grid container justifyContent="center" alignItems="center" >
    <Box className='box2'>
    {
      temas.map(tema =>(
        
      <Box m={3}>
        <Card variant="outlined">
          <CardContent >
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
             {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft colorBotaoT1" size='small' >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className = 'colorBotaoT2'>
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
      </Box>
      </Grid>
    </>
  );
}


export default ListaTema;