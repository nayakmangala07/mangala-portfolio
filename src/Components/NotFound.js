import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import NotFounds from '../Images/404.svg';
import { useLocation, useHistory } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const history = useHistory();

  function handleClick() {
    history.push('/portfolio');
  }
  
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container justifyContent='center' style={{ margin: '6rem 0' }}>
          <h4>
            {' '}
            Sorry! {location.pathname} page is not found or removed.
          </h4>
          <img src={NotFounds} alt='NotFound' width='80%' />
          <Button
            variant='contained'
            style={{
              backgroundColor: '#40679E',
              fontWeight: '600',
              color: '#ffffff',
              borderRadius: '30px',
              fontFamily: 'Montserrat',
            }}
            onClick={handleClick}
            size='medium'
          >
            Return to Home Page
          </Button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
