import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => {
  const { videoID } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    try {
      // QUESTION 5
      fetch(`http://localhost:4000/video/${videoID}/data`).then(response => response.json()).then(videoData => setVideoData(videoData));
    } catch (e) {
      console.log(e);
    }
  }, [videoID])

  return (
    <div className="app">
      <Header />
      <div className="content-container">
          <video controls muted autoPlay>
            {/* QUESTION 6 */}
            <source src={`http://localhost:4000/video/${videoID}`} type="video/mp4"></source>
          </video>
          <h1>{ videoData.name }</h1>
      </div>
      <Footer />
    </div>
  )
};

export default Home;