---
title: "Emoji list API and npm"
pubDate: 2022-08-02
slug: "emoji-list-api"
description: "A simple API and a npm for querying emoji."
categories: ["Web Development"]
tags: ["Model"]
langs: ["Python", "npm"]
cover: /uploads/emojiscreenshot.png
---

I developed a simple RESTful API and a Node package for querying emoji, since I needed one for developing [EmojiPoll](https://haryadi.my.id/projects/emojipoll). The problem is that for emojis, unlike standard alphabet characters, it is not possible to get a random glyph from a set.

## API

For the first I used Python and FastAPI, and now is hosted on [Deta](https://emojiapi.haryadi.my.id/docs).

```python

import requests
import json

data=requests.get('https://emoji.deta.dev/random?n=10&skintones=False&nogroup=Symbols,Flags')
print(json.loads(data.text))
 
# ["☔","🤵‍♀️","🤍","🗿","🎥","👴","🏃","🥄","🧃","✌️"]
```

For both the tool, there are several parameters, you can see them on the [GitHub repository](https://github.com/jacksalici/emoji-helper). One of them is the random option.

The data is parsed from the Unicode website into a JSON list of dictionaries from which the emoji are retrieved ([JSON file](https://raw.githubusercontent.com/jacksalici/emoji-list-api/main/src/emoji.json)). Each dictionary presents information regarding an emoji and can be retrieved using the verbose parameter. An example is reported.

```json
{
        "emoji": "🌵",
        "description": "cactus",
        "group": "Animals & Nature",
        "subgroup": "plant-other",
        "code": "1F335",
        "status": "fully-qualified",
        "version": "E0.6"
    }
```
## npm

For what concerns the npm package, here is a very simple script that shows how it works.
   
```bash
npm i emoji-random-list
```

```javascript
var emoji = require("emoji-random-list")
console.log(emoji.random({n: 5, group: 'objects'}))
//[ '🪒', '📕', '🔋', '🔩', '💷' ]
```

##### 👉[Take a look at the repository](https://github.com/jacksalici/emoji-helper)
