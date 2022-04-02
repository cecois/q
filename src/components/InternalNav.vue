<template>
  <div class="">
    <div class=""></div>
    <div class="">{{pane}}
      <ul>
        <li @click="pane=p" v-for="p in panes">p.{{p}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const PROPS = defineProps({ panes: Array, pane: String })
  // const emit = defineEmits(['set-panel'])

/*
                          ______
                         / ____ `.
 _   __  __   _   .---.  `'  __) |
[ \ [  ][  | | | / /__\\ _  |__ '.
 \ \/ /  | \_/ |,| \__.,| \____) |
  \__/   '.__.'_/ '.__.' \______.'
*/
onMounted(() => {
  nav(PROPS.pane)
})

watch(() => [PROPS.pane], (newp, oldp) => {
  nav(PROPS.pane)
})

const nav = (el) => {
  let element = document.querySelector(`#${el}`);
  element.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
</script>
