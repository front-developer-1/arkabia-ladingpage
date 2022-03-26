import React from "react";
import { PhotoUnit } from "../..";
import "./UploadPhoto.css";

interface UploadPhotoProps {
  title: string;
  subtitle: string;
  handleAllImages: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null>
  >[];
}

export const UploadPhoto: React.FC<UploadPhotoProps> = ({
  title,
  subtitle,
  handleAllImages,
}) => {
  return (
    <div className="uploadphoto">
      <div className="uploadphoto-container">
        <h1 className="paragraph-header">{title}</h1>
        <p className="paragraph">{subtitle}</p>

        <div className="uploadphoto-photos">
          {[...Array(5)].map((_, idx) => (
            <PhotoUnit key={idx} setImageData={handleAllImages[idx]} />
          ))}
        </div>
      </div>
    </div>
  );
};
