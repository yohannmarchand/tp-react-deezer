import {Link} from "react-router-dom";

function TrackList({ tracks, albumCover }) {
  return (
    <div className="mt-4">
      <span className="font-bold">Album TrackList</span>
      {
        tracks.map((track, index) => {
          return <Link to={`/${track.id}`} key={track.id}>
                  <div className="flex space-x-5 mt-2">
                    <img className="w-6 h-6" src={ albumCover }/>
                    <p className="text-md hover:underline"><span>{index + 1} -</span> { track.title }</p>
                  </div>
                </Link>
        })
      }
    </div>
  )
}

export default TrackList