import {Link} from "react-router-dom";

function TrackList({ tracks, albumCover }) {

  return (
    <div>
      {
        tracks.map(track => {
          return <Link to={`/${track.id}`} key={track.id}>
                  <div className="flex space-x-5 mt-2">
                    <img src={ albumCover }/>
                    <p className="hover:underline">{ track.title }</p>
                  </div>
                </Link>
        })
      }
    </div>
  )
}

export default TrackList