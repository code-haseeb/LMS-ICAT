import React from "react";
import Hero from "../../components/website/hero/Hero";
import image from "../../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="bg text__color">
      <Hero
        title="Mission"
        text={
          "The mission of the Library of Legends is to achieve excellence in the provision and promotion of information services to meet the research, teaching and learning needs of the College. We are committed to help the students and the faculty to take advantage of these resources. An effective use of information resources is a necessary precondition to an academic success and even throughout life. It is our goal at the libraries to provide excellent service to students and faculty that will advance each user’s learning, teaching, and research experience at the Government Graduate College ,Jhelum."
        }
        image={image}
      />

    </div>
  );
};

export default AboutUs;
