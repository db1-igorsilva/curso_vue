import Save from './components/save/Save.vue';
// const Save = () => System.import('./components/save/Save.vue');
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: "HOME", menu: true },
    { path: '/save', name: 'save', component: Save, title: "NEW PICTURE", menu: true },
    { path: '/save/:id', name: 'update', component: Save, title: "UPDATE PICTURE", menu: false },
    { path: '*', component: Home, menu: false }
];