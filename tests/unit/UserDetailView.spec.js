import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import UserDetailView from "../../src/views/UserDetailView.vue";
import UserInfo from "../../src/components/UserDetailView/UserInfo.vue";
import UserProjectList from "../../src/components/UserDetailView/UserProjectList.vue";
import ProjectListItem from "../../src/components/UserDetailView/ProjectListItem.vue";


describe('UserDetailView.vue', () => {
    let wrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(UserDetailView);
    });

    test('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    })

    test('check if child UserInfo exists', () => {
        expect(wrapper.contains(UserInfo)).toBe(true);
    })

    test('check if child UserProjectList exists', () => {
        expect(wrapper.contains(UserProjectList)).toBe(true);
    })

    test('check if UserProjectList has ProejctListItem exists', () => {
        expect(shallowMount(UserProjectList).contains(ProjectListItem)).toBe(true);
    })
})