import { useState } from "react";

function Form({ location, setLocation }) {
  const [typedLocation, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setLocation(typedLocation);
    console.log(location)
    setTypedLocation("");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          <input
            type="text"
            value={typedLocation}
            onChange={(e) => setTypedLocation(e.target.value)} placeholder="Enter city name"
          />
        </label>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!typedLocation}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
