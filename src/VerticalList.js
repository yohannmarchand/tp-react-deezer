import Card from "./Card";

function VerticalList({ tracks }) {
  return (
    <div className="flex flex-col space-y-4">
      { tracks && tracks.map(track => {
        return <Card id={track.id} cover={track.album.cover} title={track.title} key={track.id} artist={track.artist.picture_small} position={track.position} />
      })}
    </div>
  )
}

export default VerticalList