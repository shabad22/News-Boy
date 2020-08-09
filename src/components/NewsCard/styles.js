// 1. NewsCard/styles.js:
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
  },
  activeCard: {
    borderBottom: '10px solid #22289a',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

// //2. Info Cards Array:

// const infoCards = [
//   { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
//   { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
//   { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
//   { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
// ];

// // 3. Alan AI Logo Image:
// const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';

// // 4. App styles.js:
// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   footer: {
//     textAlign: 'center',
//     position: 'fixed',
//     left: 0,
//     bottom: 0,
//     color: 'black',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '120px',
//     [theme.breakpoints.down('sm')]: {
//       display: 'none',
//     },
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'rgba(21, 101, 192)',
//   },
//   image: {
//     marginLeft: 20,
//   },
//   card: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '50%',
//     padding: '3%',
//     borderRadius: 10,
//     color: 'white',
//     backgroundColor: 'rgba(21, 101, 192)',
//     margin: '0 12px',
//     textAlign: 'center',
//     height: '25vmin',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column-reverse',
//       textAlign: 'center',
//       width: '100%',
//       height: 'initial',
//       '&:nth-of-type(1)': {
//         marginBottom: '12px',
//       },
//     },
//   },
//   infoContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   logoContainer: {
//     padding: '0 5%',
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column-reverse',
//       textAlign: 'center',
//     },
//   },
//   alanLogo: {
//     height: '27vmin',
//     borderRadius: '15%',
//     padding: '0 5%',
//     margin: '3% 0',
//     [theme.breakpoints.down('sm')]: {
//       height: '35vmin',
//     },
//   },
// }));

// // 5. Alan Studio Intents for search by Categories
// const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
// const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}|`;

// intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
//   `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
//   // ...  
// }