import {Link} from "react-router-dom";

function Card({ id, cover }) {
  return (
    <Link to={`/${id}`}>
      <div className="mx-auto">
        <img src={ cover }/>
      </div>
    </Link>
  )
}

export default Card