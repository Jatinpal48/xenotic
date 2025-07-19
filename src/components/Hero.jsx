
import React from "react";
import seoIcon from "../assets/seo.png";
import awsIcon from "../assets/aws.jpeg";
import cloudIcon from "../assets/cloud.jpeg"; 

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-transparent to-purple-900 relative overflow-hidden">
      <h2 className="text-lg font-medium">Xenotix Tech</h2>
      <h1 className="text-5xl sm:text-6xl font-extrabold mt-2">
        Got a startup Idea ?
      </h1>
      <p className="mt-4 text-lg text-gray-300 dark:text-gray-400">
        Let's Turn It Into Reality.
      </p>

   
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <img src={seoIcon} alt="SEO" className="w-12 h-12" />
        <img src={awsIcon} alt="AWS" className="w-12 h-12" />
        <img src={cloudIcon} alt="Cloud" className="w-12 h-12" />
       
      </div>
    </section>
  );
}
