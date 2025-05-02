import img from '../../../public/assets/img.jpg';

// Import static images for use across the site
// We'll use the already imported hero image for multiple places until we have more images

export const images = {
  // Hero and main images
  hero: img,
  about: img,
  donation: img,
  
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
  }
}; 