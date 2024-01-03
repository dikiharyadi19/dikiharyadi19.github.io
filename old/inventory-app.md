---
title: "The Inventory App"
pubDate: 2023-08-01
slug: "inventory-app"
description: "A web app to manage your favorite RPG hero inventory."
categories: ["Web Development"]
tags: ["Model"]
langs: ["Vue"]
link: "https://inventory.haryadi.my.id"
linktext: "Check the website."
cover: "https://raw.githubusercontent.com/jacksalici/inventory-app/main/public/screenshot3.png"
type: work

---

The Inventory App is a fast, open-source and 100% free way to track the equipment of your role-playing games characters.


![screenshot](https://raw.githubusercontent.com/jacksalici/inventory-app/main/public/screenshot3.png) 
![screenshot](https://raw.githubusercontent.com/jacksalici/inventory-app/main/public/screenshot2.png)


The web app is built using Vue as frontend, and [Deta Collections](https://deta.space/docs/en/use/your-data/collections) for persistent data storage. The *NoSQL* database has 2 tables (automatically created on the first usage):

- **HEROES**  
    It contains the info about the characters.

    | key (nickname) | name | details |  equipment | slots | avatar |
    |-|-|-|-|-|-|

- **INVENTORY**  
    It contains the info about the characters' equipment.

    | key (id) |object | details | quantity | value | used |
    |-|-|-|-|-|-|

Since my goal was to create something simple and free both for users and myself, I decided to **not** handle a database for user data, for the sake of costs, privacy, and security. Therefore, if you (or your party) want to use the website, you will need to get a Deta API key and put it on your client side.

#### Security concerns

1. Anyone you share a collection API key with can see/change/delete the data in that collection.
2. The API key is saved unencrypted in the local storage of your device. This is never a good idea but seeing the informal and playful target of this app, I've done it anyway.

#### Usage

For the usage of the app itself, please rely on the FAQs that are [directly on the website](https://inventory.haryadi.my.id/about/).

##### 👉 [Check the web app](https://inventory.haryadi.my.id) 
