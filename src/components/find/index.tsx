"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";
import bloodGroups from "./../Donation/bloodGroups"; // Import your blood group data
import provincesAndDistricts from "./../Donation/afghanistanData"; // Import your province data

const Find = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [donors, setDonors] = useState([]);

  // Fetch donors based on filters
  const fetchDonors = async (bloodGroup, province) => {
    try {
      const response = await fetch("/api/donors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bloodGroup, province }),
      });
      const data = await response.json();
      setDonors(data);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  // Handle blood group change
  const handleBloodGroupChange = (selectedOption) => {
    setSelectedBloodGroup(selectedOption);
    fetchDonors(selectedOption?.value || null, selectedProvince?.value || null);
  };

  // Handle province change
  const handleProvinceChange = (selectedOption) => {
    setSelectedProvince(selectedOption);
    fetchDonors(selectedBloodGroup?.value || null, selectedOption?.value || null);
  };

  useEffect(() => {
    // Initial fetch with no filters
    fetchDonors(null, null);
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[115px]">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-dark md:text-4xl text-center">
            Donor Information
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {/* Blood Group Select */}
            <div className="w-full sm:w-auto">
              <Select
                options={[
                  { label: "All Blood Groups", value: null },
                  ...bloodGroups.map((group) => ({
                    label: group,
                    value: group,
                  })),
                ]}
                onChange={handleBloodGroupChange}
                placeholder="Select Blood Group"
                isClearable
                className="w-full sm:w-60"
              />
            </div>
            {/* Province Select */}
            <div className="w-full sm:w-auto">
              <Select
                options={[
                  { label: "All Provinces", value: null },
                  ...Object.keys(provincesAndDistricts).map((province) => ({
                    label: province,
                    value: province,
                  })),
                ]}
                onChange={handleProvinceChange}
                placeholder="Select Province"
                isClearable
                className="w-full sm:w-60"
              />
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  #ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  Full Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  Phone
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  Alternative Phone
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  Blood Group
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  Province
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium uppercase text-gray-600">
                  District
                </th>
              </tr>
            </thead>
            <tbody>
              {donors.length > 0 ? (
                donors.map((donor, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td className="border border-gray-300 px-4 py-2">{donor.id}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {donor.fullName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{donor.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {donor.alternativePhone}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {donor.bloodGroup}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {donor.province}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {donor.district}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="border border-gray-300 px-4 py-6 text-center text-gray-600"
                  >
                    No donors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Find;
