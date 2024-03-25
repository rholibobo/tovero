"use client";

import React, { createContext, useContext, useRef, useState } from "react";

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const swiperRef = useRef(null);

  const isActive = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index);
    swiperRef.current?.swiper?.slideTo(index);
  };
  
  const handleSwiperSlideChange = (swiper) => {
    setSelectedIndex(swiper.activeIndex);
    setActiveIndex(swiper.activeIndex);
  };

  const contextValue = {
    activeIndex,
    setActiveIndex,
    setSelectedIndex,
    isActive,
    handleSwiperSlideChange,
    swiperRef,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};
