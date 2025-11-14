import React from "react";

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-4 sm:px-6 lg:px-10 py-3 sticky top-5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10 rounded-xl">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
              StyleMatch
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-text-light dark:text-text-dark text-sm font-medium" href="#">
              Лента
            </a>
            <a className="text-text-light dark:text-text-dark text-sm font-medium" href="#">
              Подбор
            </a>
            <a className="text-text-light dark:text-text-dark text-sm font-medium" href="#">
              Профиль
            </a>
          </nav>
        </div>

        <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6 lg:gap-8">
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-text-light/70 dark:text-text-dark/70 flex border-none bg-surface-light dark:bg-surface-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-surface-light dark:bg-surface-dark focus:border-none h-full placeholder:text-text-light/70 dark:placeholder:text-text-dark/70 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Поиск"
                value=""
              />
            </div>
          </label>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span className="material-symbols-outlined dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:inline">light_mode</span>
          </button>
        </div>
      </header>

      {/* Inspiration Section */}
      <main className="flex flex-col gap-4 mt-8">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Вдохновение
          </p>
        </div>

        <div className="flex gap-3 p-3 overflow-x-auto">
          {["Стили", "Сезоны", "Палитра", "Еще"].map((item) => (
            <button
              key={item}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-light dark:bg-surface-dark pl-4 pr-2"
            >
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">{item}</p>
              <span className="material-symbols-outlined text-text-light dark:text-text-dark">expand_more</span>
            </button>
          ))}
        </div>

        {/* Inspiration Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
          {[
            { title: "Минимализм в офисе", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXsMqVyRwD43zglHvK_JqaXx08utdxFHxu30UO1eXY2k49USLJ_lgZKkGBGdt4iQWZyO4j367e-okRCxVMn64fb3lvvR7_aoTBcgjy9VecR982vF2HWkPiexIfzlrNzdOf9Gh0NTPfkB56QAEW0IKiATSASrwFT1kTngeGj7a6zr7LdUBS4dRoPj2dMCqn7qPeWfyVxZYzgu-RjJwSqty5v9SOAMoRn55ZO_vokLHsA-Q7j19YwVwq3YTmE6ZWOsS22P10r7-1jRz" },
            { title: "Повседневный образ на выходные", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5-1WU0a1Gqu0B-USVC_I5_Mdlh8BR1M9_lBc5WTyxeYOexedY2yfGdoxBsMb5T66fz2IBDUfW8IxmAcFHkbZdpk7V9Lf303LVyPIeVgpi7k4cSTphA0cHaC59Ajfe1SccAwmBa1d4phMCkPpyxbVqtwyY0EfU-UR_cwpQqNkjg_SZMaSzPiWVtVcFSR5X39-ARv5DiRSJhCyQlq1LEOCxYZ8CpRowtw1WgsY34tikgt0_ENCj38jean5Ogt1DX-6R47b3NhjZEIPH" },
            { title: "Осенний капсульный гардероб", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtvorWbakFLFzknozeq9Su0HK_fq048ZCuOLqcWI9GMHbv9zOkCxfCmCx7YqrLf3z2VCsxn8qa2uPhzye2-RPjtdirwatgeUgD760JvDza_rlNLzLEk0ailHYSZYNdGdCyRncKEG8SY5iqP4luJogNbAun3bMh3ec5OVy43QYMAMqc1FhFk2NYl9yVr4Ce9FN5gH2c7soTIpidAjERaZxCb-z8CuX_OzbTlLv4cB0-XBKm4Q80ZAmzkssCcmuxM6jhe5GQfwJe2RQ7" },
            { title: "Наряд для свидания", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4L3U2YUt2RW6cQK0zLFioSZukvIrjc6AX_RoqS4nfrt6GNCqDaNssRuzI86NAAVRL17DxI0e1aPfg2n9gwTzgJ8PnXlhExyDrIZUepoJ82KBMfQrmpQd5tnvaWq-Z2x6W9KXCYfte7mHntFSHN5FWzyfUfw1pu60PELcXhhgUyL6o7yMPuQbWYZe6NWQnvmaQkLtpeyi2Fc06d5DpwfDkL-jdK87Rh0Sk1DCXYowRo0kRC-9q9bF995pHRUXNp8KLopbi_0s3Uddl" },
            { title: "Тренды уличного стиля", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0xq-NYcH8gcaX-eAbaT8fUqKGeoEyjJRQlDCq-7aRoaj53Rn-aL_o8C0KM1yO-QMYojctMAk2AtI42AaLsV43RPjkJXHTOqdz0GRanp6yABEtN_-_50-R9PgbxUsv-UIzdejdviIpr9UHkzm2fPxEWMHB2Lby1Jt69ZtnAbNH8BFK0iseoSDsiDF6zCx1EmS0iRkIPYeHz84W0KE0hiO_mgvfJNsTCth2kAG5r6z_frxVptwwT6FRekHEdF3Xp7mxy7QDdBcW3BOK" },
            { title: "Все для летнего отпуска", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAouyu1qsVdxutSFy-uqc81ILqbyShY0cTx7eGHSzKm7W7EpCHn2LvV3iKCl1fiXZJUPkeJNuLJMJWqrSbr-d7OlgdKti9NMixhu5VruI_Yl0bb7Gm5h_GW2ZLps363Ca_QSN0O-H4Ukt_g9jFPk8e9GcUlvQTCBUk-PxyI7fFw1g3FoLKp-g_19iSJ6eFKM2S-Z7fDh4t3emFdqLeklGYkoKeiaFYNhZmPZgf9RyIgfXlUXoc2yhh6g0opck8VobLn0sBU0hGltYt" },
            { title: "Элегантная вечерняя одежда", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbuE3DRsoPaLqPtODcQLOdl4K-Kq9hjSbpfgLEQ-HtYdx0loNOnK--tmVvlISe-XLvnyFxQFczoDEsJNNQgLiljhsB0HMq7NknkrWmIU7BPAN08KH4wsgntVU3gMlEtHvpMYE1uqeqs5Yn_eJ-JJqRHXOpQ_xiG5OerlSdAGOP9BERnEJ0oCt80My4h_rLk0vZB5s-6-EtwA5gZ8W2FXM1TDVCth2iNYQM3klNearylRXU-2UzpKRChhNUaMCvZFmQG_pbICSRDAA5" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0.1) 100%, rgba(0,0,0,0) 100%), url('${card.img}')`,
              }}
            >
              <p className="text-white text-base font-bold leading-tight w-full line-clamp-3">{card.title}</p>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 p-4">
          {[
            {
              name: "Хлопковая рубашка",
              brand: "Zara",
              price: "5 999 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfvTElkIEoC2yTT-ztVBx2u_CPacEpcqNSgc_FoyL7-IGhftNIRUAjwWqs-f7XfJ0LlMrhgwwspcs8LMiVSivvxK2DbARHTKFsyDTudIGUBwefp1TMiHK-AYZy5bYpSQ7uie7Un_j1kfkjaxoTercOsyTWU_QOfrFkbHf1N9tJD5kJE4bY2TGfHg9JDv7jOZ98IxYNx5yZcDc7pWFP4p70hY9mc-_NEx6eaWRvQtifv6nizRu_BNsX9liSwd5qicSW8J2GCjt5lBQf",
              favorite: false,
            },
            {
              name: "Тренч оверсайз",
              brand: "COS",
              price: "17 490 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPrSzVLuNU_LyENhWvPXMW4TDe8z4Bzt7j0MPsIZ82itCrxPsyTyemX85XG605FID6dwfWISTuXUt8667cEy1xONriyBLXpuK8Dd2oCvl4uV5Z4h2vtwwNeY23RsUWoM5UKfqE40WTdWtpHtxtQpjp3szOWl67BkRPh5ZAWWoXV9F6d6pwb1k209QbW485YonSSvRFTSKj7wXWhYPAaB9A6Z7blAKdT_PAIDJSwSQDd5wHwjlUcOYayQwOeAYBB6dqf53LQ_NLHz-T",
              favorite: true,
            },
            {
              name: "Льняное платье",
              brand: "Massimo Dutti",
              price: "9 990 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6zsVpcA3TgeuQxzcSBXZr7AJ7Lzwis8JKlREmJww3xI6RpuDlh96WThp20Imf-iQAcK0u-1DqHiBJ0bSClpBE0d5JrMLP5puRDMhRvTarfuytttdRB-wOpQQg_wx7N17f7RtNYGPW6kMjpjrzz8szuhGc-BG4s4gscW4URohPOwU_AWCgtgSmOaC0mTCav50xeWngnvqoD7TYfoV6llNemWZA9v59ixJB1k9XWe5oWFZYUxv98NOnHJrXKn63iGjc41aTh0-8jnaF",
              favorite: false,
            },
            {
              name: "Шерстяной свитер",
              brand: "Uniqlo",
              price: "4 999 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCqsTGDE-kVwoV_txYPVnKNeL_q7SUo-voCszdDBekE0s4wJE1Js8Y0FS_Ltw4X6xzcAayyNPKDNfsJLFDJl9MrCrHFGHvHPGvBtoVi8kIqPrKMW-uTQAbZ1G1uXtRXewlyuPkrDlixIolN_hDRzDubRhOVTUUaxaDgA6dhd3EsO5dsNYNtjr1ftCAR6sOtqwIJImaf3ZjjzUJ4tmILaT-MYRiKn5STV6T1I8aH9sNjtRI3afAPipPpJF7hK31zqILvcJnLkMwivWZ",
              favorite: false,
            },
            {
              name: "Кеды из кожи",
              brand: "Nike",
              price: "12 499 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGL6kUxNENz6-QOo_Nm2TyhXhvolKSjK36Dpl_9DPj1-6sRqnHgXFAqDPvWbTB6cXwyvl7nApivqVNUCNBMHMd55V2GacyyesLCZqFxFb6VP_3SCCv79GMOL-V7s7-wK2qGfCCDWcEBaEOUZzF99q0YiE4trzD2UnEbSAQrIGHhHGBhVh_w09fgTat-6Uzo21YFvK9txFpeyWbw7sMiuSHJlp4BYQstxP4YANkIvsmd0N4Y5Zr2UhsYqW3NvEe8QGFP6rCVovdURR-",
              favorite: true,
            },
            {
              name: "Классические брюки",
              brand: "12 STOREEZ",
              price: "8 980 ₽",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH49C8w6IuoakthW3jvNhL46yepn6MFgVaj4XFi7WwXaqaPl225w-jfYB9NPTzqiZz88x79pipLQ_92m2wtm9E82Ml5yzL5zPLS10PSvZuTsJNKHq-ytASgRUPzZ5FSgRt0hinK1x8km9Mi16_u1UAEFGBMOuTHVlWCQxo1TgQnOQVocL2LgAlC8lidoKw_S9DyUnEuKWaxqgLln9q239kXu5rU7doFS0d1_yvxN_ZIp8vOXgcq7R0xFzxP-PMnxUaoIUMxShYjx-s",
              favorite: false,
            },
          ].map((product, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={product.img}
                  alt={product.name}
                />
                <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 text-text-light-secondary dark:text-dark-secondary backdrop-blur-sm hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    {product.favorite ? "favorite" : "favorite_border"}
                  </span>
                </button>
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-full justify-center gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 text-xs font-bold text-text-light-primary dark:text-dark-primary">
                    Быстрый просмотр
                  </button>
                </div>
              </div>
              <div className="flex flex-col p-4">
                <p className="text-sm font-bold text-text-light-primary dark:text-dark-primary">{product.name}</p>
                <p className="text-xs text-text-light-secondary dark:text-dark-secondary mb-2">{product.brand}</p>
                <p className="text-sm font-bold text-text-light-primary dark:text-dark-primary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-gray-200/80 dark:bg-gray-700/80 text-text-light dark:text-dark-primary gap-2 text-sm font-bold tracking-wide min-w-0 px-6 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Показать еще
          </button>
        </div>
      </main>
    </div>
  );
}
