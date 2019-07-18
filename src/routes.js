import Save from './components/save/Save.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: "HOME", menu: true },
    { path: '/save/:id', name: 'save', component: Save, title: "SAVE A NEW PICTURE", menu: true },
    { path: '*', component: Home, menu: false }
];