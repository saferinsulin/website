<template>
  <div class="ui segment">
    <div v-if="!result">
      <h4>Enter a calcuation reference code:</h4>
      <form class="ui form">
        <div class="fields">
          <div class="six wide field">
            <div class="ui action input">
              <input type="text" placeholder="Reference code" v-model="code">
              <div class="ui teal button" @click="doCheck(code)">
                Check
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-if="result === true">
      <p>Code <strong>{{ code }}</strong> was generated using core calculator module version <strong>{{ gov.version
          }}</strong> on <strong>{{ gov.date }}</strong></p>
      <p>The user entered the following data:</p>
      <div class="ui secondary segment">
        <p>Current blood glucose [mmol/L]: <strong>{{ gov.current }}</strong></p>
        <p v-if="gov.last">Previous blood glucose [mmol/L]: <strong>{{ gov.last }}</strong></p>
        <p v-if="gov.rate">Current Insulin rate [ml/hr of 1 iU/ml]: <strong>{{ gov.rate }}</strong></p>
      </div>
      <p>For these values, the calculator generated the following output:</p>
      <div class="ui secondary segment">
        <p><strong>New Insulin rate:</strong><br />
          <span v-html="output"></span>
        </p>
      </div><br>
    </div>
    <div v-if="result === false">
      <p>
        Code <strong>{{ code }}</strong> is invalid and was not generated with <em>@saferinsulin/core</em>.<br /><br />
      </p>
    </div>
    <div v-if="result !== null">
      <button @click="result = null; code = null;" class="ui basic red button">Reset</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { governance, startingRate, ongoingRate, Legacy } from '@saferinsulin/core';

let code = ref(null);
let result = ref(null);
let output = ref(null);

const gov = {
  date: 'TO DO',
  current: 'TO DO',
  last: 'TO DO',
  rate: 'TO DO',
  version: null
}

function doCheck (code) {
  // get governance code
  const gov = governance(code);
  if (gov !== null) {
    this.gov = gov;
    if (gov.function ==='d') {
      this.output = `${parseResult(startingRate(gov.current).advice)}`
    }
    if (gov.function === 'c') {
      this.output = `${ongoingRate(gov.current, gov.last, gov.rate).rate} ${parseResult(ongoingRate(gov.current, gov.last, gov.rate).advice)}`
    }
    const l = new Legacy('1.0.0');
    if (gov.function === 'a') {
      this.output = `${parseResult(l.startingRate(gov.current).advice)}`
    }
    if (gov.function === 'b') {
      this.output = `${l.ongoingRate(gov.current, gov.last, gov.rate).rate} ${parseResult(l.ongoingRate(gov.current, gov.last, gov.rate).advice)}`
    }
    this.result = true;
  } else {
    this.result = false;
  }
}

function parseResult (advice) {
  var output = '';
  if (advice.type === 'additional') {
    output += '<br><br><strong>Additional advice:</strong><br>';
  }
  advice.text.forEach(function (element) {
    output += element + '<br>';
  });
  return output;
};
</script>