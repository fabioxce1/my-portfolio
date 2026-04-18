(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))x(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&x(v)}).observe(document,{childList:!0,subtree:!0});function A(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function x(n){if(n.ep)return;n.ep=!0;const i=A(n);fetch(n.href,i)}})();const o=window.anime,tt=Array.from({length:20}).map(()=>'<div class="shape"></div>').join(""),st=Array.from({length:169}).map(()=>'<div class="dot"></div>').join("");document.querySelector("#app").innerHTML=`
  <section class="hero">
    <div class="hero-sticky">
      <div class="hero-container">
        <div class="intro">
          <h1 class="linea-1">¡Hola! Soy <span class="highlight">Fabio Santos</span></h1>
          <p class="linea-2">Ingeniero de Sistemas</p>
          <p class="linea-3">Dedicado a la creación de ecosistemas digitales donde la tecnología y la creatividad se encuentran. Transformo conceptos ambiciosos en soluciones reales y experiencias memorables</p>
      
        </div>
        <div class="model-wrapper">
          <model-viewer 
            src="./assets/3d/fabio.glb" 
            alt="Un modelo 3D de un Astronauta" 
            camera-controls
            disable-zoom
            ar 
            shadow-intensity="1">
            
            <!-- Hotspots ajustados con coordenadas precisas para el modelo del portafolio (Torso) -->
            <button class="hotspot hotspot-1" slot="hotspot-head" data-position="0 -12 5" data-normal="0 0 1">
              <div class="hotspot-annotation">Full-Stack Engineer</div>
            </button>
            <button class="hotspot hotspot-2" slot="hotspot-chest" data-position="5 -22 4" data-normal="0.8 0 0.5">
              <div class="hotspot-annotation">Backend: Laravel & PHP</div>
            </button>
            <button class="hotspot hotspot-3" slot="hotspot-arm" data-position="-9 -25 2" data-normal="-0.8 0 0.5">
              <div class="hotspot-annotation">Arquitectura de Software</div>
            </button>
            <button class="hotspot hotspot-4" slot="hotspot-leg" data-position="-6 -32 3" data-normal="-0.5 0 0.8">
              <div class="hotspot-annotation">APIs RESTful & Integraciones</div>
            </button>
            <button class="hotspot hotspot-5" slot="hotspot-hand" data-position="6 -32 3" data-normal="0.5 0 0.8">
              <div class="hotspot-annotation">Modelado de Datos (SQL)</div>
            </button>
            <button class="hotspot hotspot-6" slot="hotspot-foot" data-position="0 -35 4" data-normal="0 0 1">
              <div class="hotspot-annotation">CI/CD & Automatización</div>
            </button>
            <button class="hotspot hotspot-7" slot="hotspot-backpack" data-position="0 -28 5" data-normal="0 0 1">
              <div class="hotspot-annotation">UI/UX: Tailwind & Responsive</div>
            </button>
            <!-- Nuevos Hotspots -->
            <button class="hotspot hotspot-8" slot="hotspot-shoulder" data-position="10 -26 2" data-normal="0.8 0.5 0">
              <div class="hotspot-annotation">Spring Boot & Java</div>
            </button>
            <button class="hotspot hotspot-9" slot="hotspot-waist" data-position="-5 -22 4" data-normal="-0.5 0 0.8">
              <div class="hotspot-annotation">Animaciones JS (Anime.js)</div>
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
        <!-- Columna Izquierda -->
        <div class="column column-left">
          <!-- Proyecto 1 -->
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/damos-co.png" alt="damos-co">
            </div>
            <div class="card-info">
              <h3>Damos Soluciones</h3>
            </div>
          </div>
          <!-- Proyecto 2 -->
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/aplika-co.png" alt="aplika-co">
            </div>
            <div class="card-info">
              <h3>Aplika</h3>
            </div>
          </div>
          <!-- Proyecto 3 -->
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/lamantitagris-org.png" alt="lamantitagris-org">
            </div>
            <div class="card-info">
              <h3>Lamantita Gris</h3>
            </div>
          </div>
        </div>
        
        <!-- Columna Derecha -->
        <div class="column column-right">
          <!-- Proyecto 4 -->
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/borisdepoortere.png" alt="borisdepoorterel">
            </div>
            <div class="card-info">
              <h3>Boris de poortere</h3>
            </div>
          </div>
          <!-- Proyecto 5 -->
          <div class="card">
            <div class="card-image-container">
              <img class="card-image" src="./assets/img/josuecalderongambamd.png" alt="josuecalderongambamd">
            </div>
            <div class="card-info">
              <h3>Josue Calderon Gambamd</h3>
            </div>
          </div>
          <!-- Proyecto 6 -->
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
        <!-- Elemento 1 (Desarrollo Full-Stack) -->
        <div class="feature-item color-0">
          <h2 class="feature-title">Desarrollo Full-Stack</h2>
          <p class="feature-desc">Solucionador de problemas complejos con dominio de tecnologías punteras en el ecosistema web.</p>
          <ul class="feature-list">
            <li>Dominio avanzado de Laravel</li>
            <li>Interfaces modernas en Vue.js y React</li>
            <li>Arquitectura de software eficiente</li>
          </ul>
        </div>
        <!-- Elemento 2 (Arquitectura Backend & APIs) -->
        <div class="feature-item color-1">
          <h2 class="feature-title">Backend & APIs</h2>
          <p class="feature-desc">Creación y escalado de bases de datos relacionales y conectividad mediante servicios RESTful.</p>
          <ul class="feature-list">
            <li>Diseño de BD en MySQL</li>
            <li>Desarrollo sólido en PHP</li>
            <li>Integración de APIs y Endpoints</li>
          </ul>
        </div>
        <!-- Elemento 3 (Frontend & Diseño UI) -->
        <div class="feature-item color-2">
          <h2 class="feature-title">Frontend & UI/UX</h2>
          <p class="feature-desc">Construcción de interfaces responsivas centradas en la experiencia de usuario y código mantenible.</p>
          <ul class="feature-list">
            <li>Maquetación con Tailwind y Bootstrap</li>
            <li>Estilizado estructurado en SCSS / Modules</li>
            <li>Interactividad en JavaScript Vanilla</li>
          </ul>
        </div>
        <!-- Elemento 4 (DevOps & Control) -->
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
        <!-- El monitor / gráfico central de la parte derecha -->
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
            
            <!-- Graphic circular elements to match screenshot style roughly -->
            <div class="circle-graphic">
               <div class="ring outer-ring"></div>
               <div class="ring middle-ring"></div>
               <div class="ring inner-ring"></div>
               
               <!-- Animación 1: Elementos Dinámicos (Shapes) -->
               <div class="anim-container anim-1 color-0">
                 ${tt}
               </div>

               <!-- Animación 2: Esfera SVG 3D Dibujable -->
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

               <!-- Animación 3: Cuadrícula Escalonada (Dots) -->
               <div class="anim-container anim-3 color-2">
                 <div class="grid-wrapper">
                   ${st}
                 </div>
               </div>

               <!-- Animación 4: Aguja de Radar (Scroll Scrub) -->
               <div class="anim-container anim-4 color-3">
                 <div class="radar-needle"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECCIÓN DE CONTACTO (CARPETA ANIMADA) -->
  <section class="contact-section" id="contacto">
    <div class="contact-container">
      <h2 class="titulo-proyectos contact-title">CONTACTO</h2>
      <p class="contact-subtitle">Abriendo archivo de perfil...</p>
      
      <div class="folder-wrapper">
        <!-- Parte Trasera de la carpeta -->
        <div class="folder-back"></div>
        
        <!-- Tarjetas de Contacto Ocultas -->
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
          <a href="tel:+570000000000" class="contact-card phone-card" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Teléfono</span>
          </a>
        </div>
        
        <!-- Parte Frontal de la carpeta -->
        <div class="folder-front">
          <div class="folder-tab"></div>
          <div class="folder-label">FABIO_SANTOS_DAT</div>
        </div>
      </div>
    </div>
  </section>
`;const et=()=>{o.timeline({easing:"easeOutExpo"}).add({targets:".model-wrapper",scale:[.8,1],opacity:[0,1],duration:1200,delay:300});const h=document.querySelector("model-viewer");h&&h.addEventListener("click",u=>{h.positionAndNormalFromPoint(u.clientX,u.clientY)});const A=document.querySelector(".proyectos");document.querySelectorAll(".card").length,window.anim1=o({targets:".anim-1 .shape",translateX:function(){return o.random(-80,80)},translateY:function(){return o.random(-80,80)},scale:function(){return o.random(.5,1.5)},rotate:function(){return o.random(-360,360)},duration:function(){return o.random(2e3,4e3)},easing:"easeInOutQuad",direction:"alternate",loop:!0,autoplay:!1}),window.anim2=o({targets:".anim-2 .sphere-paths circle, .anim-2 .sphere-paths ellipse",strokeDashoffset:[o.setDashoffset,0],easing:"easeInOutSine",duration:1e3,delay:function(u,d){return d*150},autoplay:!1});const n={grid:[13,13],from:"center"};window.anim3=o.timeline({loop:!0,autoplay:!1}).add({targets:".anim-3 .dot",scale:[{value:.1,easing:"easeOutSine",duration:500},{value:1,easing:"easeInOutQuad",duration:1200}],delay:o.stagger(100,n)}),window.anim4=o({targets:".anim-4 .radar-needle",rotate:[0,360],duration:1e3,easing:"linear",autoplay:!1});const i=document.querySelector(".contact-section"),v=document.querySelector(".folder-wrapper"),C=document.querySelector(".folder-front"),R=document.querySelectorAll(".contact-card");window.contactTl=o.timeline({autoplay:!1,easing:"linear"}),i&&v&&window.contactTl.add({targets:v,translateY:[100,0],opacity:[0,1],duration:500},0).add({targets:C,rotateX:["0deg","-20deg"],translateY:[0,10],scaleY:[1,.9],duration:500},300).add({targets:R,translateY:[0,-250],translateX:function(u,d){return[-30,-10,10,30][d]},rotate:function(u,d){return[-10,-5,5,10][d]},duration:800,delay:o.stagger(150)},600).add({targets:R,translateY:[-250,220],translateX:function(u,d){const j=window.innerWidth>768?120:70;return-(j*1.5)+j*d},rotate:0,scale:1,duration:800,delay:o.stagger(150)},1400),window.addEventListener("scroll",()=>{const u=window.pageYOffset,d=window.innerHeight,B=document.querySelector(".hero").offsetHeight,V=B>d?B-d:d;let M=u/V;M=Math.max(0,Math.min(1,M));let T=Math.max(0,1-M/.25);T=Math.min(1,T);const L=document.querySelector(".intro");L&&(L.style.opacity=T,L.style.transform=`translateY(${-50*(1-T)}px)`,L.style.pointerEvents=T===0?"none":"auto");let Y=(M-.1)/.6;Y=Math.max(0,Math.min(1,Y));const q=1-Math.pow(1-Y,3);let F=0;const U=document.querySelector(".hero-container"),z=document.querySelector(".model-wrapper"),$=document.querySelector("model-viewer");if(window.innerWidth>768){const a=U.offsetWidth,m=64,p=((a-m)/2+m)/2;if(F=-p*q,z){const c=p*2*q;z.style.width=`calc(100% + ${c}px)`,F=-(p+c/2)*q,z.style.transform=`translateX(${F}px)`}}const _=1+.5*q;$&&($.style.transform=`scale(${_})`);const G=document.querySelectorAll(".hotspot"),J=.6/G.length;G.forEach((a,m)=>{const s=.35+m*J;M>=s?a.classList.contains("visible")||a.classList.add("visible"):a.classList.contains("visible")&&a.classList.remove("visible")});const Q=A.offsetTop,K=A.offsetHeight;let I=(u-Q)/(K-d);I=Math.max(0,Math.min(1,I));const N=I*100,D=document.querySelector(".progress-red");if(D){const a=Math.min(N,33.33);D.style.strokeDasharray=`${a} 100`,D.style.strokeDashoffset=0,D.style.opacity=a>0?1:0}const E=document.querySelector(".progress-green");if(E){const a=Math.max(0,Math.min(N-33.33,33.33));E.style.strokeDasharray=`${a} 100`,E.style.strokeDashoffset=-33.33,E.style.opacity=a>0?1:0}const H=document.querySelector(".progress-blue");if(H){const a=Math.max(0,Math.min(N-66.66,33.34));H.style.strokeDasharray=`${a} 100`,H.style.strokeDashoffset=-66.66,H.style.opacity=a>0?1:0}document.querySelectorAll(".column").forEach(a=>{const m=Array.from(a.querySelectorAll(".card")),s=m.length;m.forEach((p,c)=>{const y=1/s,P=c*y;let t=1,r=1,e=0,g=0,w=s-c;const k=c===s-1,S=k?0:.2;let l=(I-P)/y;const b=p.querySelector(".card-image"),Z=p.querySelector(".card-image-container"),X=Math.max(0,b.offsetHeight-Z.offsetHeight);if(l<0){let f=-l;t=1-f*.05,e=f*60,r=1-f*.1,w=s-c,g=0}else if(l>=0&&l<=1-S){t=1,e=0,r=1,w=s-c+10;let f=1-S===0?1:l/(1-S);k&&(f=l),g=f*-X}else if(!k&&l>1-S&&l<=1){let f=(l-(1-S))/S;t=1-f*.05,e=-f*40,r=1-f,w=s-c+10,g=-X}else k||(t=.95,e=-40,r=0,w=0,g=-X);o({targets:p,scale:t,translateY:e,opacity:r,zIndex:w,duration:50,easing:"linear"}),o({targets:b,translateY:g,duration:50,easing:"linear"})})});const W=document.querySelector(".code-features");if(W){const a=W.offsetTop,m=W.offsetHeight;let s=(u-a)/(m-d);s=Math.max(0,Math.min(1,s));const p=document.querySelectorAll(".feature-item"),c=p.length;p.forEach((t,r)=>{const e=1/c,g=r*e,w=(r+1)*e,k=(s-g)/(e*.3),S=(s-(w-e*.3))/(e*.3);let l=0,b=100;s>=g&&s<w?(t.classList.add("active"),s<g+e*.3?(l=Math.min(1,Math.max(0,k)),b=100*(1-l)):s>w-e*.3?(l=Math.min(1,Math.max(0,1-S)),b=-100*S):(l=1,b=0)):(t.classList.remove("active"),l=0),o({targets:t,opacity:l,translateY:b,duration:50,easing:"linear"})});let y=0;if(p.forEach((t,r)=>{t.classList.contains("active")&&(y=r)}),document.querySelectorAll(".anim-container").forEach((t,r)=>{r===y?t.classList.add("active-anim"):t.classList.remove("active-anim")}),window.anim1&&(y===0?window.anim1.play():window.anim1.pause()),window.anim2&&y===1){const t=1/c,r=1*t;let e=(s-r)/t;e=Math.max(0,Math.min(1,e)),window.anim2.seek(window.anim2.duration*e)}if(window.anim3&&(y===2?window.anim3.play():window.anim3.pause()),window.anim4&&y===3){const t=1/c,r=3*t;let e=(s-r)/t;e=Math.max(0,Math.min(1,e)),window.anim4.seek(window.anim4.duration*e)}const P=document.querySelector(".code-mockup");if(P){o({targets:P,translateY:-50*s,duration:50,easing:"linear"});const t=P.querySelector(".language-js");if(t){t.dataset.fullHtml||(t.dataset.fullHtml=t.innerHTML,t.innerHTML="");const r=t.dataset.fullHtml;let e=(s-.1)/.8;e=Math.max(0,Math.min(1,e));const g=Math.floor(r.length*e);t.innerHTML=r.substring(0,g)}}}if(i&&window.contactTl){const a=i.offsetTop,m=i.offsetHeight,s=a-d,p=a+m-d;let c=(u-s)/(p-s);c=Math.max(0,Math.min(1,c)),window.contactTl.seek(window.contactTl.duration*c)}})},at=()=>{const O=document.querySelector(".typing-text"),h=document.querySelector("#preloader"),A=document.querySelector("#app"),x=document.querySelector(".cursor"),n=document.querySelector(".code-lines"),i=document.querySelector(".active-line"),v="php artisan serve",C={length:0};o({targets:C,length:v.length,round:1,easing:"linear",duration:1200,update:()=>{O.textContent=v.substring(0,C.length)},complete:()=>{setTimeout(()=>{x.style.display="none",i.style.display="none",n.innerHTML+=`
          <div><span class="prompt">fabio@dev:~/portafolio$</span> ${v}</div>
          <div style="color: #22c55e; margin-top: 8px;">
            INFO  Server running on [http://127.0.0.1:8000].
          </div>
          <div style="color: #94a3b8; margin-top: 4px;">Press Ctrl+C to stop the server</div>
        `,setTimeout(()=>{o({targets:h,opacity:[1,0],duration:800,easing:"easeInOutQuad",complete:()=>{h.style.display="none",A.style.opacity=1,et()}})},2e3)},500)}})};at();
