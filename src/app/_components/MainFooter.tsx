import React from "react";

const MainFooter = () => {
  return (
    <div className="text-center text-sm text-muted-foreground my-10">
      © {new Date().getFullYear()} Qualify AI. All rights reserved.
    </div>
  );
};

export default MainFooter;
