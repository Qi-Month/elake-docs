(()=>{var l={ignores:[],style:{color:"#ffffff",bgColor:"#404040",extra:""},image:{margin:"0.5em",isRound:!0,size:30},load:{isOpen:!1,color:"#009999"}};var u=e=>document.querySelector(e),h=async(e,o)=>await(await fetch(`https://api.github.com/repos/${e}/commits?path=/${o}&per_page=100`)).json(),$=e=>{let o=new Set;return e.filter(({author:t})=>t!=null).map(({author:t})=>({url:t.avatar_url,name:t.login})).filter(({name:t})=>o.has(t)?!1:(o.add(t),!0))},x=(e,o)=>{let{size:t}=e;return o.map(({url:d,name:s})=>`<a href="https://github.com/${s}" target="_blank" data-title="@${s}"><img src="${d}" width="${t}" height="${t}" alt="@${s}"></a>`).join("")},b=(e,o)=>o.some(t=>t===`/${e}`);window.$docsify.plugins=[].concat((e,o)=>{let{contributors:t}=o.config,{ignores:d,style:s,image:p,repo:g,load:m}={repo:t.repo,ignores:t.ignores??l.ignores,style:{...l.style,...t.style??{}},image:{...l.image,...t.image??{}},load:{...l.load,...t.load??{}}},i=`${g.split("/")[1]}-contributors`,c=new Map;e.init(()=>{let{color:r,bgColor:a,extra:n}=s,{margin:v,isRound:y}=p,{isOpen:w,color:C}=m,f=document.createElement("style");f.innerText=`.${i} {display: flex;flex-wrap: wrap;padding-top: 1em;}.${i} a {position: relative;margin: ${v};}.${i} a::before,.${i} a::after {position: absolute;box-sizing: border-box;transition: 100ms;opacity: 0;z-index: -1;background-color: ${a};}.${i} a::before {content: "contributor" attr(data-title);top: -100%;left: 50%;transform: translate(-50%, -100%);min-width: max-content;height: 27px;font-size: 12px;border-radius: 5px;padding: 0.5em;color: ${r};}.${i} a::after {content: '';top: calc(-100% + 26.5px);left: 50%;transform: translate(-50%, -500%);width: 20px;height: 7px;clip-path: path("m0 0 l10 7 l10 -7z");}.${i} a:hover::before,.${i} a:hover::after{z-index: 2;opacity: 1;transform: translate(-50%, 0%);}.${i} a img {border-radius: ${y?50:0}%;}${n}${w?`.load-container {width: 100px;height: 30px;font-size: 10px;text-align: center;}.load-container div {display: inline-block;height: 100%;width: 6px;margin-left: 5px;background-color: ${C};animation: load 1.2s infinite ease-in-out;}.load-container div:nth-child(1) {animation-delay: -1.2s;}.load-container div:nth-child(2) {animation-delay: -1.1s;}.load-container div:nth-child(3) {animation-delay: -1.0s;}.load-container div:nth-child(4) {animation-delay: -0.9s;}.load-container div:nth-child(5) {animation-delay: -0.8s;}@keyframes load {0%,40%,100% {transform: scaleY(0.4);}20% {transform: scaleY(1);}}`:""}`,document.head.append(f)}),e.afterEach((r,a)=>{let{file:n}=o.route;return b(n,d)?a(r):a(`${r}<div class='${i}'>${m.isOpen?`<div class='load-container'><div></div><div></div><div></div><div></div><div></div></div>`:""}</div>`)}),e.doneEach(async()=>{let r=u(`.${i}`);if(r==null)return;let{file:a}=o.route,n;c.has(a)?n=c.get(a):(n=await h(g,a),c.set(a,n)),r.innerHTML=x(p,$(n))})},window.$docsify.plugins)})();
