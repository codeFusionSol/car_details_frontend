import React from "react";

const PrintComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Customized Print UI</h1>
    <p>This content will appear only in the printed version.</p>
    {/* Aap yahan apne design aur content ko customize kar sakte hain */}
  </div>
));

export default PrintComponent;
