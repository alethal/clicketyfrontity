const settings = {
  "name": "clicketyfrontity",
  "state": {
    "frontity": {
      "url": "https://localtransporter.space",
      "title": "TheSword",
      "description": "ReACT Experiment"
    }
  },
  "packages": [
    {
      "name": "clicketymars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Sword Says",
              "/category/swordsays/"
            ],
            [
              "NakedSword",
              "https://nakedsword.com"
            ],
            [
              "Live Chat",
              "http://www.flirt4free.com/rooms?service=guys&mp_code=anpjd"
            ],
            [
              "Tips",
              "/tips-page/"
            ],
            [
              "(PostsPage)",
              "/postspage/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.thesword.com/wp-json",
          "url": "https://www.thesword.com",
          "homepage": "gay-sex-life",
          "postsPage": "postspage"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
