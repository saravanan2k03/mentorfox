<template>
    <div class="h-[600px] bg-white flex flex-col justify-center">
        <div class=" flex items-center">
            <div class="min-w-[10%]"></div>
            <div class="flex max-w-[60%]">
                <div class="flex flex-col max-w-[80%] ">
                    <div class="flex">
                        <p class="text-3xl text-demand font-bold ml-3">Carefully curated</p>
                        <p class="text-3xl text-black font-bold ml-2">certification programs</p>
                    </div>
                    <div class="text-4lg text-black font-normal ml-3 mt-2">
                        <p>We offer a selection of courses that have been meticulously designed and handpicked to ensure
                            quality
                            and relevance with job placement assurance</p>
                    </div>
                </div>

            </div>
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
                <div class="flex">
                    <div class="pt-1.5 pr-3">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.25 2.1875C12.25 2.07147 12.2039 1.96019 12.1219 1.87814C12.0398 1.79609 11.9285 1.75 11.8125 1.75H6.5625C6.44647 1.75 6.33519 1.79609 6.25314 1.87814C6.1711 1.96019 6.125 2.07147 6.125 2.1875C6.125 2.30353 6.1711 2.41481 6.25314 2.49686C6.33519 2.57891 6.44647 2.625 6.5625 2.625H10.7564L1.87775 11.5028C1.83708 11.5434 1.80481 11.5917 1.7828 11.6449C1.76078 11.698 1.74945 11.755 1.74945 11.8125C1.74945 11.87 1.76078 11.927 1.7828 11.9801C1.80481 12.0333 1.83708 12.0816 1.87775 12.1222C1.91843 12.1629 1.96672 12.1952 2.01987 12.2172C2.07301 12.2392 2.12998 12.2506 2.1875 12.2506C2.24503 12.2506 2.30199 12.2392 2.35514 12.2172C2.40829 12.1952 2.45658 12.1629 2.49725 12.1222L11.375 3.24363V7.4375C11.375 7.55353 11.4211 7.66481 11.5031 7.74686C11.5852 7.82891 11.6965 7.875 11.8125 7.875C11.9285 7.875 12.0398 7.82891 12.1219 7.74686C12.2039 7.66481 12.25 7.55353 12.25 7.4375V2.1875Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="pr-2">
                        View all certification programs
                    </div>
                </div>
            </button>
        </div>

        <div class="flex">
            <div class="min-w-[10%]"></div>
            <div class="max-w-[80%] min-w-[80%]  mt-3">
                <Tabbar></Tabbar>
            </div>
        </div>
    </div>
</template>

<script>
import Tabbar from './tabbar.vue'

export default {
    name: "programme",
    components: {
        Tabbar,
    }
};
</script>