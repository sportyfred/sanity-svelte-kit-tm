// youtube.js
import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
  const { ytaurl } = value
  const id = getYouTubeId(ytaurl)
  return (<YouTube videoId={id} />)
}

export default {
  name: 'youtubeaudio',
  type: 'object',
  title: 'YouTube Audio Embed',
  fields: [
    {
      name: 'ytaurl',
      type: 'url',
      title: 'YouTube audio video URL'
    }
  ],
  preview: {
    select: {
      ytaurl: 'ytaurl'
    },
    component: Preview
  }
}
