const videos = [
  {
    "id": 1,
    "thumbnail": "https://i.ytimg.com/vi_webp/Ke90Tje7VS0/maxresdefault.webp",
    "title": "React",
    "src": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    "duration": "12:24",
    "channel": {
      "name": "React Js",
      "icon": "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "166K views",
    "uploadedAt": "2022-04-04"
  },
  {
    "id": 2,
    "thumbnail": "https://i.ytimg.com/vi_webp/_Hp_dI0DzY4/maxresdefault.webp",
    "title": "UI Design",
    "src": "https://www.youtube.com/watch?v=_Hp_dI0DzY4&t=3928s",
    "duration": "12:24",
    "channel": {
      "name": "UI Designs",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLQ2BILkH6zZdQLVMwiUtY9ejAOHBiTOnlANQ-jSZA=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "162K views",
    "uploadedAt": "2022-03-14"
  },
  {
    "id": 3,
    "thumbnail": "https://i.ytimg.com/vi/vyJU9efvUtQ/maxresdefault.jpg",
    "title": "Material UI",
    "src": "https://www.youtube.com/watch?v=vyJU9efvUtQ",
    "duration": "12:24",
    "channel": {
      "name": "Master CSS",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "32K views",
    "uploadedAt": "2020-04-04"
  },
  {
    "id": 4,
    "thumbnail": "https://i.ytimg.com/vi/3dHNOWTI7H8/maxresdefault.jpg",
    "title": "Angular",
    "src": "https://www.youtube.com/watch?v=3dHNOWTI7H8",
    "duration": "12:24",
    "channel": {
      "name": "Angular latest",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "612K views",
    "uploadedAt": "2022-03-25"
  },
  {
    "id": 5,
    "thumbnail": "https://i.ytimg.com/vi/A5cVyjrKx_Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEUUGzzj64ce-ZnT6LzUQ6kWBIIQ",
    "title": "Course",
    "src": "https://www.youtube.com/watch?v=2CSr2vBApSI&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo",
    "duration": "12:24",
    "channel": {
      "name": "VUE",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLTM6bGgJWtayEJrZHApYyJSaBqWLkMnXixAVvc85Q=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "2K views",
    "uploadedAt": "2014-04-04"
  },
  {
    "id": 6,
    "thumbnail": "https://i.ytimg.com/vi/3dHNOWTI7H8/maxresdefault.jpg",
    "title": "Angular",
    "src": "https://www.youtube.com/watch?v=3dHNOWTI7H8",
    "duration": "12:24",
    "channel": {
      "name": "Angular Latest",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "19K views",
    "uploadedAt": "2022-02-25"
  },
  {
    "id": 7,
    "thumbnail": "https://i.ytimg.com/vi_webp/_Hp_dI0DzY4/maxresdefault.webp",
    "title": "UI Design",
    "src": "https://www.youtube.com/watch?v=_Hp_dI0DzY4&t=3928s",
    "duration": "12:24",
    "channel": {
      "name": "UI Designs",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLQ2BILkH6zZdQLVMwiUtY9ejAOHBiTOnlANQ-jSZA=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "18K views",
    "uploadedAt": "2022-01-14"
  },
  {
    "id": 8,
    "thumbnail": "https://i.ytimg.com/vi_webp/Ke90Tje7VS0/maxresdefault.webp",
    "title": "React",
    "src": "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    "duration": "12:24",
    "channel": {
      "name": "React Js",
      "icon": "https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "72K views",
    "uploadedAt": "2021-04-04"
  },
  {
    "id": 9,
    "thumbnail": "https://i.ytimg.com/vi_webp/iWOYAxlnaww/maxresdefault.webp",
    "title": "Javascript",
    "src": "https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=1",
    "duration": "12:24",
    "channel": {
      "name": "Js Mastery",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "12K views",
    "uploadedAt": "2021-04-04"
  },
  {
    "id": 10,
    "thumbnail": "https://i.ytimg.com/vi/B4GD-ztYApU/maxresdefault.jpg",
    "title": "Google workspace",
    "src": "https://www.youtube.com/watch?v=B4GD-ztYApU",
    "duration": "12:24",
    "channel": {
      "name": "Google",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLTggHt8uwf9E16DQrx1LZ8XhHs5dXIfz6XBWYLZAg=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "62K views",
    "uploadedAt": "2019-04-04"
  },
  {
    "id": 11,
    "thumbnail": "https://i.ytimg.com/vi/vyJU9efvUtQ/maxresdefault.jpg",
    "title": "Material UI",
    "src": "https://www.youtube.com/watch?v=vyJU9efvUtQ",
    "duration": "12:24",
    "channel": {
      "name": "Master CSS",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "32K views",
    "uploadedAt": "2020-04-04"
  },
  {
    "id": 12,
    "thumbnail": "https://i.ytimg.com/vi_webp/USjZcfj8yxE/maxresdefault.webp",
    "title": "Git",
    "src": "https://www.youtube.com/watch?v=USjZcfj8yxE",
    "duration": "12:24",
    "channel": {
      "name": "Git",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLR4BKPIxSr1RjRYn3rujLiX8U3EPhlXXGsx9cYt=s68-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "1K views",
    "uploadedAt": "2017-04-04"
  },
  {
    "id": 13,
    "thumbnail": "https://i.ytimg.com/vi_webp/qXcMNBQnQMM/maxresdefault.webp",
    "title": "Song",
    "src": "https://www.youtube.com/watch?v=qXcMNBQnQMM",
    "duration": "12:24",
    "channel": {
      "name": "New Songs",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLT0oqBs5eu59w3yxgD92gFWDG5lUhhSCWjzhIRiUQ=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "132K views",
    "uploadedAt": "2022-04-02"
  },
  {
    "id": 14,
    "thumbnail": "https://i.ytimg.com/vi_webp/USjZcfj8yxE/maxresdefault.webp",
    "title": "Git",
    "src": "https://www.youtube.com/watch?v=USjZcfj8yxE",
    "duration": "12:24",
    "channel": {
      "name": "Git",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLR4BKPIxSr1RjRYn3rujLiX8U3EPhlXXGsx9cYt=s68-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "12K views",
    "uploadedAt": "2017-04-04"
  },
  {
    "id": 15,
    "thumbnail": "https://i.ytimg.com/vi/mS48F0swwAY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqT6YEc4UQhpUJpOxxPMnAftjLGA",
    "title": "Course",
    "src": "https://www.youtube.com/watch?v=mS48F0swwAY",
    "duration": "12:24",
    "channel": {
      "name": "Axios",
      "icon": "https://yt3.ggpht.com/89aatDy0ndKkFTpEzXymJwKr3C9bMJ7pQFhSNpN7Z0J0Z-ievRjODaZphdQb-01YFGAiu12F=s48-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "22K views",
    "uploadedAt": "2014-04-04"
  },
  {
    "id": 16,
    "thumbnail": "https://i.ytimg.com/vi_webp/iWOYAxlnaww/maxresdefault.webp",
    "title": "Javascript",
    "src": "https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=1",
    "duration": "12:24",
    "channel": {
      "name": "Js Mastery",
      "icon": "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0x00ffffff-no-rj"
    },
    "viewsCount": "32K views",
    "uploadedAt": "2021-04-04"
  },
]

export default videos;