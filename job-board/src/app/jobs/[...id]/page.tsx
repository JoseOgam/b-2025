"use client";
import React from "react";
type Params = {
  id: string;
};

const JobId = ({ params: paramsPromis }: { params: Promise<Params> }) => {
  const params = React.use(paramsPromis);
  const id = params.id;

  return (
    <div>
      <div>post ID: {id} </div>
    </div>
  );
};

export default JobId;
