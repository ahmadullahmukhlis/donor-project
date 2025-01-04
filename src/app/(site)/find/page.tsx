import Find from "@/components/find";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Find Us | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is About page description",
};

const findPage = () => {
  return (
    <main>
     
      <Find />

    </main>
  );
};

export default findPage;
