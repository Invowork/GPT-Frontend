<template>
  <div class="flex w-full h-screen">
    <div
      class="flex lg:flex flex-col justify-between bg-primary w-64 flex-shrink-0 px-6 py-7"
      :class="{ hidden: !isSidebarOpen }"
    >
      <div class="flex flex-col gap-y-6">
        <div class="flex items-center justify-between">
          <div class="flex space-x-2 items-center">
            <span
              class="bg-md-dark-gray h-9 w-9 rounded-full justify-center items-center p-2"
            >
              <img src="/icons/Inowork.png" alt="" class="h-5 w-5" />
            </span>
            <span class="text-sm text-gray text-ellipsis font-semibold"
              >New Chat</span
            >
          </div>
          <div class="flex items-center">
            <img src="/icons/ExternalLink.svg" alt="" class="h-6 w-6" />
          </div>
        </div>
        <div class="flex flex-col items-start">
          <span class="text-dark_gray text-sm font-medium m-2">Today</span>
          <button
            type="submit"
            class="bg-secondary p-[11px] w-full rounded-md text-left mb-2"
          >
            <span class="text-white font-semibold text-sm text-ellipsis"
              >New Chat</span
            >
          </button>
          <span class="text-white font-medium text-sm text-ellipsis p-2"
            >Integer justo nunc porttitor...</span
          >
        </div>
        <div class="flex flex-col">
          <span class="text-dark_gray text-sm font-medium p-2">Yesterday</span>
          <span class="text-white font-medium text-sm text-ellipsis p-2"
            >Integer justo nunc porttitor...</span
          >
          <span class="text-white font-medium text-sm text-ellipsis p-2"
            >Integer justo nunc porttitor...</span
          >
          <span class="text-white font-medium text-sm text-ellipsis p-2"
            >Integer justo nunc porttitor...</span
          >
          <span class="text-white font-medium text-sm text-ellipsis p-2"
            >Integer justo nunc porttitor...</span
          >
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <div class="flex items-center justify-start space-x-2 p-2 bg-secondary">
          <NuxtLink to="/checkout"
            class="flex space-x-2 items-center cursor-pointer">
            <img src="/icons/Arrow-Up.svg" alt="" class="h-[17px] w-[17px]" />

            <span class="text-white text-sm font-medium"
              >Upgrade to Premium</span
            ></NuxtLink
          >
        </div>
        <div class="flex items-center p-2">
          <NuxtLink
            to="/setting"
            class="flex space-x-2 items-center cursor-pointer"
          >
            <img
              src="/icons/Vector.svg"
              alt=""
              class="h-4 w-4 cursor-pointer"
            />
            <span class="text-white text-sm font-medium"
              >Setting</span
            ></NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-1 lg:mx-[245px] mx-auto p-5 lg:pt-[90px] pb-[40px] justify-between"
    >
      <div class="flex flex-col items-center space-y-3">
        <div class="flex items-center justify-between lg:justify-center w-full">
          <img
            src="/icons/burger.svg"
            alt=""
            class="w-5 h-2 lg:hidden"
            @click="toggleSidebar"
          />
          <img
            src="/icons/Inowork.png"
            alt=""
            class="text-primary text-center text-2xl px-16 font-extrabold"
          />
          <img src="/icons/Frame.svg" alt="" class="w-7 h-6 lg:hidden" />
        </div>

        <p class="text-primary text-center text-sm font-normal p-6">
          Ask a legal question directly or upload a contract and ask AI to help
          you understand it better.
        </p>
      </div>
      <div
        class="flex flex-col justify-center items-center gap-[15px] self-stretch border px-[50px] py-[45px] rounded-xl border-dashed border-aqua-blue"
      >
        <img src="/icons/Paper.svg" alt="" class="w-11 h-11" />
        <p class="text-center text-xs text-md-dark-gray font-normal">
          Tap to upload image or document (30Mb max)
        </p>
      </div>
      <!-- text area -->
      <div class="flex flex-col items-start">
        <div
          class="grid lg:grid-cols-2 grid-flow-col lg:grid-flow-row gap-4 w-full"
        >
          <div class="bg-light-pink px-[18px] py-3.5 rounded-lg">
            <span class="text-primary text-center text-sm font-semibold"
              >Tell me about</span
            >
            <p></p>
          </div>
          <div class="bg-light-pink px-[18px] py-3.5 rounded-lg">
            <span class="text-primary text-center text-sm font-semibold"
              >Tell me about</span
            >
            <p></p>
          </div>
          <div class="bg-light-pink px-[18px] py-3.5 rounded-lg">
            <span class="text-primary text-center text-sm font-semibold"
              >Tell me about</span
            >
            <p></p>
          </div>
          <div class="bg-light-pink px-[18px] py-3.5 rounded-lg">
            <span class="text-primary text-center text-sm font-semibold"
              >Tell me about</span
            >
            <p></p>
          </div>
        </div>
        <div class="flex space-x-4 mt-6 w-full">
          <div
            class="bg-white flex p-3 justify-center items-center border border-[#EBE9E9] rounded-lg border-solid"
          >
            <img src="/icons/add.svg" alt="" class="h-4 w-4" />
          </div>
          <div
            class="flex items-center p-2 cursor-pointer w-full border border-[#EBE9E9] rounded-lg border-solid"
          >
            <input
              type="text"
              placeholder="Write a message"
              class="w-full border-none outline-none"
            />
            <img src="/icons/icon-right.svg" alt="" class="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 definePageMeta({
   middleware: ["auth"],
 });
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo("/login");
    }
  });
});
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style></style>
