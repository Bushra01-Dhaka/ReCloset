import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PictureCards = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div
        className="text-center lg:text-left max-w-xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight">
          Give Your Clothes a{" "}
          <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
            Second Life
          </span>
        </h1>

        <p className="py-6 text-base-content/80">
         ReCloset connects generous hearts with those in need by giving clothes a second life. Every donation reduces waste, supports communities, and reminds us that small acts of kindness can make a big difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="btn btn-primary font-bold shadow-2xl shadow-primary border-0 bg-linear-to-r text-black hover:bg-linear-to-l from-primary to-accent">
            Donate Your Clothes
          </button>
          <button className="btn btn-outline font-bold btn-primary hover:shadow-2xl shadow-accent hover:text-black hover:bg-linear-to-r from-primary to-accent">
            Browse Collection
          </button>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1709916314093-5bbc88f6ee8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Vjb25kJTIwaGFuZCUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNlY29uZCUyMGhhbmQlMjBjbG90aGVzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1630861460368-5620bd06adfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxzZWNvbmQlMjBoYW5kJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAiFdoFf-s3cN659LTuHwheGwQi5T8vOaydw&s",
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Tp1jpl5ZesiLfjS1B1IFzOlH9C6ti2pI1Q&s",
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInPw1ihUbup08JVxZiVcf2eSQThsr0EhSvA&s",
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYbP47-rNMoA9yFY0XGgP7agyEjvMF_5gQg&s",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGkt5-Vjm3WwUsyV0hpRbS-pRt6puC7li8g&s",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHqoUbBRSYgGSN4DfX-JTtGosGxM1ealxMg&s",
  },
  {
    id: 10,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUp4v-zGUSaajbmGEazzojpU1xi8Y7fGhpfQ&s",
  },
  {
    id: 11,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcetTp6LtD4puHr6P8ZoDLG-roNOlDkX4RUw&s",
  },
  {
    id: 12,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qRvRsq4YeFB8DcPoEOrNAFmc4utWR8Ad9g&s",
  },
  {
    id: 13,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71mpFIcmfzbH9MKJu-l8t0u98PbiTvK_Lxw&s",
  },
  {
    id: 14,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzSCBIwUEC7vmUma-V91Y1wdOAj8-R9t1HA&s",
  },
  {
    id: 15,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qRvRsq4YeFB8DcPoEOrNAFmc4utWR8Ad9g&s",
  },
  {
    id: 16,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoHSu01XDDF9SFZLHhivTLPNk8m-UvxI-MA&s",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full shadow-xl shadow-primary"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default PictureCards;
