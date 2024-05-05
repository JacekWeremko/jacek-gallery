import { getMyImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getMyImage(photoId);
  return (
      <Modal>
        <img src={image.url}/>
      </Modal>
  );
}
