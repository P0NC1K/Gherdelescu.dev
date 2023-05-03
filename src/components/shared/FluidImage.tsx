import React from "react";
import Image from "next/image";

import { Image as ImagetType } from "../../types/Image";

type FluidImageProps = {
  image?: ImagetType | null | undefined;
  className?: string;
};

// @TODO: Work on how to implement Fluid Image
const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
  const { image, className = "" } = props;

  if (!image) {
    // @TODO: Consider to return an image placeholder.
    return null;
  }

  return (
    <Image
      src={image?.srcPath || ""}
      alt={image?.caption || ""}
      // placeholder="blur"
      fill
      sizes="(max-width: 500px) 100vw, 500px"
      style={{ height: "100%" }}
      //   title={image?.caption || ""}
      className={className}
    />
  );
};

export default FluidImage;
