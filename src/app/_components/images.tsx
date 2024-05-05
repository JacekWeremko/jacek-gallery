import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {db} from "~/server/db"
import { getMyImages } from "~/server/queries";

export async function Images() {
  const images = await getMyImages();

    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Image
             src={image.url} 
             style={{objectFit: "contain"}} 
             width={480}
             height={480}
             alt={image.name} />
            <div>{image.name}</div>          
          </div>
        ))}
      </div>
    )
  }
  