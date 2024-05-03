import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {db} from "~/server/db"

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

    return (
      <div className="flex flex-wrap gap-8">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id} className="flex w-96 flex-col">
            <img src={image.url}/>
            <div>{image.name}</div>          
          </div>
        ))}
      </div>
    )
  }
  