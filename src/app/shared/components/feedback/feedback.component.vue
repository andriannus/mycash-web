<template>
  <button class="Feedback-button" @click="toggleFeedbackForm">
    <my-icon :icon="['far', 'comment-alt']" size="xs"></my-icon>
    <span class="Feedback-label">Saran</span>
  </button>

  <teleport to="body">
    <my-bounce-transition>
      <my-page
        v-if="state.isFeedbackFormShown"
        class-name="Feedback-form"
        pop-up-window
      >
        <my-header>
          <my-toolbar color="info">
            <my-close-button @click="toggleFeedbackForm"></my-close-button>
            <my-title>Masukan dan Saran</my-title>
          </my-toolbar>
        </my-header>

        <my-content>
          <p class="MarginBottom-base">
            Bantu kami melayani Anda lebih baik.
          </p>

          <div>
            <p>
              <strong>Seberapa mudah pengisian formulir di Tunaiku.</strong>
            </p>
          </div>

          <div>
            <p>
              <strong>
                Apa yang Anda rasakan saat mengisi formulir pinjaman di Tunaiku?
              </strong>
            </p>

            <p class="MarginBottom-base">
              Pilih salah satu saja.
            </p>
          </div>

          <div>
            <p>
              <strong>
                Ceritakan alasan Anda memberikan penilaian tersebut.
              </strong>
            </p>
          </div>

          <template #contentFooter>
            <my-button color="primary" full-width>
              Kirim
            </my-button>
          </template>
        </my-content>
      </my-page>
    </my-bounce-transition>
  </teleport>
</template>

<script src="./feedback.component.js"></script>
<style lang="scss" scoped src="./feedback.component.scss"></style>
