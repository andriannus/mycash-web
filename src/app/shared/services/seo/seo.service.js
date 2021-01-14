import { useRoute } from "vue-router";

const useSeo = () => {
  const route = useRoute();

  const setTitle = title => {
    const isInsideLanding = route.path === "/";
    document.title = isInsideLanding ? title : `${title} | Tunaiku`;
  };

  return { setTitle };
};

export default useSeo;
