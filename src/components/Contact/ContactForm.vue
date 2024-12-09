<script lang="ts">
  import type { FormData } from '@/typedefs/contact';
  const formData: FormData = {
    subject: {
      default: '',
      required: true,
      minLength: 5,
      maxLength: 100,
      placeholder: 'Inquiry about your web development projects'
    },
    body: {
      default: '',
      required: true,
      minLength: 20,
      maxLength: 500000,
      placeholder: "Write the details of your message here, such as your questions or proposals. I’d love to hear from you!"
    }
  }
</script>

<script setup lang="ts">
import { defineModel } from 'vue';

const subject = defineModel('subject', { default: formData.subject.default })
const body = defineModel('body', { default: formData.subject.default })

const { targetIsVisible } = defineProps<{ targetIsVisible:boolean }>()

const handleSubmit = () => {
  const subjectURI = encodeURIComponent(subject.value);
  const contentURI = encodeURIComponent(body.value);
  const mailtoURL = `mailto:jorgeb.dev.acc@gmail.com?subject=${subjectURI}&body=${contentURI}`;
  window.location.href = mailtoURL;
}

</script>


<template>
  <form id="form" @submit.prevent="handleSubmit" :class="{ fadein_left: targetIsVisible }">
    <h1 id="form_title">Get in touch!</h1>
    <label class="form_label">
      Subject
      <input
        class="form_label_input" 
        v-model="subject" 
        :minlength="formData.subject.minLength"
        :maxlength="formData.subject.maxLength"
        :required="formData.subject.required"
        :placeholder="formData.subject.placeholder"
        spellcheck="false"
      />
    </label>
    <label class="form_label">
      Content
      <textarea
        id="content"
        class="form_label_input" 
        v-model="body" 
        :minlength="formData.body.minLength"
        :maxlength="formData.body.maxLength"
        :required="formData.body.required"
        :placeholder="formData.body.placeholder"
        spellcheck="false"
      />
    </label>
    <button id="form_submit" type="submit">SEND</button>
  </form>
</template>

<style scoped>
  #form {
    width: 275px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid var(--text);
    border-radius: 6px;
    background: rgb(26,26,26);
    background: radial-gradient(circle, rgba(26,26,26,1) 30%, rgba(58,99,81,1) 100%);

    #form_title {
      font-size: 25px;
      font-weight: 400;
      margin: 30px 0;
    }

    .form_label {
      width: 100%;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 10px;

      .form_label_input {
        width: 100%;
        font-family: var(--paragraphs);
        padding: 8px;
        border-radius: 4px;
        background-color: var(--background);
        transition-duration: 300ms;
        color: var(--text);
        margin-top: 5px;
        outline: 1px solid var(--separator);
        font-size: 13px;

        &:focus {
          background-color: #111;
          color: var(--text);
          outline: 1px solid var(--text);
        }
      }

      #content {
        height: 200px;
        resize: none;
      }
    }

    #form_submit {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px 20px;
      margin: 10px 0;
      background-color: var(--highlight);
      font-family: var(--titles);
      color: var(--background);
      transition-duration: 200ms;
      font-weight: 600;

      &:hover {
        color: var(--text);
        background-color: var(--hover);
        box-shadow: 0 0 5px var(--text);
      }
    }
  }

  .fadein_left {
    animation: fadein_left 500ms ease-out forwards !important;
  }
</style>