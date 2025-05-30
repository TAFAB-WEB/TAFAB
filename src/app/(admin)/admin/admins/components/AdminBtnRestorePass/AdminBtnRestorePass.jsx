import { useState } from "react";
import BlockingOverlay from "@/app/components/BlockingOverlay/BlockingOverlay";
import { reloadPage } from "../../../componets/utils";
import { useToast } from "@/utils/toast";
import { useConfirmDialog } from "@/utils/hooks/useConfirmDialog";
import { useRouter } from "next/navigation";


export default function AdminBtnRestorePass({ admin, disabled=false }) {
    const [isLoading, setIsLoading] = useState(false);
    const { confirm, ConfirmDialogComponent } = useConfirmDialog();
    const router = useRouter();

    const { showToast } = useToast()


    const handlerClick = async () => {
        const isConfirmed = await confirm("Al restaurar la contraseña se eliminará la anterior.");

        if (isConfirmed) {
            setIsLoading(true);

            try {
                const response = await fetch('/api/admins/pass/reset', {
                    method: 'POST',
                    body: JSON.stringify({
                        data: admin,
                    }),
                });
                if(response.ok){
                    showToast({ type: "success", message: 'Contraseña enviada!' })
                }
                else{
                    showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
                }
            } catch (error) {
                showToast({ type: 'error', message: 'No se pudo realizar la operación!' })
            }finally {
                setIsLoading(false);
                reloadPage(router)
            }

        }
    }

    return (
        <>  
            {ConfirmDialogComponent}
            <BlockingOverlay isLoading={isLoading} />

            <button
                onClick={() => handlerClick()}
                className={`block px-4 py-2 text-sm ${disabled? "text-gray-400": "text-gray-700 hover:underline"} `}
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                disabled={disabled}>
                Restaurar Contraseña
            </button>

        </>
    )
}
