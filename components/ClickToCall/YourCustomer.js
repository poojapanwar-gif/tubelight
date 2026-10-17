import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const YourCustomer = () => {
  const cardContent = [
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75 10L3.75 15L8.75 20M21.25 10L26.25 15L21.25 20M17.5 5L12.5 25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
        </svg>
      ),
      title: "1. Integrate",
      detail: "Add Click2Call to your website, app or platform in just minutes",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9996 2.5V6.25M6.25586 14.9937H2.50586M6.16336 6.165L8.81336 8.8175M23.8409 6.15625L21.1871 8.80875M8.81211 21.1838L6.16211 23.8337M13.7496 13.75L26.2496 19.25L20.7034 20.7038L19.2496 26.25L13.7496 13.75Z"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
        </svg>
      ),
      title: "2. Click",
      detail: "Customers click the call button whenever they need assistance",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.3498 22.3359C27.9376 22.0461 23.4277 19.0452 22.875 18.7073C22.6342 18.5599 22.3403 18.4878 22.0208 18.4878C21.6086 18.4878 21.1523 18.6079 20.7069 18.8426C20.2728 19.0713 18.958 19.82 18.3147 20.1878C17.748 19.7897 16.4169 18.7693 14.3194 16.6683C12.2351 14.5833 11.2061 13.2402 10.8058 12.6702C11.1725 12.0268 11.9197 10.7111 12.1471 10.278C12.5778 9.46158 12.6266 8.64637 12.2772 8.09658C11.9492 7.57838 8.96262 3.04608 8.65445 2.61973C8.36438 2.21739 7.8436 2 7.27864 2C6.8328 2 6.36001 2.13481 5.94996 2.42045C5.91038 2.44868 1.94789 5.32361 2.00052 6.95866C2.14663 11.5516 6.60669 16.9493 10.3224 20.6689C14.0382 24.3885 19.4325 28.853 24.0403 29H24.0782C25.6915 29 28.5274 25.0849 28.5548 25.0461C29.2987 23.9824 29.0275 22.8112 28.3498 22.3359ZM27.1865 24.0646C26.1184 25.545 24.6019 27.0912 24.0084 27.3124C20.85 27.1641 16.4181 24.3865 11.513 19.4771C6.60838 14.5673 3.83314 10.1374 3.68663 6.98738C3.89966 6.39167 5.4447 4.86447 6.91063 3.80365C7.01925 3.72866 7.15313 3.68526 7.27817 3.68526C7.30592 3.68526 7.32908 3.68779 7.34721 3.69116C7.82084 4.37998 10.3633 8.2315 10.8247 8.95147C10.8264 9.0273 10.8007 9.21978 10.6563 9.49449C10.5026 9.78729 10.0239 10.6408 9.34318 11.8348L8.81356 12.7637L9.4278 13.6392C9.88585 14.2901 10.9754 15.7052 13.128 17.8597C15.2898 20.0239 16.6989 21.1109 17.3468 21.5667L18.2217 22.1814L19.15 21.6506C20.0497 21.1361 21.1367 20.5198 21.4904 20.334C21.7741 20.1845 21.9682 20.1726 22.0208 20.1726C22.0292 20.1726 22.0364 20.1726 22.0423 20.1735C22.6868 20.5784 26.619 23.1908 27.3132 23.6673C27.3246 23.7347 27.314 23.8813 27.1865 24.0646ZM20.0231 12.0842L27.2655 4.88077L27.2424 8.96355C27.2348 9.30438 27.5047 9.60055 27.8453 9.59257L28.2772 9.59215C28.6182 9.58373 28.8995 9.3815 28.9066 9.0411L28.9239 2.95842C28.9239 2.95255 28.9012 2.94834 28.9012 2.94244L28.9344 2.63405C28.9378 2.463 28.8982 2.3105 28.7871 2.20138C28.6784 2.09145 28.5257 2.02444 28.356 2.0291L28.0482 2.03626C28.0423 2.03626 28.0377 2.03879 28.031 2.03963L21.993 2.01264C21.6528 2.02025 21.3716 2.30167 21.3636 2.6425L21.3627 3.07475C21.4145 3.47585 21.7294 3.71091 22.07 3.70333L26.0497 3.71386L18.8325 10.8924C18.5037 11.2214 18.5037 11.7552 18.8325 12.0842C19.1613 12.4129 19.6943 12.4129 20.0231 12.0842L20.0231 12.0842Z"
            fill="white"
          />
        </svg>
      ),
      title: "3. Connect",
      detail: "They are instantly connected to your team via a call",
    },
    {
      icon: (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9919 28H2V2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
          <path
            d="M2 8.21059L9.79076 13.555L19.9204 7.63281L27.7111 12.255M2 24.6414L11.5333 18.8544L14.4222 20.9968L24.2444 23.5691L27.7111 17.997"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
          <path
            d="M2 14.5667L10.342 5.32227L18.0692 17.4556L27.7111 5.32227"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="white"
          />
        </svg>
      ),
      title: "4. Convert",
      detail: "Engage, assist and convert leads into loyal customers",
    },
  ];
  return (
    <div className={styles["your-customer-section"]}>
      <h2>Simple for you Seamless for your customers</h2>
      <div className={styles["all-customer-cards"]}>
        {
            cardContent.map((item,index)=>(
                <div className={styles["customer-card"]} key={index}>
                    <div className={styles["customer-icon-circle"]}>
                        <div className={styles["customer-icon"]}>
                            {item.icon}
                        </div>
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.detail}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default YourCustomer;
