import './index.css';
import VerticalList from "./VerticalList";
import SearchBar from "./SearchBar";
import {useCallback, useState} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const [tracks, setTracks] = useState([])

  if (!tracks.length) {
    axios.get('https://api.deezer.com/chart/0/tracks?limit=50').then(({ data }) => {
      setTracks(data.data)
    })
  }

  const onChange = useCallback(
    (event) => {
      setValue(event.target.value)
      setSearchParams(event.target.value ? { q: event.target.value } : {});

      axios.get('https://api.deezer.com/chart/0/tracks?limit=50').then(({ data }) => {
        setTracks(data.data.filter(track => track.title.toLowerCase().match(event.target.value.toLowerCase())))
      })
    },
    [setSearchParams]
  );

  return (
    <div className="h-screen">
      <SearchBar value={value} onChange={onChange}/>
      <VerticalList tracks={tracks}/>
    </div>
  );
}

export default Home;
