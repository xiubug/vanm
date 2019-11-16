<template>
    <div class="side-nav">
        <div class="mobile-switch-lang">
            <span
                :class="{ active: $vanmLang === 'zh-CN' }"
                @click="switchLang('zh-CN')"
            >
                中文
            </span>
            <span
                :class="{ active: $vantLang === 'en-US' }"
                @click="switchLang('en-US')"
            >
                EN
            </span>
        </div>

        <h1 class="vant-title">
            <img src="https://img.yzcdn.cn/vant/logo.png">
            <span>Vant</span>
        </h1>
        <h2 class="vant-desc">{{ description }}</h2>
        <template v-for="item in navList">
        <mobile-nav
            v-for="(group, index) in item.groups"
            :group="group"
            :base="$vantLang"
            :key="index"
        />
        </template>
    </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
    
}
</script>