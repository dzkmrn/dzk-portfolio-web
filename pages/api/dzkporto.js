// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
  {
    id: 1,
    title: "Factha",
    category: "Mobile Application",
    description: "Factha is a mobile application for filtering and reporting hoaxes. It also gives users analytics about the hoaxes that have been reported. This application is made with Kotlin and hapi.js.",
    img: "https://drive.google.com/uc?export=view&id=1R_7FBGsxU0hEXL5_RqTgNIBCk-8NyFTO"
  },
  {
    id: 2,
    title: "PITA.ID",
    category: "Mobile Application",
    description: "PITA.ID is an OCR Application that help recognize and extract text from KTP. It also comes with Decision Support System features to rank working candidate by certain parameter. This application is made with Flutter, flask, and firebase.",
    img: "https://drive.google.com/uc?export=view&id=16Ahw7xBDN98PJaIzvE1i-hyn6XPmhS1p"
  },
  {
    id: 3,
    title: "KelolaKuy",
    category: "Website Application",
    description: "KelolaKuy is a website that will help on managing and recording organization inventory. By automate the lending and retrieving process of each inventory. KelolaKuy is made with Laravel and mysql ",
    img: "https://drive.google.com/uc?export=view&id=1LUiuVl_bTkcgyrpPKJH9ex_xSxtajXxH"
  },
  {
    id: 4,
    title: "SALZA",
    category: "Website Application",
    description: "SALZA is a website that help muslim in Jabodetabek specifically see praying time. Also comes with zakat recording feature. SALZA is made with PHP native and mysql",
    img: "https://drive.google.com/uc?export=view&id=1QMAB8E0sjPR0XoVu4eYzVHH5Ul_xohkb"
  },

]

export default function handler(req, res) {
  res.status(200).json(data)
}
