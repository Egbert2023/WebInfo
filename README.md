# WebInfo
Website for parameter controlled content. HTML5 Boilerplate, AngularJs and Bootstrap 5 are using.

The following features are included
1. The application is built with AngularJs and uses an automated rooting mechanism
2. The routing is based on parameters 
3. The management of the images is based on parameters
3. Bootstrap 5 was used to create the HTML pages
4. The application is consistently divided between the technical implementation (app/) and the content (content/).

## Structure and components of the application

The WebInfo application consists of two main components. The application part and the content part.
In order to connect the two parts, the path to the content must be specified in the index.html in the AngularJs directive 'eaLoadParams' in the parameter 'data-content-folder'.
>>```html
>><ea-load-params data-content-folder="content/aleks/"></ea-load-params>
>>```

The application part contains all the necessary functions and features to run the application. No adjustments are required here for use on a new website. (are of course possible) 
The content part must be completely recreated when used for a new website.

### New content

To create new content, the following files must be created and exchanged.
1. All Html files, below the **content** folder. Here you can use bootstrap 5 classes.
2. The **footer.html** can be adapted to your own needs.
3. The favicon.ico and the apple-touch-icon.png should be replaced.
4. when your application is complete, files sitemap.xml and sitemapimages.xml must be exchanged. 
5. 4 json files are to be created according to the templates provided.

5.1. imgBoxList.json - organizes all pictures 

5.2. naviList.json - organizes the menu, the path-link in and sitemap 

5.3. objBg.json - controls the background image or color

5.4. newsList.json - generates a ready-made news or archi-news page



 


