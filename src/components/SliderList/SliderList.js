import React from 'react';
import Slides from './Slides/Slides';

export default function SliderList(props) {
    return props.swiperList.length > 0 ? (
      props.swiperList.map((slide, i) => {
        return (
          <>
            <Slides slide={slide} index={i} />
          </>
        );
      })
    ) : (
      <h1>No slides exists</h1>
    );
  }