
interface IconApp {
    image : string,
    link : string
  }
  
  interface Alternative{
    image : string,
    link : string,
    page : string,
    color : string,
    colorFont : string
  }
  
  export const iconApp : IconApp[] = [
    {
      image : require('../../../public/assets/appstore.svg'),
      link : 'https://google.com'
    },
    {
      image : require('../../../public/assets/playstore.svg'),
      link : 'https://google.com'
    }
  ]
  
  export const loginAlternative : Alternative[] = [
    {
      page : 'Google',
      link : 'https://google.com',
      image : require('../../../public/assets/google.svg.svg'),
      color : '#ffffff',
      colorFont : '#000000'
    },
    {
      page : 'Facebook',
      link : 'https://facebook.com',
      image : require('../../../public/assets/facebook.svg'),
      color : '#304F8B',
      colorFont : '#ffffff'
    },
    {
      page : 'Shopify',
      link : 'https://shopify.com',
      image : require('../../../public/assets/shopify.svg.svg'),
      color : '#95BF46',
      colorFont : '#ffffff'
    },
  ]