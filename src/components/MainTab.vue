<template>
  <div class="ui segment">
    <h4>Select current status:</h4>
    <div class="ui stackable two column grid">
      <div class="column"><button class="ui fluid button" :class="[{teal: (patient === 1)}, {basic:(patient !== 1)}]"
          @click="patient = 1; reset();">My patient is not currently on
          an
          insulin
          infusion</button></div>
      <div class="column"><button class="ui fluid button" :class="[{teal: (patient === 2)}, {basic: (patient !== 2)}]"
          @click="patient = 2; reset();">My patient is currently on an
          insulin
          infusion</button></div>
      <!-- <div class="column"><button class="ui basic button" id="b3">My patient's insulin has been stopped and is due to be restarted</button></div> -->
    </div>
    <div class="spacer"></div>
    <div class="ui blue segment" v-if="patient === 1">
      <div class="ui container"> <strong>For patients not currently on an insulin infusion or if insulin has been
          stopped and is due to be restarted:<br><br></strong></div>
      <div class="ui container">
        <form class="ui form" id="fm1" @submit.prevent="onSubmit">
          <div class="inline field">
            <label>Current blood glucose [mmol/L]</label>
            <Dropdown @update:modelValue="change()" v-model="selectedA" :options="glucoseValues" search selection inline
              placeholder="Blood glucose">
            </Dropdown>
          </div>
        </form>
        <div class="row">
          <p><br />Does your patient have enteral feed or a glucose containing IV fluid running?</p>
          <span style="margin-right: 10px;">No</span>
          <Checkbox label="Yes" toggle v-model="glucoseRunning" />
          <p>&nbsp;</p>
        </div>

        <div v-if="glucoseRunning === true">
          <button class="ui basic red button resetC rA" @click="reset()">Reset</button>
          <button class="ui yellow button doCalcA" @click="calc()">Calculate</button>
        </div>

        <div class="ui secondary segment" v-if="glucoseRunning === false">
          <p><strong>Advice:<br></strong><span class="adviceA">Intravenous insulin infusions require background
              nutrition to avoid hypoglycaemia. If enteral feed is interrupted arrange immediate glucose containing IV
              maintenance fluid. If no background feed or glucose containing fluid is available stop IV insulin and
              request urgent clinical review from the medical team.<br><br>If background nutrition is available,
              change
              the slider above to 'Yes' to activate the calculator.</span></p>
        </div>

        <div class="ui secondary segment" v-if="result">
          <p>
            <strong>Advice:<br></strong>
            <span class="adviceA" v-if="patient === 1">
              {{ result.advice.text[0] }}<br><br>
              <strong>Calculation reference code (record in casenotes):</strong><br>
              <span id="foo">{{ result.hex }}</span><br>
              <span id="copyAdvice" data-clipboard-target="#foo">
                <button class="ui mini button" @click="copyToClipBoard(result.hex)">
                  <i class="ui copy icon"></i> Copy code to clipboard
                </button>
              </span>
            </span>
          </p>
        </div>

      </div>
    </div>
    <div class="ui blue segment" v-if="patient === 2"> <strong>For patients currently on an insulin
        infusion<br><br></strong>
      <div class="ui container">
        <form class="ui form" id="fm2">
          <div class="inline field">
            <label>Current blood glucose [mmol/L]</label>
            <Dropdown @update:modelValue="change()" v-model="selectedB" :options="glucoseValues" search selection inline
              placeholder="Blood glucose">
            </Dropdown>
          </div>
          <div class="inline field">
            <label>Previous blood glucose [mmol/L]</label>
            <Dropdown @update:modelValue="change()" v-model="selectedC" :options="glucoseValues" search selection inline
              placeholder="Blood glucose">
            </Dropdown>
          </div>
          <div class="inline field">
            <label>Current Insulin rate [ml/hr of 1 iU/ml]</label>
            <Dropdown @update:modelValue="change()" v-model="selectedD" :options="insulinRates" search selection inline
              placeholder="Insulin rate">
            </Dropdown>
          </div>
        </form>
        <div class="row">
          <p><br />Does your patient have enteral feed or a glucose containing IV fluid running?</p>
          <span style="margin-right: 10px;">No</span>
          <Checkbox label="Yes" toggle v-model="glucoseRunning" />
          <p>&nbsp;</p>
        </div>
        <div v-if="glucoseRunning === true">
          <button class="ui basic red button resetC rB" @click="reset()">Reset</button>
          <button class="ui yellow button doCalc" @click="calc()">Calculate</button>
        </div>
        <div class="ui secondary segment" v-if="glucoseRunning === false">
          <p><strong>Advice:<br></strong><span class="adviceB">
              Intravenous insulin infusions require background nutrition to avoid hypoglycaemia. If enteral feed is
              interrupted arrange immediate glucose containing IV maintenance fluid. If no background feed or glucose
              containing fluid is available stop IV insulin and request urgent clinical review from the medical
              team.<br><br>If background nutrition is available, change the slider above to 'Yes' to activate the
              calculator.</span></p>
        </div>
        <div class="ui secondary segment" v-if="result">
          <p>
            <strong>New Insulin rate:<br></strong>
            <span class="adviceA">
              {{ result.rate }}<br><br>
              <strong>Additional advice:<br></strong>
              <span v-for="item in result.advice.text">
                {{ item }}<br>
              </span>
              <br>
              <strong>Calculation reference code (record in casenotes):</strong><br>
              <span id="foo">{{ result.hex }}</span><br>
              <span id="copyAdvice" data-clipboard-target="#foo">
                <button class="ui mini button" @click="copyToClipBoard(result.hex)">
                  <i class="ui copy icon"></i> Copy code to clipboard
                </button>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Checkbox, Dropdown } from 'vue-fomantic-ui';
import { glucoseValues, insulinRates } from '../data.js';
import CalcClass from '@saferinsulin/core';

const patient = ref(0);
const glucoseRunning = ref(false);
const selectedA = ref();
const selectedB = ref();
const selectedC = ref();
const selectedD = ref();
const result = ref();
function reset() {
  selectedA.value = null;
  selectedB.value = null;
  selectedC.value = null;
  selectedD.value = null;
  result.value = null;
  glucoseRunning.value = false;
}
function calc() {
  const Calc = new CalcClass('2.0.0');
  if (patient.value === 1) {
    result.value = Calc.startingRate(parseFloat(selectedA.value.value));
    console.log(result.value);
  }
  if (patient.value === 2) {
    result.value = Calc.ongoingRate(selectedB.value.value, selectedC.value.value, selectedD.value.value)
  }
  console.log(result.value);
}

function copyToClipBoard(textToCopy) {
  const tmpTextField = document.createElement("textarea")
  tmpTextField.textContent = textToCopy
  tmpTextField.setAttribute("style", "position:absolute; right:200%;")
  document.body.appendChild(tmpTextField)
  tmpTextField.select()
  tmpTextField.setSelectionRange(0, 99999) /*For mobile devices*/
  document.execCommand("copy")
  tmpTextField.remove()
}
function change(element) {
  result.value = null;
}
</script>