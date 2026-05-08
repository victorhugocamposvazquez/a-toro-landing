"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";

const A = "/assets/landing";

type Service = {
  icon: "dumbbell" | "apple" | "calendar";
  title: string;
  badge: string;
  body: React.ReactNode;
  button: string;
};

type Gym = {
  logo: string;
  logoClass: string;
  title: string;
  body: string;
};

type Challenge = {
  image: string;
  title: string;
  badge: React.ReactNode;
  body: React.ReactNode;
  href: string;
};

const services: Service[] = [
  {
    icon: "dumbbell",
    title: "Plan de entrenamiento",
    badge: "1 semana gratis",
    body: (
      <>
        <p>Empieza desde 0 con una rutina construida</p>
        <p>para ti y fácil de seguir.</p>
      </>
    ),
    button: "Empieza ahora gratis",
  },
  {
    icon: "apple",
    title: "Guía nutricional",
    badge: "1 semana gratis",
    body: "Aprende a come, cuando y porqué sin, con los mejores planes para conseguir tu objetivo.",
    button: "Empieza ahora gratis",
  },
  {
    icon: "calendar",
    title: "Reto de 2 semanas",
    badge: "Gratis",
    body: "Únete a nuestro reto semanal de 2 semanas totalmente gratis desde nuestra app.",
    button: "Participa ahora gratis",
  },
];

const gyms: Gym[] = [
  {
    logo: `${A}/gym-fitness-park.png`,
    logoClass: "h-[46px] w-[168px] object-contain",
    title: "Entrenando en Fitness Park",
    body: "Entrenos completos funcionales de las maquinas de Fitness park a nivel nacional.",
  },
  {
    logo: `${A}/gym-basic-fit.png`,
    logoClass: "h-[44px] w-[152px] object-contain",
    title: "Entrenando en Basic-Fit",
    body: "Entrenos completos funcionales de las maquinas de Basic-Fit a nivel nacional.",
  },
  {
    logo: `${A}/gym-gofit.png`,
    logoClass: "h-[48px] w-[137px] object-contain",
    title: "Entrenando en Gofit",
    body: "Entrenos completos funcionales de las maquinas de gofit  a nivel nacional.",
  },
  {
    logo: `${A}/gym-metropolitan.svg`,
    logoClass: "h-[64px] w-[78px] object-contain",
    title: "Entrenando en Metropolitan",
    body: "Entrenos completos funcionales de las maquinas de Metropolitan  a nivel nacional.",
  },
];

const challenges: Challenge[] = [
  {
    image: `${A}/reto-abdominales.png`,
    title: "Abdominales en casa  con Almohadas",
    badge: "Reto de 7 días de abdominales",
    body: "Fortalece tus abdominales en casa con una almohada siguiendo mi reto de 7 días.",
    href: "/retos/abdominales",
  },
  {
    image: `${A}/reto-rompepiernas.png`,
    title: "Reto Rompepiernas ",
    badge: "Reto de 2 semanas para tener estas piernas",
    body: (
      <>
        <p>Consigue unas piernas fuertes y estilizadas en el</p>
        <p>reto rompepiernas del gymnasio de 20 días </p>
      </>
    ),
    href: "/retos/rompepiernas",
  },
  {
    image: `${A}/reto-culo.png`,
    title: "Reto Culo grande",
    badge: (
      <>
        <p>Reto de 10 días para conseguir un culo</p>
        <p>grande.</p>
      </>
    ),
    body: "Sigue mi reto de glúteos para fortalecer el culo en tan solo 10 días.",
    href: "/retos/culo-grande",
  },
  {
    image: `${A}/reto-biceps.png`,
    title: "Reto biceps de popelle ",
    badge: (
      <>
        <p>Reto de 4 semanas para conseguir los mejores</p>
        <p>biceps</p>
      </>
    ),
    body: "Si quieres tener biceps grandes, sigueme en este reto y conviértete en popelle.",
    href: "/retos/biceps",
  },
];

export function FigmaWebClone() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const syncScale = () => {
      setScale(Math.min(1, window.innerWidth / 1440));
    };

    syncScale();
    window.addEventListener("resize", syncScale);
    return () => window.removeEventListener("resize", syncScale);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white">
      <div
        className="relative mx-auto overflow-visible"
        style={{
          width: 1440 * scale,
          height: 4909 * scale,
        }}
      >
        <div
          className="relative h-[4909px] w-[1440px] origin-top-left bg-white text-[#383737]"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <Hero />
          <Services />
          <Transformations />
          <AppFitness />
          <Gyms />
          <Challenges />
          <SocialFeed />
          <Footer />
        </div>
      </div>
    </main>
  );
}

function Hero() {
  return (
    <section className="absolute left-0 top-0 h-[686px] w-[1440px] overflow-visible">
      <div className="absolute left-0 top-0 h-[686px] w-[1441px] overflow-hidden">
        <img
          alt=""
          src={`${A}/bg-hero.png`}
          className="absolute left-0 top-[-20.09%] h-[140.04%] w-full max-w-none"
        />
      </div>

      <h1 className="absolute left-[94px] top-[154px] text-[60px] font-semibold leading-normal tracking-[0.6px]">
        Consigue tu objetivo
      </h1>
      <p className="absolute left-[94px] top-[210px] text-[50px] font-medium leading-normal tracking-[0.5px]">
        Transforma tu cuerpo y tu vida
      </p>
      <div className="absolute left-[94px] top-[294px] text-[24px] leading-normal tracking-[0.24px]">
        <p>Consigue lo que siempre has deseado, de forma clara y transparente,</p>
        <p>sin perder el tiempo, entrenamientos y nutrición para tu forma de vida.</p>
      </div>

      <div className="absolute left-[96px] top-[414px] flex flex-col gap-7 overflow-hidden rounded-[20px] bg-[#f5f3f2] p-[30px] shadow-[0_2px_17px_rgba(0,0,0,0.16)]">
        <div className="flex w-[609px] flex-col gap-2">
          <p className="text-[21px] font-semibold leading-normal tracking-[0.21px] text-[#1b1b1b]">
            Únete a la mejor APP de entrenos dirigidos.{" "}
          </p>
          <div className="text-[19px] leading-normal tracking-[0.19px]">
            <p>Descubre las bases reales de entrenamientos dirigidos, explicaciones</p>
            <p>al detalle y la nutrición sin humo ni falsas promesas.</p>
          </div>
        </div>
        <div className="flex items-center gap-[25px]">
          <Link
            href="/#app"
            className="flex shrink-0 items-center justify-center rounded-[40px] bg-brand px-10 py-5 text-[22px] leading-normal tracking-[0.22px] text-white"
          >
            ¡ Pruébala totalmente gratis !{" "}
          </Link>
          <div className="flex w-[203px] flex-col gap-[7px]">
            <img alt="" src={`${A}/estrellas.svg`} className="h-[23px] w-[152px]" />
            <p className="text-[19px] leading-normal tracking-[0.19px] text-[#273766]">
              + 200 personas la usan
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[864px] top-[128px] h-[574px] w-[561px] overflow-hidden">
        <img
          alt="Abraham Toro"
          src={`${A}/abraham-portada.png`}
          className="absolute left-0 top-[-14.33%] h-[157.06%] w-[107.13%] max-w-none"
        />
      </div>

      <Link href="/#app" aria-label="Ver vídeo de presentación">
        <div className="absolute left-[995px] top-[627px] h-[290px] w-[401px] overflow-hidden rounded-[50px] border-[6px] border-white">
          <img
            alt=""
            src={`${A}/video-portatil.png`}
            className="absolute left-0 top-[-14.13%] h-[138.33%] w-full max-w-none"
          />
        </div>
        <img
          alt=""
          src={`${A}/icono-play.svg`}
          className="absolute left-[1132px] top-[722px] h-[95px] w-[125px]"
        />
      </Link>

      <Header />
    </section>
  );
}

function Header() {
  return (
    <header className="absolute left-1/2 top-0 flex w-[1440px] -translate-x-1/2 items-center justify-between bg-white/70 px-[96px] py-[17px]">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-[63px] w-[97px]">
          <img alt="AT" src={`${A}/logotipo-at.svg`} className="absolute inset-0 h-full w-full" />
        </div>
        <div className="flex items-center gap-[13px]">
          <img alt="Abraham" src={`${A}/texto-abraham.svg`} className="h-[15px] w-[125px]" />
          <img alt="Toro" src={`${A}/texto-toro.svg`} className="h-[15px] w-[70px]" />
        </div>
      </Link>

      <div className="flex items-center gap-[29px]">
        <nav className="flex items-center gap-[22px] whitespace-nowrap text-[20px] leading-normal tracking-[0.2px] text-[#2c2b2d]">
          <Link href="/#servicios">Entrenamientos online</Link>
          <Link href="/#transformaciones">Transformaciones</Link>
          <Link href="/#retos">Retos</Link>
          <Link href="/#app">APP</Link>
          <Link href="/#asesoria">Tu asesoría</Link>
        </nav>
        <Link
          href="/#asesoria"
          className="flex shrink-0 items-center justify-center rounded-[40px] bg-brand px-5 py-2.5 text-[20px] font-medium leading-normal tracking-[0.2px] text-white"
        >
          ¡ Transfórmate !
        </Link>
      </div>
    </header>
  );
}

function Services() {
  return (
    <section
      id="servicios"
      className="absolute left-0 top-[686px] h-[550px] w-[1440px] bg-gradient-to-b from-[#f6f1f5] to-white"
    >
      <div className="absolute left-[394px] top-[76px] flex flex-col gap-1 p-2.5">
        <h2 className="text-[40px] font-semibold leading-normal tracking-[0.4px]">
          Servicios online personalizados
        </h2>
        <div className="text-[24px] leading-normal tracking-[0.24px] text-[#717171]">
          <p>Descubre todas las ventajas de mis programas online</p>
          <p>adaptados a todo tipo de objetivos.</p>
        </div>
      </div>

      <div className="absolute left-[98px] top-[274px] flex w-[1243px] items-center justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const width = index === 0 ? "w-[394px]" : "w-[346px]";

  return (
    <article
      className={`${width} flex min-h-[243px] flex-col gap-3 rounded-[30px] bg-white p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-[60px] shrink-0 overflow-hidden">
          <ServiceIcon icon={service.icon} />
        </div>
        <div className="flex flex-col gap-0.5 whitespace-nowrap font-semibold leading-normal">
          <h3 className="text-[19px] tracking-[0.19px] text-black">{service.title}</h3>
          <p className="text-[18px] tracking-[0.18px] text-brand">{service.badge}</p>
        </div>
      </div>
      <div className="min-h-[51px] text-[14px] leading-normal tracking-[0.14px] text-black">
        {service.body}
      </div>
      <Link
        href={index === 2 ? "/#retos" : "/#app"}
        className="mt-auto flex w-full items-center justify-center rounded-[10px] bg-brand px-10 py-3.5 text-[16px] tracking-[0.16px] text-white"
      >
        <span className="font-bold">{service.button}</span>
        <span>{`  ->`}</span>
      </Link>
    </article>
  );
}

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const position = {
    calendar: "left-[-12px] top-[-46px]",
    apple: "left-[-88px] top-[-44px]",
    dumbbell: "left-[-167px] top-[-44px]",
  }[icon];

  return (
    <span className="relative block h-[60px] w-[78px] overflow-hidden">
      <img
        alt=""
        src={`${A}/iconos-servicios.png`}
        className={`absolute h-[156px] w-[246px] max-w-none ${position}`}
      />
    </span>
  );
}

function Transformations() {
  return (
    <section id="transformaciones" className="absolute left-0 top-[1240px] h-[599px] w-[1440px] bg-[#ebebeb]">
      <TitleBlock
        className="left-[477px] top-[36px] items-start"
        title="Increíbles transformaciones"
        subtitle="Estos son algunos de los clientes que han logrado resultados con mis programas a través de la app."
        subtitleClassName="w-[764px]"
      />

      <ImageCrop src={`${A}/chica-antes-despues.png`} className="left-[96px] top-[204px] h-[271px] w-[311px] rounded-[20px]" imgClassName="h-full w-[121.29%] left-[-13.25%] top-0" />
      <ImageCrop src={`${A}/chico-antes-despues.png`} className="left-[428px] top-[204px] h-[271px] w-[289px] rounded-[20px]" imgClassName="h-[100.11%] w-[128.9%] left-[-19.4%] top-[-0.06%]" />

      <Label left={141} top={510} muted>Antes</Label>
      <Label left={282} top={510}>Después</Label>
      <Label left={454} top={510} muted>Antes</Label>
      <Label left={600} top={510}>Después</Label>

      <div className="absolute left-[768px] top-[210px] rounded-[23px] bg-[#f5f3f2] p-[30px] shadow-[0_2px_17px_rgba(0,0,0,0.16)]">
        <div className="flex w-[249px] flex-col gap-[25px]">
          <img alt="" src={`${A}/estrellas.svg`} className="h-[23px] w-[152px]" />
          <div className="flex w-[239px] flex-col gap-2 leading-normal">
            <p className="text-[17px] tracking-[0.17px] text-[#8b8b8b]">
              “Abraham me ayudó a cambiar mi vida, a conseguir el cambio que siempre había deseado, y aprender a llevar una vida saludable y sostenida.”
            </p>
            <p className="text-[21px] font-semibold tracking-[0.21px] text-[#1b1b1b]">
              Natalia López
            </p>
          </div>
        </div>
      </div>

      <ImageCrop src={`${A}/app-mockup.png`} className="left-[1072px] top-[191px] h-[378px] w-[270px] rounded-[20px] border-[11px] border-white/70" imgClassName="h-[107.16%] w-[100.1%] left-0 top-[-7.16%]" />

      <Link
        href="/#app"
        className="absolute left-[782px] top-[504px] flex h-[50px] w-[259px] items-center justify-center rounded-[40px] border-[11px] border-[#efefef] bg-brand px-[30px] py-4 text-[18px] font-semibold tracking-[0.18px] text-white backdrop-blur-[42px]"
      >
        ¡ Comienza la tuya gratis !
      </Link>
    </section>
  );
}

function AppFitness() {
  return (
    <section id="app" className="absolute left-[-10px] top-[1839px] h-[656px] w-[1440px] bg-white">
      <TitleBlock
        className="left-[374px] top-[33px] items-center"
        title={<><span className="font-bold text-brand">App fitness:</span><span> tu progreso, en tus manos</span></>}
        subtitle="Accede a la herramienta que te acompañará en cada entrenamiento"
      />

      <div className="absolute left-[70px] top-[203px] h-[348px] w-[324px] overflow-hidden">
        <img alt="" src={`${A}/moviles-mockup.png`} className="absolute left-[-37.28%] top-[-6.23%] h-[109.99%] w-[177.26%] max-w-none" />
      </div>

      <div className="absolute left-[375px] top-[213px] flex w-[970px] flex-col items-center justify-center gap-8 rounded-[30px] bg-white p-[30px] shadow-[9px_6px_8.5px_rgba(0,0,0,0.15)]">
        <div className="flex items-center gap-[19px]">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="flex items-center gap-[19px]">
              <Feature />
              {index < 3 ? <Divider /> : null}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <StoreButton type="apple" />
          <StoreButton type="google" />
        </div>
      </div>
    </section>
  );
}

function Feature() {
  return (
    <div className="flex w-[174px] flex-col items-center gap-3 rounded-[30px]">
      <div className="flex flex-col items-center gap-1.5">
        <img alt="" src={`${A}/icono-feature.png`} className="h-[45px] w-[46px] object-contain" />
        <p className="whitespace-nowrap text-[16px] font-semibold tracking-[0.16px] text-black">
          Seguimiento del progreso
        </p>
      </div>
      <p className="h-[51px] text-center text-[12px] leading-normal tracking-[0.12px] text-black">
        Sigue tu proceso de cambio semanal a semana y previsualiza los resultados obtenidos.{" "}
      </p>
    </div>
  );
}

function Divider() {
  return <img alt="" src={`${A}/divider.svg`} className="h-[135px] w-px rotate-90" />;
}

function StoreButton({ type }: { type: "apple" | "google" }) {
  const isApple = type === "apple";
  return (
    <Link
      href={isApple ? "https://apps.apple.com" : "https://play.google.com"}
      target="_blank"
      rel="noopener noreferrer"
      className={`${isApple ? "w-[310px]" : "h-[89px]"} flex shrink-0 items-center justify-center gap-5 rounded-[10px] bg-black px-4 py-[17px] text-white`}
    >
      <img
        alt=""
        src={isApple ? `${A}/apple-mask.png` : `${A}/google-play.png`}
        className={isApple ? "h-[58px] w-[52px] object-contain" : "h-[49px] w-[62px] object-cover"}
      />
      <span className="flex flex-col gap-[5px] whitespace-nowrap leading-normal">
        <span className="text-[14px] tracking-[0.14px]">Compatible con dispositivos</span>
        <span className="text-[18px] font-bold tracking-[0.18px]">
          {isApple ? "Apple" : "Google Play"}
        </span>
      </span>
    </Link>
  );
}

function Gyms() {
  return (
    <section id="gimnasios" className="absolute left-0 top-[2460px] h-[676px] w-[1440px] bg-[#ebebeb]">
      <TitleBlock
        className="left-[276px] top-[36px] items-center"
        title="Entrenos en los mejores Gimnasios de España"
        subtitle="Descubre mis rutinas en los gimnasios que visito podrás ver los entrenos creados por Abraham Toro."
      />
      <div className="absolute left-1/2 top-[190px] flex -translate-x-1/2 items-center gap-[30px]">
        {gyms.map((gym) => (
          <GymCard key={gym.title} gym={gym} />
        ))}
      </div>
      <div id="asesoria" className="absolute left-[175px] top-[477px] flex w-[1090px] scroll-mt-24 flex-col items-center justify-center gap-[21px] rounded-[30px] bg-[#161616] px-[30px] py-5 text-center shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]">
        <div className="flex w-full flex-col items-center gap-2">
          <p className="text-[17px] font-semibold tracking-[0.17px] text-white">
            ¿ Quieres colaborar con Abraham Toro?
          </p>
          <p className="text-[12px] tracking-[0.12px] text-[#cdcdcd]">
            ¿Tienes un ginmasio y te interesaría aparecer aquí y tus clientes tengan visibilidad con mis entrenos y rutinas con toda tu maquinaria?
          </p>
        </div>
        <Link href="mailto:info@abrahamtoro.com" className="flex items-center justify-center rounded-[10px] bg-brand px-10 py-2 text-[16px] tracking-[0.16px] text-white">
          <span className="font-bold">{`Hablamos `}</span>
          <span>{`->`}</span>
        </Link>
      </div>
    </section>
  );
}

function GymCard({ gym }: { gym: Gym }) {
  return (
    <article className="relative flex h-[243px] w-[250px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[30px] p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 rounded-[30px] bg-white" />
      <img alt="" src={`${A}/bg-card-gym.png`} className="absolute left-[-1.7%] top-[29.15%] h-[70.85%] w-[103.3%] max-w-none" />
      <div className="relative flex flex-col items-center gap-3">
        <img alt="" src={gym.logo} className={gym.logoClass} />
        <div className="flex flex-col items-center gap-2">
          <p className="whitespace-nowrap text-[16px] font-semibold tracking-[0.16px]">{gym.title}</p>
          <p className="h-[51px] text-center text-[12px] leading-normal tracking-[0.12px] text-[#606060]">
            {gym.body}
          </p>
        </div>
        <Link href="/#app" className="flex shrink-0 items-center justify-center rounded-[10px] bg-brand px-10 py-3.5 text-[16px] tracking-[0.16px] text-white">
          <span className="font-bold">Entrenos</span>
          <span>{`->`}</span>
        </Link>
      </div>
    </article>
  );
}

function Challenges() {
  return (
    <section id="retos" className="absolute left-0 top-[3137px] h-[676px] w-[1440px] bg-white">
      <TitleBlock
        className="left-[307px] top-[36px] items-center"
        title="Retos disponibles para cambiar tu físico"
        subtitle="Usa mis retos para conseguir objetivos concretos, para personas que necesiten metas concretas."
      />

      <div className="absolute left-[100px] top-[180px] grid w-[1234px] grid-cols-2 gap-x-5 gap-y-4">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} challenge={challenge} />
        ))}
      </div>

      <Link href="/retos" className="absolute left-[602px] top-[685px] flex items-center justify-center rounded-[10px] bg-[#161616] px-10 py-[11px] text-[14px] font-bold tracking-[0.14px] text-white">
        {`Ver todos mis retos  💪`}
      </Link>
    </section>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <article className="flex h-[224px] gap-[23px] rounded-[30px] bg-white p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]">
      <img alt="" src={challenge.image} className="h-[153px] w-[198px] shrink-0 object-cover" />
      <div className="flex w-[297px] shrink-0 flex-col gap-[11px]">
        <div className="flex h-[114px] flex-col gap-3">
          <div className="flex h-[46px] flex-col">
            <p className="whitespace-pre text-[16px] font-semibold tracking-[0.16px] text-black">
              {challenge.title}
            </p>
            <div className="text-[14px] font-medium leading-normal tracking-[0.14px] text-brand">
              {challenge.badge}
            </div>
          </div>
          <div className="text-[12px] leading-normal tracking-[0.12px] text-black">
            {challenge.body}
          </div>
        </div>
        <Link href={challenge.href} className="flex w-fit items-center justify-center rounded-[10px] bg-brand px-10 py-[11px] text-[14px] tracking-[0.14px] text-white">
          <span className="font-bold">Empieza ahora gratis</span>
          <span>{`  ->`}</span>
        </Link>
      </div>
    </article>
  );
}

function SocialFeed() {
  return (
    <section id="contenido" className="absolute left-0 top-[3904px] h-[1005px] w-[1440px]" style={{ backgroundImage: "linear-gradient(-0.3856deg, #c9a9a9 0.77048%, #e9e9e9 52.184%, #ffffff 98.459%)" }}>
      <div className="absolute left-[360px] top-4 flex flex-col items-center gap-1 p-2.5">
        <h2 className="text-[40px] font-semibold tracking-[0.4px]">
          <span>Soy </span>
          <span className="text-brand">Abraham Toro</span>
          <span>, y este es mi contenido</span>
        </h2>
        <p className="whitespace-pre text-[24px] tracking-[0.24px] text-[#717171]">
          {`Disfruta con mi contenido en redes sociales y  sígueme para más cotenido de life Style`}
        </p>
      </div>
      <div className="absolute left-[108px] top-[157px] h-[704px] w-[1226px] overflow-hidden rounded-[20px] border-[7px] border-white/60">
        <img alt="" src={`${A}/soy-abraham-collage.png`} className="h-full w-full object-cover" />
      </div>
      <Link href="https://instagram.com/abrahamtoro" target="_blank" rel="noopener noreferrer" className="absolute left-1/2 top-[461px] flex -translate-x-1/2 flex-col items-center justify-center rounded-[10px] border-[11px] border-white/10 bg-[#161616] px-[30px] py-4 font-bold text-white shadow-[-3px_-1px_16.5px_white]">
        <p className="text-[13px] tracking-[0.13px]">{`Sígueme en  Instagram`}</p>
        <p className="text-[28px] tracking-[0.28px]">
          <span className="font-normal">A por</span>
          <span>{` 1 Millón! 🚀`}</span>
        </p>
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer className="absolute left-0 top-[4837px] h-[72px] w-[1440px] bg-white">
      <img alt="" src={`${A}/social-media-icons.svg`} className="absolute left-1/2 top-0 h-[72px] w-[276px] -translate-x-1/2" />
      <div className="absolute left-0 top-[15px] flex w-[582px] items-center justify-center gap-2.5 bg-white/50 px-2.5 py-5">
        <p className="text-[14px] tracking-[0.14px] text-black">Sobre Abraham Toro</p>
        <img alt="" src={`${A}/ellipse-separator.svg`} className="h-1 w-1" />
        <p className="text-[14px] tracking-[0.14px] text-black">Preguntas frecuentes</p>
        <img alt="" src={`${A}/ellipse-separator.svg`} className="h-1 w-1" />
        <p className="text-[14px] tracking-[0.14px] text-black">Privacidad</p>
      </div>
      <div className="absolute left-[859px] top-[15px] flex w-[582px] items-center justify-center gap-2.5 bg-white/50 px-2.5 py-5 text-[14px] tracking-[0.14px]">
        <p className="font-bold text-brand">Coloboraciones:</p>
        <p className="text-black">
          <span>{`¿ Eres una `}</span>
          <span className="font-semibold">empresa</span>
          <span>{`, `}</span>
          <span className="font-semibold">marca</span>
          <span>{` o `}</span>
          <span className="font-semibold">entrenador</span>
          <span>{` ?`}</span>
        </p>
      </div>
    </footer>
  );
}

function TitleBlock({
  className,
  title,
  subtitle,
  subtitleClassName,
}: {
  className: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  subtitleClassName?: string;
}) {
  return (
    <div className={`absolute flex flex-col gap-1 p-2.5 leading-normal ${className}`}>
      <h2 className="whitespace-nowrap text-[40px] font-semibold tracking-[0.4px]">
        {title}
      </h2>
      <div className={`text-[24px] tracking-[0.24px] text-[#717171] ${subtitleClassName ?? ""}`}>
        {subtitle}
      </div>
    </div>
  );
}

function ImageCrop({
  src,
  className,
  imgClassName,
}: {
  src: string;
  className: string;
  imgClassName: string;
}) {
  return (
    <div className={`absolute overflow-hidden ${className}`}>
      <img alt="" src={src} className={`absolute max-w-none ${imgClassName}`} />
    </div>
  );
}

function Label({
  left,
  top,
  muted,
  children,
}: {
  left: number;
  top: number;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`absolute text-[20px] font-medium tracking-[0.2px] ${
        muted ? "text-[#717171]" : "text-brand"
      }`}
      style={{ left, top }}
    >
      {children}
    </p>
  );
}
