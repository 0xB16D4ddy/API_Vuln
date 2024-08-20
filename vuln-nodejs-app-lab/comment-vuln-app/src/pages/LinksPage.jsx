import React from "react";
import DynamicLink from "../components/DynamicLink";

const LinksPage = () => {
  return (
    <div className="container mx-auto max-w-xl">
      <h1 className="text-center text-2xl font-bold my-4">Useful Links</h1>
      <DynamicLink/>
    </div>
  );
};

export default LinksPage;
