import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFubGxhbnRlbjgiLCJhIjoiY2t5dnJocjIxMDB2azJxcDlrbDd4eHE0aiJ9.yNyda6_cCY0hw0U-_FEbzw';
if(!navigator.geolocation){
  alert("Tu navegador no soporta el geolocation");
  throw new Error("Tu navegador no soporta el geolocation");
}
createApp(App).use(store).use(router).mount('#app');
