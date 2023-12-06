<template>
  <div class="flex w-full h-screen">
    <div
      class="flex flex-col justify-between bg-primary w-72 flex-shrink-0 px-6 py-7"
    >
      <div class="flex flex-col gap-y-6">
        <div class="flex items-center justify-between">
          <div class="flex space-x-2 items-center">
            <span
              class="bg-secondary h-9 w-9 rounded-full justify-center items-center p-2"
            >
              <img src="/icons/ScaleOutline.svg" alt="" class="h-5 w-5" />
            </span>
            <span class="text-sm text-white text-ellipsis font-semibold"
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
        <div class="flex items-center justify-start space-x-2 p-2 bg-btn-bg ">
          <img src="/icons/Arrow-Up.svg" alt="" class="h-[17px] w-[17px]" />

          <span class="text-blue-text text-sm font-medium ">Upgrade to Premium</span>
        </div>
        <div class="flex space-x-2 items-center p-2">
          <img src="/icons/Vector.svg" alt="" class="h-4 w-4 cursor-pointer" />
          <span class="text-white text-sm font-medium ">Setting</span>
        </div>
      </div>
    </div>
    <div class="flex flex-1"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
