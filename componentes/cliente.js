import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";

export default function Cliente() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("DesdeLaAPI", data => {
            setResponse(data);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <p>
            La hora es <time dateTime={response}>{response}</time>
        </p>
  );
}