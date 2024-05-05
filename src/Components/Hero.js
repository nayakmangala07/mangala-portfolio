import React from 'react';
import '../App.css';
import { Grid, Container, Button } from '@material-ui/core';
import profilePic from '../Images/pro_pic.png';
import instagram from '../Images/Icon/instagram.svg';
import github from '../Images/Icon/github.svg';
import email from '../Images/Icon/email.svg';
import linkedin from '../Images/Icon/linkedin.svg';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import AutoType from "./AutoType";

const icon = [
  {
    url: 'https://instagram.com/aart_gaala',
    icon: instagram,
  },
  {
    url: 'https://github.com/',
    icon: github,
  },
  {
    url: 'mailto:mangala.nayak.portfolio@gmail.com',
    icon: email,
  },
  {
    url: 'https://www.linkedin.com/in/mangala-nayak-u',
    icon: linkedin,
  },
];


function Hero() {
  return (
    <React.Fragment>
      <div className='wave1'>
        <Container maxWidth='lg'>
          <Grid
            container
            justifyContent='center'
            style={{ textAlign: 'center' }}
          >
            <Grid item xs={12}>
              <h1 style={{ color: '#ffffff' }}>
                <span style={{ color: '#646369' }}>Hi, I&#39;m &#32;</span>
                <span style={{ color: '#646369' }}>Mangala Nayak</span>
              </h1>
              <h3 style={{ color: '#4F4F4F' }}>
                <AutoType />

              </h3>
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
            <Grid item lg={3} md={6} xs={6}>
              <img src={profilePic} className='img-profil' alt='profil' width='100%' />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth='lg'>
        <Grid container justifyContent='center'>
          {icon.map((item, index) => (
            <div className='medsos' key={index}>
              <a href={item.url} target='_blank' rel='noreferrer'>
                <img src={item.icon} alt='profil' className="hero-icon" width='80%' />
              </a>
            </div>
          ))}
        </Grid>

        <Grid container justifyContent='center' style={{ margin: '2rem 0 0' }}>
          <Grid item xs={12} md={5} lg={2} style={{ margin: '.5rem 1rem' }}>
            <a href="#portfolio">
              <Button size='large' variant='outlined' className='btn btn-second'>
                See my work
              </Button>
            </a>
          </Grid>

          <Grid item xs={12} md={5} lg={2} style={{ margin: '.5rem 1rem' }}>
            <a href="#hire">
              <Button size='large' variant='contained' className='btn btn-primary'>
                Hire Me &nbsp; <ArrowForwardIosRoundedIcon />
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Hero;
