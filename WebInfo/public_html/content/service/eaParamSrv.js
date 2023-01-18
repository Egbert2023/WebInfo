'use strict';

///
//  By default all News params are strings.
//  img, body and imgBody are string arrays with the same length in one object (new). 
//  (default is length===1)
//
var getNewsList = function() {
//  newTo:      The last  day when this new will be show.
//  --------------------------------------------------------------------------
//  title:      Title of new (large letters)
//  newFrom:    The first day when this new will be show. (little letters)
// ---------------------------------------------------------------------------
//  img: (0ptional) ohne picture    |   body: (optional) Body text
//  imgBody: Labeleing of picture   |   the following special characters can be used
//            (optional)            |   /n - for new line and /t - for a tabulator
// ---------------------------------------------------------------------------
//  href:       Any HTML page can be integrated 
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
    var newsList = [
        {
            newFrom: "2022-12-21",
            newTo: "2023-12-31",
            title: "Unsere nächste Generalversammlung", 
            body: ["Hier zum Vormerken der Termin für unsere nächste Generalversammlung: \n\n16. Juni 2023"], 
            img: [],
            imgBody: [],
            href: ""
        },

        {
            newFrom: "2022-09-30",
            newTo: "2023-03-30",
            title: "Wir erhalten Landesförderung!", 
            body: ["Mit unserer geplanten Photovoltaik-Freiflächenanlage in Herford-Diebrock geht es voran. \nNachdem der Bau- und Umweltausschuss bereits am 8. September einstimmig den nächsten Schritt im Genehmigungsverfahren ermöglicht und die Auslegung des Vorentwurfs zur Flächennutzungsplanänderung beschlossen hat, können wir uns nun auch über eine Förderzusage des Landes NRW freuen. In der vergangenen Woche traf der Förderbescheid über rund 372.000 Euro ein. Die Förderung erfolgt über das Programm 'progres.nrw', das den Bau von Freiflächen-Photovoltaikanlagen außerhalb des Erneuerbare-Energien-Gesetzes (EEG) - also ohne garantierte Einspeisevergütung - ermöglichen soll. Wir freuen uns sehr über die Förderzusage, da das Projekt mittlerweile Kosten von rund 2,4 Millionen Euro hat. Auch die bisher immer einstimmig gefallenen positiven Entscheidungen im Bau- und Umweltausschuss der Stadt Herford im Rahmen der bürokratischen Prozesse sind sehr ermutigend. Sie zeigen, dass die lokale Politik hinter unserem Engagement zum Ausbau der Erneuerbaren Energien steht."], 
            img: ["fotos/Landesfoerderung.jpg"],
            imgBody: [],
            href: ""
        },
        {
            newFrom: "2022-09-23",
            newTo: "2023-09-20",
            title: "Coaching-Abschluss in Kassel", 
            body: ["Heute fand das Abschluss-Event unseres Coachings vom energewiende jetzt e.V. statt. Ingo und Fabian haben unsere Erfahrungen und Entwicklungen vorgestellt. Das Treffen heute sowie das ganze Coaching haben viel Spaß gemacht und uns wirklich voran gebracht. Besonders der Austausch mit den anderen Energiegenossenschaften war heute eine große Bereicherung."], 
            img: ["fotos/Coaching-Gruppe.jpg"],
            imgBody: [],
            href: ""
        },
        {
            newFrom: "2022-08-28",
            newTo: "2022-12-24",
            title: "2. Radtour zum Reesberg und Hainkamp", 
            body: ["Heute fand unsere zweite Radtour vom Hainkamp in Herford Diebrock zum Reesberg in Kirchlengern statt. Barbara Rodi vom Vorstand erläuterte den aktuellen Stand zur geplanten großen 2,4 MegaWatt Photovoltaikanlage auf der ehemaligen Boden- und Bauschuttdeponie Am Hainkamp. Diese PV- Anlage wollen wir aus eigener Kraft finanzieren und werben fleißig um weitere Personen, die sich beteiligen möchten.",
                   "Es war ideales Radelwetter. Auf dem Reesberg angekommen war die Gruppe kleiner, aber umso feiner! \nVor Ort wurde dem Vorstand direkt eine Beitrittserklärung überreicht und die Interessenbekundung, sich mit einem qualifizierten Nachrangdarlehen an der neuen großen Photvoltaikanlage beteiligen zu wollen."], 
            img: ["fotos/teilnehmende-der-radtour-stehen-im-kreis-um-barbara-rodi-vorstand-der-energiegenossenschaft.jpg",
                  "fotos/6-personen-oben-auf-dem-reesberg-mit-solarmodulen-im-hintergrund-das-panorama-kirchlengern-und-löhne.jpg"],
            imgBody: ["Interessierte lauschen den Worten von Barbara Rodi zur geplanten PV- Anlage",
                      "Am Ende der Führung auf dem Reesberg"],
            href: ""
        },

        {
            newFrom: "2022-07-28",
            newTo: "2022-12-25",
            title: "Interview mit Barbara Rodi bei Kanal-21", 
            body: ["Jörg Brökel, früherer Chefredakteur von Radio Herford, hat Barbara Rodi aus unserem Vorstand im Rahmen von 'gibt's', einer Sendung des Kanal-21 aus Bielefeld, zu den Themen Energiewende und Öko-Strom interviewt. Ab Minute 19 beginnt das Interview und dauert 10 Minuten.\nHier der Link zum Beitrag."], 
            img: ["fotos/Kanal21-Interview.png"],
            imgBody: [],
            href: ""
        },
        {
            newFrom: "2022-07-28",
            newTo: "2022-12-19",
            title: "PRESSEARTIKEL VOM BALKONKRAFTWERKE-WORKSHOP FÜR FRAUEN", 
            body: [], 
            img: ["fotos/foto-mit-den-15-teilnehmenden-frauen-am-balkonkraftwerke-workshop-mit-balkonkraftwerk.jpg"],
            imgBody: [],
            href: ""
        },
        {
            newFrom: "2022-05-01",
            newTo: "2022-06-27",
            title: "Workshop für Frauen zu Balkonkraftwerken am 2.7.22", 
            body: ["Am Samstag, den 2. Juli 2022 um 15 Uhr findet im Mehrgenerationenhaus Ottelau ein Workshop für Frauen zu Balkonkraftwerken statt. Balkonkraftwerke sind Steckersolarmodule, die Strom aus Sonneneinstrahlung erzeugen. Bis zu 600 Watt Leistung können sie einfach in eine Steckdose gesteckt werden – wie ein Haushaltsgerät. Der Vorteil: damit kann eine Grundlast abgedeckt werden und die Stromrechnung sinkt. Außerdem trägt jedes Steckersolarmodul zum Klimaschutz bei. Es kann auch in den Garten gestellt werden oder auf die Terasse. Einige Formalien müssen beachtet und evtl. ein Zähler ausgetauscht werden.\n\nZiel des Workshops ist, dass jede Frau danach Bescheid weiß, wie das Gerät funktioniert, wie es installiert wird und wie die Anmeldung beim Netzbetreiber und Marktstammdatenregister gemacht wird."], 
            img: ["fotos/foto-mit-den-15-teilnehmenden-frauen-am-balkonkraftwerke-workshop-mit-balkonkraftwerk.jpg"],
            imgBody: ["...damit zukünftig mehr Frauen auf dem Bild zu sehen sind"],
            href: "app/html/new/frauenBalkonkraftwerk-Referentin.html"
        },
        {
            newFrom: "2022-05-01",
            newTo: "2022-05-30",
            title: "Radtour zum Reesberg und Hainkamp am 29.5.22", 
            body: [], 
            img: ["fotos/foto-mit-den-15-teilnehmenden-frauen-am-balkonkraftwerke-workshop-mit-balkonkraftwerk.jpg"],
            imgBody: ['Die "Neue Westfälische" vom 21. Mai 2022'],
            href: ""
        },
        {
            newFrom: "2021-10-01",
            newTo: "2021-12-31",
            title: "UNSERE NÄCHSTE GROSSE PHOTOVOLTAIKANLAGE IST IN PLANUNG !", 
            body: ["Bei strahlendem Sonnenschein hatten sich Kinder mit ihren Eltern auf dem Gelände des zukünftigen Bürger*innsolarparks auf die Suche nach Ostereiern gemacht. Zwei Kinder fanden besonders markierte Eier, mit denen sie einen Anteil an unserer Bürgerenergiegenossenschaft geschenkt bekamen. Bei Kaffee und leckerem Kuchen der Biobäckerei Farina, der mit Bürger:innenstrom aus unseren PV-Anlagen gebacken wurde, wurde gefachsimpelt und über die FEGH erzählt. Auch Nachbar:innen der zukünftigen 2,4 MW großen PV-Anlage waren unserer Einladung gefolgt."], 
            img: ["fotos/ostereiersuche-am-ostermontag-mit-einigen-teilnehmenden-und-aktiven-der-fegh-eg.jpg"],
            imgBody: ['Ostereiersuche am Ostermontag mit einigen Teilnehmenden und Aktiven der FEGH eG'],
            href: ""
        }
        
    ];         
    let yourDate = new Date();
    let yy = yourDate.toISOString().split('T')[0];   
    var retList = [];
    for(let i=0; i<newsList.length; i++ ) {
        (yy < newsList[i].newFrom)? "":retList.push(newsList[i]);
    };
    return retList;
};
    
/*
 * When a navigation object has a sub menu then an id is nessesary! * 
 */        
var getNaviList = function() {
    var naviList = [
        {id:"navStart", label: "Start", href: "#!/home", url: "app/html/home.html",
            subm: []},

        {id:"navErg", label: "Öko-Energie", href: "#!/erg",  url: "app/html/erg.html",
            subm: [ {label: "Bürger-Ökostrom", href: "#!/erg/1", url: "app/html/erg/erg0001.html"},
                    {label: "Bürger-Ökogas", href: "#!/erg/2", url: "app/html/erg/erg0002.html"}                                                        
                                               ]},
        {id:"navWir", label: "Wir", href: "#!/wir", url: "app/html/wir.html",
            subm: [ {label: "Kontakt", href: "#!/wir/1", url: "app/html/wir/wir0001.html"},
                    {label: "Philosophie", href: "#!/wir/2", url: "app/html/wir/wir0002.html"}, 
                    {label: "Satzung", href: "#!/wir/3", url: "app/html/wir/wir0003.html"}
                                             ]},                                                    
        {id:"navNews", label: "News", href: "#!/new", url: "app/html/news.html", 
            subm: [ {label: "Archiv", href: "#!/new/1", url: "app/html/new/newArchiv.html"}]},

        {id:"navProj", label: "Projekte", href: "#!/pro", url: "app/html/projects.html", 
            subm: [ {id: "navProHk", label: "Hainkamp", href: "#!/pro/hk", url: "app/html/pro/Hainkamp.html", 
                        subm: [{label: "Tagebuch", href: "#!/pro/hk/tb", url: "app/html/pro/HainkampTagebuch.html"}]},
                
                    {id: "navProD", label: "Bauschuttdeponie Reesberg", href: "#!/pro/1", url: "app/html/pro/Bauschuttdeponie-Reesberg.html", 
                        subm: [{label: "Projektbeschreibung", href: "#!/pro/1/1", url: "app/html/pro/ProjektbeschreibungR.html"}]},
                    {label: "Erich-Gutenberg- Berufskolleg", href: "#!/pro/2", url: "app/html/pro/pro0002.html"},
                    {label: "Bergs Hof", href: "#!/pro/3", url: "app/html/pro/pro0003.html"},
                    {label: "Kindergarten Haus Lukas", href: "#!/pro/4", url: "app/html/pro/pro0004.html"},
                    {label: "Kreissporthalle Herford", href: "#!/pro/5", url: "app/html/pro/pro0005.html"},
                    {label: "Luise Scheppler Kindergarten", href: "#!/pro/6", url: "app/html/pro/pro0006.html"},
                    {label: "B u. S Bünde", href: "#!/pro/7", url: "app/html/pro/pro0007.html"},
                    {label: "Gärtnerei Ulenburg und Familie Esser", href: "#!/pro/8", url: "app/html/pro/pro0008.html"},
                    {label: "Reiterhof Kahre", href: "#!/pro/9", url: "app/html/pro/pro0009.html"},
                    {label: "Bahnhof Bieren", href: "#!/pro/10", url: "app/html/pro/pro0010.html",
                        subm: [{label: "Details 1", href: "#!/pro/10/1", url: "app/html/pro/pro0010-1.html"},
                               {label: "Details 2", href: "#!/pro/10/2", url: "app/html/pro/pro0010-2.html"}]},
                    {label: "Familie Beversdorff", href: "#!/pro/XX", url: "app/html/pro/pro00XX.html"}
            ]},

        {id:"navSrv", label: "Service", href: "#!/srv", url: "app/html/service.html", 
            subm: [ {label: "Beititt", href: "#!/srv/1", url: "app/html/srv/srv0001.html"},
                    {label: "Anteilserhöhung", href: "#!/srv/2", url: "app/html/srv/srv0002.html"},
                    {label: "Downloads", href: "#!/srv/3", url: "app/html/srv/srv0003.html"},
                    {label: "Impressum", href: "#!/impressum", url: "app/html/Impressum.html"},
                    {label: "Cookies", href: "#!/cookies", url: "app/html/CookiesNotRequired.html"}
                  ]
        }
            
    ];
    
    
//    // Test
//    let obj = naviList.find(o => o.id === 'navProj');
//    console.log("naviList.id ==='navProj'");
//    console.log(obj);

    return naviList;
};

var getImgBoxList = function() {
    var imgBoxList = [
        {   imgKey: 'Hainkamp',
            imgBodyList: ["Luftaufnahme mit geplanter Panelen-Aufteilung",
                           "Mitglieder mit Plakat",
                           "Hainkamp Karte der Gemarkung"],
            imgList: ["app/pictures/pro/HainkampLuftaufnahme.png",
                           "app/pictures/pro/GruppeMitLogoPlakat.jpg",
                           "app/pictures/pro/HainkampKarte.png"]
        },
        {   imgKey: 'Home',
            imgBodyList: ["Mitglieder der Genossenschaft"],
            imgList: ["fotos/gruppenfoto-fegheg.jpg"]
        },
        {   imgKey: 'anyOther',
            imgBodyList: [],
            imgList: []
        }
    ];
    var ret = imgBoxList;
//    for(let i=0; i<imgBoxList.length; i++) {
//        if(imgBoxList[i].imgGroup === imgGroup) {
//            ret = imgBoxList[i];
//        }
//    }
    return ret;
}; 

var getProjectList = function() {
    var projectList = [
        {
            title: "ERICH-GUTENBERG- BERUFSKOLLEG",
            href: "#!/pro/1",
            templateUrl: "app/html/pro/pro0001"
        }

    ];            
    return projectList;
};

// Baground pictures
var getObjBg = function() {        
    var key = ["home", "erg", "wir", "new", "pro", "srv", "impressum"];
    var pic = [ "url(fotos/Solardach-mit-Blume.jpg)", 
            "url(fotos/Solaranlage-mit-hängenden-Kablen.jpg)", 
            "url(fotos/Solardach-im-Winter.jpg)", 
            "url( fotos/Lichter-am-Haus.jpg)", 
            "url( fotos/große-photovoltaik-anlage.jpg)", 
            "url( fotos/Solarreinigung-auf-einem-Dach-Download.jpg)", 
            "url( fotos/gruppenfoto-fegheg.jpg)"
        ];
    var objBg = {};

    for(var i = 0; i < key.length; i++){
            objBg[key[i]] = pic[i];
    }   
    return objBg;
};

var getCurrentLink = function(path) {
    var naviList = getNaviList();
    var obj = {};
    var ret = [];
    
// href -> label
// if( label in subm) --> label    
    naviList.forEach(o => {
        if(o.href === '#!' + path) {
            obj = {label: o.label, href: o.href};
            ret.push(obj);
        };
        
        o.subm.forEach(os => {
            if(os.href === '#!' + path) {
                obj = {label: o.label, href: o.href};
                ret.push(obj);
                obj = {label: os.label, href: os.href};
                ret.push(obj);
            };
            
            if(os.subm !== undefined) {
                os.subm.forEach(oss => {
                    if(oss.href === '#!' + path) {
                        obj = {label: o.label, href: o.href};
                        ret.push(obj);
                        obj = {label: os.label, href: os.href};
                        ret.push(obj);
                        obj = {label: oss.label, href: oss.href};
                        ret.push(obj);                    
                    }
                });
            }
        });
    });
    
    return ret;
};