import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {db} from "~/server/db"
import { getMyImages } from "~/server/queries";

export async function Images() {
  const images = await getMyImages();

    return (
      <div className="flex flex-wrap gap-8">
        {[...images].map((image) => (
          <div key={image.id} className="flex w-96 flex-col">
            <img src={image.url}/>
            <div>{image.name}</div>          
          </div>
        ))}
      </div>
    )
  }
  