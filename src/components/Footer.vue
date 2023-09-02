<template>
<div class="h-[450px] bg-black flex ">
    <div class="p-8 max-h-[50%] min-h-[50%] ">
        <FooterLogo></FooterLogo>
    </div>
 
</div>
</template>


<script>
import FooterLogo from './FooterLogo.vue'
export default {
    name: "Footer",
    components:{
        FooterLogo
    }
};
</script>