# WebInfo
Website for parameter controlled content. HTML5 Boilerplate, AngularJs and Bootstrap 5 are using.

The following features are included
1. The application is built with AngularJs and uses an automated rooting mechanism
2. The routing is based on parameters 
3. The management of the images is based on parameters
3. Bootstrap 5 was used to create the HTML pages
4. The application is consistently divided between the technical implementation (app/) and the content (content/).

## Structure and components of the application

The WebInfo application consists of two main components. The **application part** and the **content part**.
In order to connect the two parts, the path to the content must be specified in the index.html in the tag of the AngularJs directive 'eaLoadParams' in the parameter 'data-content-folder'.
```html
<ea-load-params data-content-folder="content/aleks/"></ea-load-params>
```

The application part contains all the necessary functions and features to run the application. No adjustments are required here for use on a new website. (are of course possible) 
The content part must be completely recreated when used for a new website. An example of a web application created with this WebInfo application:
[Link](http://aleksander.de/ "my home page").


### New content for your application

To create new content, the following files must be created and exchanged.
1. All Html files, below the **content** folder. Here you can use bootstrap 5 classes.
2. All **pictures** are chenged
3. The **footer.html** can be adapted to your own needs.
4. The **favicon.ico** and the **apple-touch-icon.png** should be replaced.
5. when your application is complete, files **sitemap.xml** and **sitemapimages.xml** must be exchanged. (There is an export function in the application. See siteMap page)
6. **4 JSON files** are to be created according to the templates provided.
>- imgBoxList.json - organizes all pictures 
>- naviList.json - organizes the menu, the path-link in and sitemap 
>- objBg.json - controls the background image or color
>- newsList.json - generates a ready-made news or archi-news page

#### Special components for creating HTML pages

To support the creation of HTML pages I have created the following AngularJs directives. 
1. eaAccordeon - An accordion functionality with two nested HTML tags: **eaAccCoat** and **eaAccKey**, is provided. With this functionality, a page with longer text passages can be divided into individually expandable areas. 
2. eaImg and eaImgBox - provides the functionality to display the images within the HTML pages and to display the images enlarged with a scrolling function
3. eaVideo - With a tag, a video is integrated that, like the images, fits into the design of the pages.
4. eaFooter - Inserted the footer.html 

##### eaAccCoat and eaAccKey

An example of using the accordion functionality: 
```html
<div class='eaContent'>
    <ea-acc-coat data-acc-title="How is this application programmed?">
        <ea-acc-key data-title="Basic structure of the application" data-txt-len="200">
	
            <div class="row">
                <div class="col-lg-6 col-sm-12 col-md-6">
                    This "WebInfo" web application is a so-called "single page application" (SPA). ...
		</div>
                <div class="col-lg-6 col-sm-12 col-md-6">
                    Two frameworks are used in this application:
		    <ul>
                        <li>
                            <a class="eaExtern" target="_blank" href:"https://code.angularjs.org/1.7.9/docs/tutorial/step_09">AngularJs (Version 1.7.9)
			    </a>, see also 
			    <a class="eaExtern" target="_blank" href:"https://de.wikipedia.org/wiki/AngularJS">Wikipedia
			    </a>, 
                        </li>
                        <li>
                            <a class="eaExtern" target="_blank" 
                                href:"https://getbootstrap.com/docs/5.2/getting-started/introduction/">
                                Bootstrap 5
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
	    
        </ea-acc-key>
	
        <ea-acc-key data-title="Parameterization of the application" data-txt-len="200">
        
	    <div>
		One goal when designing the application was the complete separation between the technical 
            	and the content part. On the one hand, this was achieved through a strict separation 
            	of resources. The technical implementation of the functionalities is stored in the 
            	'/app' directory. The content files are located in the '/content' directory. ...
            </div>
	    
        </ea-acc-key>
    </ea-acc-coat>
</div>
```
See also [My home page serves as an example](http://www.aleksander.de/index.html#!/prog/p "http://www.aleksander.de").

##### eaImg and eaImgBox

**an example of the imgBoxList.json file**
```json
{   "imgKey": "Garten",
            "imgBodyList": ["Futterhaus",
                            "Ein zu Hause für Meisen",
                            "Nach der Größe des Einfluglöches (32mm) sollen es Blaumeisen sein.",
                            "Mein Apfelbaum im Jahr 2022. Nach einem Lehrgang ... Und siehe da, er trägt recht ordentlich."],
            "imgList": ["content/aleks/pictures/hobby/Futterhaus-mit-Meise.jpg",
                        "content/aleks/pictures/hobby/Meisen-Vogelhaus-im-Garten.jpg",
                        "content/aleks/pictures/hobby/Meisen-Vogelhaus.jpg",
                        "content/aleks/pictures/hobby/Mein-Apfelbaum.jpg"]
        },   
```
**an example for usind the imgBoxList.json file on Html site**
You can use the following statement to show the second picture from example on a Html page.
```xml
<div ea-img data-img-box-idx="2" data-img-box-key = "Garten"></div>
```
The eaImg tag can also be used in the following way to display individual images on an HTML page.
```xml
<div ea-img data-img-box-img="content/aleks/pictures/hobby/Meisen-Vogelhaus.jpg" data-img-box-body = "same text for picture"></div>
```
In this case you don't specify any data in the imgBoxList.json file .

##### eaVideo

The display of your own videos is based on Html5 and only adapts the appearance to the style of the application. 
```html
    <div class="row">
        
        <div class="col-lg-4 col-sm-12 col-md-6">
            <ea-video data-vdo-body="Eine Kohlmeise ..."
                      data-vdo-src="content/aleks/video/Nestbau.mp4">
            </ea-video>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6"></div>
        <div class="col-lg-4 col-sm-12 col-md-6"></div>
	
    </div>
```
##### eaFooter

This is a simple direktive. You create a own footer.html. Put it into the html folder under root of your content. Then you can call it as follow in the index.html:
```html
<ea-footer></ea-footer>
```


### Components and features of the application

#### Special components for the structure and function of the application

1. eaAddHtml - A html page is inserted into the code. This functionality is used for the parameterized generation of the menu and the news mechanism
4. eaLoadParams - Call in the index.html to read in all JSON files
5. eaNavi - Generates the complete menu with one call. This data are used for sitemap and PathInfo directive too.
6. eaPathLink - The current path is displayed at the top of every page
9. eaCookies - A cookie banner generated from the parameters is displayed when the program starts. If there is a corresponding entry in the menu, an editing option is also provided. This functionality can be enabled/disabled with one parameter in the directive tag.


##### eaLoadParams


##### eaCookies


##### eaAddHtml

This is the central html document in which all content html pages are inserted.
The tag 'ea-add-html' started the functionality to import the given url '{{url}}'.
```html
<div class="eaCard">
    <ea-path-link></ea-path-link> 
    <div class="eaContent">
        <div ea-add-html = "{{url}}"></div>
    </div>
</div>
```
Since the directive **'eaPathLink'** is used at the beginning of the page in this central component, it is ensured that every HTML page of this application displays this link.

##### eaNavi


##### eaFooter


#### Special features of the application

1. Create and download sitemap.xml and sitemapimage.xml for supporting the Google Index
2. Use eaNews directive on any Html page (see: home.html)
3. Use eaAddHtml directive on any Html page (see: eaCookies)


