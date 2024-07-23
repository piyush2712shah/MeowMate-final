import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface FormProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ContactForm = ({ isOpen, closeModal }: FormProps) => {
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
                    <div className="relative w-full h-100 bg-pattern bg-cover bg-center rounded-lg">
                      <div className="flex flex-col justify-evenly">
                        <h1 className="text-center">Contact Us</h1>
                        <form>
                          <div className="form-group">
                            <label className="py-2">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="py-2">The Breed You're interested in</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="py-2">Email address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                            />
                          </div>
                          <div className="form-group">
                            <label className="py-2">Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Contact Number"
                            />
                          </div>
                          <button type="submit" className="btn btn-warning mt-3 ">
                            Submit
                          </button>
                        </form>
                      </div>
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

export default ContactForm;
