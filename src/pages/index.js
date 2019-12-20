import './404';
import './home/slick/slick';
import './home/slick/slick.scss';
import './home/slick/slick-theme.scss';

import initHome from './home';

// import initExample from './example'; // need remove;

export default () => {
  console.log('init pages');
  initHome();
  // initExample();
};
