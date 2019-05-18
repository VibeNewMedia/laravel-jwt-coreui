export default {
  items: [  
    {
      title: true,
      name: 'Hello, Levi Strange',
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
        icon: 'icon-calendar',
        attributes: { disabled: true },
      },
     
      {
        name: 'My Action Plan',
        url: '/base',
        icon: 'icon-note',
        attributes: { disabled: true },
      },
      {
        name: 'My Stats',
        url: '/base',
        icon: 'icon-user',
        attributes: { disabled: true },
      },
      {
        name: 'Contact Us',
        url: '/base',
        icon: 'icon-info',
        attributes: { disabled: true },
      },
      {
        name: 'Support',
        url: '/base',
        icon: 'icon-shield',
        attributes: { disabled: true },
      },
    {
        name: 'Log Out',
        url: '/login',
        icon: 'icon-logout',
        variant: 'danger',
        attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
