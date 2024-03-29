import {Link} from "react-router-dom";
import RankBadge from "./RankBadge";

function Card({ id, cover, title, artist, position }) {
  return (
    <Link to={`/${id}`}>
      <div className="relative mx-auto flex items-end text-zinc-200 bg-zinc-900 rounded">
        <RankBadge rank={ position }/>
        <img src={ cover } alt={title}/>
        <p className="font-bold ml-8">{title}</p>
        <img src={artist} className="ml-auto rounded-full mr-2 mb-1" alt={title}/>
      </div>
    </Link>
  )
}

export default Card