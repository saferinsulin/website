<template>
  <!-- <SuiButton @click="show = true">Show Modal</SuiButton> -->
  <SuiModal v-model="show" @update:modelValue="(e) => $emit('update:modelValue', e)">
    <SuiModalHeader>About this tool</SuiModalHeader>
    <SuiModalContent scrolling>
        <p>v2.0.1
          <br />
          <small>Last build:
            {{ buildDateFromScript }}
          </small>
        </p>
        <p>&copy; Dr JP Lomas & Dr Rhodri Harris, 2019-2025</p>
        <a href="https://lomas.doctor">https://lomas.doctor</a><br>
        <a href="https://github.com/saferinsulin">Full source code on Github</a>
        <br><br>
        <div class="ui stackable grid">
          <div class="six wide column">
            Contributors:
            <blockquote><strong>Dr JP Lomas<br>Dr Rhodri Harris<br>Dr Tony Thomas</strong></blockquote>
          </div>
          <div class="four wide column">
            Supported by:<br>
            <img class="ui small image" src="/gmccn.svg">
          </div>
          <!-- <div class="four wide column">
            Funded by:<br>
            <img class="ui small image" src="/logo.svg">
          </div> -->
        </div>
        <p>
        </p>
        <div class="ui inverted red segment">
          For use when trained and with consultant permission
        </div>
        <strong>MIT license</strong><br />Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        <br><br>
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        <br><br>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
    </SuiModalContent>
    <SuiModalActions>
      <div @click="$emit('update:modelValue', false)" class=" ui ok button">
        <i class="remove icon"></i>
        Close
      </div>
      <!-- <SuiButton positive @click="$emit('update:modelValue', false)">OK</SuiButton> -->
    </SuiModalActions>
  </SuiModal>
</template>
  <script setup>
  import { ref } from 'vue'
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalDescription,
  SuiModalHeader,
  SuiButton,
  SuiHeader,
  SuiImage,
} from 'vue-fomantic-ui'
  const show = ref(true);
  const buildDateFromScript = __BUILD_DATE__;
</script>
