// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some of my current and past projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-aerospace-imaging-and-diagnostics",
          title: 'Aerospace Imaging and Diagnostics',
          description: "Calibrated optical measurements for aerospace operations and research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aerospace_imaging_and_diagnostics/";
            },},{id: "projects-optical-tracking-in-hypersonic-wind-tunnels",
          title: 'Optical tracking in hypersonic wind tunnels',
          description: "An efficient way to measure hypersonic aerodynamics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/free_flight_tracking/";
            },},{id: "projects-hypersonic-vehicle-co-design",
          title: 'Hypersonic vehicle co-design',
          description: "Simultanous vehicle and trajectory optimisation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hypersonic_vehicle_codesign/";
            },},{id: "projects-supercritical-co-2-power-cycle",
          title: 'Supercritical CO$_2$ power cycle',
          description: "Experiments and modelling to better understand a better alternative to the steam cycle.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sco2_cycle/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%77.%6A%6F%68%6E.%6C%6F%63%6B@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/andrewjlock", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrew-j-lock", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Andrew-Lock-4/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oBUoPrkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
