# WebInfo
The WebInfo was developed to create a simple website that is only intended to provide information. User interactions and thus the collection of personal data are initially not planned.

This is a application for parameter controlled content. HTML5 Boilerplate, AngularJs and Bootstrap 5 are using.

The following features are included
1. The application is built with AngularJs and its routing mechanism is used
2. The routing is based on parameters from a JSON file
3. The management of the images is based on parameters from a JSON file
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
[my home page](http://aleksander.de/ "my home page").


### New content for your application
To create a new WebInfo application you need only new content. The following files must be created or exchanged.
1. All **Html files**, below the **content** and /html folder. Here you can use bootstrap 5 classes or any ea-tags.
2. All **pictures** are exchangeable
3. The **footer.html** can be adapted to your own needs.
4. The **favicon.ico** and the **apple-touch-icon.png** should be replaced.
5. when your application is complete, files **sitemap.xml** and **sitemapimages.xml** must be exchanged. (There is an export function in the application. See special features)
6. **4 JSON files** are to be created according to the templates provided.

#### Special components for creating HTML pages
To support the creation of HTML pages I have created the following AngularJs directives. 
1. eaAccordeon - An accordion functionality with two nested HTML tags: **eaAccCoat** and **eaAccKey**, is provided. With this functionality, a page with longer text passages can be divided into individually expandable areas. 
2. eaImg and eaImgBox - provides the functionality to display the images within the HTML pages and to display the images enlarged with a scrolling function
3. eaVideo - With one ea-Tag tag "<ea-video...>", a video is integrated that, like the images, fits into the design of the pages.
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
An example of a part of **imgBoxList.json** file
```json
...
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
...
```
An example for using the imgBoxList.json file on Html site: 
```xml
<div ea-img data-img-box-idx="2" data-img-box-key = "Garten"></div>
```
You can use the following statement to show the second picture from example on a Html page.

The eaImg tag can also be used in the following way to display individual images on an HTML page. When the mechanism is used in this way, it is not possible to scroll between multiple images.
```xml
<div ea-img data-img-box-img="content/aleks/pictures/hobby/Meisen-Vogelhaus.jpg" data-img-box-body = "same text for picture"></div>
```
In this case you don't specify any data in the imgBoxList.json file .

##### eaVideo
The display of your own videos is based on Html-5 and only adapts the appearance to the style of the application. 
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
The standard text for browsers that do not support the HTML5 tag <video> is stored in the parameter file naviList.json as "vdoNo".
```json
{"params" : { "baseDoman" : "www.aleksander.de",
              "startFile" : "index.html",
              "vdoNo" : "Ihr Browser kann dieses Video nicht wiedergeben.",
```
	
##### eaFooter
This is a simple direktive. You create a own footer.html. Put it into the html folder under root of your content. Then you can call it as follow in the index.html:
```html
<ea-footer></ea-footer>
```

#### JSON files defining the structure and appearance of the application
The JSON files have a uniform structure. The uniform key is always "entries". The value of this key is always an array []. The elements of this array are objects.
The strukture of all objekts are "key", "value", "key": "value",... The values themselves can be either text or arrays again, in some cases.
```json
"entries": 
  [
    {"id":"navStart", "label": "Home", "href": "#!/home", "url": "content/aleks/html/home.html", "imgKey": "", "subm": []},
    {"id":"xxx", }
  ]
```

##### imgBoxList.json - organizes all pictures 
```json
{ "imgKey": "EU",
  "imgBodyList": ["Ein Blick über den Attasee im Salzburger Land",
                  "Ein Blick auf die Alfame, ein Stadtteil der Altstadt in Lissabon"],
  "imgList": ["content/aleks/pictures/travel/Austria/SalzburgerLand-Attasee.jpg",
              "content/aleks/pictures/travel/Lissabon/Lissabon-Praca-do-Comercio-vom-Wasser.jpg"]
},
```

##### naviList.json - organizes the menu, the path-link in and sitemap 
```json
"entries":
    [
        {"id":"navStart", "label": "Home", "href": "#!/home", "url": "content/aleks/html/home.html", "imgKey": "",
            "subm": []},
 
        {"id":"navTravel", "label": "Reisen", "href": "#!/trav",  "url": "content/aleks/html/reisen.html", "imgKey": "Reisen",
            "subm": [ {"label": "Deutschland", "href": "#!/trav/de", "url": "content/aleks/html/De/Deutschland.html", "imgKey": "DE",
                        "subm": [{"label": "Landschaften", "href": "#!/trav/de/l", "url": "content/aleks/html/De/Landschaften.html", "imgKey": "DE-Landschaft"},
                         {"label": "Nordsee", "href": "#!/trav/de/n", "url": "content/aleks/html/De/Nordsee.html", "imgKey": "DE-Nordsee"},
                         {"label": "Ostsee", "href": "#!/trav/de/o", "url": "content/aleks/html/De/Ostsee.html", "imgKey": "DE-Ostsee"}]
                 },

```

##### objBg.json - controls the background image or color
The background images or colors are determined using the called url. The url's have this structure "#!/**trav**/de/o". the second part will read and match the key. The "pic" give the background picture or collor.
```json
{"entries":
    [
       {
           "key": "home",
           "pic": "url(content/aleks/pictures/travel/Schwerin/Schwerin-Schloss.jpg)"
       },
       {
           "key": "hobby",
           "pic": "#f2ffe6"
       },
       {
           "key": "prog",
           "pic": "#dae9f7"
       }
    ]
}
```

##### newsList.json - generates a ready-made news or archi-news page
```json
{
  "newFrom": "2023-01-01",
  "newTo": "2023-12-31",
  "title": "Unsere nächste Reise", 
  "body": ["Wir planen wieder eine Kurzreise. Diesmal soll es auf die Nordseeinsel Norderney gehen."], 
  "img": [],
  "imgBody": [],
  "href": ""
},
```
	
### Components and features of the application
#### Special components for the structure and functions of the application
1. eaAddHtml - An html page is integrated into an existing html page. This functionality is used for the parameterized generation of the menu and the news mechanism
4. eaLoadParams - Call in the index.html to read in all JSON files.
5. eaNavi - Generates the complete menu with one call from the eaNavi.json file. This data are used for sitemap and PathInfo directive too.
6. eaPathLink - The current path is displayed at the top of every page.
9. eaCookies - A cookie banner generated from the parameters is displayed when the program starts. If there is a corresponding entry in the menu, an editing option is also provided. This functionality can be enabled/disabled with one parameter in the directive tag <ea-cookies...>.

##### eaLoadParams
This tag is used once in the index.html and causes all specified JSON files to be imported and made available in the application.
```html
<ea-load-params data-content-folder="content/aleks/"></ea-load-params>	
```
	
##### eaCookies
The cookie directive is called exactly once in index.html to activate the mechanism if necessary. On my home page this directive is disabled.
```html
<ea-cookies data-cookies-used="false"></ea-cookies>	
```

	
	

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
1. Use eaNews directive on any Html page (see: home.html)
2. Use eaAddHtml directive on any Html page (see: eaCookies)
3. Use the automatically calculated sitemap in your navigation
4. Create and download sitemap.xml and sitemapimage.xml for supporting the Google Index
	
##### eaNews on your Html pages	
The news mechanism is equipped with a parameter file "newsList.json" and the Html tag <ea-news ...> </ea-news> realized.
You can use the following tag in every Html page.
```html
<ea-news data-news-title="News"	
	 data-news-mode="new"
	 data-news-limit="2"
	 data-news-text-len="200"
	 data-news-init-idx="0">
</ea-news>
```
The passed parameter 'data-news-title' is displayed as a headline within the 'h1' tag. 
	
The following values are possible for the 'data-news-mode' parameter:
- all - es werden alle Einträge bei denen das Datum 'newFrom' erreicht ist, unabhängig vom Datum 'newTo', angezeigt.
- new - es werden alle Einträge angezeigt, bei denen das Datum 'newFrom' erreicht und 'newTo' noch nicht überschritten ist.
- arc - es werden alle Einträge angezeigt, bei denen das Datum 'newFrom' erreicht und 'newTo' bereits überschritten ist.
	
The 'data-news-txt-len' parameter specifies the number of characters that are already displayed when the news entry is collapsed. This value can be chosen from 0 to any value.

The 'data-news-limit' parameter limits the number of news items displayed to the specified number. This is used e.g. on the 
[start of my home page](http://www.aleksander.de/index.html "http://www.aleksander.de").

The 'data-news-init-idx' parameter specifies which entry is already expanded at startup. 0 means that no entry is expanded. All values between 1-n cause the corresponding entry to be expanded. The appearance and operation are the same as the accordion.	
	
The following is an excerpt from the News JSON file.
```json
{
    "newFrom": "2023-03-15",
    "newTo": "2023-12-31",
    "title": "Der neue Brutkasten wird bezogen", 
    "body": ["Wir liegen fast täglich mit dem Fotoapparat auf der Lauer. Jetzt haben wir ..."], 
    "img": [],
    "imgBody": [],
    "href": "content/aleks/html/news/Nistkasten-2023.html"
},	
```
If the JSON file "newsList.json" is filled out as in the example, the date-dependent entries are determined automatically and displayed according to the selected parameters. With this mechanism, the maintenance of news can be straightened out in terms of time, since "old" entries automatically disappear from the focus of the news file but are still available in the archive. In order to display all entries recorded in the news JSON file, the author must ensure that either the 'all' mode is used on at least one HTML page or that 'new' and 'arc' are used on two pages without restriction ('data -news-limit') is selected.
	
The values from the JSON file are processed according to the following rule:
- If both fields "body" and "img" are specified, the display will automatically have two columns.
- If only one of the two fields is specified, it is displayed in one column.
- The "imgBody" field is always displayed as a caption.
- If none of the two fields "body" and "img" are specified, this part of the display is suppressed. Then there should be an "href" entry.
- In the "href" field, an optional HTML page can be specified, which is attached to the part defined above. This may be necessary if, for example, a link is to be displayed. Html code cannot be displayed in the "body" field, only format-free text can be used here.	
	
##### eaAddHtml on your Html pages	
This mechanism is used in several places in the application. But you can also build it into your HTML pages yourself. You only have to fill the variable url with a correct URL and the page will be imported.
```html
<div ea-add-html = "content/aleks/html/news/Nistkasten-2023.html"></div>	
```
	
##### automatically calculated sitemap
Put the following entrie in your naviList.json file:
```json
{"label": "SiteMap", "href": "#!/srv/smap", "url": "app/template/sitemap.html", "imgKey": ""}	
```
The HTML files stored in the Template directory are intended for use within the application. In general, no change is required.
	
##### sitemap.xml and sitemapimage.xml
The export of the two files sitemap.xml and sitemapimages.xml is integrated in the SiteMap page. Add to the URL of your SiteMap page "?Admin" and call the page. The a picture button is displayed. Click on the picture an the bvoth files will exported. 
for example: [www.aleksander.de/#!/srv/smap?Admin](www.aleksander.de/#!/srv/smap?Admin "http://www.aleksander.de")


	
	
	
	
