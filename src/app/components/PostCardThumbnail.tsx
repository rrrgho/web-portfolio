import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";

interface IPostCardThumbnail {
  image: any;
}

const PostCardThumbnail: FC<IPostCardThumbnail> = ({ image }) => {
  return (
    <main>
      <div className="relative">
        <div>
          <Image alt="Thumbnail Image" src={image} sizes="100vw" />
        </div>
      </div>
    </main>
  );
};

export default PostCardThumbnail;
