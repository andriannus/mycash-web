import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faComment,
  faEnvelope,
  faMapMarkerAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const icons = [
  faArrowLeft,
  faCheckCircle,
  faComment,
  faEnvelope,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMapMarkerAlt,
  faTwitter,
  faUserCircle,
  faYoutube,
];

library.add(icons);

export { FontAwesomeIcon };
