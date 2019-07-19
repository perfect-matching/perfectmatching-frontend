import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import ProjectItemView from "../../src/views/ProjectItemView.vue";
import ProjectDetail from "../../src/components/ProjectItemView/ProjectDetail.vue";
import CommentList from "../../src/components/ProjectItemView/CommentList.vue";
import CommentCard from "../../src/components/ProjectItemView/CommentCard.vue";

describe("ProjectItemView.vue ", () => {
    let wrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(ProjectItemView);
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
