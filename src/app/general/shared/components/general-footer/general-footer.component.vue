<template>
  <div
    class="BgColor-light-20 PaddingTop-large PaddingRight PaddingBottom-large PaddingLeft"
  >
    <div class="MarginBottom">
      <p class="MarginBottom-xsmall">
        <strong>Media Sosial Kami</strong>
      </p>

      <div class="Flex">
        <a
          v-for="socialMedia in socialMedias"
          :key="socialMedia.icon"
          class="Color-dark-90 MarginRight"
          :href="socialMedia.href"
          rel="noopener noreferrer"
          target="_blank"
        >
          <my-icon :icon="['fab', socialMedia.icon]" size="2x"></my-icon>
        </a>
      </div>
    </div>

    <div class="MarginBottom">
      <p class="MarginBottom-xsmall">
        <strong>Layanan Pelanggan</strong>
      </p>

      <div class="Flex AlignItems-center MarginBottom-small">
        <my-icon icon="comment"></my-icon>

        <div class="MarginLeft">
          <p>Live Chat</p>

          <span>(Senin - Jum'at, 08.00 - 17.00 WIB)</span>
        </div>
      </div>

      <div class="Flex AlignItems-center">
        <my-icon icon="envelope"></my-icon>

        <div class="MarginLeft">
          <span>tanya@amarbank.co.id</span>
        </div>
      </div>
    </div>

    <div class="MarginBottom">
      <p class="MarginBottom-xsmall">
        <strong>Kantor Fungsional Tunaiku</strong>
      </p>

      <span>
        Gedung Grha Niaga Thamrin, Lt. 1, Area B2, Jl. KH. Mas Mansyur, Kebon
        Kacang, Tanah Abang, Jakarta Pusat, 10220.
      </span>
    </div>

    <div class="MarginTop MarginBottom">
      <hr />
    </div>

    <div>
      <p>
        Tunaiku adalah produk dari
        <strong>PT Bank Amar Indonesia Tbk.</strong>
        yang terdaftar dan diawasi oleh:
      </p>

      <div class="Grids MarginTop MarginBottom">
        <div class="Grid TextAlign-right">
          <a class="MarginRight" href="https://amarbank.co.id">
            <amar-bank-icon></amar-bank-icon>
          </a>
        </div>

        <div class="Grid">
          <a class="MarginLeft" href="https://www.ojk.go.id">
            <ojk-icon></ojk-icon>
          </a>
        </div>
      </div>

      <div class="Grids">
        <div class="Grid">
          <p class="MarginBottom-small">
            <strong>Tunaiku</strong>
          </p>

          <ul>
            <li v-for="tunaikuLink in tunaikuLinks" :key="tunaikuLink.href">
              <a class="Color-dark-90" :href="tunaikuLink.href">
                {{ tunaikuLink.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="Grid">
          <p class="MarginBottom-small">
            <strong>Produk</strong>
          </p>

          <ul>
            <li v-for="productLink in productLinks" :key="productLink.href">
              <a class="Color-dark-90" :href="productLink.href">
                {{ productLink.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="MarginTop MarginBottom">
      <hr />
    </div>

    <div>
      <p class="MarginBottom">
        PT Bank Amar Indonesia Tbk. terdaftar dan diawasi oleh Otoritas Jasa
        Keuangan. &copy; 2020 PT Bank Amar Indonesia Tbk. Semua hak cipta
        dilindungi.
      </p>

      <div class="Grids TextAlign-left">
        <div v-for="otherLink in otherLinks" :key="otherLink.to" class="Grid">
          <router-link class="Color-dark-90" :to="otherLink.to">
            <strong>
              {{ otherLink.text }}
            </strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./general-footer.component.js"></script>
