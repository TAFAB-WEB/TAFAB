'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileDropdownBtn from "./components/MobileDropdownBtn";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname()

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const onMobileClick = () => {
        setMoblileDropdown(false)
        setIsOpen(false)
    }


    const menuItems = [
        {
            name: "Nosotros",
            href: "/nosotros",
            dropdownItems: [
                {
                    name: "¿Quiénes somos?",
                    href: "/nosotros"
                },
                {
                    name: "Misión y visión",
                    href: "/nosotros#misionyvision"
                },
                {
                    name: "Dirigencia",
                    href: "/nosotros#dirigencia"
                },
                {
                    name: "¿Cómo funcionamos?",
                    href: "/nosotros#comofuncionamos"
                },
                {
                    name: "Nuestros principios",
                    href: "/nosotros#principios"
                },
                {
                    name: "¿Como nos financiamos?",
                    href: "/nosotros#comonosfinanciamos"
                },
            ],
        },
        {
            name: "Proyectos",
            href: "/proyectos",
            dropdownItems: [
                {
                    name: "Asistencia sanitaria",
                    href: "/proyectos/asistencia-sanitaria"
                },
                {
                    name: "Asistencia socioeconómica",
                    href: "/proyectos/asistencia-socioeconomica"
                },
                {
                    name: "Educación y sensibilización",
                    href: "/proyectos/educacion-sensibilizacion"
                },
            ],
        },
        {
            name: "Artículos",
            href: "/articulos"
        },
        {
            name: "Preguntas",
            href: "/preguntas"
        },
        {
            name: "Recursos",
            href: "/recursos"
        },
    ];

    return (
        <header className="flex flex-col z-10">
            {/* Top Banner */}
            <div className="bg-primary pt-mobile pb-0 px-mobile lg:px-8 lg:py-6 flex flex-col lg:flex-row gap-1 md:gap-4 text-center items-center justify-center text-text-white font-semibold text-sm lg:text-base">
                <p>Defendemos los derechos y el bienestar de las personas Trans en Venezuela y el mundo</p>
                <a
                    alt="se parte de la comunidad"
                    href="https://www.whatsapp.com/channel/0029VayoFLsLCoWtBT43Ae0Q"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex gap-2 items-center px-mobile border-2 border-white my-5 lg:my-0">
                        <img src="/assets/Flag.jpg" alt="Bandera orgullo trans" />
                        <span>Sé miembro de nuestra comunidad</span>
                    </button>
                </a>
            </div>

            <img className="w-full"
                src="/assets/bandera.jpg"
                alt="Bandera orgullo trans" />

            {/* Desktop Navigation */}
            <nav className="hidden px-tablet py-8 justify-center items-center gap-9 lg:flex">
                <Link href={'/'}>
                    <img className="w-28"
                        src="/auth/logoAuth.jpg"
                        alt="logo"
                        onClick={() => setActiveDropdown(false)} />
                </Link>
                <ul className="flex w-2/3 gap-9 justify-center">
                    {menuItems.map((item) => (
                        <li key={item.name} className="relative inline-flex items-cente font-semibold text-xl text-gray-700">
                            <Link
                                className={`hover:underline underline-offset-0 decoration-bth-blue decoration-4 hover:underline-offset-8 ${pathname == item.href && "underline !underline-offset-8"} transition-colors duration-150`}
                                href={item.href}
                                onClick={() => setActiveDropdown(false)}
                            >
                                {item.name}
                            </Link>
                            <button
                                className="inline-block"
                                onClick={() => item.dropdownItems && toggleDropdown(item.name)}
                            >
                                {item.dropdownItems && (
                                    <svg
                                        className={`ml-1 h-5 w-5 transition-transform duration-200 stroke-primary ${activeDropdown === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {item.dropdownItems && activeDropdown === item.name && (
                                <div className="absolute top-5 text-sm mt-2 w-56 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <Link
                                            className="block px-4 py-2 text-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                            key={dropdownItem.name}
                                            href={dropdownItem.href}
                                            onClick={() => setActiveDropdown(false)}
                                        >
                                            {dropdownItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <Link className="flex xl:text-lg px-4 py-2 gap-2 items-center bg-btn-purple text-white" href="/donar">
                    <span>
                        Haz un donativo
                    </span>
                    <img src="/assets/Heart.jpg" alt="Corazon orgullo trans" />
                </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex justify-between p-mobile items-center lg:hidden">
                <Link href={'/'}>
                    <img className="w-20"
                        src="/auth/logoAuth.jpg"
                        alt="logo" />
                </Link>

                <Link href={'/donar'} alt="Haz un donativo">
                    <button className="flex text-xs sm:text-sm md:text-lg gap-2 items-center bg-btn-purple py-1 px-2 sm:px-3 text-white">
                        <span>
                            Haz un donativo
                        </span>
                        <img src="/assets/Heart.jpg" alt="Corazon orgullo trans" />
                    </button>
                </Link>


                <button
                    onClick={() => setIsOpen(true)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600  z-20"
                >{/* aqio <----------------------------------------------- */}
                    <span className="sr-only">Abrir menú principal</span>
                    {!isOpen && (
                        <svg
                            className="block h-12 w-12 stroke-btn-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )
                    }
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`${isOpen ? "absolute w-full bg-[#3B2540]" : "hidden"} lg:hidden z-10`}> {/* aqio <----------------------------------------------- */}
                <button
                    className="absolute top-2 right-2 z-10 h-12 w-12"
                    onClick={() => setIsOpen(false)}
                >
                    <svg
                        className=" stroke-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <div className="space-y-1 pb-3 pt-2">
                    <ul className="flex flex-col gap-10 pt-10">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className="text-2xl font-semibold text-white w-full items-center pl-10 py-2 list-none"
                            >

                                <Link
                                    href={item.href}
                                    alt={item.name}
                                    onClick={() => onMobileClick()}
                                >
                                    {item.name}
                                </Link>

                                {item.dropdownItems &&
                                    <MobileDropdownBtn item={item} setIsOpen={setIsOpen} />

                                }

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
