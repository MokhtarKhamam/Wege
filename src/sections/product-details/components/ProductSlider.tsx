"use client";
import { Product } from "@/types/producte";
import { Box, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";

const ProductSlider = ({ data }: { data: Product }) => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(data.images?.[0]);

  return (
    <Stack gap={3}>
      <Box sx={{ position: "relative", width: "100%", height: "400px" }}>
        <Image
          src={selectedImage}
          alt={data.title}
          fill
          objectFit="cover"
          style={{
            borderRadius: "1rem",
            boxShadow: "10px 0 15px -3px #dddddd",
          }}
        />
      </Box>
      <Swiper slidesPerView="auto" spaceBetween={15} className="mySwiper">
        {data.images?.map((el, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{ position: "relative", width: "100%", height: "100%" }}
              onClick={() => setSelectedImage(el)}
            >
              <Image
                src={el}
                alt=""
                fill
                objectFit="contain"
                sizes="100vw"
                style={{
                  borderRadius: "1rem",
                  border:
                    selectedImage === el
                      ? `2px solid ${theme.palette.primary.main}`
                      : "",
                  opacity: selectedImage === el ? "" : "0.5",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default ProductSlider;
