import { getMyImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getMyImage(photoId);
  return (
    <div className="card">
      <img src={image.url} />
    </div>
  );
}
