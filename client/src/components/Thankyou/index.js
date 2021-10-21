import React from "react";

function Thankyou({ children}) {
  return (
    <div style={{ height: 600, clear: "both", paddingTop: 200, textAlign: "center" }}>
        {children}
</div>
  );
}

export default Thankyou;