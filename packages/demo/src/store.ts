import { createApp } from './configuration';
import user from './models/user.model';
import produce, { enablePatches, setAutoFreeze } from 'immer';
setAutoFreeze(false);
enablePatches();

const app = createApp();
app.use(user);

const { store, defineContainer, defineComponent } = app.run();

export { store, defineContainer, defineComponent };