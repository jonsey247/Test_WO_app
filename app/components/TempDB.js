const LATITUDE = 53.501672;
const LONGITUDE = -2.195222;

const markers = [ // these are the events
      {
        id: 0,
        title: 'this is event #1',
        details: 'This is the first event, we have live music and free drinks',
        image: './images/cocktails.jpg',
        coordinate: {
          latitude: LATITUDE + 0.010,
          longitude: LONGITUDE,
        },
      },
      {
        id: 1,
        title: 'this is event #2',
        details: 'This is the second event, we ALSO have live music and free drinks... AND BLACKJACK!',
        image: './images/image.jpg',
        coordinate: {
          latitude: LATITUDE + 0.004,
          longitude: LONGITUDE - 0.004,
        },
      },
      {
        id: 2,
        title: 'this is event #3',
        details: 'This is the THIRD event, we have live music and free drinks....WITH BLACKJACK AND HOOKERS!',
        image: './images/Principe-Bar---The-Bar.jpg',
        coordinate: {
          latitude: LATITUDE - 0.004,
          longitude: LONGITUDE - 0.004,
        },
      },
      {
        id: 3,
        title: 'this is event #4',
        details: 'This is the FOUTH event, you know what. forget the whole thing',
        image: './images/image4.jpg',
        coordinate: {
          latitude: LATITUDE - 0.014,
          longitude: LONGITUDE - 0.020,
        },
      },
    {
        id: 4,
        title: 'this is event #5',
        details: 'This is the FOUTH event, you know what. forget the whole thing',
        image: './images/image4.jpg',
        coordinate: {
          latitude: LATITUDE - 0.014,
          longitude: LONGITUDE - 0.020,
        },
      },
    {
        id: 5,
        title: 'this is event #6',
        details: 'This is the FOUTH event, you know what. forget the whole thing',
        image: './images/image4.jpg',
        coordinate: {
          latitude: LATITUDE - 0.024,
          longitude: LONGITUDE - 0.030,
        },
      },{
        id: 6,
        title: 'this is event #7',
        details: 'This is the FOUTH event, you know what. forget the whole thing',
        image: './images/image4.jpg',
        coordinate: {
          latitude: LATITUDE + 0.034,
          longitude: LONGITUDE + 0.010,
        },
      },{
        id: 7,
        title: 'this is event #8',
        details: 'This is the FOUTH event, you know what. forget the whole thing',
        image: './images/image4.jpg',
        coordinate: {
          latitude: LATITUDE - 0.014,
          longitude: LONGITUDE + 0.020,
        },
      },
    ];
    

   module.exports = markers