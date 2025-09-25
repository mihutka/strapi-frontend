"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [heroTitle, setHeroTitle] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:1337/api/heroes")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length > 0) setHeroTitle(data.data[0].title);
        else setHeroTitle("No title found");
      })
      .catch(() => setHeroTitle("Error loading title"));
  }, []);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <a className="text-2xl font-bold" href="#">
            Ashley.
          </a>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Home
              </a>
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Portfolio
              </a>
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Services
              </a>
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Contact
              </a>
              <a className="hover:text-primary transition-colors duration-300" href="#">
                Blog
              </a>
            </nav>
            <button className="bg-primary text-black px-4 py-2 rounded-full font-semibold flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
              <span>Let's talk</span>
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-background-dark text-text-dark relative h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/4 h-1/4">
          <img
            alt="Geometric polygon shape"
            className="w-full h-full object-contain opacity-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNLBh7AzAZVTtWwd1nBg13p34jCaVaoKwEyELAiuipuC_Rdv3ro_z3S9CPL4GNqXXPW1ADAT7r99B9vtP5X8AA6YzhXwx7zdStgVmnh1YMgOk6XRH_vDVYZBNzUdTeCLAd7WUcYpsnOzzuR8sEicob_hANEsMYhP9QxZO_wWHFLg94jQn5rxtjPzLQKXDITDeKlK8R-gPpstJOfxy_jHZwji_Et3lwVtM0kfvz4Yx7k6HKNpa8a5ozQIHgcQXFt2Wcd9aUaO_mb4Lj"
          />
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="max-w-2xl">
            {/* Заголовок берём из Strapi */}
            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fadeInUp">
              {heroTitle}
            </h1>

            <p
              className="mt-4 text-lg text-gray-300 animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              Welcome to our world of creative excellence and innovative
              solutions. We're a team of passionate designers, developers, and
              strategists dedicated to crafting unique brand experiences.
            </p>
            <div
              className="mt-8 flex items-center space-x-6 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="bg-primary text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                WHAT WE DO
                <span className="material-icons">arrow_forward</span>
              </button>
              <button className="font-semibold flex items-center gap-2 group transform hover:scale-105 transition-transform duration-300">
                VIEW WORKS
                <span className="material-icons transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="relative w-24 h-24">
            <svg
              className="w-full h-full animate-spin"
              style={{ animationDuration: "10s" }}
              viewBox="0 0 100 100"
            >
              <path
                d="M 50, 50 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="2"
              />
            </svg>
            <span className="material-icons absolute inset-0 flex items-center justify-center text-primary text-4xl">
              settings
            </span>
          </div>
        </div>
      </section>

      {/* DISCOVER OUR STUDIO */}
      <section className="py-24 bg-background-light dark:bg-zinc-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold">Discover Our Studio</h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Our studio is a hub of creativity where ideas are transformed into
              stunning realities. We thrive on collaboration and innovation,
              consistently pushing the boundaries of design to deliver
              exceptional results. Our team of experts brings a wealth of
              experience and a diverse range of skills, ensuring every project
              is handled with precision and a fresh perspective.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <img
                alt="Avatar of Passionately Creating"
                className="w-16 h-16 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlwzSbfu7eD10A6oJ8YxyCTABK-G7wLMgxwlYKiPgT9iU95MPHLkO_JLul1oF4vg3B5KLgQXf0LQBtMTC8KeDIDvaVreEAnT9gWo7GpII8w7rdx6gM374EG87v-pxvJwOhTMQ74EtpHuJIciWmwy5_cXDsQcSNqU1LQHCu1AXaUFejBnKE0txxg5b6TRH_JOUni8k3AepCizK2p4lPzusLb27X2DMMHxJvJpEQjn7nd-n9zYn3xd0jNnYBUtmsEO7rKeKZA3uxpxwg"
              />
              <div>
                <p className="font-semibold">Passionately Creating</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Design Lead
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              alt="A designer's workspace"
              className="rounded-lg shadow-lg w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIjbIyoA0CEPf9fazJTZwY5wjCt0Ca0O-BZbJUoL4UJxDtE82szdAocA68vdffhNahyJPwaMM5Q7ROhXG4lpDgyFKXC5uawH1lGP1PGy4oNWm8S0FDPYln3fZdFnkO0BfpiVjO5twlBlyW3YbGJVjCG2q0l8Oclfc1s9noHm2faT7ZDUQFCB6WxD-9nxqO9WW3idOxwMJ9pO9ajTzXffiQwW7f7Wzz5X_gnFe9mtAWNKFC5AKmbX9-ook-Hyu35FcENpzQ5SMltKPM"
            />
            <div className="absolute -bottom-8 -left-8 bg-background-light dark:bg-background-dark p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm">
                "Professionals focused on helping your brand grow and succeed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE IDEAS */}
      <section className="py-24 bg-background-dark text-text-dark relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end">
            <h2 className="text-5xl font-bold max-w-md">
              Unique Ideas For Your Business.
            </h2>
            <button className="bg-primary text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
              WHAT WE DO
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-primary pt-6">
              <h3 className="text-xl font-semibold">
                Branding and Identity Design
              </h3>
            </div>
            <div className="border-t-2 border-primary pt-6">
              <h3 className="text-xl font-semibold">
                Website Design and Development
              </h3>
            </div>
            <div className="border-t-2 border-primary pt-6">
              <h3 className="text-xl font-semibold">
                Advertising and Marketing Campaigns
              </h3>
            </div>
            <div className="border-t-2 border-primary pt-6">
              <h3 className="text-xl font-semibold">
                Creative and Cultural Development
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="py-24 bg-background-light dark:bg-zinc-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold">Meet Our Team</h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              We are a close-knit team of creative thinkers, problem solvers,
              and tech enthusiasts. We bring a diverse range of skills and
              backgrounds to the table, allowing us to tackle any challenge with
              a fresh perspective. Our collaborative approach ensures we deliver
              comprehensive and innovative solutions that exceed expectations.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <button className="bg-primary text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
                VIEW ALL
                <span className="material-icons">arrow_forward</span>
              </button>
              <p className="font-semibold">
                delivering <span className="text-primary">exceptional</span> results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Team member"
              className="rounded-lg shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcGZ1FqmxDGfRJKosujxmgdT_-29e0AfiQrtpwc13Q762VaTDeSRvzbIMv4M6kOfgrcPlG59MOTqmMUiY7xrUMO5rn9T2H41LK70yZLD517ooZRzwHKeXY9VzdTL1LdpyeO83f8nQCJDfiEiLERrwDU3aOG9uCP7B8lty8tp5Jp0yCP5OvCw-3m3O6uKm2sgVztc_dSLCUnBY5yXBpNuWP4HE1AoU1EuZwqIRbM4V1MMQh_0gOUM_rgTtNgHt5ZDKtHgMgAOSXoJuP"
            />
            <img
              alt="Team member"
              className="rounded-lg shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9ctmmIvs1QJaWAzgba09THA_Nv_IGrDkpl8Rsjf82xIGQ3Qtw6E4DFogsyhivs7imn-HhXnsvlaUGX1gqabfxD9gh1Al5jxUHJr7jkoIze5nqjEQJx5QG6nso3HUg-9lGLIBoyVOnjw2EY1xuJ7MgtH-UqZxjLNbhWchzNkwYmVrPrzzNVattEgDrTm4VWз7Wkba3kxmREw6PPNygDGhl-l3SqRSbq0eHCRsXRhEwnQgfaY3QvdB40xfKxRMumJUrREeLvN9RJ0P"
            />
            <img
              alt="Team member"
              className="rounded-lg shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl7xZfLSFWs1зBr50bx5X5yD75rJPQDaPDMRj9jraAqURHmQ7mdYYg8oi_Cw1YaqQeAD5VdtdbXABsooWOswiQYT69PoK1fydXooclwbktwsxt1QKfOBYyqvrJq0qP_QqOeaCKLCCn20ixOCOZU57kw7QDfbtg0QxI8C4YhkfZkcRT63mQRqwxJA0VyZpriXWi_Wz4acR1Dbtbn26OlsXVISqYjoZfpDC_hb69pK4QE4YsOEPw_bqeFQO24VU0h2HfZ4GJwBmWBLVc"
            />
            <img
              alt="Team member"
              className="rounded-lg shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH7QFXZz8fVvBk5OH2owCZQKVtFj_ds8KKzJpHeB3QbNeOtJEISVBEJePrAAsCyusQ1AJU-Y3S7OtpCPImMEk5NVWkY_hxjWS85WP7xCFcFWlBj4YxOGFLTfZI3fGRU8iU_SHKaJsqn1RTVff1cef9oYHoxcOZnCFxpjlkItVF2jhwOJXvzQIvuYHVrpGX_ED1hllXatmLpB4bwszB_EuEnCC65FjspLGFjZkisljDRKA81uJCN4w_lrLqCWMf6YuS8WcY9XDKNtiY"
            />
          </div>
        </div>
      </section>

      {/* CUSTOMER VOICES */}
      <section className="py-24 bg-zinc-100 dark:bg-background-dark">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Customer reviews are a valuable source
          </p>
          <h2 className="text-5xl font-bold mt-2">
            Customer Voices: Hear What They Say!
          </h2>
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              <span className="material-icons">arrow_back</span>
            </button>
            <img
              alt="Customer avatar"
              className="w-12 h-12 rounded-full opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADRKRMsU3Zzi9lJxXKK_8Ja3_YLLWW9cSiXHs2Ti1-pD12sDLyZR08JbpOa85Vc38jhzxQevckcSGx8jr-VYDTkjnFBluWDlAs9hzJ9D581BuvLp7Xckw0n2K7feW2TJuegTJWYBUv3ncdaRvGIjN5Kv15Cf-SEP6FKTLaxAN2PEGq6imYSDP_eK_HwISusB35_yPwl11QFa69mLjmcA4QPo-TwT7payWdqjdOuzEW4C-zjEqSggD-41vYAvr_Qxf60oo2wYkdUACS"
            />
            <img
              alt="Customer avatar"
              className="w-16 h-16 rounded-full opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACV9PX2xAzojc9k22udq6BejblRDqgEcqRuPbM7mJ_SFm5TJdwf9L0mKTF2xTgvjFMxJnY5mykPdWlfHn_p5-JKMK7qwIONY4QbPGDQaq9XQVI_kIQYCSUQjrtSJtLO1FKYd6QovfH1X6jGjD0bc5i7gOqQPvNj88rkJALbPZ8i_gP_3yYWZwjPE2gx3UZNuakN_7j1GlnDIqvhCKEbh3mZwk2Tgh5bZa7J_mImzb-LK5U_YJ8LWCvfaOc4JAR63G3bXAXOXzaZktr"
            />
            <div className="text-center">
              <img
                alt="Customer avatar Sarah Newman"
                className="w-20 h-20 rounded-full border-2 border-primary mx-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5SPdVtbFa32RZtw1iI2U28jevt21MNfztnjfq9cq16KgzSGavA_iIsyO5Ug2kj6P-8EkM7xyrMfC24jEi1-1F2TNjwi3M-98p4ABDC_bN4hmVG9hpmvG7Ysl70uK1LuF9bC09ixлXbls8mjy-Xe_qTU4C__f_M_vGE-AZjsVOjNJPt_vkmZjYVuofI2fUKrfoxF6X5VTaHFainmIBkoWMooBKzirGDYgiYOASt_6gTKjzSv89IhW9A7C6yo33ZycumpZubprX0Bch"
              />
              <p className="font-semibold mt-2">Sarah Newman</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ceo at Company
              </p>
            </div>
            <img
              alt="Customer avatar"
              className="w-16 h-16 rounded-full opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXaotdfhF_dmdlDKilttpxOsQjn8hQQx-WwK6781tqujJDSLG17msiqfHofgr3os-dB-dYv-bS-exAqnorIgY5lAutPUxFXTCЗ6jbAWvyw-kssciksNQ8kFBytuVVp5spxryfc8Dox7-jt05MqpgE-XURЗB4EsIruG2i_EXzFHXoO3GQqbNZlvZd3qCWNF8Dai5V5E3TAFe6vHMCDE8fd7wx7gTpOXtrKOjUNWyE30Zz1S8Sr_3zqEj6PKMOba7QfuZ1_I-nyAbLzk"
            />
            <img
              alt="Customer avatar"
              className="w-12 h-12 rounded-full opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhM0pnNmзGHEgXYMxhtdb95zSTEcrbIqKkxvNXHtjzNry0Ja9PVVgkVYk_1K8tRGEZMlMqrmG3l0FnWj6uA3cmv3gybkM2QA_Pr7Zlt2jMwkCPнBEezAgIjulqq2t3eYHAH8OHOAdgA6nUj9cD5h4gdPL2H4HTmiY-A0Aa6CQxefk5mgFyzk1g-9lcql0n_e426IDzRcbo0TDqsSeЗ_haEuElBzCPhtYp9Qn7w5zO1U9yGJeV3MEQKRBp0fCr9CiZOnZvNmaVwp2o"
            />
            <button className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            "This creative agency stands out with their exceptional talent. The
            team's deep understanding of branding and design transformed our
            vision into a stunning reality. From their strategic insights to
            their meticulous attention to detail, they consistently deliver
            visually stunning and impactful results."
          </p>
        </div>
      </section>

      {/* POPULAR PUBLICATIONS */}
      <section className="py-24 bg-background-light dark:bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold">Popular Publications</h2>
            <a className="font-semibold flex items-center gap-2 group" href="#">
              VIEW ALL
              <span className="material-icons transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <img
                alt="Desk with design tools"
                className="w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmJb-pU2EYK4d-KwuFsMXJc_xnHolRELAYWXnCNZ4M8reEbFVT_sWRjDGt1LQ8V6ЗrywclNPjgRg1F5ha7Jz6QlBGdRohIbK6vJK7MBvb60SsBe1EZ0tqIPUJKSsBXJX8nc6cSwOYxPLJqx8t0Ha-QQaRBkZVUr3Ii_-hbcu3KhwnTW5pYTdpC4E68z1Ks-T2mtBLQLvUF2zr4eWflGGTHzsgOCVUDVJDOHUY3g__EtBXLn-zCza1L1iiDMZLYx2V6CdH6vQXRyI7"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  How to Become a Graphic Designer in 10 Simple Steps
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Unlock your creative potential with our comprehensive guide.
                  From mastering...
                </p>
                <a
                  className="mt-4 inline-flex items-center font-semibold text-primary"
                  href="#"
                >
                  READ MORE
                  <span className="material-icons ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <img
                alt="Person working on laptop"
                className="w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvswCun9LX4Pxt5UJn89npEwSMhzЗLMSPVFLOFvYnm4AkFKpPHDxxEB8CqRniZyd0bVeqptxhDglEuF4QpZlyZuq-2rMUNbHzPR4sOzLN9pvetztnY2Ci9NOIe2osJvYriewkqchjmQANQZwo-Ym2apygYeCCoEpXgWKdg_PEV9KkDNVC4TSUFkNlGPqVPUn5zrS51m1jg0VIVQ5_R6DkDBCX3QSu7tvo0PaeJxiGTuzyI3vn1_dA7i1xoJtUXcO30k8g9kJPhOZ1i"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  15 Best Graphic Design Online and Offline Courses
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Discover top-rated courses to advance your skills, curated by
                  industry experts to help...
                </p>
                <a
                  className="mt-4 inline-flex items-center font-semibold text-primary"
                  href="#"
                >
                  READ MORE
                  <span className="material-icons ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-3 h-3 bg-primary rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background-dark text-text-dark py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Ashley.</h3>
              <div className="mt-4 flex space-x-4">
                <a className="hover:text-primary" href="#">
                  Be.
                </a>
                <a className="hover:text-primary" href="#">
                  In
                </a>
                <a className="hover:text-primary" href="#">
                  <span className="material-icons text-lg">public</span>
                </a>
                <a className="hover:text-primary" href="#">
                  Fb
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Navigation</h4>
              <ul>
                <li className="mb-2">
                  <a className="hover:text-primary" href="#">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-primary" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-primary" href="#">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-primary" href="#">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a className="hover:text-primary" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <p>Need more information? Let's get in touch.</p>
              <button className="mt-4 bg-primary text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                CONTACT US
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Location</h4>
              <p className="mb-2">
                <strong>United States</strong>
                <br />
                123 Creative Ave, Suite 400
                <br />
                New York, NY 10001
              </p>
              <p>
                <strong>Germany</strong>
                <br />
                Kreativstrasse 56, 7. Stock
                <br />
                Berlin, 10115
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex justify-between items-center text-sm text-gray-400">
            <p>© Copyright 2023 - All Rights Reserved</p>
            <p>Privacy Policy | Terms and conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
