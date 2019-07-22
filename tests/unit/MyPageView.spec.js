import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import MyPageView from "../../src/views/MyPageView.vue";
import MyInfo from "../../src/components/MyPageView/MyInfo.vue";
import MyProjectList from "../../src/components/MyPageView/MyProjectList.vue";
import MyProjectCard from "../../src/components/MyPageView/MyProjectCard.vue";

describe('MyPageView.vue', () => {
    let wrapper, myProjectList;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(MyPageView);
        myProjectList = shallowMount(MyProjectList);
    });

    test('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    })

    test('check if child MyInfo exists', () => {
        expect(wrapper.contains(MyInfo)).toBe(true);
    })

    test('check if child MyProjectList', () => {
        expect(wrapper.contains(MyProjectList)).toBe(true);
    })

    test('check if MyProjectList has child MyProjectCard', () => {
        expect(myProjectList.contains(MyProjectCard)).toBe(true);
    })
});