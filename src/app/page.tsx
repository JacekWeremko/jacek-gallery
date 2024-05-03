import Link from "next/link";
import {db} from "~/server/db"

const mockUrls = [
  "https://utfs.io/f/249272b0-89b0-40ef-a907-1cff1bdeeae0-rrzf5i.jpg",
  "https://utfs.io/f/acae2240-bb9f-47c2-91c3-79fd69f1751f-fxfc9z.jpg",
  "https://utfs.io/f/685ca9f2-bbd0-4833-9895-fb6362dff2e0-z50b9e.jpg",
  "https://utfs.io/f/1eb8df20-e652-4d14-bf4e-989a99bce43e-1i82fj.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-8">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
