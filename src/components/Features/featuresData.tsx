import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="35"
        viewBox="0 96 960 960"
        width="35"
        fill="currentColor"
      >
        <path d="M480 1036q-88 0-166.5-33.5T178 918q-57-57-90.5-135.5T54 616q0-86 32.5-164T176 319q57-57 135.5-89.5T480 197q90 0 169 32.5t135 89.5q57 57 89.5 135T906 616q0 88-33 166.5T784 918q-57 57-135 90.5T480 1036ZM480 496v320h320q-19-67-60-122.5T637.5 589q-43.5-44-99.5-65.5T480 496Zm0 0Z" />
      </svg>
    ),
    title: "Become a Donor",
    paragraph:
      "Every drop counts. Join our life-saving mission by donating blood today.",
    btn: "Learn More",
    btnLink: "/become-a-donor",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 96 960 960"
        width="36"
        fill="currentColor"
      >
        <path d="M480 976q-140 0-238-98t-98-238q0-140 98-238t238-98q140 0 238 98t98 238q0 140-98 238t-238 98Zm0-60q111 0 189-78t78-189q0-111-78-189t-189-78q-111 0-189 78t-78 189q0 111 78 189t189 78Z" />
      </svg>
    ),
    title: "Find a Blood Drive",
    paragraph: "Locate a nearby blood drive and contribute to a greater cause.",
    btn: "Learn More",
    btnLink: "/find-a-drive",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="37"
        viewBox="0 96 960 960"
        width="37"
        fill="currentColor"
      >
        <path d="M480 976q-128 0-217-89T174 670q-8-44-38-75t-70-36V404h160q23 0 39.5 16.5T288 460v212h144V356q0-23 16.5-39.5T488 300h208q23 0 39.5 16.5T752 356v212h144q23 0 39.5 16.5T952 580v208q0 128-89 217t-217 89Z" />
      </svg>
    ),
    title: "Request Blood",
    paragraph: "In urgent need of blood? Reach out to us for assistance.",
    btn: "Learn More",
    btnLink: "/request-blood",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="37"
        viewBox="0 96 960 960"
        width="37"
        fill="currentColor"
      >
        <path d="M480 976q-140 0-238-98t-98-238q0-140 98-238t238-98q140 0 238 98t98 238q0 140-98 238t-238 98Zm-144-240h288v-60H336v60Zm60-120h168v-60H396v60Zm72-120h96v-60h-96v60Z" />
      </svg>
    ),
    title: "Learn About Blood Types",
    paragraph:
      "Understand blood type compatibility and how it impacts donations.",
    btn: "Learn More",
    btnLink: "/blood-types",
  },
];

export default featuresData;
