import React from "react";
import { HomeHero } from './Home.Hero';
import "./Home.scss";

export const Home = () => {
  return (
    <section className="section home bg-secondary">
      <HomeHero></HomeHero>
    </section>
  );
};
