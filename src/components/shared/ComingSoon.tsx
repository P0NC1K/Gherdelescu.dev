import React from "react";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";

import Row from "./Row";

const ComingSoon = (): React.ReactElement => {
  return (
    <div
      title="Project has been archived and is currently not active"
      className="transition duration-200 ease-in-out py-2 px-3 text-red-500 border border-red-500 border-solid hover:bg-red-500 hover:text-white rounded cursor-not-allowed"
    >
      <Row>
        <div className="mr-2">
          <AiOutlineClockCircle />
        </div>
        <div>Coming Soon...</div>
      </Row>
    </div>
  );
};

export default ComingSoon;
