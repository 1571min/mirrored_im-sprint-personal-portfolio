// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import twittlerThumb from '../assets/images/twittlerThumb.png';
import twittler from '../assets/images/twittler.png';
import airbnbThumb from '../assets/images/airbnbThumb.png';
import airbnb from '../assets/images/airbnb.png';
import chatterBoxThumb from '../assets/images/chatterboxThumb.png';
import chatterBox from '../assets/images/chatterbox.png';
import recastlyThumb from '../assets/images/recastlyThumb.png';
import recastly from '../assets/images/recastly.png';
import vendingmachineThumb from '../assets/images/vendingmachineThumb.png';
import vendingmachine from '../assets/images/vendingmachine.png';

export const Portfolio = (props) => {
  let match = useRouteMatch();
  return (
    <Router>
      <ModalSwitch url={match.url} />
    </Router>
  );
};
function ModalSwitch(props) {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className="content">
      <Switch location={background || location}>
        <Route path={`${props.url}/`} children={<Gallery url={props.url} />} />
        <Route path={`${props.url}img/:id`} children={<ImageView />} />
      </Switch>
      {background && (
        <Route path={`${props.url}img/:id`} children={<Modal />} />
      )}
    </div>
  );
}

const IMAGES = [
  {
    id: 0,
    title: 'Twittler',
    color: 'DarkOrchid',
    imgThumb: twittlerThumb,
    img: twittler,
  },
  {
    id: 1,
    title: 'chatterBox',
    color: 'LimeGreen',
    imgThumb: chatterBoxThumb,
    img: chatterBox,
  },
  {
    id: 2,
    title: 'recast.ly',
    color: 'Tomato',
    imgThumb: recastlyThumb,
    img: recastly,
  },
  {
    id: 3,
    title: 'VendingMachine',
    color: '#789',
    imgThumb: vendingmachineThumb,
    img: vendingmachine,
  },
  {
    id: 4,
    title: 'airbnbDataAnalysis',
    color: 'Crimson',
    imgThumb: airbnbThumb,
    img: airbnb,
  },
];

function Thumbnail({ color, imgThumb }) {
  return (
    <div
      style={{
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: '70%',
        width: 100,
        height: 100,
        background: color,
      }}
    >
      <img src={imgThumb}></img>
    </div>
  );
}

function Image({ color, img }) {
  return (
    <div
      style={{
        width: '100%',
        height: 600,
      }}
    >
      <img src={img}></img>
    </div>
  );
}

function Gallery(props) {
  let location = useLocation();

  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `${props.url}img/${i.id}`,
            state: { background: location },
          }}
        >
          <Thumbnail color={i.color} imgThumb={i.imgThumb} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} imgThumb={image.imgThumb} />
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    console.dir(history);
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)',
      }}
    >
      <div
        className="modal"
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444',
        }}
      >
        <h1>{image.title}</h1>
        <Image color={image.color} img={image.img} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}
