import data from './data.json'
import {useCallback, useEffect, useState} from "react";
import {Redirect, useParams} from "react-router-dom";
import axios from "axios";
import TrackList from "./TrackList";

function ViewDetail() {
  const params = useParams()
  const [ track, setTrack ] = useState(data.find(track => track.id == params.id))
  const [albumTrackList, setAlbumTrackList ] = useState([])

  useEffect(() => {
      axios.get(`https://api.deezer.com/album/${track.album.id}/tracks`).then(({data}) => {
        setAlbumTrackList(data.data)
      })
    })

  return (
    <div className="py-10 mx-auto px-5">
      <div className="flex space-x-5">
        <img src={track.album.cover_medium}/>
        <div className="flex-grow flex flex-col">
          <h1 className="font-bold text-2xl">{track.title}</h1>
          <div className="flex">
            <h3 className="text-xl mt-4">{ track.artist.name }</h3>
            <img className="ml-auto rounded-full" src={track.artist.picture_small}/>
          </div>
          <div className="w-fit bg-yellow-500 text-zinc-100 px-5 rounded">
            { track.position }
          </div>
          <iframe className="mt-auto" title="deezer-widget" src={`https://widget.deezer.com/widget/dark/track/${track.id}`} width="100%"
                  height="100" frameBorder="0" allowTransparency="true"
                  allow="encrypted-media; clipboard-write"/>
        </div>
      </div>

      { albumTrackList && <TrackList albumCover={track.album.cover_small} tracks={ albumTrackList }/> }
    </div>
  )

}

export default ViewDetail