import data from './data.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import TrackList from "./TrackList";
import axios from "axios";

function ViewDetail() {
  const params = useParams()
  const [track, setTrack] = useState(null)
  const [albumTrackList, setAlbumTrackList] = useState([])

  if (!track) {
    axios.get(`https://api.deezer.com/track/${params.id}`).then(({data}) => {
      console.log(data)
      setTrack(data)
    })
  }

  useEffect(() => {
    axios.get(`https://api.deezer.com/album/${track?.album.id}/tracks`).then(({data}) => {
      setAlbumTrackList(data.data)
    })
  }, [track])

  useEffect(() => {
    axios.get(`https://api.deezer.com/track/${params.id}`).then(({data}) => {
      setTrack(data)
    })
  }, [params])

  return (
    <div className="py-10 mx-auto px-5">
      { (track && albumTrackList) &&
        <div>
          <div className="flex space-x-5">
            <img src={track.album.cover_medium}/>
            <div className="flex-grow flex flex-col">
              <h1 className="font-bold text-2xl">{track.title}</h1>
              <div className="flex">
                <h3 className="text-xl mt-4">{track.artist.name}</h3>
                <img className="ml-auto rounded-full" src={track.artist.picture_small}/>
              </div>
              <div className="w-fit bg-yellow-500 text-zinc-100 px-5 rounded">
                {track.position}
              </div>
              <iframe className="mt-auto" title="deezer-widget"
                      src={`https://widget.deezer.com/widget/dark/track/${track.id}`} width="100%"
                      height="100" frameBorder="0" allowTransparency="true"
                      allow="encrypted-media; clipboard-write"/>
            </div>
          </div>
          <TrackList albumCover={track.album.cover_small} tracks={albumTrackList}/>
        </div>
      }
    </div>
  )
}

export default ViewDetail