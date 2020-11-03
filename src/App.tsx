import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Enter a city name" />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading...</h2>
      ) : (
        data && <Weather data={data} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
};

export default App;
