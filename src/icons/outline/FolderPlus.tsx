import React from "react";

type FolderPlusProps = React.HTMLAttributes<HTMLDivElement> & {};

export const FolderPlus: React.FC<FolderPlusProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <img src="/images/folder_plus.svg" alt="" />
    </div>
  );
};
