import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import ProjectDetailView from "../../src/views/ProjectDetailView.vue";
import ProjectDetail from "../../src/components/ProjectDetailView/ProjectDetail.vue";
import CommentList from "../../src/components/ProjectDetailView/CommentList.vue";
import CommentCard from "../../src/components/ProjectDetailView/CommentCard.vue";

describe("ProjectDetailView.vue ", () => {
    let wrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(ProjectDetailView);
    });

    test('renders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    })

    test('check if child ProjectDetail exists', () => {
        expect(wrapper.contains(ProjectDetail)).toBe(true);
    })

    test('check if child CommentList exists', () => {
        expect(wrapper.contains(CommentList)).toBe(true);
    })

    test('check if CommentList has CommentCard', () => {
        expect(shallowMount(CommentList).contains(CommentCard)).toBe(true);
    })
});
