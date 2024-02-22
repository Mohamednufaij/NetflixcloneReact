import React, { useEffect, useState } from 'react';
import { apikey ,img_url} from '../../constants/Constants';
import style from './banner.module.css';
import axios from '../../constants/axios';

const Banner = () => {
  let [movie,setMovie]=useState()
  useEffect(() => {
    axios.get(`/trending/all/week?api_key=${apikey}&language=en-US`)
      .then((response) => {
        // console.log(response.data.results[0]);
        // setMovie(response.data.results[0])
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div
    style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path : ""})`}}
     className={style.banner}>
      <div className={style.content}>
        <h1 className={style.title}>{movie ? movie.title : ""}</h1>
        <div className={style.buttons}>
          <button className={style.btn}>play</button>
          <button className={style.btn}>my list</button>
        </div>
        <h1 className={style.desc}>{movie ? movie.overview : ""}</h1>
      </div>
      <div className={style.bottumfade}></div>
    </div>
  );
};

export default Banner;
