import Link from "next/link";

import ResetPasswordForm from "./components/ResetPasswordForm";
import Image from "next/image";

function UpdatePassword() {
    return (
        <div className="bg-white">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(/auth/reset_password.jpg)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-20"></div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <Image className="w-auto h-16 sm:h-20" src={"/auth/logoAuth.jpg"} alt="logo" width={120} height={120}/>
                            </div>

                            <h2 className="mt-2 text-xl font-bold text-gray-700 ">
                                Actualiza tu contraseña
                            </h2>
                        </div>
                        <div className="mt-8">
                            <ResetPasswordForm />
                        </div>
                        <Link href={"/auth"} className="block mt-6 text-sm text-center text-gray-400 hover:text-gray-300 transition-colors duration-75">
                            Volver a login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdatePassword;
