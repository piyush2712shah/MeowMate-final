"use client";
import { CatProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {  getCatImage } from "@/utils";

interface CatDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  cat: CatProps;
}

const CatDetails =({ isOpen, closeModal, cat }: CatDetailsProps) => {
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-orange-200 bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={getCatImage(cat)}
                        alt="cat"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-3xl capitalize">
                      {cat.name}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(cat)
                      .filter(([key]) => 
                        key !== 'vetstreet_url' && 
                        key !== 'vcahospitals_url' && 
                        key !== 'country_codes' && 
                        key !== 'id' && 
                        key !== 'alt_names' && 
                        key !== 'wikipedia_url' && 
                        key !== 'cfa_url' && 
                        key !== 'country_code' && 
                        key !== 'reference_image_id' )
                      .map(([key, value]) => (
                        <div
                          className="flex justify-stretch gap-5 w-full text-justify"
                          key={key}
                        >
                          <h4 className="text-grey text-xl capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          {/* Check if value is an object */}
                          {typeof value === "object" ? (
                            <div>
                              <p className="text-black-100 font-semibold">
                                Imperial: {value.imperial}
                              </p>
                              <p className="text-black-100 font-semibold">
                                Metric: {value.metric}
                              </p>
                            </div>
                          ) : (
                            <p className="text-black-100 font-semibold">
                              {value}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CatDetails;
