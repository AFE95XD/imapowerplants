import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const informacion = [
  // ingenieria:
  [
    {
      titulo:
        "Ingeniería Básica de Proceso, Mécanica, Eléctrica, Civil y de Control",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Estudios de Código de Red",
      descipcion: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      titulo: "Simulación de Procesos Industriales con AVENA Pro 2",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Estudios de Corto Circuito y Coordinación de Protecciones",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
  ],
  // energia:
  [
    {
      titulo: "Plantas de Cogeneración",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Plantas Fotovoltaicas",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Plantas Solares Térmicas",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Plantas de Energia de Respaldo",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
  ],
  // industriales:
  [
    {
      titulo: "Plantas de Alimentos",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Plantas de Proceso",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Plantas Solares Papeleras",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
  ],
  // mantenimiento:
  [
    {
      titulo: "PSubestaciones Eléctrias",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Calderas de vapor",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Motores de Combustión",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
    },
    {
      titulo: "Fabricación de Maquinaría",
      descipcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea?",
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

  console.log(informacion);

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
                <Dialog.Panel className="relative h-screen transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-3/4 sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0000FF] focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex flex-wrap">
                        <div className="h-96 w-60 mr-11 lg:text-start sm:">
                          <img
                            src="src/assets/img/Fotografía IMA Mechanical.jpg"
                            alt="imgDif"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          {x &&
                            x.map((info) => (
                              <div key={generarId()}>
                                <Dialog.Title
                                  as="h3"
                                  className="text-base font-semibold leading-6 text-gray-900"
                                >
                                  {info.titulo}
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    {info.descipcion}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
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
