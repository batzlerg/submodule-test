module.exports = {
  seo: {
    title: "Harper's BAZAAR",
    description: "Harper's BAZAAR",
    titleTemplate: "%s | Harper's BAZAAR",
    author: "Harper's BAZAAR"
  },
  theme: "custom-theme",
  platform: "vtex",
  api: {
    storeId: "demohearst",
    workspace: "grahamtest",
    environment: "vtexcommercestable",
    hideUnavailableItems: true,
    incrementAddress: true
  },
  session: {
    currency: {
      code: "USD",
      symbol: "$"
    },
    locale: "en-US",
    channel: "{\"salesChannel\":1,\"regionId\":\"\"}",
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null
  },
  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true
  },
  storeUrl: "https://demohearst.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",
  previewRedirects: {
    home: "/",
    plp: "/office",
    search: "/s?q=headphone",
    pdp: "/apple-magic-mouse/p"
  },
  lighthouse: {
    server: "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/the-beginner-s-guide-to-strength-training--a-men-s-health-training-guide-4545537/p",
      collection: "/media"
    }
  },
  cypress: {
    pages: {
      home: "/",
      pdp: "/the-beginner-s-guide-to-strength-training--a-men-s-health-training-guide-4545537/p",
      collection: "/media",
      collection_filtered: "/media/?category-1=media&brand=Men%27s%20Health&facets=category-1%2Cbrand%27",
      search: "/s?q=Men%27s%20Health"
    }
  },
  analytics: {
    gtmContainerId: "GTM-1234567"
  }
}
