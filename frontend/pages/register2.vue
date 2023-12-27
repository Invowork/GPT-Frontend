<template>
  <div class="flex flex-col lg:flex-row w-full h-screen">
    <div class="flex w-2/3 bg-primary">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col space-x-4 items-center">
          <div
            class="bg-secondary h-[81px] w-[81px] rounded-full p-4 hidden lg:block"
          >
            <img
              src="/icons/ScaleOutline.svg"
              alt=""
              class="h-[50px] w-[50px]"
            />
          </div>

          <div class="mx-72 mt-8 hidden lg:block">
            <p class="text-gray text-base text-center">
              We are the leading AI legal platform for consumers. Find valuable
              leads with 24/7 Service for your firm or individual practice.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex-1 ">
      <div class="flex flex-col justify-between px-[34px]  lg:px-[75px]">
        <div class="flex flex-col items-center justify-center my-[90px]">
          <h1
            class="lg:text-main text-[22px] font-extrabold text-primary text-center"
          >
            <a class="text-secondary">24/7</a> Service
          </h1>
          <span class="text-center text-base font-normal"
            >Choose a plan below.</span
          >
        </div>

        <!-- Standard plan -->
        <div class="flex flex-col lg:mb-[50px] mb-[90px]">
          <div class="border-2 border-my_border rounded-md border-solid">
            <div
              class="flex p-4 justify-between border-b-2 border-my_border rounded-md border-solid"
            >
              <h1 class="text-secondary text-[22px] font-bold">
                Standard Plan
              </h1>
              <span class="text-primary text-[22px] font-bold"><span class="text-base">$ </span>20 <span class="text-base">/ mo</span></span>
            </div>
            <div class="flex flex-col m-[20px] gap-3">
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Basic profile display on website
                </p>
              </div>
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Appear in search results
                </p>
              </div>
            </div>
          </div>
          <!-- premium Plan -->
          <div class="border-2 border-my_border rounded-md border-solid my-5">
            <div
              class="flex p-4 justify-between border-b-2 border-my_border rounded-md border-solid"
            >
              <h1 class="text-primary text-[22px] font-bold">Premium Plan</h1>
              <span class="text-primary text-[22px] font-bold"><span class="text-base">$ </span>50 <span class="text-base">/ mo</span></span>
            </div>
            <div class="flex flex-col m-[20px] gap-3">
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Basic profile display on website
                </p>
              </div>
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Appear in search results
                </p>
              </div>
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Featured in main chat box
                </p>
              </div>
              <div class="flex space-x-2">
                <img
                  src="/icons/check_FILL.svg"
                  alt=""
                  class="h-[22px] w-[22px]"
                />
                <p class="text-base text-primary font-medium">
                  Featured in newsletter
                </p>
              </div>
            </div>
          </div>
          <div class="flex">
            <button
              type="submit"
              class="bg-secondary p-[12px] w-full rounded-md"
            >
              <span class="text-white font-semibold text-base">Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
