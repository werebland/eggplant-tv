import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

import Card from './Card'

const PostSwiper = (props) => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const handleKey = (key) => {
    switch (key) {
      case 'up':
        swiper.slidePrev();
        break;
      case 'down':
        swiper.slideNext();
      default:
        return
    }
  }

  const params = {
      direction: 'vertical',
      keyboard: {
        enabled: true,
        whenInViewport: true,
      },
      height: '100vh'
    }

  return (
    <div onKeyDown={() => console.log('event')}>
      <Swiper getSwiper={updateSwiper} {...params}>
        {props.posts.map((post, i) =>
          <Card key={i} post={post.data}/>
        )}
      </Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default PostSwiper;
