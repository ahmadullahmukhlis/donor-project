"use client";

import React, { useState } from "react";
import bloodGroups from "./bloodGroups"; // Blood groups file
import provincesAndDistricts from "./afghanistanData"; // Provinces and districts file
import Select from "react-select"; // Select2 component

const Donation = () => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [districtOptions, setDistrictOptions] = useState([]);

  // Handle province selection to update districts
  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    setDistrictOptions(
      provincesAndDistricts[selectedOption.value].map((district) => ({
        label: district,
        value: district,
      }))
    );
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-4/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  Blood Donation
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let&#39;s Donate Blood.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-8/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Blood Registration
              </h3>
              <form>
                <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Adam Gelius"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      Phone*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+93 700 123 456"
                      required
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      Blood Group*
                    </label>
                    <Select
                      options={bloodGroups.map((group) => ({
                        label: group,
                        value: group,
                      }))}
                      placeholder="Select Blood Group"
                      className="w-full text-dark placeholder:text-body-color/60 dark:text-white focus:outline-none dark:bg-dark-2 dark:border-dark-3 dark:focus:border-primary"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          border: "none",  // No border
                          boxShadow: "none", // Remove shadow
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#333", // Text color
                        }),
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="alternativePhone"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      Alternative Phone
                    </label>
                    <input
                      type="text"
                      name="alternativePhone"
                      placeholder="+93 700 654 321"
                      className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="province"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      Province*
                    </label>
                    <Select
                      options={Object.keys(provincesAndDistricts).map((province) => ({
                        label: province,
                        value: province,
                      }))}
                      onChange={handleProvinceChange}
                      placeholder="Select Province"
                      className="w-full text-dark placeholder:text-body-color/60 dark:text-white focus:outline-none dark:bg-dark-2 dark:border-dark-3 dark:focus:border-primary"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          border: "none",  // No border
                          boxShadow: "none", // Remove shadow
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#333", // Text color
                        }),
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="district"
                      className="mb-2 block text-sm text-body-color dark:text-dark-6"
                    >
                      District*
                    </label>
                    <Select
                      options={districtOptions}
                      isDisabled={!districtOptions.length}
                      placeholder="Select District"
                      className="w-full text-dark placeholder:text-body-color/60 dark:text-white focus:outline-none dark:bg-dark-2 dark:border-dark-3 dark:focus:border-primary"
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          border: "none",  // No border
                          boxShadow: "none", // Remove shadow
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          color: "#333", // Text color
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-blood px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blood/90"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
