<template>
  <my-top-bar></my-top-bar>

  <my-page>
    <my-content
      class-name="TextAlign-justify"
      :has-toolbar="false"
      padding="none"
    >
      <div
        class="AboutUs-header Color-light-10 TextAlign-center PaddingTop-large PaddingBottom-large"
      >
        <h1 class="FontSize-large MarginBottom-small">
          Tunaiku
        </h1>

        <p>Aiming to bring 200 million smiles by 2025</p>
      </div>

      <div class="Container PaddingTop-large PaddingBottom-large">
        <h2 class="FontSize-large MarginBottom">
          Apa itu Tunaiku
        </h2>

        <p class="MarginBottom">
          Tunaiku merupakan teknologi finansial atau
          <em>fintech</em>
          pertama di Indonesia yang bergerak menyediakan pinjaman uang online
          tanpa agunan. Didukung dengan teknologi dan data analytics canggih,
          Tunaiku mampu melayani dengan sangat cepat (24 jam) dan dengan
          persyaratan yang mudah.
        </p>

        <p class="MarginBottom">
          Mulai beroperasi pada 2014, Tunaiku merupakan produk digital
          <a class="Color-dark-90" href="http://tunaiku.com">
            pinjaman tanpa agunan
          </a>
          dari PT Bank Amar Indonesia Tbk. yang dimiliki oleh perusahaan
          multinasional bernama TOLARAM.
        </p>

        <p class="Color-primary">
          <strong>
            We provide financial services not only to those who "want", but also
            to those who "need".
          </strong>
        </p>
      </div>

      <div
        class="BgColor-light-20 Container PaddingTop-large PaddingBottom-large"
      >
        <picture class="Image">
          <source
            srcset="/images/general/webp/gedung-tolaram.webp"
            type="image/webp"
          />

          <img
            src="/images/general/png/gedung-tolaram.png"
            alt="Gedung Tolaram"
          />
        </picture>

        <p class="MarginTop">
          TOLARAM merupakan perusahaan multinasional yang telah berdiri lebih
          dari 60 tahun. TOLARAM bergerak diberbagai bidang bisnis antara lain
          barang kebutuhan sehari-hari, pelayanan digital, energi, dan
          infrastruktur yang tersebar di Afrika, Eropa, dan Asia dengan kantor
          pusat yang terletak di Singapura.
        </p>
      </div>

      <div class="AboutUs-why Container PaddingTop-large PaddingBottom-large">
        <h2 class="FontSize-large TextAlign-center MarginBottom-large">
          <span>Mengapa Tunaiku Lebih Baik</span>
        </h2>

        <div class="Card Card--borderless Card--elevated">
          <div class="Card-content">
            <p class="TextAlign-center">
              <strong>Mudah dan Cepat</strong>
            </p>

            <div class="TextAlign-center MarginTop MarginBottom">
              <easy-and-fast-icon></easy-and-fast-icon>
            </div>

            <ul>
              <li>Tanpa agunan dan tanpa kartu kredit.</li>
              <li>Isi formulir pengajuan online hanya 10 menit.</li>
              <li>
                Pinjaman cair cepat sesuai nominal yang diajukan setelah tanda
                tangan kontrak.
              </li>
              <li>Bayar cicilan lebih cepat tanpa kena bunga.</li>
              <li>Ajukan pinjaman lewat aplikasi atau website.</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="AboutUs-bptw Color-light-10 Flex Flex-column AlignItems-center PaddingTop-large PaddingBottom-large"
      >
        <div class="TextAlign-left">
          <p>Sertifikasi oleh</p>

          <p class="FontSize-large">
            <strong>"Best Places to Work"</strong>
          </p>
        </div>
      </div>

      <div
        class="BgColor-light-20 Container PaddingTop-large PaddingBottom-large"
      >
        <div class="Flex">
          <picture class="Image">
            <source
              srcset="/images/general/webp/best-place-to-work.webp"
              type="image/webp"
            />

            <img
              src="/images/general/png/best-place-to-work.png"
              alt="Best Place to Work"
            />
          </picture>

          <div class="MarginLeft">
            <p class="MarginBottom">
              PT Bank Amar Indonesia Tbk. ("AMAR") atau Amar Bank adalah bank
              digital pertama dan satu-satunya di Indonesia, baru-baru ini
              diakui sebagai salah satu tempat terbaik untuk bekerja di
              Indonesia oleh
              <a class="Color-dark-90" href="https://bestplacestoworkfor.org">
                BestPlacesToWorkFor.org
              </a>
              .
            </p>

            <p class="MarginBottom">
              <em>Best Places to Work Certification</em>
              atau Tempat Terbaik untuk Bekerja adalah program sertifikasi
              Internasional yang memberikan kesempatan kepada pemberi kerja di
              berbagai negara untuk mempelajari lebih lanjut tentang
              keterlibatan dan kepuasan karyawan mereka dan menghormati mereka
              yang memberikan pengalaman kerja yang luar biasa dengan standar
              tertinggi dalam hal kondisi kerja.
            </p>

            <p>
              Pencapaian ini tidak mungkin terlaksana tanpa kerja keras dan
              usaha para pegawai di PT Bank Amar Indonesia Tbk. dan tentunya,
              sertifikasi ini mendorong para karyawan di Amar Bank untuk terus
              berinovasi dan merangkul nilai-nilai perusahaan untuk diterapkan
              setiap hari.
            </p>
          </div>
        </div>
      </div>

      <div
        class="AboutUs-ourOffice Container PaddingTop-large PaddingBottom-large"
      >
        <h2 class="FontSize-large TextAlign-center MarginBottom">
          Kantor Kami
        </h2>

        <div class="Card Card--borderless MarginBottom-large">
          <div class="Card-body">
            <picture class="Image">
              <source
                srcset="/images/general/webp/employee-it.webp"
                type="image/webp"
              />

              <img
                src="/images/general/png/employee-it.png"
                alt="Para karyawan Tunaiku di Grha Niaga Thamrin"
              />
            </picture>
          </div>

          <div
            class="Card-body BgColor-dark-90 TextAlign-center PaddingTop-small PaddingBottom-small"
          >
            Para karyawan Tunaiku di Grha Niaga Thamrin
          </div>
        </div>

        <div class="Card Card--borderless">
          <div class="Card-body">
            <picture class="Image">
              <source
                srcset="/images/general/webp/grha-niaga-building.webp"
                type="image/webp"
              />

              <img
                src="/images/general/png/grha-niaga-building.png"
                alt="Kantor Tunaiku"
              />
            </picture>
          </div>

          <div
            class="Card-body BgColor-dark-90 TextAlign-center PaddingTop-small PaddingBottom-small"
          >
            Kantor Tunaiku
          </div>
        </div>
      </div>

      <div
        class="AboutUs-career Color-light-10 TextAlign-center PaddingTop-large PaddingBottom-large"
      >
        <p class="FontSize-large MarginBottom">
          <strong>Karir di Tunaiku</strong>
        </p>

        <p>Ingin karir yang seru dan high-impact?</p>
        <p class="MarginBottom">Bergabunglah dengan kami!</p>

        <a
          class="Button Button--primary Button--rounded Transform-uppercase"
          href="https://www.techinasia.com/companies/tunaiku"
        >
          Karir Tunaiku
        </a>
      </div>

      <general-footer></general-footer>
    </my-content>
  </my-page>

  <app-apply-loan-button></app-apply-loan-button>
</template>

<script src="./about-us.component.js"></script>
<style lang="scss" scoped src="./about-us.component.scss"></style>
