import fs from 'fs'

const BASE_URL = 'src/'
const BASE_URL_ASSETS = BASE_URL + 'assets/'

const path = {
   mainScss: BASE_URL_ASSETS + 'scss/main.scss',
   fontsScss: BASE_URL_ASSETS + 'scss/fonts.scss',
   headerScss: BASE_URL_ASSETS + 'scss/_header.scss',
   footerScss: BASE_URL_ASSETS + 'scss/_footer.scss',
   appVue: BASE_URL + 'App.vue',
   headerVue: BASE_URL + 'components/Header.vue',
   footerVue: BASE_URL + 'components/Footer.vue',
   uiFolder: BASE_URL + 'components/UI'
}

// !====================================================================> LINKS <==================================================================== //
// ?-> npm i sass sass-loader vuex@next --save
// npm init vite@latest . -- --template vue


const defaultScss = `// ============================================= IMPORTS ============================================= //
@import 'fonts';

// ============================================= VARS ============================================= //



// ========================================================================================== //

* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}
html, body {
   width: 100%;
   height: 100%;
}
a {
   color: inherit;
   text-decoration: none;
}
ul > li,
ol > li {
   list-style: none;
}
button {
   font-family: inherit;
   background-color: transparent;
   border: none;
}
.wrapper {
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   width: 100%;
   overflow: hidden;
}
.page {
   flex: 1 1 auto;
}
[class*='_container'] {
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   padding: 0 15px;
   box-sizing: content-box
}

// ============================================= UI-IMPORTS ============================================= //



// ============================================= COMPONENTS-IMPORTS ============================================= //

@import '_header';
@import '_footer';


// ============================================= MAIN STYLES ============================================= //`
const defaultVueApp = `<template>
<div class="wrapper">
  <Header />
  <main class="page">
    
  </main>
  <Footer />
</div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
components: { Header, Footer }
}
</script>
<style lang="scss">

</style>
`
const defaultVueHeader = `<template>
\t<header>
   
\t</header>
</template>
<script>
export default {

}
</script>
<style>

</style>`
const defaultVueFooter = `<template>
   <footer>
      
   </footer>
</template>
<script>
export default {
   
}
</script>
<style>
   
</style>`
const fontsScss = `$fontFamily: 
   ('Light', 100, normal),
   ('Thin', 300, normal),
   ('Regular', 400, normal),
   ('Medium', 500, normal),
   ('SemiBold', 600, normal),
   ('Bold', 700, normal);

@each $font, $weight, $style in $fontFamily {
   @font-face {
      font-family: 'fontFamily';
      src: url('../fonts/SFProDisplay-#{$font}.woff2') format('woff2'),
           url('../fonts/SFProDisplay-#{$font}.woff') format('woff'),
           url('../fonts/SFProDisplay-#{$font}.ttf') format('truetype');
      font-weight: $weight;
      font-style: $style;
   }
}
`
const mainJS = `import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
// import components from './components/UI/index'
import './assets/scss/main.scss'


const app = createApp(App)
   .use(store)

// components.forEach(component => {
//    return app.component(component.name, component)
// })
      

app.mount('#app')

`
const storeJS = `import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
`




fs.mkdirSync(BASE_URL + 'assets', (err) => {
   if (err) console.log(err);
   console.log('Папка assets успешна создана');
})
fs.mkdirSync(BASE_URL + 'components', (err) => {
   if (err) console.log(err);
   console.log('Папка components успешна создана');
})
fs.mkdirSync(path.uiFolder, (err) => {
   if (err) console.log(err);
   console.log('Папка UI успешна создана');
})
fs.writeFileSync(path.uiFolder + '/index.js', '\n\nexport default []')
fs.mkdirSync(BASE_URL + 'store', (err) => {
   if (err) console.log(err);
   console.log('Папка store успешна создана');
})
fs.writeFile(BASE_URL + 'store/index.js', storeJS, (err) => {
   if (err) console.log(err);
   console.log('Файл main.js успешно создан');
})
fs.writeFile(BASE_URL + 'main.js', mainJS, (err) => {
   if (err) console.log(err);
   console.log('Файл main.js успешно создан');
})



fs.mkdir(BASE_URL_ASSETS + 'fonts', (err) => {
   if (err) console.log(err);
   console.log('Папка fonts успешна создана');
})
fs.mkdir(BASE_URL_ASSETS + 'img', (err) => {
   if (err) console.log(err);
   console.log('Папка img успешна создана');
})
fs.mkdir(BASE_URL_ASSETS + 'scss', (err) => {
   if (err) console.log(err);
   console.log('Папка scss успешна создана');
})
fs.writeFile(path.mainScss, defaultScss, (err) => {
   if (err) console.log(err);
   console.log('Файл main.scss успешно создан');
})
fs.writeFile(path.fontsScss, fontsScss, (err) => {
   if (err) console.log(err);
   console.log('Файл fonts.scss успешно создан');
})
fs.writeFile(path.headerScss, '', (err) => {
   if (err) console.log(err);
   console.log('Файл header.scss успешно создан');
})
fs.writeFile(path.footerScss, '', (err) => {
   if (err) console.log(err);
   console.log('Файл footer.scss успешно создан');
})
fs.writeFile(path.appVue, defaultVueApp, (err) => {
   if (err) console.log(err);
   console.log('Файл App.vue успешно создан');
})
fs.writeFile(path.headerVue, defaultVueHeader, (err) => {
   if (err) console.log(err);
   console.log('Файл Header.vue успешно создан');
})
fs.writeFile(path.footerVue, defaultVueFooter, (err) => {
   if (err) console.log(err);
   console.log('Файл Footer.vue успешно создан');
})