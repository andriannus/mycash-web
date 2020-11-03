import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faComment,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const icons = [
  faArrowLeft,
  faComment,
  faEnvelope,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
];

library.add(icons);

export { FontAwesomeIcon };
