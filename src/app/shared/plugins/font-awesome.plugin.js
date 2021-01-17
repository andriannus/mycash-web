import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faCommentAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faComment,
  faEnvelope,
  faMapMarkerAlt,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const icons = [
  faArrowLeft,
  faCheckCircle,
  faComment,
  faCommentAlt,
  faEnvelope,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMapMarkerAlt,
  faTimes,
  faTwitter,
  faUserCircle,
  faYoutube,
];

library.add(icons);

export { FontAwesomeIcon };
