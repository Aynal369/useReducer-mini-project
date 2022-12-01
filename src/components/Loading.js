import React from "react";

const Loading = () => {
  return (
    <section>
      <div className="p-2 text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default Loading;
