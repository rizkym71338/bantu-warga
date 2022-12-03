import { IconClock, IconPeople, IconPuzzle } from "../assets";

const CovidInformation = [
  {
    title: "Informasi tepat waktu",
    description:
      "Informasi yang anda dapatkan selalu update oleh kami , karena kami mengutamakan informasi yang akurat dan cepat",
    icon: <IconClock className={`flex-none`} />,
  },
  {
    title: "Informasi terpercaya",
    description:
      "Informasi yang anda temukan dan baca dapat dipercaya adanya karena kami telah berkerja sama dengan para sukarelawan kami untuk membagi informasi yang benar adanya",
    icon: <IconPeople className={`flex-none`} />,
  },
  {
    title: "Informasi relevan",
    description:
      "Informasi yang anda temukan dan baca dapat hanya tentang masalah kesehatan , tips - tips , pandemi covid , dan sejenisnya",
    icon: <IconPuzzle className={`flex-none`} />,
  },
];

export default CovidInformation;
