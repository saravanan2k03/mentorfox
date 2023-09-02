<template>
    <div class="flex items-center justify-between">
        <Logo></Logo>
        <div class="flex p-3">
            <div class="hs-dropdown relative inline-flex">
                <button id="hs-dropdown-unstyled" type="button"
                    class="hs-dropdown-toggle inline-flex justify-center items-center gap-x-2 font-medium">
                    Courses
                    <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                    aria-labelledby="hs-dropdown-basic">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#">
                        Single Course
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#">
                        Course list
                    </a>
                </div>
            </div>

            <div class="hs-dropdown relative inline-flex ml-5">
                <button id="hs-dropdown-unstyled" type="button"
                    class="hs-dropdown-toggle inline-flex justify-center items-center gap-x-2 font-medium">
                    Career Programs
                    <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                    aria-labelledby="hs-dropdown-basic">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#">
                        Single Certificate Program
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#">
                        Certificate Program List
                    </a>
                </div>
            </div>
            <div class="font-medium ml-5">
                <p>Hire from us</p>
            </div>
            <div class="font-medium ml-5">
                <p>Contact us</p>
            </div>
        </div>



        <div class="pr-2">
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <div class="flex">
                    <div class="pt-1.5 pr-3">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.25 2.1875C12.25 2.07147 12.2039 1.96019 12.1219 1.87814C12.0398 1.79609 11.9285 1.75 11.8125 1.75H6.5625C6.44647 1.75 6.33519 1.79609 6.25314 1.87814C6.1711 1.96019 6.125 2.07147 6.125 2.1875C6.125 2.30353 6.1711 2.41481 6.25314 2.49686C6.33519 2.57891 6.44647 2.625 6.5625 2.625H10.7564L1.87775 11.5028C1.83708 11.5434 1.80481 11.5917 1.7828 11.6449C1.76078 11.698 1.74945 11.755 1.74945 11.8125C1.74945 11.87 1.76078 11.927 1.7828 11.9801C1.80481 12.0333 1.83708 12.0816 1.87775 12.1222C1.91843 12.1629 1.96672 12.1952 2.01987 12.2172C2.07301 12.2392 2.12998 12.2506 2.1875 12.2506C2.24503 12.2506 2.30199 12.2392 2.35514 12.2172C2.40829 12.1952 2.45658 12.1629 2.49725 12.1222L11.375 3.24363V7.4375C11.375 7.55353 11.4211 7.66481 11.5031 7.74686C11.5852 7.82891 11.6965 7.875 11.8125 7.875C11.9285 7.875 12.0398 7.82891 12.1219 7.74686C12.2039 7.66481 12.25 7.55353 12.25 7.4375V2.1875Z"
                                fill="white" />
                        </svg>
                    </div>
                    <div class="pr-2">
                        Get started
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
    name: "Navbar",
    components:{
        Logo
    }
};
</script>
