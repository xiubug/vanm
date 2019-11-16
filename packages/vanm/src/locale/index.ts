import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

declare module 'vue' {
  interface VueConstructor {
    util: {
      defineReactive(obj: object, key: string, value: any): void;
    };
  }
}

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$vanmLang', 'zh-CN');
defineReactive(proto, '$vanmMessages', {
  'zh-CN': defaultMessages
});

export default {
  messages() {
    return proto.$vanmMessages[proto.$vanmLang];
  },

  use(lang: string, messages?: object) {
    proto.$vanmLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$vanmMessages, messages);
  }
};
