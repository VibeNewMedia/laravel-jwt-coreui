export default {
  items: [  
    {
      title: true,
      name: '',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Home',
      url: '/',
      icon: 'icon-home',

    },
    {
        name: 'My Profile',
        url: '/base',
        icon: 'icon-puzzle',
        attributes: { disabled: true },
      },
     
      {
        name: 'My Action Plan',
        url: '/base',
        icon: 'icon-puzzle',
        attributes: { disabled: true },
      },
      {
        name: 'My Stats',
        url: '/base',
        icon: 'icon-puzzle',
        attributes: { disabled: true },
      },
      {
        name: 'Contact Us',
        url: '/base',
        icon: 'icon-puzzle',
        attributes: { disabled: true },
      },
      {
        name: 'Support',
        url: '/base',
        icon: 'icon-puzzle',
        attributes: { disabled: true },
      },
   
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
   
    {
        name: 'Log Out',
        url: '/login',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
