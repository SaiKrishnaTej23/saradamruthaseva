import img from '../../../public/assets/img.jpg';
import logo from '../../../public/assets/logo.jpg';

import Image1 from '../../../public/assets/1.jpg';
import Image2 from '../../../public/assets/2.jpg';
import Image3 from '../../../public/assets/3.jpg';
import Image4 from '../../../public/assets/4.jpg';  
import Image5 from '../../../public/assets/5.jpg';
import Image6 from '../../../public/assets/6.jpg';
import Image7 from '../../../public/assets/7.jpg';
import Image8 from '../../../public/assets/8.jpg';
import Image9 from '../../../public/assets/9.jpg';
import Image10 from '../../../public/assets/10.jpg';
import Image11 from '../../../public/assets/11.jpg';
import Image12 from '../../../public/assets/12.jpg';
import Image13 from '../../../public/assets/13.jpg';
import Image14 from '../../../public/assets/14.jpg';
import Image15 from '../../../public/assets/15.jpg';
import Image16 from '../../../public/assets/16.jpg';
import Image17 from '../../../public/assets/17.jpg';
import Image18 from '../../../public/assets/18.jpg';
import Image19 from '../../../public/assets/19.jpg';
import Image20 from '../../../public/assets/20.jpg';
import Image21 from '../../../public/assets/21.jpg';
import Image22 from '../../../public/assets/22.jpg';
import Image23 from '../../../public/assets/23.jpg';
import donation from '../../../public/assets/payment.jpeg';
// Import video file (TypeScript needs a declaration for .mp4 files)


// Import static images for use across the site
// We'll use the already imported hero image for multiple places until we have more images

export const images = {
  // Hero and main images
  logo: logo,
  hero: img,
  about: img,
  donation: donation,
  
  // Temple images
  temple: {
    exterior: img,
    interior: img,
    architecture: img
  },
  
  // Activity images
  activities: {
    spiritual: img,
    education: img,
    community: img,
    environment: img
  },
  
  // Media gallery
  media: {
    retreat: img,
    service: img,
    workshop: img,
    discourse: img
  },
  
  // Updates and news
  updates: [img, img, img],
  
  // People and testimonials
  people: {
    volunteers: img,
    leaders: img
  },
  mediaImages: [
    Image1, Image2, Image3, Image4, Image5,
    Image6, Image7, Image8, Image9, Image10,
    Image11, Image12, Image13, Image14, Image15,
    Image16, Image17, Image18, Image19, Image20,
    Image21, Image22, Image23
  ]
}; 