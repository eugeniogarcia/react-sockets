import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Cliente from "../componentes/cliente";


export default function Home() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <>
      <Head>
        Ejemplo de Cliente Socket
      </Head>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient(prevState => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <Cliente /> : null}
    </>
  );
}