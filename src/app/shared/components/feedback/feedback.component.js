import { defineComponent, reactive } from "vue";

import MyBounceTransition from "@/app/shared/components/bounce-transition/bounce-transition.component.vue";
import MyButton from "@/app/shared/components/button/button.component.vue";
import MyCloseButton from "@/app/shared/components/close-button/close-button.component.vue";
import MyContent from "@/app/shared/components/content/content.component.vue";
import MyHeader from "@/app/shared/components/header/header.component.vue";
import MyPage from "@/app/shared/components/page/page.component.vue";
import MyTextarea from "@/app/shared/components/textarea/textarea.component.vue";
import MyTitle from "@/app/shared/components/title/title.component.vue";
import MyToolbar from "@/app/shared/components/toolbar/toolbar.component.vue";

export default defineComponent({
  name: "Feedback",

  components: {
    MyBounceTransition,
    MyButton,
    MyCloseButton,
    MyContent,
    MyHeader,
    MyPage,
    MyTextarea,
    MyToolbar,
    MyTitle,
  },

  setup() {
    const state = reactive({
      isFeedbackFormShown: false,
    });

    const toggleFeedbackForm = () => {
      state.isFeedbackFormShown = !state.isFeedbackFormShown;
    };

    return { state, toggleFeedbackForm };
  },
});
