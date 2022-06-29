---
title: How to edit WIKI
contributors: [positivecrash]
translated: true
---

**Robonomics WIKI is open source. Any corrections are welcome: fixing errors, typos, some unclear or outdated information, translation into any language. You'll need a [GitHub](https://github.com/) account.**

## Edit existing doc

1. Choose page
2. Click button "Edit page" marked with the Github logo on the page you want to edit
3. Clicking on the button will take you to the .md file.
4. Please, follow common rules for editing [Markdown files](https://en.wikipedia.org/wiki/Markdown), bearing in mind a few features of the WIKI stack:

### Frontmatter
Docs in Robonomics WIKI contain frontmatter block. It must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Between the triple-dashed lines, you can set or edit folowing options:

```YAML
---
title: How to contribute # Title for the page, you do not need to duplicate it in text
contributors: [positivecrash] # Main contributors (who actively curates this page). GitHub nickname required, without any additional symbols
translated: true # "true" if it has been translated in current language (see locale folder name of doc)
---
```

### Images
1. Upload image in folder `/docs/images/url-of-your-doc`
* If image needs to be localized, insert all of them in one folder
* Use locale appendix in name of images if it's localized, e.g. `image_en.jpg`
* Make sure your image is web optimised and at the same time it looks good
2. Insert images standart way for Markdown files.

### Link images
It is also possible to add link image with or without caption. You need to use custom component:

`with caption`

```c
<robo-wiki-picture link="/docs/community" src="example_image.jpg" caption="EXPLORE ROBONOMICS WIKI" />
```

`or without caption` 

```c
<robo-wiki-picture link="/docs/community" src="example_image.jpg" />
```

`or simple image` 

```c
<robo-wiki-picture src="example_image.jpg" />
```

`or simple image with caption`

```c
<robo-wiki-picture src="example_image.jpg" caption="EXPLORE ROBONOMICS WIKI" />
```

`src (required)` - path to the image:

 * if you uploaded your image directly to the `/docs/images/` use: 
 `url-of-your-doc`

 * if you uploaded image in one of the folders than use: `folder-name/url-of-your-doc`

`link` - link to the needed page

`caption` - caption for the image



### YouTube videos
You can embed any YouTube video in doc by inserting share link as separate paragraph without any additional quotes or tags, e.g.: `https://youtu.be/kQaSwNYHJQ8`

### Asciinema
Robonomics WIKI has support for Asciinema. To insert Asciinema, please, follow these instructions:
* Import component after frontmatter block `import Asciinema from '~/components/Asciinema.vue'`
* Insert as separate paragraph `<Asciinema vid="WCFcx8C6M8e52UKDNei1xZloU"/>`, where is vid is ID of specific asciicast

> You can get the widget script for a specific asciicast by clicking on “Embed” link on asciicast page.
> It looks like this:
> `<script src="https://asciinema.org/a/14.js" id="asciicast-14" async></script>`
[Asciinema docs](https://asciinema.org/docs/embedding)

In the example above vid is 14.


### Notes
You can add notes and give them specific types:
* warning (<span style="color:#f08432">**orange color**</span>)
* okay (<span style="color:#3eaf7c">**green color**</span>)
* note (<span style="color:#90a4b7">**grey color**</span>)

`note with title`

```c
<robo-wiki-note type="okay" title="Some information about robots" />
```

`note with content`

```c
<robo-wiki-note type="okay">Fascinating information about robonomics here only</robo-wiki-note>
```

`note with title and content`

```c
<robo-wiki-note type="okay" title="Robonomics for you">
  Fascinating information about robonomics here only
</robo-wiki-note>
```

## Add new doc

If you need to add new page in docs of Robonomics WIKI, please, follow these steps:

1. Find the folder with the locale that matches the language of the article you are adding, e.g. `/docs/en/`
2. Create .md file, using in name latin characters and follow common rules for [url structure](https://developers.google.com/search/docs/advanced/guidelines/url-structure)
3. Edit file as described above
4. Duplicate file to other locale folders, even if you do not plan to translate them. Do not forget mark in frontmatter not translated pages as `translated: false`
5. Add doc in menu:
* Open file `/data/sidebar_docs.yaml`
* Decide where to place your doc
* If you want to create new section, provide title with locale appendix, using only locales your section is translated
* Add doc with link. The link must be only one, and must not contain locale characters. Correct is `/docs/url-of-your-doc`, not correct is `/docs/en/url-of-your-doc`
* Use valid YAML for `/data/sidebar_docs.yaml` and rely on the existing file structure

## Submit Pull Request

[Make pull request](https://docs.github.com/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) for any content you changed including typos, translations, outdated information or broken links.

Decisions about individual PRs made by Robonomics core team. Special grants in [XRT](https://robonomics.network/community#token) are also possible for extended contribution 🤖💙💛💚💎🍭🎉🔌