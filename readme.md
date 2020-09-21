# Find your Chrome tabs faster!
This simple Chrome extension allows you to quickly find relevant browser tabs
![gif showing how this extension works](findTab.gif)

## The problem
we all know the feeling- you are working on something tricky and your Browser has a gazillion tabs open; you don't want to close them all yet because they might still be relevant later, but navigating through a sea of tabs is a pain

## The Solution
just press Cmd+Shift+X (Mac) or Ctrl+Shift+X (Linux / Windows) to open a small input field and start typing some text that is contained in either the URL or the HTML title of the tab that you are looking for.
So if you are looking for a tab with an url of http://example.com just start typing "exa" and the tab should open, provided you dont have any any other tabs with urls containing "exa" - if that´s the case, you should search for the title tag instead (this works exceptionally great for stackoverflow: just type a unique keyword from the stackoverflow question title and you should be instantly navigated to the appropriate tab!)

## Setup 
In order to load this chrome extension, navigate your chrome browser to [chrome://extensions](chrome://extensions), enable developer mode and click on "load unpacked" then select the folder you cloned this repository into. Voilá

### Using your own custom shortcut to trigger 
Simply edit your desired shortcut in the lower portion of the manifest.json file

### Disclaimer
Chrome does not want you to load any extensions that are not in the Chrome store.
I on the other hand have no interest in dealing with the ever changing Chrome store policies so I don't think I will release this in the Chrome Store, at least in the current state. 
