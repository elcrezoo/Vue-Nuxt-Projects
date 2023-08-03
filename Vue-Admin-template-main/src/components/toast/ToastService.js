import ToastEventBus from './ToastEventBus';
import {PrimeVueToastSymbol} from './useToast';

export default {
    install: (app) => {
        const ToastService = {
            add: (message) => {
                ToastEventBus.emit('add', message);
            },
            removeGroup: (group) => {
                ToastEventBus.emit('remove-group', group);
            },
            removeAllGroups: () => {
                ToastEventBus.emit('remove-all-groups');
            }
        };
        app.config.globalProperties.$toast = ToastService;
        app.provide(PrimeVueToastSymbol, ToastService);
    }
};