<script setup lang="ts">
import format from 'date-fns/format';
// gsap関連import
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const main = ref();
let ctx;
// コレクション名から一覧取得
const props = defineProps<{
  postType: string;
}>();
const { data } = await useAsyncData(props.postType, () =>
    queryCollection(props.postType).order("date", "DESC").all(),
);

onMounted(() => {
  // GSAP設定
  gsap.registerPlugin(ScrollTrigger);
  ctx = gsap.context(() => {
    // パララックス
    let gsapParas = gsap.utils.toArray(".c-post-img");
    gsapParas.forEach((gsapPara) => {
      const y = gsapPara.getAttribute('data-y') || -50;
      gsap.fromTo(gsapPara, {
        y: y*1,
      }, {
        y: -y*1,
        ease: "linear",
        scrollTrigger: {
          trigger: gsapPara,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onEnter: ({progress, direction, isActive}) => {
            console.log(progress, direction, isActive);
            gsapPara.classList.add('is-gsap-active');
          }
        },
      })
    });
  }, main.value); // <- Scope!
  /*
  // 表示アニメーション
  let gsap1 = gsap.utils.toArray(".box");
  gsap1.forEach((gsap1) => {
    gsap.set(gsap1, {
      autoAlpha: 0,
      y: 20,
      scale: .95,
      skewX: 4,
      skewY: 2
    })
    gsap.to(gsap1, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      duration: .5,
      scrollTrigger: {
        trigger: gsap1,
        start: 'top 50%',
      }
    })
  });
  */
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
	<div v-if="data">
		<div class="c-post-list">
			<NuxtLink v-for="post in data" :to="post.path" class="c-post-item">
				<div class="c-post-img-wrapper">
					<NuxtImg v-if="post.image" :src="post.image.src" :alt="post.image.alt" width="500" height="500" class="c-post-img u-object-fit-cover" />
				</div>
				<div class="c-post-inner">
					<div class="c-post-header">
						<p class="c-post-type">{{ props.postType }}</p>
						<p class="c-post-time"><time :datetime="format(new Date(post.date), 'yyyy-MM-dd')">{{ format(new Date(post.date), 'yyyy.MM.dd') }}</time></p>
					</div>
					<p class="c-post-title">{{ post.title }}</p>
					<p class="c-post-excerpt">ポストテキスト抜粋ポストテキスト抜粋ポストテキスト抜粋ポストテキスト抜粋ポストテキスト抜粋</p>
				</div>
			</NuxtLink>
		</div>
	</div>
	<div v-else>
		<p>post not found</p>
	</div>
  
</template>

<style scoped>
.c-post-list {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
}
.c-post-item {
  color: #fff;
  display: block;
  padding: 24px;
  position: relative;
	transition: all .2s ease;
  .c-post-img-wrapper {
		clip-path: inset(12px 12px round 0);
		height: calc(100% + 24px);
		left: -12px;
		overflow: hidden;
		position: absolute;
		top: -12px;
		transition: all .2s ease;
		width: calc(100% + 24px);
		&:before {
			background-color: rgb(0 0 0 / .3);
			content: '';
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}
		img {
			height: 120%;
			top: -10%;
		}
	}
	.c-post-inner {
		position: relative;
		transition: all .2s ease;
		z-index: 1;
	}
  .c-post-header {
    position: relative;
    z-index: 1;
    .c-post-type {
    }
    .c-post-time {
    }
  }
  .c-post-title {
    position: relative;
    z-index: 1;
  }
  .c-post-excerpt {
    position: relative;
    z-index: 1;
  }
  &:nth-of-type(3) {
    grid-area: 2 / 2 / 4 / 3;
  }
	&:hover {
		text-decoration: none;
		.c-post-img-wrapper {
			clip-path: inset(0 0 round 0);
			scale: .98;
		}
	}
}
</style>




