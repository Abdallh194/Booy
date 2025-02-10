import React from "react";

const page = ({ params }: { params: { searchterm: string } }) => {
  return <div>{params.searchterm}</div>;
};

export default page;
