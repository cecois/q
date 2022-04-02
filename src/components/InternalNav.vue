<template>
  <div class="">
    <div class=""></div>
    <div class="">
      pane1 • pane2
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const PROPS = defineProps({ panel: String })
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
  nav(PROPS.panel)
})

watch(() => [PROPS.panel], (newp, oldp) => {
  nav(PROPS.panel)
})

const nav = (el) => {
  let element = document.querySelector(`#${el}`);
  element.scrollIntoView({ block: 'end', behavior: 'smooth' })
}
</script>
