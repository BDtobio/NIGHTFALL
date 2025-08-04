export interface NavItem {
    text: string;
    path: string;
    
  }
  
  export const navConfig: NavItem[] = [
    { text: 'Home', path: '/home' },
    { text: 'Eventos', path: '/events' },
    { text: 'Tickets', path: '/tickets' },
    
    { text: 'Contacto', path: '/Contact'  ,},
  
  ];
  