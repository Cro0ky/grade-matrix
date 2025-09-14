import { EModalName } from "@/shared/types/modal.types.ts";
import { Modal } from "@/shared/ui";

export const TestModal = () => {
  return (
    <Modal name={EModalName.TEST} title={"asdasdasdasd"}>
      asdasdasd
    </Modal>
  );
};
