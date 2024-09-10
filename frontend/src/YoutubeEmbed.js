import React from 'react'
import propTypes from "prop-types"


const YoutubeEmbed=({embedId}) => {
  return (
    <div className='video-responsive'>
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay;"
        allowFullScreen
        title='RAD learning vedio'
        />
    </div>
  )

  //make this validation
YoutubeEmbed.propTypes ={
   embedId:propTypes.string.isRequired 
}

}


export default YoutubeEmbed

