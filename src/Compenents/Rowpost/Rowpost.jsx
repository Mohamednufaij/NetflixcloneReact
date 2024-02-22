import React, { useEffect, useState } from 'react'
import style from './rowpost.module.css'
import axios from '../../constants/axios';
import { apikey,img_url } from '../../constants/Constants';
import YouTube from 'react-youtube';
const Rowpost = (props) => {
  let [movies,setMovies]=useState([])
  let [urlid,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url)
    .then((Response)=>{setMovies(Response.data.results);})
    .catch(()=>{console.log('error');})
    
  },[])
  const opts= {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${apikey}&language=en-US`)
    .then((response)=>{console.log(response)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array is empty');
      }
      ;})
    .catch(()=>{console.log('error');})
    
  }
  return (
    <div className={style.row}>
      <h1>{props.title}</h1>
      <div className={style.post}>
        {movies.map((obj)=>
          <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? style.smallposter:style.poster} src={`${img_url+obj.backdrop_path}`}  />
        )}
        
        
      </div>
     {urlid && <YouTube videoId={urlid.key} opts={opts}/> }
    </div>
  )
}

export default Rowpost
