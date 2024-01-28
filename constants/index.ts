export const headerLinks = [
    {
      label: 'Accueil',
      route: '/',
    },
    {
      label: 'Créez événement',
      route: '/events/create',
    },
    {
      label: 'Compte',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }