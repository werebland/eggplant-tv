import React, { Component } from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  layout,
} from 'styled-system'
import { withRouter } from 'next/router';
import Head from 'next/head'
import axios from 'axios'
import Swiper from 'react-id-swiper';
import NoSSR from 'react-no-ssr';

import PostSwiper from '../../components/PostSwiper'
import Card from '../../components/Card'

const FeedWrapper = styled.div(
  {},
  color,
  space,
  layout,
);

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddits: [],
      posts: [],
      index: 0
    }
  }

  componentDidMount() {
    const router = this.props.router
    const query = router.query
    const subreddits = query.subreddits
    console.log(subreddits)
    axios.get(`https://www.reddit.com/r/${subreddits}/.json`, { crossdomain: true })
    .then(function (response) {
      // handle success
      console.log(response);
      const posts = response.data.data.children
      console.log(posts);
      this.setState({
        posts
      })
    }.bind(this))
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  render() {


    const {posts} = this.state
    return (
      <FeedWrapper
        bg="#000"
        color="#fff"
        width="100vw"
        height="100vh"
        overflow='hidden'
      >
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css" />
        </Head>
        <NoSSR>
          {posts.length > 0 &&
            <PostSwiper posts={posts}/>
          }
        </NoSSR>

      </FeedWrapper>
    );
  }

}

export default withRouter(Feed);
