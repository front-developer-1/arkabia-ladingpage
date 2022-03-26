import React, { useRef, useState } from "react";
import { CloudUp } from "../../icons/outline/CloudUp";
import "./PhotoUnit.css";

type PhotoUnitProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: PhotoUnitTypes;
  picture?: string;
  setImageData: React.Dispatch<
    React.SetStateAction<string | ArrayBuffer | null>
  >;
};

type PhotoUnitTypes = "cloudup" | "picture" | "none" | "more";

export const PhotoUnit: React.FC<PhotoUnitProps> = ({
  type = "cloudup",
  picture,
  setImageData,
  ...props
}) => {
  const [myType, setMyType] = useState(type);
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const anchRef = useRef<HTMLAnchorElement>(null);

  const handleUploadClick = () => {
    fileRef.current?.click();
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setMyType("picture");
      setImageSrc(readerEvent.target!.result);
      setImageData(readerEvent.target!.result);
    };
  };

  const handleDownload = () => {
    anchRef.current?.click();
    //TODO https://www.py4u.net/discuss/281420
  };

  const handleRemoveImage = () => {
    setMyType("cloudup");
    setImageSrc(null);
    setImageData(null);
  };

  return (
    <>
      {myType === "cloudup" ? (
        <div
          className="photo-unit photo-unit-cloud"
          onClick={handleUploadClick}
          {...props}
        >
          <CloudUp />
          <input type="file" ref={fileRef} onChange={handleAddImage} hidden />
        </div>
      ) : myType === "picture" ? (
        <div className="photo-unit photo-unit-picture" {...props}>
          <img
            className="photo-unit-picture-img"
            src={imageSrc as any}
            alt="unit-picture"
          />
          <div className="photo-unit-picture-hover-bg">
            <img
              className="photo-unit-picture-close"
              src="/images/close-big-icon.svg"
              alt="close"
              onClick={handleRemoveImage}
            />
            <img
              onClick={handleDownload}
              src="/images/cloud_down_black.svg"
              alt="cloud_down"
            />
            <a ref={anchRef} download hidden></a>
          </div>
        </div>
      ) : myType === "none" ? null : (
        <div className="photo-unit photo-unit-more" {...props}>
          <span className="tinytext-header">más</span>
        </div>
      )}
    </>
  );
};
