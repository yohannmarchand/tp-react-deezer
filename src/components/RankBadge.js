import {useState} from "react";

function RankBadge({ rank }) {

  const [ classes ] = useState('absolute -left-4 -top-4 rounded-full w-12 h-12 p-3 text-zinc-200')
  const color = [
    '#eab308',
    '#64748b',
    '#78350f'
  ]

  return (
    <span className={classes} style={ { backgroundColor: rank - 1 < color.length ? color[rank -1 ] : '#27272a' } }>
      { rank }
    </span>
  )
}

export default RankBadge