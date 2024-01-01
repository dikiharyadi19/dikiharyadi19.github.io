---
title: Smart Bus Stop
pubDate: 2023-01-21
slug: smart-bus-stop
description: An IoT project aimed to enhance bus stops.
categories: ["Internet of Things"]
tags: ["IoT", "Smart Bus Stop", "Esp32", "mqtt"]
langs: ["Flask", "Arduino"]
featured: true
cover: https://raw.githubusercontent.com/jacksalici/smart-bus-stop/main/img/architecture.jpg
---
![Cover](https://raw.githubusercontent.com/jacksalici/smart-bus-stop/main/img/cover.svg)

This project was developed by a friend on mine and me as the final project for my Master's Degree in the CS IoT course. Its main focus is to improve public transportation, particularly city buses. The aim is to create a smart bus stop that enables easier access to the service and enhances it through a network of such stations.

In our vision, each smart bus stop will be equipped with a digital kiosk/totem device and a button board. A solar panel may also be provided to the station to make it self-sufficient during sunny hours.

The totem will allow people to see the real-time locations of public services, along with the estimated transit times through various stations. It will also make it possible to purchase tickets on the spot. An NFC/RFID reader will make authentication possible with smartphones and other physical devices (provided, for example, to the elderly who do not own modern mobiles).

A button will be provided for people with disabilities to alert the bus driver to give help or attention.

Once the network of smart stops is established, it will be possible to perform statistical analysis and forecasting on the use of a certain line, allowing better allocation of resources (such as adding or deleting a bus, "dynamic" lines, etc). The project aims to reduce maintenance costs for public administrations. An ideal solution uses an AI-powered camera to count people waiting at the stops and a server that checks if the upcoming bus's maximum capacity would be exceeded, calling for an additional bus.

The project was developed on Arduino and Esp32 dev-board. Although all the parts work smoothly, some components have been simplified (e.g., omitting some security best practices) since more realistic solutions would have been too time-consuming.

You can see a deeper documentation on the [Github repository](https://github.com/jacksalici/smart-bus-stop) and here is the overview of the architecture.  

##### 👉[Take a look at the repository](https://github.com/jacksalici/smart-bus-stop)


![Architecture](https://raw.githubusercontent.com/jacksalici/smart-bus-stop/main/img/architecture.jpg)