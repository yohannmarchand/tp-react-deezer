import {Link} from "react-router-dom";

function Card({ id, cover, title, artist }) {
  return (
    <Link to={`/${id}`}>
      <div className="mx-auto flex items-end text-zinc-200 bg-zinc-900 rounded">
        <img src={ cover }/>
        <p className="font-bold ml-8">{title}</p>
        <img src={artist} className="ml-auto rounded-full mr-2 mb-1"/>
      </div>
    </Link>
  )
}

export default Card