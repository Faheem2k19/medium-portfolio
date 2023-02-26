import { AiFillLinkedin, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asifulalamfahim"

const homeSeo = {
  title: "Asiful Alam Fahim",
  desc: "This website created for medium community to showcase medium articles"
}

const aboutSeo = {
  title: "About",
  desc: "About author"
}

const contactSeo = {
  title: "Contact",
  desc: "Contact with the author"
}

const myImg= "https://cdn-images-1.medium.com/fit/c/150/150/1*aRaZkVpP7AjucnJ3HTL_rQ.jpeg"


const navLogo = "Asiful Alam"

const navInfo = [

  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: 'https://medium.com/@asifulalamfahim', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const navSocialIcons = [
  { href: 'https://medium.com/@asifulalamfahim', icon: <AiFillMediumCircle size={25} /> },
  { href: 'https://twitter.com/callme_fahim', icon: <AiOutlineTwitter size={25} /> },
  { href: 'https://www.linkedin.com/in/asifulalam-fahim/', icon: <AiFillLinkedin size={25} /> },
];

const phoneNavInfo = "Software Engineer | Technical Writer" 

const socialprofils = {
  medium: "https://medium.com/@asifulalamfahim",
  twitter: "https://twitter.com/callme_fahim",
  linkedin: "https://www.linkedin.com/in/asifulalam-fahim/",
};

const header = {
  info: 'I’m Asiful Alam Fahim',
  info_two: 'I always believe in simplicity. In a world full of creative individuals and resources such as Pinterest, Facebook and Instagram, it’s almost difficult not to get carried away and add a bit of everything to your projects. With experience, I’ve grown to learn that a great work is when there’s nothing left to take away.'
}




export {
  mediumURL,
  homeSeo,
  aboutSeo,
  contactSeo,
  myImg,
  navLogo,
  navInfo,
  navSocialIcons,
  phoneNavInfo,
  socialprofils,
  header
};
