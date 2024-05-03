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
          ${calc.ongoingRate(gov.current, gov.last, gov.rate).rate + parseResult(calc.ongoingRate(gov.current, gov.last,
          gov.rate).advice)}
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
import { governance } from '../calc';

let code = ref(null);
let result = ref(null);

const gov = {
  date: 'TO DO',
  current: 'TO DO',
  last: 'TO DO',
  rate: 'TO DO',
  version: null
}

function doCheck (code) {
  const gov = governance(code);
  if (gov !== null) {
    this.gov = gov;
    this.result = true;
  } else {
    this.result = false;
  }
}
</script>