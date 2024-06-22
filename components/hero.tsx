"use client";

import VideoThumb from "@/public/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { Dialog, Transition } from "@headlessui/react";
import { useState, useRef, Fragment } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Crie o seu incrivel{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                website
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Nossa equipe super preparada ajuda você a transformar ideias em
                um aplicativo ou website
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-evenly md:gap-4"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-white rounded-md bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-2"
                  >
                    Entrar em contato
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => {
                      router.push("/projetos");
                    }}
                    className="text-white rounded-md bg-black w-full mb-4 sm:w-auto sm:mb-0 p-2"
                  >
                    Conheça os nosso projetos
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="https://firebasestorage.googleapis.com/v0/b/baseapp-4bd17.appspot.com/o/uploads%2F1%2Fcopy_4DCE274E-EF4D-4975-8D71-B2558535C7E7.MP4?alt=media&token=7fe7f7d0-e411-4db8-8281-333469b325a7"
            videoWidth={300}
            videoHeight={1920}
          />

          <Transition
            show={modalOpen}
            as={Fragment}
            afterEnter={() => videoRef.current?.play()}
          >
            <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
              {/* Modal backdrop */}
              <Transition.Child
                className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-out duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                aria-hidden="true"
              />
              {/* End: Modal backdrop */}

              {/* Modal dialog */}
              <Transition.Child
                className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ttransition ease-out duration-200"
                leaveFrom="oopacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="max-w-6xl mx-auto h-full flex items-center">
                  <Dialog.Panel className="w-full max-h-full bg-black overflow-hidden">
                    <video
                      ref={videoRef}
                      width="auto"
                      height="auto"
                      loop
                      controls
                    >
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/baseapp-4bd17.appspot.com/o/uploads%2F1%2Ffca1deb9bd744f88a07144619c778cdd.MP4?alt=media&token=84c55768-b1f6-46a2-ab90-83792368beef"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
              {/* End: Modal dialog */}
            </Dialog>
          </Transition>
        </div>
      </div>
    </section>
  );
}
