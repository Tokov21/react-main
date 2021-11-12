import React, { useEffect, useState, useMemo, useCallback } from "react";

const images = [
  "https://cdn.wallpapersafari.com/21/36/iDSFnV.jpg",
  "https://i.pinimg.com/736x/50/04/22/5004227882d5bfeaf0a12bcbc0e949d9.jpg",
  "https://mfiles.alphacoders.com/835/835476.jpg",
];

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [delay, setDelay] = useState(1);

  //Смена слайдов в зависимости от того нажата ли кнопка
  useEffect(() => {
    let intervalID;

    if (playing) {
      intervalID = setInterval(() => {
        setSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, delay * 1000);
    }

    return () => clearInterval(intervalID);
  }, [playing, delay]);

  const isPlaying = useCallback(() => setPlaying(!playing), [playing]);

  const nextSlide = useCallback(
    () => setSlide((prevSlide) => (prevSlide + 1) % images.length),
    []
  );

  const previosSlide = useCallback(
    () =>
      setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length),
    []
  );

  const startStop = useMemo(
    () => (playing ? "Остановить" : "Запустить"),
    [playing]
  );

  const handleDelayChange = useCallback(({ target: { value } }) => {
    setDelay(Number(value));
  }, []);

  //Fullscreen
  const openFullscreen = useCallback(
    ({ target, target: { id } }) => {
      if (!document.fullscreenElement) {
        if (id === "images") {
          target.requestFullscreen();
        }

        if (id === "fullscreenButton") {
          const image = document.getElementById("images");
          image.requestFullscreen();
        }
      } else {
        document.exitFullscreen();
      }
    },

    []
  );

  return (
    <div>
      <button onClick={previosSlide}>{"<"}</button>
      <img
        src={images[slide]}
        alt="Carousel"
        id="images"
        onClick={openFullscreen}
      />
      <button onClick={nextSlide}>{">"}</button>
      <div>
        <button onClick={isPlaying} id="start">
          {startStop}
        </button>
      </div>
      <label htmlFor="delay">
        Задержка между слайдами
        <input
          type="number"
          name="delay"
          id="delay"
          value={delay}
          onChange={handleDelayChange}
        />
        c
      </label>
      <div>
        <button onClick={openFullscreen} id="fullscreenButton">
          Fullscreen
        </button>
      </div>
    </div>
  );
}
