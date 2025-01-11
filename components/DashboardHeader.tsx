import React from "react";
import Button from "./Button";
import ShareIcon from "./icons/ShareIcon";
const DashboardHeader = ({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div>
        <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
      </div>
      <div className="flex items-center gap-5">
        <Button
          type="button"
          variant="secondry"
          text="Share Brain"
          // size="lg"
          extraStyle="text-persian-blue-800"
          startIcon={<ShareIcon />}
        />
        <Button
          type="button"
          variant="primary"
          onclick={handleOpenModal}
          text="Add Brain"
        />
        {/* <Button variant="logout" text="Logout" /> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
