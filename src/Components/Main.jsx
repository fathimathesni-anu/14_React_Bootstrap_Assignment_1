import React from 'react'
import Carosel from './Carosel.jsx'
import Aboutcertification from './Aboutcertification.jsx'
import Packages from './Packages.jsx'
import Container from 'react-bootstrap/Container';
import Contact from './Contact.jsx'
import './Main.css' 
function Main() {
  const packageData = [
    {
      id: "exampleModal-1",
      title: "Kerala Tour Package ( 3 Nights / 4 Days )",
      image: "https://media.istockphoto.com/id/538999152/photo/tea-plantation.jpg?s=612x612&w=0&k=20&c=keGIQ3mA_DV1i42hx0vxIQziSjVLwyqs1RLb1sglrfc=",
      details: [
        "2 Night Accommodation in Munnar.",
        "1 Night Accommodation in Alleppey.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels.",
        "Pick up & Drop (Ex Cochin).",
        "All Transfers & sightseeing by AC Car.",
        "All toll tax, Parking charges, Fuel cost, Driver charges inclusive.",
      ]
    },
    {
      id: "exampleModal-2",
      title: "Magical Kerala Tour Package ( 5 Nights / 6 Days )",
      image: "https://media.istockphoto.com/id/507963488/photo/terrace-of-green-tea-fileds.jpg?s=612x612&w=0&k=20&c=tj1EGVBcm1-yi2tSHIWpy89N_Y1W1aBsVDWLwy-Ia7c=",
      details: [
        "2 Night Accommodation in Munnar.",
        "1 Night Accommodation in Appeppey - Houseboat.",
        "1 Night Accommodation in Thekkady.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels.",
        "All Meals in Houseboat.",
        "Pick up & Drop (Ex Cochin).",
        "All Transfers & sightseeing by AC Car.",
        "All toll tax, Parking charges, Fuel cost, Driver charges inclusive.",
      ]
    },
    {
      id: "exampleModal-3",
      title: "Incredible Kerala Tour Package ( 6 Nights / 7 Days )",
      image: "https://media.istockphoto.com/id/467759178/photo/india.jpg?s=612x612&w=0&k=20&c=pniZZvUvTeItN5Xx_x6YlnnWSBvlr5X21E7p9yAGavA=",
      details: [
        "2 Night Accommodation in Munnar.",
        "1 Night Accommodation in Appeppey - Houseboat.",
        "1 Night Accommodation in Thekkady.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels.",
        "All Meals in Houseboat.",
        "Pick up & Drop (Ex Cochin).",
        "All Transfers & sightseeing by AC Car.",
        "All toll tax, Parking charges, Fuel cost, Driver charges inclusive.",
      ]
    },

    {
      id: "exampleModal-4",
      title: "Grand Kerala Tour Package ( 7 Night / 8 Days )",
      image: "https://media.istockphoto.com/id/995716672/photo/beautiful-and-relaxing-beach-flanked-by-green-palm-trees-at-sunset-varkala-kerala-india.jpg?s=612x612&w=0&k=20&c=ZMYVn9VxqFvZFWs3QVNhnV5EoafY-Mh-lMTyEuxIqjc=",
      details: [
        "2 Night Accommodation in Munnar.",
        "1 Night Accommodation in Appeppey - Houseboat.",
        "1 Night Accommodation in Thekkady.",
        "2 Night Accommodation in Kovalam.",
        "1 Night Accommodation in Kanyakumari.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels.",
        " All Meals in Houseboat.",
        "All Transfers & sightseeing by AC Car",
      ]

    },
    {
      id: "exampleModal-5",
      title: "Complete Kerala Tour Package ( 9 Night / 10 Days )",
      image: "https://media.istockphoto.com/id/516962116/photo/hills-overgrown-by-tea.jpg?s=612x612&w=0&k=20&c=lJjJx3esRZu8Bsyoeo_J3r4Ef6RxUWbTiK6nWm3goHg=",
      details: [
        "1 Nights Accommodation in Cochin.",
        "2 Nights Accommodation in Munnar.",
        "1 Night Accommodation in Thekkady.",
        "1 Night Accommodation in Alleppey ( Houseboat ).",
        "1 Night Accommodation in Kumarakom.",
        " 1 Night Accommodation in Kanyakuari.",
        "2 Night Accommodation in Kovalam.",
        "Daily Breakfast in all hotels.",
        "All meals in Houseboat (Breakfast,Lunch & Dinner).",
        " All transfers & sightseeing by AC Car.",
        "All toll tax, parking charges, fuel cost, driver charges inclusive.",
      ]

    },
    {
      id: "exampleModal-6",
      title: "Perfect Kerala Tour Package ( 9 Night / 10 Days )",
      image: "https://media.istockphoto.com/id/498111985/photo/sunset-at-backwaters-of-kerala.jpg?s=612x612&w=0&k=20&c=ztA4CMsZcUpHQuKFAB0fabHjkGBI1nuGLPyJVPw6Pgw=",
      details: [
        "1 Nights Accommodation in Cochin.",
        "2 Nights Accommodation in Munnar.",
        "1 Night Accommodation in Thekkady.",
        "1 Night Accommodation in Alleppey ( Houseboat ).",
        "1 Night Accommodation in Kumarakom.",
        " 1 Night Accommodation in Kanyakuari.",
        "2 Night Accommodation in Kovalam.",
        "Daily Breakfast in all hotels.",
        "All meals in Houseboat (Breakfast,Lunch & Dinner).",
        " All transfers & sightseeing by AC Car.",
        "All toll tax, parking charges, fuel cost, driver charges inclusive.",
      ]

    },
    {
      id: "exampleModal-7",
      title: "Entire Kerala Tour Package ( 9 Night / 10 Days )",
      image: "https://media.istockphoto.com/id/1145437466/photo/palms-in-goa-at-sunset.jpg?s=612x612&w=0&k=20&c=K3Q8FfyVYGAEzyaCjr5WsJupZxzvQ0M1h2ntWmrKyqs=",
      details: [
        "1 Nights Accommodation in Cochin.",
        "2 Nights Accommodation in Munnar.",
        "1 Night Accommodation in Thekkady.",
        "1 Night Accommodation in Alleppey ( Houseboat ).",
        "1 Night Accommodation in Kumarakom.",
        " 1 Night Accommodation in Kanyakuari.",
        "2 Night Accommodation in Kovalam.",
        "Daily Breakfast in all hotels.",
        "All meals in Houseboat (Breakfast,Lunch & Dinner).",
        " All transfers & sightseeing by AC Car.",
        "All toll tax, parking charges, fuel cost, driver charges inclusive.",
      ]

    },
    {
      id: "exampleModal-8",
      title: "Amazing Kerala Tour Package ( 4 Nights / 5 Days )",
      image: "https://media.istockphoto.com/id/1206998397/photo/green-valley-in-munnar-kerala-india.jpg?s=612x612&w=0&k=20&c=ZmyNtuShFfdQhXiPuxl4S8mF7KNF00zeCkURE8pkUyE=",
      details: [
        "Night Accommodation in Cochin.",
        "2 Night Accommodation in Munnar.",
        "1 Night Accommodation in Appeppey - Houseboat.",
        "1 Night Accommodation in Thekkady.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels",
        "All Meals in Houseboat.",
        "Pick up & Drop (Ex Cochin).",
        " All Transfers & sightseeing by AC Car.",
      ]

    },
    {
      id: "exampleModal-9",
      title: "Full Kerala Tour Package ( 4 Nights / 5 Days )",
      image: "https://media.istockphoto.com/id/1149066532/photo/waterfall-water-flow-in-rocks-with-rainbow-colors.jpg?s=612x612&w=0&k=20&c=NcfDHysm48nKQ-K7vIlFjEmQ3VcGeS5cqrKKIv4E73g=",
      details: [
        "Night Accommodation in Cochin.",
        "2 Night Accommodation in Munnar",
        "1 Night Accommodation in Appeppey - Houseboat.",
        "1 Night Accommodation in Thekkady.",
        "Welcome Drink on Arrival.",
        "Daily Breakfast at Hotels.",
        "All Meals in Houseboat.",
        "Pick up & Drop (Ex Cochin).",
        " All Transfers & sightseeing by AC Car.",
      ]

    },
  ];
  return (
    <div>
      <Carosel />
      <Aboutcertification />

      <Container
        fluid
        className="mb-4 p-4 bg-success text-center text-white"
      >
        <h2>
          Kerala Tour Packages
        </h2>
        <p className="price">
          starting from Rs &colon;&nbsp;
          <a
            href="https://www.keralatouronline.in"
            target="_blank"
            rel="noopener noreferrer"
            className="link text-white text-decoration-underline"
          >
            4999/-
          </a>
          pp
        </p>
      </Container >
      <Container fluid className='g-4 p-4 mb-20 mt-20 bg-black text-center ' >

        <Packages packages={packageData} />

      </Container>

      <Contact />
    </div>
  );
}

export default Main