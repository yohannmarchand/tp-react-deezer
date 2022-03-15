import {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";

function VerticalList() {
  const [tracks, setTracks] = useState([])

  if (!tracks.length) {
    axios.get('https://api.deezer.com/chart/0/tracks?limit=50').then(({ data }) => {
      setTracks(data.data)
    })
  }

  return (
    <div className="flex flex-col space-y-4">
      { tracks && tracks.map(track => {
        return <Card id={track.id} cover={track.album.cover} title={track.title} key={track.id} artist={track.artist.picture_small} position={track.position} />
      })}
    </div>
  )
}

export default VerticalList