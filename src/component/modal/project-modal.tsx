import { X } from "lucide-react";
import { ModalContext } from "../../context-provider/modal-context-provider";
import React from "react";

export default function ProjectModal() {
    const { setModalKind } = React.useContext(ModalContext);

    const close = React.useCallback(() => {
        if (setModalKind) setModalKind(null);
    }, [setModalKind]);
    return (
        <div className="p-6">
            <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">Test Template Modal</h3>
                <button
                    aria-label="Tutup"
                    onClick={close}
                    className="ml-4 rounded-md p-2 hover:bg-slate-100"
                >
                    <X />
                </button>
            </div>

            <div className="mt-4">
                {/* konten modal: form login / pilihan auth dsb */}
                <p>Masukkan isi modal di sini.</p>
            </div>

            <div className="mt-6 flex justify-end">
                <button
                    onClick={close}
                    className="px-4 py-2 rounded-md border"
                >
                    Tutup
                </button>
            </div>
        </div>
    );
}
