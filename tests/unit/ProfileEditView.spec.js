import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";

import ProfileEditView from "../../src/views/ProfileEditView.vue";
import MyPhoto from "../../src/components/MyProfileEditView/MyPhoto.vue";
import EditForm from "../../src/components/MyProfileEditView/EditForm.vue";

describe('ProfileEditView.vue', () => {
    let wrapper;
    beforeEach(() => {
        Vue.use(Vuetify);
        wrapper = shallowMount(ProfileEditView);
    });

    test('reders a vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true);
    })

    test('check if child MyPhoto exists', () => {
        expect(wrapper.contains(MyPhoto)).toBe(true);
    });

    test('check if child EditForm exists', () => {
        expect(wrapper.contains(EditForm)).toBe(true);
    })
});