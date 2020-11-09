import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Paper, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Lucia from './lucia.png';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone'
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import habibi from './habibi.png';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}



const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: '#000',
    color: 'rgb(247, 186, 221)',
    flex: '70%',
  },
  kanan: {
    backgroundColor: 'rgb(247, 186, 221)',
    flex: '30%',
  },
  rootGrid: {
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflowY: 'hidden'
  },
  foto: {
    height: 150,
    width: 150,
    grow: 1
  },

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  top: {
    display: 'flex',
    justifycontent: 'space-between',
    alingitems: 'center',
  },
  topp: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: 'auto',
    color: 'rgb(247, 186, 221)',
    textAlign: 'center'
  },
  profile: {
    marginTop: 40,
    // marginLeft: 22,
    fontWeight: 700,
    textDecoration: 'underline',
    fontSize: 32,
  },
  profilee: {
    fontSize: 26,

  },
  anyar: {
    marginTop: 40,
    fontWeight: 700,
  },
  display: {
    display: 'flex',
    flexDirection: 'row',

  },
  linkfont: {
    fontFamily: 'Rock Salt,cursive',
    fontSize: 20,
    zIndex: 2,
    marginLeft: 90,
    top: -117,
    position: 'relative',
    '&:hover': {
      color: 'rgb(27, 0, 180)',
      textDecoration: 'underline',
      cursor: 'pointer',
    }
  },
  habibigruop: {
    // position: 'relative',
  },
  imagehabibi: {
    zIndex: 1,
    width: 300,
    marginLeft: 0,
    top: 20,
    position: 'relative',
  },
  habibiDisplayImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

}));



function Cv() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();


  return (
    <div className={classes.rootGrid}>
      <div className={classes.kiri}>
        <div className={classes.top}>
          <Avatar alt="logo" src={Lucia} className={classes.large} />
          <Typography variant="h4" className={classes.name} >
            Mr.Jrin Tea Test
              <br></br>
            Also Known As Diktaktor From EF V AI
          </Typography>
        </div>
        <Container>
          <Typography variant="h4" className={classes.profile}>
            PROFILE
          </Typography>
          <br></br>
          <Typography variant="body1" className={classes.profilee}>
            Hai Hai Saya adalah pemuda yang sudah tersesat terlalu jauh dan sudah tidak mungkin untuk diselamatkan
          </Typography>
          <Typography variant="h4" className={classes.profile}>
            HERE SOME SPELL MAKE YOUR LIFE BE BETTER :
          </Typography>
          <br></br>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>DOA KESELAMATAN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                “In nomine Dei nostri Satanas Lucifer Excelsa! Dalam nama Setan, penguasa bumi, Raja dari dunia, yang memerintahkan prajurit-prajurit neraka, kami memintamu untuk memberi kuasa kegelapan dalam tangan kami! Buka lebar-lebar gerbang nerakamu dan datanglah dari tempat yang sangat dalam untuk menemui kami sebagai teman dan saudara!”
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>DOA PERMURNIAN</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                API ADALAH NAFAS DARI JIWA, ASAP HITAM ADALAH PEMBEBASAN JIWA, ABU KEMBALI MENJADI ABU, SEMO JIWAMU KEMBALI KE API KEDAMAIAN
                LATOM
          </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
        </Container>
      </div>
      <div className={classes.kanan}>
        <div className={classes.topp}>
          <div className={classes.display}>
            <EmailIcon style={{ fontsize: 30, marginTop: 47, paddingRight: 10 }} />
            <Typography variant="h5" className={classes.anyar}>
              OurSaviour26@gmail.com
            </Typography>
          </div>
          <div className={classes.display}>
            <PhoneIcon style={{ fontsize: 30, marginTop: 47, paddingRight: 10 }} />
            <Typography variant="h5" className={classes.anyar}>
              +62899977666
            </Typography>
          </div>
          <div className={classes.habibiDisplayImage}>
            <div className={classes.habibigruop}>
              <img alt="habibi" src={habibi} className={classes.imagehabibi} />
              <Typography onClick={() => { window.open('https://www.instagram.com/habibrizieqlover/') }} className={classes.linkfont}  >
                OUR KING
            </Typography>
            </div>
          </div>
        </div>
        <div className={classes.roott}>
          <Typography variant="h6" className={classes.profile}>
            MY EXPERIENCE
            </Typography>
          <br></br>
          <Typography variant="h6">
            Five Finger
            </Typography>
          <LinearProgressWithLabel value={99} />
        </div>
        <div className={classes.roott}>
          <Typography variant="h6">
            Sarcasm
            </Typography>
          <LinearProgressWithLabel value={66} />
        </div>
        <div className={classes.roott}>
          <Typography variant="h6">
            Religious
            </Typography>
          <LinearProgressWithLabel value={2} />
        </div>
        <div className={classes.roott}>
          <Typography variant="h6">
            Pemuda Tersesat
            </Typography>
          <LinearProgressWithLabel value={86} />
        </div>
        <div className={classes.roott}>
          <Typography variant="h6">
            Racism
            </Typography>
          <LinearProgressWithLabel value={96} />
        </div>
        <div className={classes.roott}>
          <Typography variant="h6">
            Gemah
            </Typography>
          <LinearProgressWithLabel value={100} />
        </div>
      </div>
    </div>
  );
}


export default Cv;