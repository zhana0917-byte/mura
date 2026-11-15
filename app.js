import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const translations = {
 kk: {
  navJourney:"Жібек жолы",navSymbols:"Таңбалар",navHeritage:"Мұралар",navAbout:"Жоба туралы",eyebrow:"ИНТЕРАКТИВТІ ЦИФРЛЫҚ МУЗЕЙ",
  heroTitle:"Бір мұра –<br><em>бірнеше халық.</em>",heroLead:"Түркі халықтарын біріктіретін таңбалар, дәстүрлер мен Ұлы Жібек жолының мәдени ізіне саяхат.",
  explore:"Зерттеуді бастау",discoverSymbols:"Таңбалар үндестігі",heroNote:"Мәдениеттер тоғысқан кеңістік",tagShared:"ОРТАҚ ТАМЫР",tagLegacy:"МӘДЕНИ МҰРА",
  statCountries:"Түркі елі",statHeritage:"Ортақ мәдени кеңістік",statStories:"Ұрпақтан ұрпаққа жалғасқан тарих",
  chapterOne:"01 / ТАРИХИ БАЙЛАНЫС",journeyTitle:"Ұлы Жібек жолы",journeyLead:"Шығыс пен Батысты байланыстырған сауда жолы ғана емес, білім, өнер және мәдениет алмасқан өркениет көпірі.",
  mapLive:"ИНТЕРАКТИВТІ 3D КАРТА",loading3d:"3D карта жүктелуде...",mapHint:"Картаны айналдыру үшін сүйреңіз · Үлкейту үшін scroll",routeLegend:"Ұлы Жібек жолының негізгі бағыты",mapDisclaimer:"Схемалық тарихи визуализация",
  chapterTwo:"02 / ТАҢБАЛАР МЕН БЕЛГІЛЕР",symbolsTitle:"Таңбалар үндестігі",symbolsLead:"Әр халықтың өзіндік белгісі бар. Кейбір геометриялық пішіндер мен ою мотивтері ортақ тарихи және көркемдік байланыстарды көрсетеді.",
  compareLabel:"ОРТАҚ МОТИВТЕРДІ САЛЫСТЫРУ",symbolFeatureTitle:"Өрнек – ұрпақ жады",symbolFeatureText:"Қошқармүйіз, ирек су, күн және өсімдік тектес өрнектер тұрмыстық бұйымдарда, киімде және сәулетте кездеседі.",
  kazakh:"Қазақ",kyrgyz:"Қырғыз",uzbek:"Өзбек",turkish:"Түрік",azerbaijani:"Әзербайжан",turkmen:"Түрікмен",
  kazakhMotif:"Таңба және қошқармүйіз өрнегі",kyrgyzMotif:"Күн бейнесі және шырдак өрнегі",uzbekMotif:"Геометриялық және өсімдік оюлары",turkishMotif:"Кілем өрнектері мен дәстүрлі нақыш",azerbaijaniMotif:"Кілем тоқуындағы қайталанатын мотивтер",turkmenMotif:"Гүл өрнегі және кілем таңбалары",
  symbolNote:"Ескерту: көрсетілген белгілер – көркемдік салыстыруға арналған шартты графикалық мотивтер; олар ресми мемлекеттік таңбалар немесе бірдей мағынадағы тарихи таңбалар ретінде берілмейді.",
  chapterThree:"03 / ОРТАҚ МҰРА",heritageTitle:"Мәдениеттер тоғысы",heritageLead:"Ұқсастықтар мен айырмашылықтарды танып, әр халықтың бірегей мұрасын құрметтеу.",
  yurtTitle:"Киіз үй мәдениеті",yurtText:"Көшпелі өмір салтына бейімделген баспана – кеңістік, отбасы және табиғатпен үйлесімнің белгісі.",
  craftTitle:"Ою-өрнек және қолөнер",craftText:"Кілем, киіз, кесте және зергерлік өнердегі жергілікті нақыштар.",musicTitle:"Музыкалық мұра",musicText:"Домбыра, қобыз, қомуз және басқа аспаптар арқылы сақталған әуен дәстүрлері.",
  architectureTitle:"Сәулет өнері",architectureText:"Күмбездер, өрнекті қасбеттер және тарихи қалалардағы құрылыс дәстүрлері.",
  chapterFour:"04 / БІРЛІК ПЕН БОЛАШАҚ",unityTitle:"Ортақ тамыр.<br><em>Бай мәдениет.</em>",unityText:"Мәдени мұра – халықтарды жақындастыратын көпір. Оны зерттеу, сақтау және келесі ұрпаққа жеткізу – ортақ міндет.",
  unityFooter:"БІР МҰРА – БІРНЕШЕ ХАЛЫҚ",footerText:"Мәдени мұраны тану – болашаққа аманат.",
  cities:{istanbul:["Стамбул","Еуропа мен Азияны жалғаған тарихи торап."],samarkand:["Самарқанд","Сауда, ғылым, сәулет және қолөнер дамыған маңызды орталық."],taraz:["Тараз","Ортағасырлық қалалық мәдениет пен сауда байланыстарының ірі орталығы."],turkistan:["Түркістан","Түркі әлемінің рухани және тарихи орталықтарының бірі."],otrar:["Отырар","Ғылым, кітапхана дәстүрі және керуен саудасымен танылған қала."],kashgar:["Қашғар","Шығыс Түркістандағы маңызды сауда және мәдени байланыс торабы."]}
 },
 ru: {
  navJourney:"Шёлковый путь",navSymbols:"Тамги",navHeritage:"Наследие",navAbout:"О проекте",eyebrow:"ИНТЕРАКТИВНЫЙ ЦИФРОВОЙ МУЗЕЙ",
  heroTitle:"Одно наследие –<br><em>много народов.</em>",heroLead:"Путешествие по символам, традициям и культурным следам Великого шёлкового пути, объединяющим тюркские народы.",
  explore:"Начать исследование",discoverSymbols:"Сходство символов",heroNote:"Пространство встречи культур",tagShared:"ОБЩИЕ КОРНИ",tagLegacy:"КУЛЬТУРНОЕ НАСЛЕДИЕ",
  statCountries:"Тюркских стран",statHeritage:"Общее культурное пространство",statStories:"История, передаваемая поколениями",
  chapterOne:"01 / ИСТОРИЧЕСКИЕ СВЯЗИ",journeyTitle:"Великий шёлковый путь",journeyLead:"Не только торговый маршрут между Востоком и Западом, но и мост для обмена знаниями, искусством и культурой.",
  mapLive:"ИНТЕРАКТИВНАЯ 3D-КАРТА",loading3d:"Загрузка 3D-карты...",mapHint:"Перетаскивайте, чтобы вращать · Scroll для масштабирования",routeLegend:"Основное направление Великого шёлкового пути",mapDisclaimer:"Схематичная историческая визуализация",
  chapterTwo:"02 / ЗНАКИ И СИМВОЛЫ",symbolsTitle:"Созвучие тамг",symbolsLead:"У каждого народа есть свои знаки. Некоторые геометрические формы и орнаментальные мотивы отражают общие исторические и художественные связи.",
  compareLabel:"СРАВНЕНИЕ ОБЩИХ МОТИВОВ",symbolFeatureTitle:"Орнамент – память поколений",symbolFeatureText:"Рога барана, волны, солнце и растительные мотивы встречаются в предметах быта, одежде и архитектуре.",
  kazakh:"Казахи",kyrgyz:"Кыргызы",uzbek:"Узбеки",turkish:"Турки",azerbaijani:"Азербайджанцы",turkmen:"Туркмены",
  kazakhMotif:"Тамга и орнамент қошқармүйіз",kyrgyzMotif:"Солнечный мотив и орнамент шырдак",uzbekMotif:"Геометрические и растительные узоры",turkishMotif:"Ковровые узоры и традиционные мотивы",azerbaijaniMotif:"Повторяющиеся мотивы ковроткачества",turkmenMotif:"Гюль и ковровые знаки",
  symbolNote:"Примечание: показанные знаки – условные графические мотивы для художественного сравнения; они не представлены как официальные государственные символы или исторические тамги с одинаковым значением.",
  chapterThree:"03 / ОБЩЕЕ НАСЛЕДИЕ",heritageTitle:"Переплетение культур",heritageLead:"Узнавать сходства и различия, уважая уникальное наследие каждого народа.",
  yurtTitle:"Культура юрты",yurtText:"Жилище, приспособленное к кочевому образу жизни, – символ пространства, семьи и гармонии с природой.",
  craftTitle:"Орнамент и ремёсла",craftText:"Региональные мотивы в коврах, войлоке, вышивке и ювелирном искусстве.",musicTitle:"Музыкальное наследие",musicText:"Музыкальные традиции, сохранённые через домбру, кобыз, кому́з и другие инструменты.",
  architectureTitle:"Архитектура",architectureText:"Купола, орнаментальные фасады и строительные традиции исторических городов.",
  chapterFour:"04 / ЕДИНСТВО И БУДУЩЕЕ",unityTitle:"Общие корни.<br><em>Богатая культура.</em>",unityText:"Культурное наследие – мост, сближающий народы. Изучать его, сохранять и передавать следующим поколениям – наша общая задача.",
  unityFooter:"ОДНО НАСЛЕДИЕ – МНОГО НАРОДОВ",footerText:"Знать культурное наследие – значит беречь его для будущего.",
  cities:{istanbul:["Стамбул","Исторический узел, соединяющий Европу и Азию."],samarkand:["Самарканд","Важный центр торговли, науки, архитектуры и ремёсел."],taraz:["Тараз","Крупный центр средневековой городской культуры и торговых связей."],turkistan:["Туркестан","Один из духовных и исторических центров тюркского мира."],otrar:["Отрар","Город, известный научными традициями, библиотекой и караванной торговлей."],kashgar:["Кашгар","Важный узел торговли и культурных связей Восточного Туркестана."]}
 },
 en: {
  navJourney:"Silk Road",navSymbols:"Tamgas",navHeritage:"Heritage",navAbout:"About",eyebrow:"INTERACTIVE DIGITAL MUSEUM",
  heroTitle:"One heritage –<br><em>many peoples.</em>",heroLead:"Explore the symbols, traditions and cultural traces of the Great Silk Road that connect Turkic peoples.",
  explore:"Start exploring",discoverSymbols:"Shared symbol patterns",heroNote:"Where cultures meet",tagShared:"SHARED ROOTS",tagLegacy:"CULTURAL HERITAGE",
  statCountries:"Turkic countries",statHeritage:"A shared cultural space",statStories:"History passed through generations",
  chapterOne:"01 / HISTORICAL CONNECTIONS",journeyTitle:"The Great Silk Road",journeyLead:"More than a trade route between East and West, it was a bridge for exchanging knowledge, art and culture.",
  mapLive:"INTERACTIVE 3D MAP",loading3d:"Loading 3D map...",mapHint:"Drag to rotate · Scroll to zoom",routeLegend:"Main route of the Great Silk Road",mapDisclaimer:"Schematic historical visualization",
  chapterTwo:"02 / SIGNS AND SYMBOLS",symbolsTitle:"The harmony of tamgas",symbolsLead:"Every people has its own signs. Some geometric forms and ornamental motifs reflect shared historical and artistic connections.",
  compareLabel:"COMPARING SHARED MOTIFS",symbolFeatureTitle:"Ornament – memory across generations",symbolFeatureText:"Ram-horn, wave, sun and floral motifs appear in everyday objects, clothing and architecture.",
  kazakh:"Kazakh",kyrgyz:"Kyrgyz",uzbek:"Uzbek",turkish:"Turkish",azerbaijani:"Azerbaijani",turkmen:"Turkmen",
  kazakhMotif:"Tamga and қошқармүйіз ornament",kyrgyzMotif:"Sun imagery and shyrdak patterns",uzbekMotif:"Geometric and floral designs",turkishMotif:"Carpet patterns and traditional motifs",azerbaijaniMotif:"Repeating carpet-weaving motifs",turkmenMotif:"Gul motifs and carpet symbols",
  symbolNote:"Note: the signs shown are illustrative graphic motifs for artistic comparison; they are not presented as official national emblems or historical tamgas with identical meanings.",
  chapterThree:"03 / SHARED HERITAGE",heritageTitle:"Cultures intertwined",heritageLead:"Discover similarities and differences while respecting the unique heritage of every people.",
  yurtTitle:"Yurt culture",yurtText:"A dwelling adapted to nomadic life – a symbol of space, family and harmony with nature.",
  craftTitle:"Ornament and crafts",craftText:"Regional motifs found in carpets, felt, embroidery and jewellery.",musicTitle:"Musical heritage",musicText:"Musical traditions preserved through the dombra, kobyz, komuz and other instruments.",
  architectureTitle:"Architecture",architectureText:"Domes, ornamented facades and building traditions in historic cities.",
  chapterFour:"04 / UNITY AND THE FUTURE",unityTitle:"Shared roots.<br><em>Rich cultures.</em>",unityText:"Cultural heritage is a bridge that brings peoples closer. Studying, preserving and passing it on to future generations is a shared responsibility.",
  unityFooter:"ONE HERITAGE – MANY PEOPLES",footerText:"Understanding heritage is a promise to the future.",
  cities:{istanbul:["Istanbul","A historic junction connecting Europe and Asia."],samarkand:["Samarkand","An important centre of trade, science, architecture and crafts."],taraz:["Taraz","A major centre of medieval urban culture and trade connections."],turkistan:["Turkistan","One of the spiritual and historical centres of the Turkic world."],otrar:["Otrar","A city known for scholarship, library traditions and caravan trade."],kashgar:["Kashgar","An important trade and cultural junction in Eastern Turkestan."]}
 }
};

let currentLang = "kk";
function setLanguage(lang){
  if(!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n, value=translations[lang][key];
    if(typeof value==="string") el.innerHTML=value;
  });
  document.querySelectorAll(".lang").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  const activeCity=document.querySelector(".city-chip.active")?.dataset.city || "istanbul";
  updateCity(activeCity);
}
document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
const menuToggle=document.getElementById("menuToggle");
menuToggle.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.toggle("open"));
document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".desktop-nav").classList.remove("open")));

function updateCity(id){
 const city=translations[currentLang].cities[id];
 if(!city)return;
 document.getElementById("cityName").textContent=city[0];
 document.getElementById("cityDescription").textContent=city[1];
 document.querySelectorAll(".city-chip").forEach(b=>b.classList.toggle("active",b.dataset.city===id));
}
document.querySelectorAll(".city-chip").forEach(b=>b.addEventListener("click",()=>updateCity(b.dataset.city)));
setLanguage("kk");

// Three.js tabletop map: intentionally schematic, not a surveyed historical map.
const mount=document.getElementById("silkMap");
let scene,camera,renderer,controls,routeGroup;
const cityObjects={};
const routePoints=[
 new THREE.Vector3(-5.7,.25,1.35),new THREE.Vector3(-4.3,.28,.75),new THREE.Vector3(-2.8,.32,.2),
 new THREE.Vector3(-1.3,.35,-.05),new THREE.Vector3(.2,.38,-.35),new THREE.Vector3(1.4,.4,-.1),
 new THREE.Vector3(2.7,.34,-.55),new THREE.Vector3(4.1,.32,-.05),new THREE.Vector3(5.3,.28,.65)
];
function mat(color,rough=.7,metal=0){return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});}
function addLandShape(points,depth,color,y=0){
 const shape=new THREE.Shape();
 shape.moveTo(points[0][0],points[0][1]);
 for(let i=1;i<points.length;i++)shape.lineTo(points[i][0],points[i][1]);
 shape.closePath();
 const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.09,bevelThickness:.08});
 const mesh=new THREE.Mesh(geo,mat(color,.92));mesh.rotation.x=-Math.PI/2;mesh.position.y=y;mesh.castShadow=true;mesh.receiveShadow=true;scene.add(mesh);return mesh;
}
function addCity(name,point,index){
 const group=new THREE.Group();group.position.copy(point);group.position.y=.58;
 const base=new THREE.Mesh(new THREE.CylinderGeometry(.17,.22,.08,24),mat(0xd6a85d,.35,.5));base.position.y=.04;group.add(base);
 const glow=new THREE.Mesh(new THREE.SphereGeometry(.09,16,16),new THREE.MeshBasicMaterial({color:0xffd27e}));glow.position.y=.16;group.add(glow);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.22,.012,8,40),new THREE.MeshBasicMaterial({color:0x6bdcff}));ring.rotation.x=Math.PI/2;ring.position.y=.11;group.add(ring);
 // Tiny landmark silhouette
 const tower=new THREE.Mesh(new THREE.CylinderGeometry(.035,.055,.26,8),mat(0xe8d1a3));tower.position.set(.13,.18,0);group.add(tower);
 const roof=new THREE.Mesh(new THREE.ConeGeometry(.07,.12,8),mat(0xd9aa63,.5,.2));roof.position.set(.13,.37,0);group.add(roof);
 scene.add(group);cityObjects[name]=group;
}
function initMap(){
 scene=new THREE.Scene();scene.background=new THREE.Color(0x101a2c);scene.fog=new THREE.Fog(0x101a2c,14,25);
 camera=new THREE.PerspectiveCamera(38,mount.clientWidth/mount.clientHeight,.1,100);camera.position.set(0,8.6,10.8);
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(mount.clientWidth,mount.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;mount.prepend(renderer.domElement);
 controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.06;controls.minDistance=7;controls.maxDistance=17;controls.maxPolarAngle=Math.PI*.47;controls.target.set(0,.25,0);controls.autoRotate=true;controls.autoRotateSpeed=.28;
 scene.add(new THREE.HemisphereLight(0xa7d7ff,0x44331f,2.1));
 const key=new THREE.DirectionalLight(0xffd59a,3.3);key.position.set(-4,9,5);key.castShadow=true;scene.add(key);
 const blue=new THREE.PointLight(0x39bfff,38,12);blue.position.set(4,3,-3);scene.add(blue);
 const gold=new THREE.PointLight(0xffb94f,28,10);gold.position.set(-4,3,2);scene.add(gold);
 const platform=new THREE.Mesh(new THREE.BoxGeometry(13.3,.45,7.5),mat(0x26334a,.38,.45));platform.position.y=-.35;platform.receiveShadow=true;platform.castShadow=true;scene.add(platform);
 const top=new THREE.Mesh(new THREE.BoxGeometry(13.05,.08,7.25),mat(0x172b3b,.4,.25));top.position.y=-.08;scene.add(top);
 // stylized Eurasian landmass fragments
 addLandShape([[-6,-.9],[-5.4,-1.5],[-4.3,-1.4],[-3.8,-.8],[-2.9,-.9],[-2.4,-.25],[-1.3,-.3],[-.8,.2],[.2,.1],[.8,.8],[1.8,.6],[2.3,1.2],[3.4,1.1],[4.2,.6],[5.6,1],[6,.2],[5.2,-.6],[4.4,-1.1],[3.3,-1.4],[2.5,-1.2],[1.5,-1.7],[.4,-1.4],[-.7,-1.8],[-2,-1.5],[-3,-1.8],[-4.1,-1.6],[-5,-1.9]],.13,0x526b61,.02);
 // mountain ridges
 for(let i=0;i<24;i++){
  const x=-4.8+(i%12)*.82,z=-.5+Math.floor(i/12)*.85;
  const m=new THREE.Mesh(new THREE.ConeGeometry(.35+Math.random()*.22,.55+Math.random()*.5,5),mat(i%3===0?0x89948b:0x667d79));
  m.position.set(x,.36,z);m.rotation.y=Math.random();m.castShadow=true;scene.add(m);
 }
 // water border accents
 const border=new THREE.Mesh(new THREE.BoxGeometry(12.9,.018,7.1),new THREE.MeshBasicMaterial({color:0x39bfff,wireframe:true,transparent:true,opacity:.16}));border.position.y=.18;scene.add(border);
 // route line
 const curve=new THREE.CatmullRomCurve3(routePoints);const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,150,.035,8,false),new THREE.MeshBasicMaterial({color:0xffc66e}));tube.position.y=.62;scene.add(tube);
 const routeGlow=new THREE.Mesh(new THREE.TubeGeometry(curve,150,.09,8,false),new THREE.MeshBasicMaterial({color:0xffb74d,transparent:true,opacity:.13}));routeGlow.position.y=.6;scene.add(routeGlow);
 const cityNames=["istanbul","samarkand","taraz","turkistan","otrar","kashgar"];
 cityNames.forEach((n,i)=>addCity(n,routePoints[i===0?0:i===1?2:i===2?3:i===3?4:i===4?5:8],i));
 // caravan silhouettes
 for(let i=0;i<4;i++){
  const g=new THREE.Group();const body=new THREE.Mesh(new THREE.SphereGeometry(.2,12,10),mat(0x49372b));body.scale.set(1.5,.7,.65);body.position.y=.18;g.add(body);
  const hump=new THREE.Mesh(new THREE.SphereGeometry(.12,10,8),mat(0x5d4430));hump.position.set(-.03,.34,0);g.add(hump);
  for(let l=0;l<4;l++){const leg=new THREE.Mesh(new THREE.CylinderGeometry(.025,.02,.25,6),mat(0x4a382d));leg.position.set((l<2?-.18:.18),.02,(l%2?-.1:.1));g.add(leg);}
  g.position.set(-2.5+i*.75,.4,1.55);g.scale.setScalar(.8);scene.add(g);
 }
 // floating decorative rings
 for(let i=0;i<5;i++){const r=new THREE.Mesh(new THREE.TorusGeometry(.25+i*.09,.008,6,48),new THREE.MeshBasicMaterial({color:i%2?0x65d8ff:0xe6bd78,transparent:true,opacity:.25}));r.rotation.x=Math.PI/2;r.position.set(-4+i*2,.7,-2.5);scene.add(r);}
 const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),mat(0x0b1220));floor.rotation.x=-Math.PI/2;floor.position.y=-.61;scene.add(floor);
 const resize=()=>{if(!renderer)return;camera.aspect=mount.clientWidth/mount.clientHeight;camera.updateProjectionMatrix();renderer.setSize(mount.clientWidth,mount.clientHeight);};
 window.addEventListener("resize",resize);
 const clock=new THREE.Clock();
 function animate(){requestAnimationFrame(animate);const t=clock.getElapsedTime();controls.update();cityObjects.istanbul?.children[1].scale.setScalar(1+.12*Math.sin(t*2));renderer.render(scene,camera);}
 animate();
 document.getElementById("mapLoading").classList.add("hidden");
}
try{initMap();}catch(err){console.error("3D map failed to initialize:",err);document.getElementById("mapLoading").innerHTML="3D map could not load. Please check your internet connection and WebGL support.";}
