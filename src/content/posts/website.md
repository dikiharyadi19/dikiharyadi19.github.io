---
title: "Is my website's style to my taste?"
pubDate: 2023-02-02
updatedDate: 2023-10-19
slug: "website"
description: "I rebuild this website too often."
categories: ["Web Development"]
tags: ["website", "portfolio", "Hugo"]
link: "https://github.com/jacksalici/salinger-theme"
linkText: "Based on Salinger Theme (See the Repo)"
featured: true
cover: "/website.jpg"
---

As you probably have imagined, I built this website myself. Actually, I've rebuilt it several times because I can't decide how I want it. I think that this is due to the fact that as soon as I find new inspiration or a framework I like, I cannot stop thinking about it. If you like to tidy your home before hosting guests, well, I like to tidy MY home, my digital home, that is, in a certain way — the website you are reading. So, it has to be the thing that better represents me, what I did, and what my tastes are, even if this means rebuilding it twice a year. I want to spend some words about the major versions of it and why I chose them.

[![pages-scores](/uploads/scores.png)](https://pagespeed.web.dev/analysis/https-diki.haryadi-my-id/3hqj7sj4ug?form_factor=mobile)

## Hugo

Until late 2023, the architecture was based on the _Hugo framework_. It was very minimal, and I liked that. Moreover, the theme has also been coded by me, using _Tailwind_ and _DaisyUI_ library, and the page scores are amazing. The template is called Salinger Theme and can be found [here](/p/salinger-theme). On GitHub, it has several stars and forks, and it was one of the themes featured at the 2023 Hugo Convention.

## Astro

In the last quarter of 2023, I found out _Astro_, and I fell in love with it, particularly for three features. Firstly, it's UI agnostic, allowing me to use several UI frameworks at the same time. I haven't used that feature yet (as for now, only the native Astro language), but in the future, I could mix some Vue components (where I am most confident) with some React (since it's the most popular in the industry).

On the second instance, I like its completely component-oriented approach, solving the struggle of querying posts using Hugo templates. In Astro, it's possible to integrate custom code everywhere, and it works like a charm since JSX-like code can be written on every HTML page. Since I also design the entire website by myself, it wasn't really useful to have such a strong separation between content and templates as it was in Hugo (also considering the fact that my website is relatively very small).

Finally, it's very fast. Faster than Hugo, actually (I got a +3% on PageSpeed Insight). That's moved the needle.

## Features

The entire source code of the website is open source and available on [this](https://github.com/dikiharyadi19/dikiharyadi19.github.io) GitHub repository.

Since the website is static, it's really good both in performance and lightweightness, and moreover, it makes it possible to pay nothing for hosting (the whole thing is hosted on _Netlify_). The only expense I'm in charge of is the domain, which I have bought from _Cloudflare_ for a few dollars per year.

I also added some easter eggs that no one will ever notice, so if you are curious, look for a 404 error for one instance of my broken humor...

Having said that, do you know that I love pizza, coding, and succulent plants? This website is also reachable at [🍕💻🌵.tk](http://🍕💻🌵.tk) (emojis order matters).

Just looking at [these](/p/emojipoll/) [projects](/p/emoji-list-api/), you know that I also like emojis, but normally, they change according to the operating system where they are read. So, for a long time, I've applied the _Tweemoji_ (open-source Twitter Emoji) library to be sure to get the same emoji experience on all devices, but when I rebuilt the website in Astro, I decided to drop that for the sake of performance (the change is not a big deal, but PageSpeed waits for no man). At the same time, the theme also uses some _Google Symbols_ and _Font Awesome_ icons, both imported directly as SVGs, and the fonts I use are all in local. Without any external script, I achieved the perfomances you have seen at the begin of the article.  
