# Hostless Website

> This repository uses JSDELIVR and Data URLs to create a (about 80-90%) totally dynamic website. 

Before teaching you how to do this on your own, we must go over the pros and cons of using this method.

Pros:
1. No hosting required. (Honestly best Pro)
2. Not traceable if using a disposable account (I hate getting doxxed by angry discord mods)
3. If a different CDN is used, you could make a completely private website that is only accessible by people with the link, without using a IP address or annoying login system.
4. A ton of web security knowledge is not needed to make a "secret" site.

Cons:
1. Debugging could be frustrating without using a host.
2. Loading times can sometimes be slow, or multiple refreshes could be required.
3. Working around CSP on mozilla is frustrating.
4. Some functions of creating a website won't be possible without an annoying amount of work.

# Using this repository to make a website.
> Check out the [example](example/) file in the repository.

General Tips:
1. Make all imports and links use a CDN or some other form of non-local directory.
2. CSS can stay mostly the same, and can be linked to the HTML file directly, but scripts cannot.
3. This was made to use Javascript, CSS and HTML. I have not tested other languages.

Actual Tutorial:
1. Create an HTML file, such as the one shown in the [image](example/main.html). DO NOT link any Javascript here, it will not load correctly.
![image](https://github.com/FancyBoiL1/Completely-Dynamic-Website/assets/117115118/5a9ef00a-3569-472a-9744-5fef0384ec7b)
3. Create any CSS files you would like, and create JS files that would have been in your HTML file. (Examples: [CSS](example/main.css), [JS](example/main.js))
4. Create your "backend" I guess. This file can have whatever extension you would like. Start the file with a data url, specifically: *data:text/html,* followed by a basic html script tag follwed by a div with a rememberable id. Inside of the script tag you will fetch the html file you created, load it to the div, then add the JS file you created using javascript and then add it to the head tag. No '<!DOCTYPE...' required, and no head or body tag has to be added either. (Example: [The Url](example/dataURL.html))
![image](https://github.com/FancyBoiL1/Completely-Dynamic-Website/assets/117115118/b5a8956e-3e63-42c1-b673-bdda01eed6eb)

5. Then to create your final link, make a file with whatever extension, start the file with the same data url, create a body tag, stick a script tag that gets the [loader.js](loader.js) script through either javascript or through inline. Then follow that script tag with another script tag that has defer, and fetch the dataURL and use the createIframe() function to load the fetched link. (Example: [Final Product for Most](example/finalProduct/exampleLinkChrome.html), [Final Product for Mozilla](example/finalProduct/exampleLinkUniversal.html))
![image](https://github.com/FancyBoiL1/Hostless-Website/assets/117115118/595caae4-56bc-44f9-984e-7c9a1efebe6a)
<br>
<br>
All work was created by yours truly, FancyBoiL1.
