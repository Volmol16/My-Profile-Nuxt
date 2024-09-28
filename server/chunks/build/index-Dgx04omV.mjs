import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("personImg.CW9K3fmA.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center px-20 py-10 bg-[#f3f3f3]" }, _attrs))}><div class="text-gray-900"><h6 class="text-lg uppercase">\u041F\u0440\u0438\u0432\u0435\u0442</h6><h1 class="text-6xl font-bold">Im Oleg Volmolov</h1><h3 class="text-2xl mt-2">Freelance web &amp; <br> Frontend Developer</h3><p class="text-base mt-2 text-[#8f9299] max-w-[600px]">\u042F \u0443\u0432\u0435\u0440\u0435\u043D\u043E \u0432\u043B\u0430\u0434\u0435\u044E \u0442\u0430\u043A\u0438\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u043A\u0430\u043A HTML, CSS, JavaScript \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E \u0438\u0445 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0445 \u0438 \u0444\u0443\u043D\u0434\u0430\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u0432\u0435\u0431-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432.</p><button class="px-5 py-2 mt-5 text-white bg-green-500 rounded-xl hover:bg-green-600 duration-300 font-semibold">Hire me</button></div><img${ssrRenderAttr("src", _imports_0)} alt=""></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheMainInfo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "bg-white dark:text-white flex justify-center"
  }, _attrs))}><div class="container md:w-[70%] sm:py-16 py-10"><div class="grid items-center gap-4 grid-cols-1 sm:grid-cols-2"><div class="relative font-bold"><div class="text-center text-6xl xl:text-8xl font-bold text-black/5"> ABOUT </div><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-black">About me</h1></div><div class="text-slate-500"><p>\u041F\u0440\u0438\u0432\u0435\u0442! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 \u041E\u043B\u0435\u0433, \u0438 \u044F \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0441 \u0434\u0432\u0443\u0445\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B. \u042F \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0432\u043B\u0430\u0434\u0435\u044E \u0442\u0430\u043A\u0438\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438, \u043A\u0430\u043A HTML, CSS \u0438 JavaScript.</p> <br><p>\u042F \u0433\u043E\u0442\u043E\u0432 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0432\u044B\u0437\u043E\u0432\u044B \u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0435 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u0445 \u0446\u0435\u043B\u0435\u0439. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0438 \u044F \u043D\u0430\u0434\u0435\u044E\u0441\u044C \u043D\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441 \u0432\u0430\u043C\u0438!</p><div><a href="https://github.com/Volmol16" class="bg-green-500 text-white cursor-pointer hover:bg-primary/80 px-4 py-2 rounded-lg inline-block my-6 mr-6" target="_blank" rel="noreferrer">GitHub</a><a href="tel:+123456789" class="border-2 border-green-500 text-green-500 px-4 py-2 rounded-xl ouline-btn inline-block">\u041A\u043E\u043D\u0442\u0430\u043A\u0442</a></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheSkillsLevel",
  __ssrInlineRender: true,
  props: {
    skillsName: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ className: "mt-4 space-y-2" }, _attrs))}><div class="flex justify-between items-end"><p class="font-bold text-xl">${ssrInterpolate(__props.skillsName)}</p><p class="text-sm">${ssrInterpolate(__props.percentage)}%</p></div><div class="w-full bg-slate-200 h-2 rounded-full"><div class="h-2 bg-green-500 rounded-full" style="${ssrRenderStyle({ width: __props.percentage + "%" })}"></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSkillsLevel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_TheSkillsLevel = _sfc_main$4;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "bg-white flex justify-center"
  }, _attrs))}><div class="container md:w-[70%] sm:py-16 py-10"><div class="grid items-center gap-4 grid-cols-1 sm:grid-cols-2"><div className="sm:order-1 text-slate-500">`);
  _push(ssrRenderComponent(_component_TheSkillsLevel, {
    skillsName: "HTML",
    percentage: 70
  }, null, _parent));
  _push(ssrRenderComponent(_component_TheSkillsLevel, {
    skillsName: "CSS",
    percentage: 55
  }, null, _parent));
  _push(ssrRenderComponent(_component_TheSkillsLevel, {
    skillsName: "Tailwind",
    percentage: 70
  }, null, _parent));
  _push(`</div><div class="relative font-bold"><div class="text-center text-6xl xl:text-8xl font-bold text-black/5"> Skills </div><h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-black">Skills </h1></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSkills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheServicesBox",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "services",
        class: [__props.bgColor, "p-14 rounded-3xl space-y-5"]
      }, _attrs))}><h3 class="text-2xl font-bold text-white">${ssrInterpolate(__props.name)}</h3><p class="text-white">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheServicesBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TheServicesBox = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#f3f3f3] flex flex-col justify-center pt-10 pb-20" }, _attrs))}><div class="flex flex-col items-center pb-10 gap-y-3"><h2 class="text-3xl font-bold border-b-2 border-green-500 pb-1">Services</h2><p class="text-slate-500">\u0421\u0435\u0440\u0432\u0438\u0441\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0430\u0439\u0442\u043E\u0432 \u0441 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u043C \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C.</p></div><div class="grid grid-cols-2 gap-6 mx-10">`);
  _push(ssrRenderComponent(_component_TheServicesBox, {
    name: "React",
    description: "JavaScript-\u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432.",
    bgColor: "bg-green-500/70"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TheServicesBox, {
    name: "Vite",
    description: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u042D\u0432\u0430\u043D\u043E\u043C \u042E, \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u0435\u043C Vue.js, \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Vue \u0438 \u0434\u043B\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 React",
    bgColor: "bg-pink-500/70"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TheServicesBox, {
    name: "Tailwind",
    description: "Tailwind CSS - \u044D\u0442\u043E CSS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0439 Tailwind Labs.",
    bgColor: "bg-blue-500/70"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TheServicesBox, {
    name: "Bootstrap",
    description: "\u041C\u043E\u0449\u043D\u044B\u0439, \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u043C\u044B\u0439 \u0438 \u043C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430.",
    bgColor: "bg-purple-500/70"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheMainInfo = __nuxt_component_0;
  const _component_TheAbout = __nuxt_component_1;
  const _component_TheSkills = __nuxt_component_2;
  const _component_TheServices = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheMainInfo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_TheSkills, null, null, _parent));
  _push(ssrRenderComponent(_component_TheServices, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Dgx04omV.mjs.map
