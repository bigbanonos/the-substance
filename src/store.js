import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Jefferson",
      image: "/photo-1515036551567-bf1198cccc35.jpeg",
      aspect: 1.51,
      text: "Jefferson recently enjoy post Thanksgiving empanadas with his favorite J. Just ask him."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Antonella",
      image: "/photo-1519608487953-e999c86e7455.jpeg",
      aspect: 1.5,
      text:
        "This Christmas, Lady Antonella is celebrating the true meaning of Christmas by giving you zero gifts, but she did bring strawberry rhubarb pie near the old devices on floor 3. She didn't like the vegan almond butter. She did appreciate the water refill."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Dominique",
      image: "/ph1.jpg",
      aspect: 1.5037,
      text:
        "Dominique Young Unique recently spent a week with her sister and niece or nephew. Went to Ireland. Iceland. I'm assuming Ecuador. If you're reading this on December 19, 2019, she has cool blue pants on."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Ivi",
      image: "/ph3.jpg",
      aspect: 0.665,
      text:
        "Poison Ivi. Blue Ivi. the songs i've liked from Magestic Casual playlist in 2k19 were Model Man: Clarity, Hether: When U Loved Me, Golda: Jaded, Jakob Ogawa: You and I, Bakar: Hell N Back, Nakala: Do It Right, Peggy Gou: Starry Night."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Sector 8",
      image: "/photo-1533577116850-9cc66cad8a9b.jpeg",
      aspect: 1.55,
      text:
        "By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won’t be compelled by one’s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."
    },
    { offset: 7, factor: 1.05, header: "The Factory", image: "/photo-1548191265-cc70d3d45ba1.jpeg", aspect: 1.77, text: "Education and enlightenment." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
