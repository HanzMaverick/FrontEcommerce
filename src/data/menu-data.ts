interface MenuItem {
    id: number;
    hasDropdown?: boolean;
    active?: boolean;
    title: string;
    pluseIncon?: boolean;
    link: string;
    submenus?: any[];
    pages?: boolean;
  }
  
  const menu_data: MenuItem[] = [
    {
      id: 1,
      hasDropdown: true,
      active: true,
      title: "Home",
      pluseIncon: true,
      link: "#",
      submenus: [
        { title: "Home 1", link: "/" },
        { title: "Home 2", link: "home-2" },
        { title: "Home 3", link: "/home-3" },
      ],
    },
    {
      id: 2,
      hasDropdown: false,
      active: true,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      hasDropdown: true,
      title: "Service",
      link: "#",
      pluseIncon: true,
      submenus: [
        { title: "Service", link: "/services" },
        { title: "Service Details", link: "/services-details" }
      ],
    },
  
    {
      id: 4,
      hasDropdown: true,
      title: "Shop",
      link: "#",
      pluseIncon: true,
      submenus: [
        { title: "Shop", link: "/shop" },
        { title: "Shop Details", link: "/shop-details" },
        { title: "Cart", link: "/cart" },
        { title: "Wishlist", link: "/wishlist" },
        { title: "Checkout", link: "/checkout" },
      ],
    },
  
    {
      id: 5,
      hasDropdown: true,
      title: "Blog",
      link: "#",
      submenus: [
        { title: "Blog", link: "/blog" },
        { title: "Blog Details", link: "/blog-details" },
      ],
    },
    {
      id: 6,
      title: "Pages",
      link: "#",
      hasDropdown: true,
      submenus: [
        { title: "Gallery 01", link: "/gallery-1" },
        {
          title: "Gallery 02",
          link: "/gallery-2",
        },
  
        {
          title: "Gallery 03",
          link: "/gallery-3",
        },
        {
          title: "Gallery Details 01",
          link: "/gallery-details-1",
        },
        { title: "Gallery Details 02", link: "/gallery-details-2" },
        { title: "Gallery Details 03", link: "/gallery-details-3" },
        {
          title: "Gallery Details 04",
          link: "/gallery-details-4",
        },
        {
          title: "Team",
          link: "/team",
        },
        {
          title: "Team Details",
          link: "/team-details",
        },
        {
          title: "Terms & Condition",
          link: "/terms-condition",
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Faq",
          link: "/faq",
        },
        {
          title: "SignIn",
          link: "/signIn",
        },
        {
          title: "Sign Up",
          link: "/signUp",
        },
        {
          title: "404 Error",
          link: "/error",
        },
      ],
    },
    {
        id: 7,
        hasDropdown: false,
        active: true,
        title: "Contact",
        link: "/contact",
      },
  ];
  
  export default menu_data;
  