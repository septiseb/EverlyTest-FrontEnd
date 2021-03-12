import React, { useState } from "react";
import INFO_USER from "../services/user";

export default function SendEmail(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitMail = async (event, email, idtest) => {
    event.preventDefault();
    if (!email) {
      setError("Ningún correo fue ingresado");
      return;
    }
    try {
      setError("");
      setEmail("");
      await INFO_USER.sendEmail(idtest, email);
    } catch (e) {
      setEmail("");
      setError(e.response.data.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitMail(e, email, props.id)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mb-3"
        >
          <input
            onChange={(e) => handleChange(e)}
            style={{ textAlign: "center", width: "50%", border:"1px solid black" }}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="testerEmail"
            placeholder="Agregar correo del aplicante"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}"
          />
          <button
            style={{ width: "20%", marginLeft: "10px" }}
            type="submit"
            className="btn btn-primary text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold  opacity-120 hover:opacity-100"
          >
            Agregar
          </button>
        </div>
        <div className="text-center text-red-600 mr-72">{error}</div>
      </form>
    </div>
  );
}
