import { useEffect, useState } from "react";  

export default function Tempo() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/Tempo")
      .then((res) => res.text())
      .then((html) => setData(html));
  }, []);

  return (
    <div>
      <h2>horário atual</h2>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );}