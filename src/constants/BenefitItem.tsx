import {
  CekVaksinasi,
  DonasiAlatMedis,
  DonasiUang,
  DonasiVitamin,
  DonorDarah,
  KetersediaanAmbulance,
} from "../assets";

const BenefitItem = [
  {
    icon: DonorDarah,
    title: "Donor darah",
    description: "Cek ketersediaan donor darah atau mau donor darah",
  },
  {
    icon: DonasiUang,
    title: "Donasi uang",
    description:
      "Bantu teman - teman kita yang sedang mengalami kesulitan finansial",
  },
  {
    icon: DonasiAlatMedis,
    title: "Donasi alat medis",
    description: "Bantu para nakes yang sedang berjuang melawan pandemi",
  },
  {
    icon: DonasiVitamin,
    title: "Donasi vitamin",
    description: "Bantu teman - teman kita yang sedang mengalami sakit",
  },
  {
    icon: CekVaksinasi,
    title: "Cek vaksinasi",
    description:
      "Cek ketersediaan vaksin dan lokasi vaksinasi di dekat lokasi anda",
  },
  {
    icon: KetersediaanAmbulance,
    title: "Ketersediaan ambulance",
    description:
      "Cek ketersediaan ambulan dan lokasi rumah sakit yang menyediakan",
  },
];

export default BenefitItem;
