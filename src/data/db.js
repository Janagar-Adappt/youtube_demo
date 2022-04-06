const videos = [
  {
    "id": 1,
    "thumbnail": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "React",
    "duration": "12:24",
    "channel": {
      "name": "React Js",
    },
    "viewsCount": "166K views",
    "uploadedAt": "2022-04-04"
  },
  {
    "id": 2,
    "thumbnail": "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "UI Design",
    "duration": "12:24",
    "channel": {
      "name": "UI Designs",
    },
    "viewsCount": "162K views",
    "uploadedAt": "2022-03-14"
  },
  {
    "id": 3,
    "thumbnail": "https://images.pexels.com/photos/4509131/pexels-photo-4509131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Angular",
    "duration": "12:24",
    "channel": {
      "name": "Angular latest",
    },
    "viewsCount": "612K views",
    "uploadedAt": "2022-03-25"
  },
  {
    "id": 4,
    "thumbnail": "https://images.pexels.com/photos/6671687/pexels-photo-6671687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Songs",
    "duration": "12:24",
    "channel": {
      "name": "New Songs",
    },
    "viewsCount": "62K views",
    "uploadedAt": "2022-03-22"
  },
  {
    "id": 5,
    "thumbnail": "https://images.pexels.com/photos/6671687/pexels-photo-6671687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Songs",
    "duration": "12:24",
    "channel": {
      "name": "New Songs",
    },
    "viewsCount": "132K views",
    "uploadedAt": "2022-04-02"
  },
  {
    "id": 6,
    "thumbnail": "https://images.pexels.com/photos/4509131/pexels-photo-4509131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Angular",
    "duration": "12:24",
    "channel": {
      "name": "Angular Latest",
    },
    "viewsCount": "19K views",
    "uploadedAt": "2022-02-25"
  },
  {
    "id": 7,
    "thumbnail": "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "UI Design",
    "duration": "12:24",
    "channel": {
      "name": "UI Designs",
    },
    "viewsCount": "18K views",
    "uploadedAt": "2022-01-14"
  },
  {
    "id": 8,
    "thumbnail": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "React",
    "duration": "12:24",
    "channel": {
      "name": "React Js",
    },
    "viewsCount": "72K views",
    "uploadedAt": "2021-04-04"
  },
  {
    "id": 9,
    "thumbnail": "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Javascript",
    "duration": "12:24",
    "channel": {
      "name": "Js Mastery",
    },
    "viewsCount": "12K views",
    "uploadedAt": "2021-04-04"
  },
  {
    "id": 10,
    "thumbnail": "https://images.pexels.com/photos/10721746/pexels-photo-10721746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Material UI",
    "duration": "12:24",
    "channel": {
      "name": "Master CSS",
    },
    "viewsCount": "32K views",
    "uploadedAt": "2020-04-04"
  },
  {
    "id": 11,
    "thumbnail": "https://images.pexels.com/photos/6248987/pexels-photo-6248987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Google workspace",
    "duration": "12:24",
    "channel": {
      "name": "Google",
    },
    "viewsCount": "62K views",
    "uploadedAt": "2019-04-04"
  },
  {
    "id": 12,
    "thumbnail": "https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Git",
    "duration": "12:24",
    "channel": {
      "name": "Git",
    },
    "viewsCount": "1K views",
    "uploadedAt": "2017-04-04"
  },
  {
    "id": 13,
    "thumbnail": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Business",
    "duration": "12:24",
    "channel": {
      "name": "Business",
    },
    "viewsCount": "2K views",
    "uploadedAt": "2014-04-04"
  },
  {
    "id": 14,
    "thumbnail": "https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Git",
    "duration": "12:24",
    "channel": {
      "name": "Git",
    },
    "viewsCount": "12K views",
    "uploadedAt": "2017-04-04"
  },
  {
    "id": 15,
    "thumbnail": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Business",
    "duration": "12:24",
    "channel": {
      "name": "Business",
    },
    "viewsCount": "22K views",
    "uploadedAt": "2014-04-04"
  },
  {
    "id": 16,
    "thumbnail": "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Javascript",
    "duration": "12:24",
    "channel": {
      "name": "Js Mastery",
    },
    "viewsCount": "32K views",
    "uploadedAt": "2021-04-04"
  },
]

export default videos;