import Breadcrumb from "@/components/Common/Breadcrumb";
import Donation from "@/components/Donation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Donation Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is Donation page description",
};

const DonationPage = () => {
  return (
    <>
      <Breadcrumb pageName="Donation Page" />

      <Donation />
    </>
  );
};

export default DonationPage;
