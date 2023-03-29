import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const informacion = [
  // ingenieria:
  [
    {
      titulo: "IMA Mechanical Engineers le ofrece:",
      imagen: "/assets/img/cards/modal_ingenieria.jpg",
      contenido: [
        {
          descripcion:
            "Ingeniería de Proceso, Mecánica, Eléctrica y de Control.",
        },
        {
          descripcion: "Simulación de Procesos Industriales con AVEVA Pro II.",
        },
        { descripcion: "Diseño de Maquinaría a la Medida." },
        {
          descripcion:
            "Estudios de Código de Red y Estudios Eléctricos de Potencia.",
        },
        {
          descripcion:
            "Unidad Verificadora de Instalaciones Eléctricas y Unidad de Inspección.",
        },
      ],
    },
  ],
  // energia:
  [
    {
      titulo: "IMA Mechanical Engineers le ofrece:",
      imagen: "/assets/img/cards/modal_energia.jpg",
      contenido: [
        { descripcion: "Plantas de Cogeneración." },
        { descripcion: "Plantas de Generación Fotovoltaicas." },
        { descripcion: "Plantas de Generación a Diésel." },
      ],
    },
  ],
  // industriales:
  [
    {
      titulo: "IMA Mechanical Engineers le ofrece:",
      imagen: "/assets/img/cards/modal_plantas_industriales.jpg",
      contenido: [
        { descripcion: "Plantas industriales de Proceso." },
        { descripcion: "Automatización de Procesos Industriales." },
        { descripcion: "Repotenciación de Plantas Industriales." },
      ],
    },
  ],
  // mantenimiento:
  [
    {
      titulo: "IMA Mechanical Engineers le ofrece:",
      imagen: "/assets/img/cards/modal_mantenimiento.jpg",
      contenido: [
        { descripcion: "Generadores de Vapor." },
        { descripcion: "Plantas de Emergencia." },
        { descripcion: "Subestaciones Eléctricas." },
        { descripcion: "Motores a Gas Natural." },
      ],
    },
  ],
];

const Modal = ({ setModalId, modalId }) => {
  const [open, setOpen] = useState(true);

  if (!open) {
    setModalId(null);
  }
  let x = [];
  x = informacion[modalId - 1];

  // console.log(informacion);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:pr-16 sm:p-6">
                  <div className="absolute top-0 right-0 pt-4 pr-4 block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0000FF] focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-center">
                    <div className="mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex flex-wrap">
                        {x &&
                          x.map((info) => (
                            <div
                              key={generarId()}
                              className="flex  flex-col items-center"
                            >
                              <div className="h-96 w-60 pb-4">
                                <img
                                  src={info.imagen}
                                  alt="imgDif"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div>
                                  <Dialog.Title
                                    as="h3"
                                    className="font-roboto text-base font-normal leading-6 text-gray-900"
                                  >
                                    {info.titulo}
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <ul>
                                      {info.contenido.map((lista) => (
                                        <li
                                          key={generarId()}
                                          className="text-sm text-gray-500"
                                        >
                                          {lista.descripcion}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Modal;
