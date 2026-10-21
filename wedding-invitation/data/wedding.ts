export const wedding = {
  groom: "Kelvin",
  bride: "Janine",
  groomSurname: "Arellano",
  brideSurname: "Consulta",
  tagline: "In God's Perfect Time",
  dateLabel: "December 29, 2026",
  dayLabel: "Tuesday",
  timeLabel: "9:30 AM",
  arrivalNote:
    "We recommend coming by 9:00 AM so you have time to settle in before the ceremony starts",
  // Philippine Standard Time (UTC+8)
  isoDateTime: "2026-12-29T09:30:00+08:00",
  venues: [
    { name: "San Pablo Cathedral Church", city: "San Pablo City" },
    {
      name: "Golden Rich, Saint Francis Subd., Brgy. San Francisco",
      city: "San Pablo City",
    },
  ],
  invitation: {
    heading: "With God's grace and blessings",
    lines: [
      "Together with our families,",
      "we joyfully invite you to celebrate",
      "the beginning of our forever.",
      "As two hearts become one,",
      "we look forward to a lifetime of love,",
      "faith, and beautiful tomorrows.",
      "Your presence and prayers would mean",
      "the world to us.",
    ],
  },
  dressCode: {
    intro:
      "We kindly encourage our guests to wear formal/semi-formal attire with these colors on our special day.",
    palette: [
      { name: "Dusty Rose", hex: "#E6C9C3" },
      { name: "Blush Pink", hex: "#D5A8A5" },
      { name: "Mauve", hex: "#B89696" },
      { name: "Taupe", hex: "#BBA08A" },
      { name: "Deep Dusty Rose", hex: "#A97272" },
    ],
  },
  giftNote:
    "Your presence on our wedding is enough. However if you wish to give us something, monetary gift will be greatly appreciated.",
  rsvp: {
    deadline: "Dec 29, 2026",
    contactPerson: "Kelvin Arellano",
    phone: "+63995 983 5850",
    phoneHref: "tel:+639959835850",
    altContact: "Or thru fb/messenger.",
  },
} as const;
