<template>
    <nav class="relative z-0 flex   overflow-hidden " aria-label="Tabs" role="tablist">
        <button type="button"
            class="hs-tab-active:border-b-red-700 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-red-700 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
            id="bar-with-underline-item-1" data-hs-tab="#bar-with-underline-1" aria-controls="bar-with-underline-1"
            role="tab">
            CLOUD
        </button>
        <button type="button"
            class="hs-tab-active:border-b-red-700 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-red-700 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-2" data-hs-tab="#bar-with-underline-2" aria-controls="bar-with-underline-2"
            role="tab">
            DEV-OPS
        </button>
        <button type="button"
            class="hs-tab-active:border-b-red-700 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-red-700 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-3 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3"
            role="tab">
            SOFTWARE DEVELOPMENT
        </button>
        <button type="button"
            class="hs-tab-active:border-b-red-700 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-red-700 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3"
            role="tab">
            DATA ANALYSIS
        </button>
        <button type="button"
            class="hs-tab-active:border-b-red-700 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-red-700 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3"
            role="tab">
            TESTING
        </button>
    </nav>

    <div class="mt-3">
        <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
            <div class="flex  p-2">
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample1 rounded-lg "></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample2 rounded-lg ml-4"></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample3 rounded-lg ml-4"></div>

            </div>

        </div>
        <div id="bar-with-underline-2" class="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-2">
            <div class="flex  p-2">
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample3 rounded-lg "></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample2 rounded-lg ml-4"></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample1 rounded-lg ml-4"></div>

            </div>
        </div>
        <div id="bar-with-underline-3" class="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-3">
            <div class="flex  p-2">
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample3 rounded-lg "></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample1 rounded-lg ml-4"></div>
                <div class=" h-[240px] max-w-[40%] min-w-[30%] bg-sample2 rounded-lg ml-4"></div>

            </div>
        </div>
</div></template>

<script>
export default {
    name: "Tabbar",
};
</script>