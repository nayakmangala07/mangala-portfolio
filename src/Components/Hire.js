import React from 'react';
import { Grid, Container, TextField, Button } from '@material-ui/core';
import email from '../Images/Mention-rafiki.svg';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#40679E',
      borderWidth: 2,
    },
    '& input': {
      maxLength: 4
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important'
    },
    '& textarea:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important'
    },
    '& textarea:valid + fieldset': {
      borderColor: '#40679E',
      borderWidth: 2,
    },
    '& textarea:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
  }
})(TextField);

const Hire = () => {
  const [name, setName] = React.useState('');
	const [messages, setMessages] = React.useState("")

  const mail = "mailto:mangala.nayak.portfolio@gmail.com";
  const subject = encodeURIComponent(`New Order Inquiry`);
  const body = encodeURIComponent(
    `Name: ${name}\n Messages: ${messages}`
  );  

  const url =` ${mail}?subject=${subject}&body=${body}`;

  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent='center'
          id='hire'
          style={{ padding: '3rem 0 2rem' }}
        >
          {/* <Grid item>
            <h2>
              <span>Hire Me</span>
            </h2>

            <hr className="line-tittle" />
          </Grid> */}
        </Grid>

        <Grid
          container
          justifyContent='center'
          style={{ margin: '2rem 0' }}
        >
          <Grid item lg={6} xs={12}>
            <Grid container justifyContent='center'>
              <img src={email} alt='hire' width='80%' />
            </Grid>
          </Grid>

          <Grid item lg={6} xs={12}>
            <h3 style={{ marginTop: '1rem' }}>
              <span className='about-h3'> Get in Touch </span>
            </h3>

            <hr className="line" />

            <form name="contact" style={{marginTop: "2rem"}}>

            <ValidationTextField
              label='Enter your name'
              variant="outlined"
              className='inputan'
              onChange={(e) => setName(e.target.value)}
              maxLength="2"
            />

            <ValidationTextField
              label='Message'
              variant="outlined"
              className='inputan'
              onChange={(e) => setMessages(e.target.value)}
              multiline
              rows={5}
            />

            <Grid container>
              <Grid item xs={12} md={5} lg={3}>
              <a href={url} target="_blank" rel="noreferrer">
                <Button
                  size='large'
                  variant='contained'
                  className='btn btn-primary'
                >
                  Submit &nbsp;  <SendIcon/>
                </Button>
                </a>
              </Grid>
            </Grid>

            </form>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Hire;
