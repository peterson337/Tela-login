"use client";
import React from "react";
import styleTelaHome from "../style/styleTelaHome";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

type Wallpaper = {
  id: number;
  url: string;
  alt: string;
};

export default function page() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [wallpapers, setWallpapers] = React.useState<Wallpaper[]>([]);

  setTimeout(() => {
    if (isLoading) {
      setWallpapers([
        {
          id: 0,
          url: "wallpaper01.png",
          alt: "alt",
        },
        {
          id: 1,
          url: "wallpaper02.png",
          alt: "alt",
        },
        {
          id: 2,
          url: "wallpaper03.png",
          alt: "alt",
        },
        {
          id: 3,
          url: "wallpaper04.png",
          alt: "alt",
        },
        {
          id: 4,
          url: "wallpaper05.png",
          alt: "alt",
        },
      ]);

      setIsLoading(false);
    }
  }, 3000);

  return (
    <>
      <section
        //prettier-ignore
        className={isLoading? styleTelaHome.imgHomeLoading : styleTelaHome.imgHomeWallpaper}
      >
        <div
          //prettier-ignore
          className={isLoading? styleTelaHome.divVidroHomeLoading : styleTelaHome.divVidroHome}
        >
          {isLoading ? (
            <section className="flex flex-col items-center gap-3">
              <h3 className={styleTelaHome.titleLoading}>Carregando imagens</h3>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </section>
          ) : (
            <section className="flex flex-row flex-wrap gap-2 h-[calc(100vh-6rem)] overflow-auto">
              {wallpapers.map((item) => {
                return (
                  <img
                    key={item.id}
                    src={item.url}
                    alt={item.alt}
                    className={styleTelaHome.wallpapers}
                  />
                );
              })}
            </section>
          )}
        </div>
      </section>
    </>
  );
}
