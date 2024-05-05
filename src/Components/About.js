import React from 'react';
import { Grid, Container, Slider, Hidden } from '@material-ui/core';
import about from '../Images/About me-rafiki.svg';
import programming from '../Images/coding-girl.svg';
// import user from '../Images/Icon/user.svg';
// import football from '../Images/Icon/football.svg';
// import location from '../Images/Icon/location.svg';
import { withStyles } from '@material-ui/core/styles';

import html5 from '../Images/Icon/html5.svg';
import css3 from '../Images/Icon/css3.svg';
import reacts from '../Images/Icon/react.svg';
import mongoDB from '../Images/Icon/mongodb-svgrepo-com.svg';
import cloud from '../Images/Icon/cloud-computing-data-5-svgrepo-com.svg';
import SQL from '../Images/Icon/sql-svgrepo-com.svg';
import javascript from '../Images/Icon/javascript.svg';

// const who = [
//   {
//     img: user,
//     name: 'Profile',
//     desc: 'Creative. Details. Collaborative.',
//   },
//   {
//     img: location,
//     name: 'Address',
//     desc: 'Mangalore, Karnataka, India.',
//   },
//   {
//     img: football,
//     name: 'Hobby',
//     desc: 'Drawing. Swimming. Yoga.',
//   },
// ];

const skillset = [
  {
    img: javascript,
    name: 'NodeJS',
    value: 70,
  },
  {
    img: reacts,
    name: 'ReactJS',
    value: 70,
  },
  {
    img: html5,
    name: 'HTML',
    value: 70,
  },
  {
    img: css3,
    name: 'CSS',
    value: 70,
  },
  {
    img: mongoDB,
    name: 'MongoDB',
    value: 60,
  },
  {
    img: SQL,
    name: 'SQL',
    value: 60,
  },
  {
    img: cloud,
    name: 'AWS',
    value: 50,
  },
  {
    img: cloud,
    name: 'GCP',
    value: 50,
  },
];

const PrettoSlider = withStyles({
  root: {
    color: '#40679E',
    height: 10,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const About = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='about'
          style={{ padding: '3rem 0 2rem' }}
        >
          <Grid item>
            <h2>
              <span>About Me</span>
            </h2>
            <hr className="line-tittle" />
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <h3 style={{ marginTop: '1rem' }}>
              <span className='about-h3'>WHO AM I</span>
            </h3>

            <hr className="line" />

            <h5
              style={{
                fontWeight: '400',
                color: '#646369',
                lineHeight: '1.5',
                margin: '2rem 0',
              }}
            >
              Hello, I'm FullStack Developer with 1.5 years experience in Front end development using <span style={{ color: '#FF407D', fontWeight: '600' }}>
                ReactJS
              </span> and 4 years in backend development using <span style={{ color: '#FF407D', fontWeight: '600' }}>
                NodeJS
              </span>. <br/> <br/> I've been interested in <span style={{ color: '#FF407D', fontWeight: '600' }}>ART</span> and <span style={{ color: '#FF407D', fontWeight: '600' }}>Drawing</span> since childhood.
              I'm a national level Winner awarded by Government of India and my painting is released as an Indian Stamp.
              <br/><br/>
              Given my detail-oriented and design-focused nature, front-end development is where my interest lies.
              <br/><br/>
              My Hobbies are yoga, taking care of pets, swimming.
            </h5>

            {/* <Grid container spacing={2} justifyContent='center'>
              {who.map((item, index) => (
                <Grid item lg={4} xs={4} key={index} className='about'>
                  <Grid container justifyContent='center'>
                    <div className='medsos' style={{ margin: '1rem 0' }}>
                      <img src={item.img} alt='profil' width='80%' />
                    </div>
                  </Grid>

                  <h4 style={{ margin: '1rem 0', textAlign: 'center' }}>
                    {item.name}
                  </h4>

                  <p style={{ textAlign: 'center' }}>{item.desc}</p>
                </Grid>
              ))}
            </Grid> */}

            {/* <Grid container style={{ margin: '2rem 0' }}>
              <Grid item lg={4} md={6} xs={12} style={{ margin: '.5rem 1rem' }}>
                <a href="" alt="cv" target="_blank" rel="noreferrer">
                  <Button
                    size='large'
                    variant='contained'
                    color='primary'
                    className="btn btn-primary"
                  >
                    Download CV
                  </Button>
                  </a>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid item lg={6} xs={12}>
            <Hidden mdDown>
              <Grid container justifyContent='center'>
                <img src={about} alt='about' width='80%' />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={6} xs={12} style={{ padding: '0' }}>
            <Grid container justifyContent='center'>
              <img src={programming} alt='about' width='80%' />
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <h3 style={{ marginTop: '1rem 0' }}>
              <span className='about-h3'>SKILL SET</span>
            </h3>

          <hr className="line" />

            <Grid container spacing={2} justifyContent='center' style={{marginTop: "1rem"}}>
              {skillset.map((item, index) => (
                <Grid item lg={6} xs={6} key={index} className='setskill'>
                  <div className='skill' style={{ margin: '1rem 0' }}>
                    <img src={item.img} alt='profil' width='80%' />
                    <h4>{item.name}</h4>
                  </div>

                  <PrettoSlider
                    valueLabelDisplay='auto'
                    aria-label='pretto slider'
                    value={item.value}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default About;
