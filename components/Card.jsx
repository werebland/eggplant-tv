import React, { Component } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
  display,
  flexbox,
  position,

} from 'styled-system'

const CardWrapper = styled.article(
  {},
  color,
  space,
  layout,
  display,
  flexbox,
  position,
);

class Card extends Component {



  render() {
    console.log(this.props.post.media_embed.content);
    return (
      <CardWrapper
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        className="swiper-slide"
      >
        <span>{this.props.post.title}</span>
        <span>{this.props.post.url}</span>
        <video src="https://gfycat.com/BaggyVictoriousAlabamamapturtle"></video>
        <span>error</span>
      </CardWrapper>
    );
  }

}

export default Card;
