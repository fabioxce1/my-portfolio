(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))q(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&q(h)}).observe(document,{childList:!0,subtree:!0});function k(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function q(n){if(n.ep)return;n.ep=!0;const r=k(n);fetch(n.href,r)}})();const o=window.anime,Z=Array.from({length:20}).map(()=>'<div class="shape"></div>').join(""),tt=Array.from({length:169}).map(()=>'<div class="dot"></div>').join("");document.querySelector("#app").innerHTML=`
  <section class="hero">
    <div class="hero-sticky">
      <div class="hero-container">
        <div class="intro">
          <h1 class="linea-1">¡Hola! Soy <span class="highlight">Fabio Santos</span></h1>
          <p class="linea-2">Ingeniero de Sistemas</p>
          <p class="linea-3">Donde la tecnología y la creatividad convergen. Como desarrollador experto en el ecosistema PHP/Laravel, me dedico a construir aplicaciones web que no solo funcionan, sino que impactan. Desde la integración de Gemini API para soluciones inteligentes hasta el diseño de interfaces dinámicas con GrapesJS, transformo ideas en experiencias memorables y productos digitales de alto nivel.</p>
      
        </div>
        <div class="model-wrapper">
          <model-viewer 
            src="./assets/3d/fabio-sueter.glb" 
            alt="Un modelo 3D de un Astronauta" 
            camera-target="0 -18 0"
            camera-orbit="0deg 85deg 30"
            camera-controls
            disable-zoom
            disable-pan
            ar 
            autoplay
            shadow-intensity="1">
            
        
            <button class="hotspot" slot="hotspot-head" data-position="0 1.85 0" data-normal="0 0 1">
              <div class="hotspot-annotation">Full-Stack Laravel Developer</div>
            </button>
            <button class="hotspot" slot="hotspot-chest" data-position="-0.85 1.5 0" data-normal="-1 0 1">
              <div class="hotspot-annotation">Backend: Laravel & PHP 8.x</div>
            </button>
            <button class="hotspot" slot="hotspot-shoulder-r" data-position="0.85 1.5 0" data-normal="1 0 1">
              <div class="hotspot-annotation">Arquitectura de Software</div>
            </button>
            <button class="hotspot" slot="hotspot-arm-l" data-position="-0.95 1.2 0" data-normal="-1 0 1">
              <div class="hotspot-annotation">Livewire & Alpine.js</div>
            </button>
            <button class="hotspot" slot="hotspot-arm-r" data-position="0.95 1.2 0" data-normal="1 0 1">
              <div class="hotspot-annotation">Modelado de Datos (SQL)</div>
            </button>
            <button class="hotspot" slot="hotspot-hand-l" data-position="-0.8 0.9 0" data-normal="-1 0 1">
              <div class="hotspot-annotation">APIs REST (Sanctum)</div>
            </button>
            <button class="hotspot" slot="hotspot-hand-r" data-position="0.8 0.9 0" data-normal="1 0 1">
              <div class="hotspot-annotation">Eloquent ORM & MySQL</div>
            </button>
            <button class="hotspot" slot="hotspot-leg-l" data-position="-0.75 0.5 0" data-normal="-1 0 1">
              <div class="hotspot-annotation">Testing: PHPUnit & Pest</div>
            </button>
            <button class="hotspot" slot="hotspot-leg-r" data-position="0.75 0.5 0" data-normal="1 0 1">
              <div class="hotspot-annotation">UI/UX: Tailwind & Responsive</div>
            </button>
            <button class="hotspot" slot="hotspot-foot-l" data-position="-0.65 0.15 0" data-normal="-1 0 1">
              <div class="hotspot-annotation">Git, CI/CD & Deploy web</div>
            </button>
            <button class="hotspot" slot="hotspot-foot-r" data-position="0.65 0.15 0" data-normal="1 0 1">
              <div class="hotspot-annotation">Tailwind CSS & UI/UX</div>
            </button>

          </model-viewer>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </div>
  </section>

  <section class="proyectos">
    <div class="sticky-stack">
      <div class="monitor-frame">
        <svg class="progress-svg">
          <rect class="progress-bg"></rect>
          <rect class="progress-line progress-red" pathLength="100"></rect>
          <rect class="progress-line progress-green" pathLength="100"></rect>
          <rect class="progress-line progress-blue" pathLength="100"></rect>
        </svg>
        <div class="monitor-content">
          <h2 class="titulo-proyectos">MIS PROYECTOS</h2>
          <div class="cards-wrapper">
        <div class="column column-left">
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/damos-co.png" alt="damos-co">
            </div>
            <div class="card-info">
              <h3>Damos Soluciones</h3>
            </div>
          </div>
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/aplika-co.png" alt="aplika-co">
            </div>
            <div class="card-info">
              <h3>Aplika</h3>
            </div>
          </div>
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/lamantitagris-org.png" alt="lamantitagris-org">
            </div>
            <div class="card-info">
              <h3>Lamantita Gris</h3>
            </div>
          </div>
        </div>
        
        <div class="column column-right">
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/borisdepoortere.png" alt="borisdepoorterel">
            </div>
            <div class="card-info">
              <h3>Boris de poortere</h3>
            </div>
          </div>
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/josuecalderongambamd.png" alt="josuecalderongambamd">
            </div>
            <div class="card-info">
              <h3>Josue Calderon Gambamd</h3>
            </div>
          </div>
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/regencord.png" alt="regencord">
            </div>
            <div class="card-info">
              <h3>Regencord</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="code-features">
    <div class="features-container">
      <h2 class="titulo-proyectos habilidades-title">MIS HABILIDADES</h2>
      <div class="features-text-col">
        <div class="feature-item color-0">
          <h2 class="feature-title">Desarrollo Full-Stack</h2>
          <p class="feature-desc">Solucionador de problemas complejos con dominio de tecnologías punteras en el ecosistema web.</p>
          <ul class="feature-list">
            <li>Dominio avanzado de Laravel</li>
            <li>Interfaces modernas en Vue.js y React</li>
            <li>Arquitectura de software eficiente</li>
          </ul>
        </div>
        <div class="feature-item color-1">
          <h2 class="feature-title">Backend & APIs</h2>
          <p class="feature-desc">Creación y escalado de bases de datos relacionales y conectividad mediante servicios RESTful.</p>
          <ul class="feature-list">
            <li>Diseño de BD en MySQL</li>
            <li>Desarrollo sólido en PHP</li>
            <li>Integración de APIs y Endpoints</li>
          </ul>
        </div>
        <div class="feature-item color-2">
          <h2 class="feature-title">Frontend & UI/UX</h2>
          <p class="feature-desc">Construcción de interfaces responsivas centradas en la experiencia de usuario y código mantenible.</p>
          <ul class="feature-list">
            <li>Maquetación con Tailwind y Bootstrap</li>
            <li>Estilizado estructurado en SCSS / Modules</li>
            <li>Interactividad en JavaScript Vanilla</li>
          </ul>
        </div>
        <div class="feature-item color-3">
          <h2 class="feature-title">DevOps / CI/CD</h2>
          <p class="feature-desc">Integración continua, administración de versiones y despliegue confiable en servidores.</p>
          <ul class="feature-list">
            <li>Control de versiones con Git/GitHub</li>
            <li>Pruebas unitarias de rendimiento</li>
            <li>Administración web (MAMP, Laragon, XAMPP)</li>
          </ul>
        </div>
      </div>
      
      <div class="features-visual-col">
        <div class="feature-monitor">
          <div class="monitor-glow"></div>
          <div class="monitor-glass">
            <div class="code-mockup">
              <div class="code-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <pre><code class="language-js">
<span class="keyword">const</span> <span class="property">fabio</span> = {
  <span class="property">titulacion</span>: <span class="string">"Ingeniero de Sistemas"</span>,
  <span class="property">experiencia</span>: <span class="string">"29 años"</span>,
  <span class="property">core</span>: [<span class="string">"Laravel"</span>, <span class="string">"Vue.js"</span>, <span class="string">"React"</span>],
  <span class="property">habilidades</span>: {
    <span class="property">lenguajes</span>: [<span class="string">"PHP"</span>, <span class="string">"JS"</span>, <span class="string">"C++"</span>, <span class="string">"C#"</span>],
    <span class="property">frontend</span>: [<span class="string">"Tailwind"</span>, <span class="string">"Bootstrap"</span>, <span class="string">"SCSS"</span>],
    <span class="property">herramientas</span>: [<span class="string">"Git"</span>, <span class="string">"Webpack"</span>, <span class="string">"Power BI"</span>]
  },
  <span class="property">trayectoria</span>: [
    { <span class="property">rol</span>: <span class="string">"Full-Stack"</span>, <span class="property">empresa</span>: <span class="string">"Damos Solución"</span>, <span class="property">fecha</span>: <span class="string">"2022 - Pres."</span> },
    { <span class="property">rol</span>: <span class="string">"Analista"</span>, <span class="property">empresa</span>: <span class="string">"EIDEC"</span>, <span class="property">fecha</span>: <span class="string">"2020 - 2021"</span> }
  ],
  <span class="method">iniciarProyectos</span>: <span class="keyword">function</span>() {
    <span class="keyword">return</span> <span class="property">this</span>.<span class="property">habilidades</span>.<span class="method">ejecutar</span>();
  }
};
              </code></pre>
            </div>

            <div class="circle-graphic">
               <div class="ring outer-ring"></div>
               <div class="ring middle-ring"></div>
               <div class="ring inner-ring"></div>
               <div class="anim-container anim-1 color-0">
                 ${Z}
               </div>

               <div class="anim-container anim-2 color-1 active-anim">
                 <svg class="svg-sphere" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                   <g class="sphere-paths">
                     <circle cx="100" cy="100" r="90" />
                     <ellipse cx="100" cy="100" rx="90" ry="40" transform="rotate(30 100 100)" />
                     <ellipse cx="100" cy="100" rx="90" ry="40" transform="rotate(-30 100 100)" />
                     <ellipse cx="100" cy="100" rx="40" ry="90" transform="rotate(30 100 100)" />
                     <ellipse cx="100" cy="100" rx="40" ry="90" transform="rotate(-30 100 100)" />
                     <ellipse cx="100" cy="100" rx="90" ry="15" />
                     <ellipse cx="100" cy="100" rx="15" ry="90" />
                   </g>
                 </svg>
               </div>

    
               <div class="anim-container anim-3 color-2">
                 <div class="grid-wrapper">
                   ${tt}
                 </div>
               </div>

               <div class="anim-container anim-4 color-3">
                 <div class="radar-needle"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section" id="contacto">
    <div class="contact-container">
      <h2 class="titulo-proyectos contact-title">CONTACTO</h2>
      <p class="contact-subtitle">Abriendo archivo de perfil...</p>
      
      <div class="folder-wrapper">
        <div class="folder-back"></div>
        

        <div class="contact-cards">
          <a href="mailto:santosserranofabio@gmail.com" class="contact-card email-card" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/fabio-santos-serrano-135992248/" class="contact-card linkedin-card" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/tuusuario" class="contact-card github-card" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <a href="tel:+573157097171" class="contact-card phone-card" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Teléfono</span>
          </a>
        </div>
        
  
        <div class="folder-front">
          <div class="folder-tab"></div>
          <div class="folder-label">FABIO_SANTOS_DAT</div>
        </div>
      </div>
    </div>
  </section>
`;const et=()=>{const L=()=>{const v=window.innerWidth<=768;document.querySelectorAll(".hotspot").forEach(u=>{u.dataset.basePosition||(u.dataset.basePosition=u.getAttribute("data-position"));const x=u.dataset.basePosition.split(" ").map(Number);if(v){let B=x[0]*.1,y=x[1];u.slot==="hotspot-head"&&y>1.7&&(y=1.7),u.setAttribute("data-position",`${B} ${y} ${x[2]}`)}else u.setAttribute("data-position",u.dataset.basePosition)})};L(),window.addEventListener("resize",L),o.timeline({easing:"easeOutExpo"}).add({targets:".model-wrapper",scale:[.8,1],opacity:[0,1],duration:1200,delay:300});const k=document.querySelector(".proyectos");document.querySelectorAll(".card").length,window.anim1=o({targets:".anim-1 .shape",translateX:function(){return o.random(-80,80)},translateY:function(){return o.random(-80,80)},scale:function(){return o.random(.5,1.5)},rotate:function(){return o.random(-360,360)},duration:function(){return o.random(2e3,4e3)},easing:"easeInOutQuad",direction:"alternate",loop:!0,autoplay:!1}),window.anim2=o({targets:".anim-2 .sphere-paths circle, .anim-2 .sphere-paths ellipse",strokeDashoffset:[o.setDashoffset,0],easing:"easeInOutSine",duration:1e3,delay:function(v,c){return c*150},autoplay:!1});const n={grid:[13,13],from:"center"};window.anim3=o.timeline({loop:!0,autoplay:!1}).add({targets:".anim-3 .dot",scale:[{value:.1,easing:"easeOutSine",duration:500},{value:1,easing:"easeInOutQuad",duration:1200}],delay:o.stagger(100,n)}),window.anim4=o({targets:".anim-4 .radar-needle",rotate:[0,360],duration:1e3,easing:"linear",autoplay:!1});const r=document.querySelector(".contact-section"),h=document.querySelector(".folder-wrapper"),D=document.querySelector(".folder-front"),G=document.querySelectorAll(".contact-card");window.contactTl=o.timeline({autoplay:!1,easing:"linear"}),r&&h&&window.contactTl.add({targets:h,translateY:[100,0],opacity:[0,1],duration:500},0).add({targets:D,rotateX:["0deg","-20deg"],translateY:[0,10],scaleY:[1,.9],duration:500},300).add({targets:G,translateY:[0,-250],translateX:function(v,c){return[-30,-10,10,30][c]},rotate:function(v,c){return[-10,-5,5,10][c]},duration:800,delay:o.stagger(150)},600).add({targets:G,translateY:[-250,220],translateX:function(v,c){const u=window.innerWidth>768?120:70;return-(u*1.5)+u*c},rotate:0,scale:1,duration:800,delay:o.stagger(150)},1400),window.addEventListener("scroll",()=>{const v=window.pageYOffset,c=window.innerHeight,x=document.querySelector(".hero").offsetHeight,B=x>c?x-c:c;let y=v/B;y=Math.max(0,Math.min(1,y));let C=Math.max(0,1-y/.25);C=Math.min(1,C);const I=document.querySelector(".intro");I&&(I.style.opacity=C,I.style.transform=`translateY(${-50*(1-C)}px)`,I.style.pointerEvents=C===0?"none":"auto");let W=(y-.1)/.6;W=Math.max(0,Math.min(1,W));const H=1-Math.pow(1-W,3);let F=0;const V=document.querySelector(".hero-container"),$=document.querySelector(".model-wrapper"),N=document.querySelector("model-viewer");if(window.innerWidth>768){const e=V.offsetWidth,d=64,l=((e-d)/2+d)/2;if(F=-l*H,$){const p=l*2*H;$.style.width=`calc(100% + ${p}px)`,F=-(l+p/2)*H,$.style.transform=`translateX(${F}px)`}}const Q=window.innerWidth>768?1+.5*H:1;N&&(N.style.transform=`scale(${Q})`);const U=document.querySelectorAll(".hotspot"),_=.6/U.length;U.forEach((e,d)=>{const a=.35+d*_;y>=a?e.classList.contains("visible")||e.classList.add("visible"):e.classList.contains("visible")&&e.classList.remove("visible")});const J=k.offsetTop,K=k.offsetHeight;let E=(v-J)/(K-c);E=Math.max(0,Math.min(1,E));const z=E*100,O=document.querySelector(".progress-red");if(O){const e=Math.min(z,33.33);O.style.strokeDasharray=`${e} 100`,O.style.strokeDashoffset=0,O.style.opacity=e>0?1:0}const j=document.querySelector(".progress-green");if(j){const e=Math.max(0,Math.min(z-33.33,33.33));j.style.strokeDasharray=`${e} 100`,j.style.strokeDashoffset=-33.33,j.style.opacity=e>0?1:0}const Y=document.querySelector(".progress-blue");if(Y){const e=Math.max(0,Math.min(z-66.66,33.34));Y.style.strokeDasharray=`${e} 100`,Y.style.strokeDashoffset=-66.66,Y.style.opacity=e>0?1:0}(window.innerWidth<=768?[Array.from(document.querySelectorAll(".card"))]:Array.from(document.querySelectorAll(".column")).map(e=>Array.from(e.querySelectorAll(".card")))).forEach(e=>{const d=e.length;e.forEach((a,l)=>{const p=1/d,S=l*p;let w=1,t=1,i=0,s=0,g=d-l;const A=l===d-1,P=A?0:.2;let m=(E-S)/p;const b=a.querySelector(".card-image"),T=a.querySelector(".card-image-container"),R=Math.max(0,b.offsetHeight-T.offsetHeight);if(m<0){let f=-m;w=1-f*.05,i=f*60,t=1-f*.1,g=d-l,s=0}else if(m>=0&&m<=1-P){w=1,i=0,t=1,g=d-l+10;let f=1-P===0?1:m/(1-P);A&&(f=m),s=f*-R}else if(!A&&m>1-P&&m<=1){let f=(m-(1-P))/P;w=1-f*.05,i=-f*40,t=1-f,g=d-l+10,s=-R}else A||(w=.95,i=-40,t=0,g=0,s=-R);o({targets:a,scale:w,translateY:i,opacity:t,zIndex:g,duration:50,easing:"linear"}),o({targets:b,translateY:s,duration:50,easing:"linear"})})});const X=document.querySelector(".code-features");if(X){const e=X.offsetTop,d=X.offsetHeight;let a=(v-e)/(d-c);a=Math.max(0,Math.min(1,a));const l=document.querySelectorAll(".feature-item"),p=l.length;l.forEach((t,i)=>{const s=1/p,g=i*s,A=(i+1)*s,P=(a-g)/(s*.3),m=(a-(A-s*.3))/(s*.3);let b=0,T=100;a>=g&&a<A?(t.classList.add("active"),a<g+s*.3?(b=Math.min(1,Math.max(0,P)),T=100*(1-b)):a>A-s*.3?(b=Math.min(1,Math.max(0,1-m)),T=-100*m):(b=1,T=0)):(t.classList.remove("active"),b=0),o({targets:t,opacity:b,translateY:T,duration:50,easing:"linear"})});let S=0;if(l.forEach((t,i)=>{t.classList.contains("active")&&(S=i)}),document.querySelectorAll(".anim-container").forEach((t,i)=>{i===S?t.classList.add("active-anim"):t.classList.remove("active-anim")}),window.anim1&&(S===0?window.anim1.play():window.anim1.pause()),window.anim2&&S===1){const t=1/p,i=1*t;let s=(a-i)/t;s=Math.max(0,Math.min(1,s)),window.anim2.seek(window.anim2.duration*s)}if(window.anim3&&(S===2?window.anim3.play():window.anim3.pause()),window.anim4&&S===3){const t=1/p,i=3*t;let s=(a-i)/t;s=Math.max(0,Math.min(1,s)),window.anim4.seek(window.anim4.duration*s)}const w=document.querySelector(".code-mockup");if(w){o({targets:w,translateY:-50*a,duration:50,easing:"linear"});const t=w.querySelector(".language-js");if(t){t.dataset.fullHtml||(t.dataset.fullHtml=t.innerHTML,t.innerHTML="");const i=t.dataset.fullHtml;let s=(a-.1)/.8;s=Math.max(0,Math.min(1,s));const g=Math.floor(i.length*s);t.innerHTML=i.substring(0,g)}}}if(r&&window.contactTl){const e=r.offsetTop,d=r.offsetHeight,a=e-c,l=e+d-c;let p=(v-a)/(l-a);p=Math.max(0,Math.min(1,p)),window.contactTl.seek(window.contactTl.duration*p)}})},st=()=>{const L=document.querySelector(".typing-text"),M=document.querySelector("#preloader"),k=document.querySelector("#app"),q=document.querySelector(".cursor"),n=document.querySelector(".code-lines"),r=document.querySelector(".active-line"),h="php artisan serve",D={length:0};o({targets:D,length:h.length,round:1,easing:"linear",duration:1200,update:()=>{L.textContent=h.substring(0,D.length)},complete:()=>{setTimeout(()=>{q.style.display="none",r.style.display="none",n.innerHTML+=`
          <div><span class="prompt">fabio@dev:~/portafolio$</span> ${h}</div>
          <div style="color: #22c55e; margin-top: 8px;">
            INFO  Server running on [http://127.0.0.1:8000].
          </div>
          <div style="color: #94a3b8; margin-top: 4px;">Press Ctrl+C to stop the server</div>
        `,setTimeout(()=>{o({targets:M,opacity:[1,0],duration:800,easing:"easeInOutQuad",complete:()=>{M.style.display="none",k.style.opacity=1,et()}})},2e3)},500)}})};st();
