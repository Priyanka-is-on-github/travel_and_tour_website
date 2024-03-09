import React from 'react'

const  dataList = [
    {
        id:1,
        imgSrc:"http://images.singletracks.com/2011/02/IMG_3105-0.jpg",
        destTitle:"Peavine Creek",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$200",
        description:"Peavine Creek features 1 miles of hiking trails near Atlanta, GA.",

    },
   
    {
        id:2,
        imgSrc:"https://images.hdqwalls.com/download/maldives-resorts-huts-over-water-22-1920x1080.jpg",
        destTitle:"Maldive",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$400",
        description:"Emory Recycling Center features 1 miles of hiking trails near Atlanta, GA.",

    },
    {
        id:3,
        imgSrc:"https://res.akamaized.net/domain/image/fetch/t_web/https://static.domain.com.au/domainblog/uploads/2012/03/19021823/2_CampbellRoadDeepdene_729.jpg",
        destTitle: "Deepdene/Dellwood",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$300",
        description:"Mulched hiking trails in 26 acre park parallel to Ponce de Leon Ave. Amazing stone bridges and stream views.",

    },
    {
        id:4,
        imgSrc:"http://images.singletracks.com/2011/03/IMG_3106-0.jpg",
        destTitle:"Morningside Nature Preserve",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$800",
        description:"Morningside Nature Preserve features 1 miles of hiking trails near Atlanta, GA.",

    },
    {
        id:5,
        imgSrc:"https://images0.westend61.de/0001373194pw/autumn-in-the-langdale-valley-lake-district-national-park-unesco-world-heritage-site-cumbria-england-united-kingdom-europe-RHPLF14670.jpg",
        destTitle:"Longdale Park",
        Location: "Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$500",
        description: "Trails and picnic area in 18 acre DeKalb county park.",

    },
    {
        id:6,
        imgSrc:"https://th.bing.com/th/id/R.1a4daea6567d0fe714a0c26f1cfccafc?rik=jYCCbSCepvV7bg&riu=http%3a%2f%2femeraldglenmemorycare.com%2fimg%2fslider%2f3.jpg&ehk=63yG47CfWDKgMYKPTNYE02fHGSEwdQr69vnHQiTCL6k%3d&risl=&pid=ImgRaw&r=0",
        destTitle:"Glen Emerald",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$490",
        description: "Trails, lake, and picnic area in 26 acre DeKalb county park.",

    },
    {
        id:7,
        imgSrc:"https://th.bing.com/th/id/R.c10d864325a91462fc3aff3df575d5fe?rik=AbiU%2fcyOg3%2fzJg&riu=http%3a%2f%2fwww.fernbankes.dekalb.k12.ga.us%2fGalleryImages%2f202032417329106_image.jpg&ehk=dwmtStvSX9Fr2d6WDDNJ%2brNKZ1iMFqZNJqYOcZqo2c0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        destTitle:"Fernbank School",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$357",
        description: "Trails and picnic area in 12 acre DeKalb county park. Wooded loops located behind the school.",

    },
    {
        id:8,
        imgSrc:"https://thumbs.dreamstime.com/b/manali-popular-hill-station-himachal-pradesh-india-189560087.jpg",
        destTitle:"Manali",
        Location: "himachal pradesh",
        grade:"CULTURAL RELAX",
        fees:"$350",
        description:"Manali has grown from a trading village to a small town. As of the 2011 census of India, its population was 8,096. In 2001, Manali had an official population of 6,265. Males constituted 64% of the population and females 36%. "

    },
    {
        id:9,
        imgSrc:"https://www.brides.com/thmb/BuJ9BQL9SqRBa_-lQ2H-oudPWUg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bayou-Bend-Collection-and-Gardens-Clio-Garden-Photo-by-Rick-Gardner-0d5441a69875e02_0d544759-0c2d-036f-05fa913207b31791-82ca6d9b25f94695a5d2e904be86b8e6.jpg",
        destTitle:"Daniel Johnson Nature Preserve",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$560",
        description: "Several trail loops located along the south fork of Peachtree Creek. One creek crossing with a bridge, another without. Great place to get outdoors close to town!",

    },
    {
        id:10,
        imgSrc:"https://th.bing.com/th/id/R.ad651b30b417a21e28f65804a1a8fc0b?rik=rYVGRv%2bIp53DQA&riu=http%3a%2f%2fcdn.theconversation.com%2ffiles%2f136300%2fwidth1356x668%2fimage-20160901-1054-1fwjpe4.jpg&ehk=joXesehsm2wZ396cL6kWsEYIPfM9tkyrklKObwDc7nQ%3d&risl=&pid=ImgRaw&r=0",
        destTitle:"Emory Recycling Center",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$230",
        description:"Emory Recycling Center features 1 miles of hiking trails near Atlanta, GA.",

    },
    {
        id:11,
        imgSrc:"https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/08/Ulun-Danu-Beratan-in-Bedugul-Bali-Indonesia-.jpg",
        destTitle:"Bali",
        Location:"Atlanta",
        grade:"CULTURAL RELAX",
        fees:"$760",
        description:"Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."

    },
    {
        id:12,
        imgSrc:"https://thumbs.dreamstime.com/b/manali-popular-hill-station-himachal-pradesh-india-189560087.jpg",
        destTitle:"Manali",
        Location: "himachal pradesh",
        grade:"CULTURAL RELAX",
        fees:"$350",
        description:"Manali has grown from a trading village to a small town. As of the 2011 census of India, its population was 8,096. In 2001, Manali had an official population of 6,265. Males constituted 64% of the population and females 36%. "

    },
]

export default dataList