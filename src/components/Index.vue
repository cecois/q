<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import InternalNav from '/src/components/InternalNav.vue'

const PROPS = defineProps({ pane: String });
// defineProps({
//   msg: String
// })

const count = ref(0)
</script>
<template>
  <div class="navigation q-section">
    <div class="the-grid grid-nav">
      <div id="" class="logo">
        <div class="logo-circle"></div>
        <div class="logo-text">Kyu Miller pane:{{pane}}</div>
      </div>
      <InternalNav @set-panel="_setPane" :panel="pane" />
      <!--       <div id="" class="social-links">
        <a href="" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c133694029c4be02dc_social-mail.svg" loading="lazy" alt="Email icon" class="social-icon"></a>
        <a href="" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c11fc5ce1bc8ae2fbd_social-twitter.svg" loading="lazy" alt="Twitter icon" class="social-icon"></a>
        <a href="" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c1189b9bf22bc53712_social-instagram.svg" loading="lazy" alt="Instagram icon" class="social-icon"></a>
        <a href="" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c1a4128e2c69cc6a95_social-linkedin.svg" loading="lazy" alt="Linkedin icon" class="social-icon"></a>
        <a href="" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fcf9d5adab5a126b898c86_social-facebook.svg" loading="lazy" alt="Facebook icon" class="social-icon"></a>
        <a href="" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c148a9960bf7879a58_social-tok.svg" loading="lazy" alt="Tree of knowledge icon" class="social-icon"></a>
      </div> -->
    </div>
  </div>
  <div class="hero q-section">
    <div class="the-grid grid">
      <h1 id="thanatographer" class="heading1-animated-top" style="will-change: transform; transform: translate3d(-26.2456px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">westerliness. Botulism.</h1>
      <h1 id="mythologer" class="heading1-animated-bottom" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">Malikite. imploring.</h1>
      <p id="devilishness" class="maxwidth-half">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat one.
      </p><img src="/hero-q.png" loading="eager" id="sodomitess" sizes="(max-width: 991px) 70vw, (max-width: 1111px) 90vw, 1000px" srcset="/hero-q-sharp-p-500.png 500w, /hero-q.png 1000w" alt="" class="q-hero">
      <!-- <a id="revenued" href="mailto:?subject=Enquiry" class="button-circle button-hero-position w-button">Contact Kyu</a> --></div>
  </div>
  <div class="the-grid image-gallery"><img src="/IMG_FDD63D04A165-1.jpeg" loading="lazy" id="atterminal" sizes="100vw" srcset="/61fcf7951e44262bc1a0c505_image00025-p-500.jpeg 500w, /61fcf7951e44262bc1a0c505_image00025-p-1080.jpeg 1080w, /61fcf7951e44262bc1a0c505_image00025-p-1600.jpeg 1600w, /61fcf7951e44262bc1a0c505_image00025-p-2000.jpeg 2000w, /IMG_FDD63D04A165-1.jpeg 2048w" alt="Gavin on stage in front of big screen" class="image"><img src="/q-topps.jpeg" loading="lazy" id="inspirometer" sizes="100vw" srcset="/61fcf795c0177e620ac13444_image00006-p-500.jpeg 500w, /61fcf795c0177e620ac13444_image00006-p-800.jpeg 800w, /q-topps.jpeg 1400w" alt="Looking over a crowded auditorium to the stage in the distance " class="image"><img src="/IMG_C1EEDD3255A2-1.jpeg
" loading="lazy" id="leadenly" sizes="100vw" srcset="/61fcf795ef6fd9682c549cca_image00013-p-500.jpeg 500w, /61fcf795ef6fd9682c549cca_image00013-p-1080.jpeg 1080w, /IMG_C1EEDD3255A2-1.jpeg 1400w" alt="Gavin on stage pointing out to a full auditorium" class="image"></div>
  <div class="section q-section">
    <div class="the-grid grid-2">
      <div id="incense" class="body-text">
        <p id="nonsexually" class="maxwidth-half p-sticky">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
      <div id="overglaze" class="testimonials">
        <div id="pseudoparaplegia" class="testimonial" style="opacity: 0;">
          <p class="quote">“This guy is on a mission! Funny, enigmatic, intelligent and heartfelt.”</p>
          <h4>Nike</h4></div>
        <div class="testimonial" style="opacity: 0;">
          <p class="quote">“Simply sensational.”</p>
          <h4>Ministry of Defence</h4></div>
        <div class="testimonial" style="opacity: 0;">
          <p class="quote">“The rock star of inspirational speaking”</p>
          <h4>Aberdeen City Council</h4></div>
        <div class="testimonial" style="opacity: 0;">
          <p class="quote">“Gavin received a satisfaction rating of 98%, pretty impressive!”</p>
          <h4>Castle Rock</h4></div>
        <div class="testimonial" style="opacity: 0;">
          <p class="quote">“Rip-upyour rule book and take your team on a journey with Gavin.”</p>
          <h4><strong>Keller Group</strong></h4></div>
        <div class="testimonial" style="opacity: 0;">
          <p class="quote">“<em>Out
 of the box thinking, self-reflection and a bag full of energy! Gavin's 
passion resonated with our team both personally and professionally. 
Great way to kick start 2022</em>”</p>
          <h4>PayPal</h4></div>
      </div>
    </div>
  </div>
  <div class="section atrous-section-margin-offset q-section">
    <div class="wrapper">
      <h2 id="untransposed" class="heading2-baseball" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">My books</h2>
      <div data-delay="4000" data-animation="cross" class="slider q-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" role="region" aria-label="carousel">
        <div class="mask q-slider-mask" id="q-slider-mask-0">
          <div class="q-slide" aria-label="1 of 6" role="group" style="transform: translateX(0px); opacity: 1;">
            <div class="the-grid grid-3">
              <div id="sikar" class="slide-text">
                <h3>Life Will See You Now</h3>
                <p class="paragraph"><strong><em>Life Will See You Now</em></strong> challenges you to live life better than you have to, to never be afraid of your own style and to blow your own god damn mind for a change. A rousing, uplifting anthem that will inspire you to put down your phone, rediscover what truly matters and completely rethink what ‘making it’ in life actually means.</p><a href="https://www.amazon.co.uk/gp/product/0857088084/ref=dbs_a_def_rwt_hsch_vapi_tu00_p1_i2" target="_blank" class="link-hover-cursor z-index_0">Buy now on Amazon</a>
                <div class="divider"></div>
                <h4>Review</h4>
                <p class="quote">“<em>Uplifting and pure joy. Has healed my worried soul.”</em>”</p>
              </div><img src="/620e379ba906cd1369be0118_book-life.jpg" loading="eager" id="impiously" sizes="(max-width: 479px) 68vw, (max-width: 991px) 61vw, 629.6484375px" srcset="/620e379ba906cd1369be0118_book-life-p-500.jpeg 500w, /620e379ba906cd1369be0118_book-life.jpg 1100w" alt="Life will see you now book cover" class="baseball-image"></div>
          </div>
          <div class="q-slide" aria-label="2 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1; visibility: hidden;">
            <div class="the-grid grid-3" aria-hidden="true">
              <div id="oarweed" class="slide-text" aria-hidden="true">
                <h3 aria-hidden="true"><strong aria-hidden="true">A Head Full Of Everything</strong></h3>
                <p aria-hidden="true"><strong aria-hidden="true"><em aria-hidden="true">A Head Full of Everything</em></strong><em aria-hidden="true">&nbsp;demonstrates
 that being a teenager doesn’t have to suck. And when it does, there’s 
some cool things you can do to make it suck a little less. This book 
will challenge you to embrace your inner weird, to never grow up, be 
true to yourself, protect your mental health and be sure that for your 7
 glorious teenage years, you act your age. Literally.</em></p><a href="https://www.amazon.co.uk/gp/product/0857089013/ref=dbs_a_def_rwt_bibl_vppi_i5" target="_blank" tabindex="-1" aria-hidden="true">Buy now on Amazon</a>
                <div class="divider" aria-hidden="true"></div>
                <h4 aria-hidden="true">Review</h4>
                <p class="quote" aria-hidden="true">“Thought it would be rubbish, it wasn’t. Funny, though-provoking and actually quite moving in places. I loved it!”</p>
              </div><img src="/620e379bc372c3100133dc01_book-everyting.jpg" loading="eager" id="variformity" sizes="(max-width: 479px) 68vw, (max-width: 991px) 61vw, 629.6484375px" srcset="/620e379bc372c3100133dc01_book-everyting-p-500.jpeg 500w, /620e379bc372c3100133dc01_book-everyting.jpg 1100w" alt="A head full of everything book cover" class="baseball-image" aria-hidden="true"></div>
          </div>
          <div class="q-slide" aria-label="3 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1; visibility: hidden;">
            <div class="the-grid grid-3" aria-hidden="true">
              <div id="embind" class="slide-text" aria-hidden="true">
                <h3 aria-hidden="true">Diary of a Brilliant Kid</h3>
                <p aria-hidden="true"><strong aria-hidden="true"><em aria-hidden="true">Diary of a Brilliant Kid</em></strong><em aria-hidden="true">&nbsp;is
 the "tweenager's" atlas for navigating life. This interactive 
collection of stories, quotes, theories and yes, science, guides you 
through the difficult years between ages 7 and 11 to help you make sense
 of yourself and the world around you. Everything is changing! And 
that's okay! It's actually more than okay — it's&nbsp;exciting.</em></p><a href="https://www.amazon.co.uk/gp/product/085708786X/ref=dbs_a_def_rwt_hsch_vapi_tu00_p1_i0" target="_blank" tabindex="-1" aria-hidden="true">Buy now on Amazon</a>
                <div class="divider" aria-hidden="true"></div>
                <h4 aria-hidden="true">Review</h4>
                <p class="quote" aria-hidden="true"><em aria-hidden="true">"This book successfully elicits the greatness in every child."</em></p>
              </div><img src="/620e379ba906cd44bbbe0117_book-brill1.jpg" loading="eager" id="thecasporous" sizes="(max-width: 479px) 68vw, (max-width: 991px) 61vw, 629.6484375px" srcset="/620e379ba906cd44bbbe0117_book-brill1-p-500.jpeg 500w, /620e379ba906cd44bbbe0117_book-brill1.jpg 1100w" alt="Brilliant kid book cover" class="baseball-image" aria-hidden="true"></div>
          </div>
          <div class="q-slide" aria-label="4 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1; visibility: hidden;">
            <div class="the-grid grid-3" aria-hidden="true">
              <div id="mundificant" class="slide-text" aria-hidden="true">
                <h3 aria-hidden="true"><strong aria-hidden="true">BrillKid: The Big Number 2</strong></h3>
                <p aria-hidden="true"><strong aria-hidden="true"><em aria-hidden="true">Brill Kid 2</em></strong><em aria-hidden="true">
 is rock solid 'personal development' with a difference. A BIG 
difference! It's aimed at 7 to 11s, the exact age when mental habits are
 created. The book picks up where Diary of a Brilliant Kid left off – 
raising the bar from mental health to mental wealth, enabling young 
people to flourish in a world that's hell bent on knocking them 
sideways.</em></p><a href="https://www.amazon.co.uk/Brill-Kid-Number-Awesomeness-Level/dp/0857088912" target="_blank" tabindex="-1" aria-hidden="true">Buy now on Amazon</a>
                <div class="divider" aria-hidden="true"></div>
                <h4 aria-hidden="true">Amazon review</h4>
                <p class="quote" aria-hidden="true"><em aria-hidden="true">“Brilliantly funny, brilliantly simple and massively impactful.”</em></p>
              </div><img src="/620e379a2babd1152159a93e_book-brill2.jpg" loading="eager" id="proctoscopy" sizes="(max-width: 479px) 68vw, (max-width: 991px) 61vw, 629.6484375px" srcset="/620e379a2babd1152159a93e_book-brill2-p-500.jpeg 500w, /620e379a2babd1152159a93e_book-brill2.jpg 1100w" alt="Brilliant kid 2 book cover" class="baseball-image" aria-hidden="true"></div>
          </div>
          <div class="q-slide" aria-label="5 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1; visibility: hidden;">
            <div class="the-grid grid-3" aria-hidden="true">
              <div id="infinitival" class="slide-text" aria-hidden="true">
                <h3 aria-hidden="true">Shine</h3>
                <p aria-hidden="true"><strong aria-hidden="true"><em aria-hidden="true">Shine </em></strong>is the literary equivalent of ‘ctrl/alt/delete.’ All you have to do is read the book, keep an open mind, and apply the learning. You will experience a personal re-boot with new mental software installed, upgrading you to ‘best possible self.’ It’s a very simple process that also happens to be ‘not very easy.’ Because, of course, if being your best self was easy, everybody would be doing it.</p><a href="https://www.amazon.co.uk/gp/product/0857087657/ref=dbs_a_def_rwt_hsch_vapi_tu00_p1_i1" target="_blank" class="link" tabindex="-1" aria-hidden="true">Buy now on Amazon</a>
                <div class="divider" aria-hidden="true"></div>
                <h4 aria-hidden="true">Review</h4>
                <p class="quote" aria-hidden="true">“<em aria-hidden="true">It’s completely changed my life, seriously. I couldn’t put it down.</em>”</p>
              </div><img src="/620e379b0f71923b16795dc3_book-shine.jpg" loading="eager" id="semic" sizes="(max-width: 479px) 68vw, (max-width: 991px) 61vw, 629.6484375px" srcset="/620e379b0f71923b16795dc3_book-shine-p-500.jpeg 500w, /620e379b0f71923b16795dc3_book-shine.jpg 1100w" alt="Shine book cover" class="baseball-image" aria-hidden="true"></div>
          </div>
          <div class="q-slide" aria-label="6 of 6" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1; visibility: hidden;">
            <div class="the-grid grid-3" aria-hidden="true">
              <div id="baxter" class="slide-text" aria-hidden="true">
                <h3 aria-hidden="true">Zest</h3>
                <p aria-hidden="true"><strong aria-hidden="true"><em aria-hidden="true">Zest</em></strong><em aria-hidden="true">&nbsp;is
 a wake-up call for you to explore the formative moments that define 
your life. It challenges you to believe that your best days are still 
ahead, to search your soul, to shake things up and bask in the warmth of
 glorious individuality. It drives you to rethink, rejuvenate and 
reinvent. It also contains a touch of the revolutions.</em></p><a href="https://www.amazon.co.uk/gp/product/0857088009/ref=dbs_a_def_rwt_hsch_vapi_tu00_p1_i5" target="_blank" tabindex="-1" aria-hidden="true">Buy now on Amazon</a>
                <div class="divider" aria-hidden="true"></div>
                <h4 aria-hidden="true">Review</h4>
                <p class="quote" aria-hidden="true"><em aria-hidden="true">“A genuine kick up the bum with lots of laughs.”</em></p>
              </div><img src="/620e379c4c3e03f4e6a978ed_book-zest.jpg" loading="eager" id="coccinellid" alt="Zest book cover" class="baseball-image" aria-hidden="true"></div>
          </div>
          <div aria-live="off" aria-atomic="true" class="q-slider-aria-label" data-wf-ignore=""></div>
        </div>
        <!-- <div class="left-arrow link-hover-cursor q-slider-arrow-left" role="button" tabindex="0" aria-controls="q-slider-mask-0" aria-label="previous slide"><img src="/6203802355b98b272345b99d_arrow-left.svg" loading="lazy" alt="arrow left icon" class="slider-arrow"></div>
        <div class="slide-nav q-slider-nav">
          <div class="q-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 6" aria-pressed="true" role="button" tabindex="0" style="margin-left: 3px; margin-right: 3px;"></div>
          <div class="q-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
          <div class="q-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
          <div class="q-slider-dot" data-wf-ignore="" aria-label="Show slide 4 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
          <div class="q-slider-dot" data-wf-ignore="" aria-label="Show slide 5 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
          <div class="q-slider-dot" data-wf-ignore="" aria-label="Show slide 6 of 6" aria-pressed="false" role="button" tabindex="-1" style="margin-left: 3px; margin-right: 3px;"></div>
        </div>
        <div class="right-arrow link-hover-cursor q-slider-arrow-right" role="button" tabindex="0" aria-controls="q-slider-mask-0" aria-label="next slide"><img src="/620380231e4a0f552c9ee660_arrow-right.svg" loading="lazy" alt="" class="slider-arrow"></div> -->
      </div>
    </div>
  </div>
  <div class="section overflow-hidden q-section">
    <div class="the-grid grid-contact">
      <h2 id="glossolalia" data-w-id="1c0b0348-8e6a-9c46-e68b-83c6b75de567" class="heading2-contact" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">Get in touch</h2><a id="domiciliate" href="mailto:?subject=Enquiry" class="button-circle link-hover-cursor w-button">Contact Kyu</a>
      <div data-w-id="1fabac4d-3954-d92e-5087-08acd94c3e82" data-animation-type="lottie" data-src="https://assets.website-files.com/61fbdf153be78247c66ed968/620279d727221711d8b9fda7_gavin-signature.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="3.36" data-duration="0" id="deducement" class="gavin-signature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 830" width="1120" height="830" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);" preserveAspectRatio="xMidYMid meet">
          <defs>
            <clipPath id="__lottie_element_2">
              <rect width="1120" height="830" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clip-path="url(#__lottie_element_2)">
            <g style="display: block;" transform="matrix(1,0,0,1,85,456)" opacity="1">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="6" d="M0 0"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p id="typologic" class="quote">If you’re looking for one of the most talented and sought after speakers in the world… get in touch.</p>
    </div>
  </div>
  <div class="q-section">
    <div class="the-grid grid-footer">
      <div id="orthocephaly" class="social-links">
        <a href="mailto:?subject=Enquiry" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c133694029c4be02dc_social-mail.svg" loading="lazy" alt="Email icon" class="social-icon"></a>
        <a href="https://twitter.com/null" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c11fc5ce1bc8ae2fbd_social-twitter.svg" loading="lazy" alt="Twitter icon" class="social-icon"></a>
        <a href="https://www.instagram.com/gavoattes/" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c1189b9bf22bc53712_social-instagram.svg" loading="lazy" alt="Instagram icon" class="social-icon"></a>
        <a href="https://www.linkedin.com/in/treeofknowledge" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c1a4128e2c69cc6a95_social-linkedin.svg" loading="lazy" alt="Linkedin icon" class="social-icon"></a>
        <a href="https://www.facebook.com/null" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fcf9d5adab5a126b898c86_social-facebook.svg" loading="lazy" alt="Facebook icon" class="social-icon"></a>
        <a href="https://treeof.com/" target="_blank" class="social-link link-hover-cursor q-inline-block"><img src="/61fbf6c148a9960bf7879a58_social-tok.svg" loading="lazy" alt="Tree of knowledge icon" class="social-icon"></a>
      </div>
      <p id="raft" class="no-margin">© C.C. Miller</p>
      <p id="w-node-b45004d2-c7c8-b30f-d83c-b354d7320a88-276ed969
" class="no-margin">dialoguetacksman</p>
    </div>
  </div>
  <!-- <div class="cursor-wrapper"><div class="cursor" style="will-change: transform; transform: translate3d(-11.093vw, 21.86vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div></div> -->
  <!--[if lte IE 9]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]-->
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
