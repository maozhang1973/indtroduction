import React, { useState, useEffect } from "react";

export default function CountdownWidget() {
  const then = new Date(2019, 12, 25);
  const today = new Date();
  var diffMs = then - today;
  const count = Math.floor(diffMs / 86400000);
  const diffmins = Math.floor(diffMs / 1000 / 60);
  const [mincount, setMincount] = useState(diffmins);

  useEffect(() => {
    setInterval(() => {
      const then = new Date(2019, 12, 15);
      const today = new Date();
      var diffMs = then - today;
      const count = Math.floor(diffMs / 1000 / 60);
      setMincount(count);
    }, 59000);
  });

  return (
    <div className="widget countdown">
      <div className="heading">Christmas Party</div>
      <div className="count">
        {count}({mincount})
      </div>
      <div className="meta">Days(mins)</div>
    </div>
  );
}
