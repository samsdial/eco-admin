"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export  const  StoreModal = () => {
    const { isOpen, onClose } = useStoreModal();
    return (
        <Modal
            title={"create store"}
            description={"Add a new store to manage products and categories "}
            isOpen={isOpen}
            onClose={onClose}>
            Future create store form
        </Modal>
    );
};
