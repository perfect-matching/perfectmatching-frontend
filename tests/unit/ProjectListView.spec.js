import { shallowMount } from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";

import ProjectListView from "../../src/views/ProjectListView.vue";
import DropDown from "../../src/components/ProjectListView/DropDown.vue";
import ProjectList from "../../src/components/ProjectListView/ProjectList.vue";
import ProjectListItem from "../../src/components/ProjectListView/ProjectListItem.vue";



describe('ProjectListView.vue', () => {
    let wrapper, projectList;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(ProjectListView);
        projectList = shallowMount(ProjectList);
    });

    test('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    });

    test('check if child ProjectList exists', () => {
        expect(wrapper.contains(ProjectList)).toBe(true);
    })

    test('check if ProjectList hase child DropDown exists', () => {
        expect(projectList.contains(DropDown)).toBe(true);
    })


    test('check if ProjectList has child ProjectListItem exists', () => {
        expect(projectList.contains(ProjectListItem)).toBe(true);
    })
})