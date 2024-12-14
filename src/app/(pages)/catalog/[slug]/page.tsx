import React from "react";

// TODO: export to separate component
const page = async () => {
  return (
    <div className=" flex items-center justify-center h-screen w-full pt-64 pb-32 md:px-32">
      <div className="bg-red-950/30 h-full w-full border border-red-800 rounded-xl">
        {/* Component */}
        <div className="flex flex-col h-full w-full justify-center items-start">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-amber-400">
              {}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
