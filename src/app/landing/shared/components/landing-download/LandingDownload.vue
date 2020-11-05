<template>
  <div class="LandingDownload Container PaddingTop-xlarge PaddingBottom-xlarge">
    <div class="Grids">
      <div class="LandingDownload-illustration Grid TextAlign-center">
        <download-illustration-icon></download-illustration-icon>
      </div>

      <div class="Grid Flex AlignItems-center JustifyContent-center">
        <div>
          <p class="FontSize-xlarge MarginBottom-base">
            Dapatkan Pengalaman Meminjam Mudah dan Praktis
          </p>

          <p class="FontSize-base MarginBottom-base">
            Pantau status pengajuan kreditmu dengan mudah, kapan pun, dan dimana
            pun.
          </p>

          <div class="LandingDownload-app Flex">
            <a
              href="https://play.google.com/store/apps/details?id=com.tunaikumobile.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <google-play-icon></google-play-icon>
            </a>

            <a
              href="https://apps.apple.com/id/app/tunaiku-pinjaman-uang-online/id1446707833"
              rel="noopener noreferrer"
              target="_blank"
            >
              <app-store-icon></app-store-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppStoreIcon from "../../images/app-store.svg";
import DownloadIllustrationIcon from "../../images/download-illustration.svg";
import GooglePlayIcon from "../../images/google-play.svg";

export default {
  name: "LandingDownload",

  components: {
    AppStoreIcon,
    DownloadIllustrationIcon,
    GooglePlayIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "@amar-ui-web/responsive/scss/mixins";

.LandingDownload {
  &-app {
    a {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  @include amb-responsive-media("xs") {
    text-align: center;

    &-app {
      justify-content: center;
    }

    &-illustration {
      display: none;
    }
  }

  @include amb-responsive-media("md") {
    &-app {
      justify-content: left;
    }

    &-illustration {
      display: block;
    }
  }
}
</style>
