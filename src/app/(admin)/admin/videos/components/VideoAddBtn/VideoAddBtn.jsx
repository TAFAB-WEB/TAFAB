'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import VideoForm from "../VideoForm/VideoForm";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { reloadPage } from "../../../componets/utils";
import { useToast } from "@/utils/toast";


const VideoAddBtn = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { showToast } = useToast()

    const uploadVideo = async (newData) => {
        setIsLoading(true);

        try {
            const URL = `/api/videos`
            const response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify({
                    data: newData,
                }),
            });

            const data = await response.json();

            if (data.data) {
                showToast({ type: "success", message: 'Operación exitosa' })
            } else {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }
        } catch (error) {
            showToast({ type: 'error', message: 'No se pudo realizar la operación!' })

        } finally {
            setIsLoading(false);
            reloadPage(router)
        }
    };
    return (
        <>
            <BlockingOverlay isLoading={isLoading} />

            <div className="flex items-center mt-4 gap-x-3">
                <button
                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    onClick={() => setIsOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>

                    <span>Nuevo</span>
                </button>
            </div>

            <VideoForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                saveVideo={uploadVideo}
                add={true}
            />
        </>
    )
}

export default VideoAddBtn
