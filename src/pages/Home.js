import '../css/index.css';
import VerticalList from "../components/VerticalList";
import SearchBar from "../components/SearchBar";
import {useCallback, useState} from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { filter } from "../slices/tracks";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") || "");
  const tracks = useSelector(state => state.tracks.value)
  const dispatch = useDispatch()

  const onChange = useCallback(
    (event) => {
      setValue(event.target.value)
      setSearchParams(event.target.value ? { q: event.target.value } : {});

      dispatch(filter(event.target.value))
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
