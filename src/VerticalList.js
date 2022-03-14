import data from './data.json'
import {useState} from "react";
import Card from "./Card";

function VerticalList() {
  const [tracks, setTracks] = useState(data)

  return (
    <div className="grid grid-rows-6 grid-flow-col gap-4">
      { tracks.map(track => {
        return <Card id={track.id} cover={track.album.cover} key={track.id} />
      })}
    </div>
  )
}

export default VerticalList