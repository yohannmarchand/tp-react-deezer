import {Link} from "react-router-dom";

function TrackList({ tracks, albumCover, albumTitle }) {
  return (
    <div className="mt-4">
      <span className="font-bold">{albumTitle} : TrackList</span>
      <div className="grid grid-cols-2">
        {
          tracks.map((track, index) => {
            return <Link to={`/${track.id}`} key={track.id}>
              <div className="flex space-x-5 mt-2">
                <img className="w-6 h-6" src={ track.album?.cover || albumCover }/>
                <p className="text-md truncate px-2 hover:underline"><span>{index + 1} -</span> { track.title }</p>
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TrackList