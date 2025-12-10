import React from "react";

const MainFooter = () => {
  return (
    <footer className="border-t dark:border-gray-700/50 border-gray-300/60 max-w-7xl pt-10 pb-6 mt-4">
      <div className="text-sm text-gray-400 text-center">
        &copy; © {new Date().getFullYear()} Qualify AI.| All rights reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
