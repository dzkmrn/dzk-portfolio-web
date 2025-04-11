// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = [
  {
    id: 1,
    title: "Dastra Corp (dastracorp.com)",
    category: "Website Application",
    description: "Dastra Corp is a company profile website and also a management system for Dastra Corp. This website help dastra to display their products and contacts and managing the displayed products. Dastracorp is made with Laravel and mysql.",
    img: "https://drive.google.com/uc?export=view&id=1FoXb26bkbp0H_h-0W_FWk91v006WwErk"
  },
  {
    id: 2,
    title: "Bank Sampah Sri Wilis",
    category: "Mobile Application",
    description: "Bank Sampah Sri Wilis is a mobile and web application that will help Sri Wilis's operational and managerial needs. With this application, admin works will be more efficient and user can order the pick up of their waste to exchange it with money.",
    img: "https://drive.google.com/uc?export=view&id=1LoDtLnxWDNCLV6qylHMVquNI6ByNqr9p"
  },
  {
    id: 3,
    title: "Factha",
    category: "Mobile Application",
    description: "Factha is a mobile application for filtering and reporting hoaxes. It also gives users analytics about the hoaxes that have been reported. This application is made with Kotlin and hapi.js.",
    img: "https://drive.google.com/uc?export=view&id=1dBmyr9YNYSXodf2Ozp_Xc1Xtq9IBr_VC"
  },
  {
    id: 4,
    title: "PITA.ID",
    category: "Mobile Application",
    description: "PITA.ID is an OCR Application that help recognize and extract text from KTP. It also comes with Decision Support System features to rank working candidate by certain parameter. This application is made with Flutter, flask, and firebase.",
    img: "https://drive.google.com/uc?export=view&id=16Ahw7xBDN98PJaIzvE1i-hyn6XPmhS1p"
  },
  {
    id: 5,
    title: "KelolaKuy",
    category: "Website Application",
    description: "KelolaKuy is a website that will help on managing and recording organization inventory. By automate the lending and retrieving process of each inventory. KelolaKuy is made with Laravel and mysql ",
    img: "https://drive.google.com/uc?export=view&id=1LUiuVl_bTkcgyrpPKJH9ex_xSxtajXxH"
  },
  {
    id: 6,
    title: "Redesign Website SPMB Polinema",
    category: "Website Application",
    description: "Redesign SPMB Polinema website to make it more user friendly and modern. We try to redesign it by first designing the UI in Figma",
    img: "https://drive.google.com/uc?export=view&id=1BvR5wv8OQbME31mFKWZZ-AxiaBhgrSUO"
  },
  {
    id: 7,
    title: "SALZA",
    category: "Website Application",
    description: "SALZA is a website that help muslim in Jabodetabek specifically see praying time. Also comes with zakat recording feature. SALZA is made with PHP native and mysql",
    img: "https://drive.google.com/uc?export=view&id=1QMAB8E0sjPR0XoVu4eYzVHH5Ul_xohkb"
  },
  {
    id: 8,
    title: "Multimedia Pesanggrahan",
    category: "Desktop and Mobile Application",
    description: "Pesanggrahan Multimedia is a desktop and mobile application that help user to see the information about Pesanggrahan. It also comes with feature to see the gallery of Pesanggrahan. This application is made with Adobe Animate and ActionScript 3.0.",
    img: "https://drive.google.com/uc?id=1g20SMV8MNrRcF3hQtYoljlleFZmf4qfV"
  },
  {
    id: 9,
    title: "Kost.In",
    category: "Mobile Application",
    description: "Kost.In is a super app mobile application that help user to find and book kost in Indonesia. It also comes with feature to pay the kost and see the review of the kost. We only made the design and bussiness plan of this application.",
    img: "https://drive.google.com/uc?id=1KvVV3YuwDLh98k7PIr61hQNjvDaTBCiu"
  },

]

export default function handler(req, res) {
  res.status(200).json(data)
}
