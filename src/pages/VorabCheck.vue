<template>
  <div padding>
    <q-form class="q-gutter-md">
      <div id="q-app" style="min-height: 100vh;">
        <div class="q-pa-md row items-start q-gutter-md">

          <q-card class="my-card">

            <q-card-section>
              <p>1. Bist Du mindestens 50 kg schwer?</p>
              <q-btn-toggle v-model="question_1" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>2. Fühlen Sie sich zurzeit gesund?</p>
              <q-btn-toggle v-model="question_2" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>3. Hatten Sie in den letzten 24 Std. eine dentalhygienische Behandlung?</p>
              <q-btn-toggle v-model="question_3" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>4. Hatten Sie in den letzten 4 Monaten eine Magen- und Darmspiegelung?</p>
              <q-btn-toggle v-model="question_4" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>5. Hatten Sie in den letzten 48 Stunden eine Blutentnahme?</p>
              <q-btn-toggle v-model="question_5" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>6. Haben Sie in den letzten 2 Wochen Antibiotika-Medikamente verwendet?</p>
              <q-btn-toggle v-model="question_6" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>7. Haben Sie in den letzten 48 Stunden eine Impfung erhalten?</p>
              <q-btn-toggle v-model="question_7" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>8. Hatten Sie in den letzten 4 Wochen einen Zeckenstich?</p>
              <q-btn-toggle v-model="question_8" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

            <q-separator inset></q-separator>

            <q-card-section>
              <p>9. Haben Sie sich in den letzten 4 Monaten ein Tattoo/Piercing stechen lassen?</p>
              <q-btn-toggle v-model="question_9" class="my-custom-toggle" no-caps rounded unelevated
                toggle-color="primary" color="white" text-color="primary" :options="[
                  { label: 'Ja', value: 'one' },
                  { label: 'Nein', value: 'two' }
                ]"></q-btn-toggle>
            </q-card-section>

          </q-card>
        </div>
      </div>

    </q-form>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  el: '#q-app',
  data() {
    return {
      question_1: (''),
      question_2: (''),
      question_3: (''),
      question_4: (''),
      question_5: (''),
      question_6: (''),
      question_7: (''),
      question_8: (''),
      question_9: (''),


    }
  }
})

</script>

<style>
.my-custom-toggle {
  border: 1px solid #027be3
}
</style>
