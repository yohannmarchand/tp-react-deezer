import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import TrackList from "../components/TrackList";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { current, addToTrackList } from "../slices/tracks";

function ViewDetail() {
  const params = useParams()
  const track = useSelector(state => state.tracks.current)
  const trackList = useSelector(state => state.tracks.current.tracklist)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`https://api.deezer.com/track/${params.id}`).then(({ data }) => {
      dispatch(current(data))

      axios.get(data.artist.tracklist).then(({ data }) => {
        dispatch(addToTrackList(data.data))
      })
    })
  }, [dispatch, params])

  return (
    <div className="mx-auto">
      <Link to={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>

      { (track.title && trackList) &&
        <div>
          <div className="flex space-x-5 bg-zinc-900 text-zinc-200 rounded">
            <img src={track.album.cover_medium} alt={track.title}/>
            <div className="flex-grow flex flex-col pt-4">
              <h1 className="font-bold text-2xl">{track.title}</h1>
              <div className="flex">
                <h3 className="text-xl mt-4">{track.artist.name}</h3>
                <img className="ml-auto rounded-full" src={track.artist.picture_small} alt={track.title}/>
              </div>
              <iframe className="mt-auto" title="deezer-widget"
                      src={`https://widget.deezer.com/widget/dark/track/${track.id}`} width="100%"
                      height="100" frameBorder="0" allowTransparency="true"
                      allow="encrypted-media; clipboard-write"/>
            </div>
          </div>
          {
            trackList.length && <TrackList albumTitle={track.album.title} albumCover={track.album.cover_small} tracks={trackList}/>

          }

        </div>
      }
    </div>
  )
}

export default ViewDetail