# Completely Dynamic Website

> This repository uses JSDELIVR and Data URLs to create a (about 80-90%) totally dynamic website. 

Before teaching you how to do this on your own, we must go over the pros and cons of using this method.

Pros:
1. No hosting required. (Honestly best Pro)
2. Not traceable if using a disposable account (I hate getting doxxed by angry discord mods)
3. If a different CDN is used, you could make a completely private website that is only accessable by people with the link, without using a IP address or annoying login system.
4. A ton of web security knowledge is not needed to make a "secret" site.

Cons:
1. Debugging could be frustrating without using a host.
2. Loading times can sometimes be slow, or multiple refreshes could be required.
3. Working around CSP on mozilla is frustrating.
4. Some functions of creating a website won't be possible without an annoying amount of work.

# Using this repository to make a website.
> Check out the [example](example/) file in the repository to see an example using this repository.

General Tips:
1. Make all imports and links use a CDN or some other form of non-local directory.
2. CSS can stay mostly the same, and can be linked to the HTML file directly, but scripts cannot.
3. This was made to use Javascript, CSS and HTML. I have not tested other languages.

Actual Tutorial:
1. Create an HTML file, such as the one [here](example/main.html). DO NOT link any Javascript here, it will not load correctly.
2. Create any CSS files you would like, and create JS files that would have been in your HTML file. (Examples: [CSS](example/main.css), [JS](example/main.js))
3. Create your "backend" I guess. This will be a file with whatever extension you would like. Start the file with a data url, specifically: *data:text/html,* followed by a basic html script tag follwed by a div with a rememberable id. Inside of the script tag you will fetch the html file you created, load it to the div, then add the JS file you created using javascript and then add it to the head tag. No '<!DOCTYPE...' required, and no head or body tag has to be added either. (Example: [The Url](example/dataURL.html))
4. Then to create your final link, make a file with whatever extension, start the file with the same data url, create a body tag, stick a script tag that gets the [loader.js](loader.js) script through either javascript or through inline. Then follow that script tag with another script tag that is has defer, and fetch the dataURL and use the createIframe() function to load the fetched link. (Example: [Final Product for Chrome](example/finalProduct/exampleLinkChrome.html), [Final Product for Anything Else](example/finalProduct/exampleLinkUniversal.html))
