<template>
  <div class="flex flex-col lg:flex-row md:flex-row h-screen">
    <div class="flex flex-col bg-primary w-75 flex-shrink-0">
      <div class="flex flex-col p-6 justify-between h-screen">
        <div>
          <div class="flex border-b border-[#242424]">
            <p class="mb-2 text-[11px] font-medium text-white">
              lawyer profile
            </p>
          </div>
          <div class="flex items-center justify-center py-10">
            <div
              class="flex h-[100px] w-[100px] flex-col items-center rounded-[164.583px] border-[0.823px] border-dashed border-[#09D3FF] px-[14.813px] py-[37.031px]"
            >
              <img
                src="/icons/CameraPlus.svg"
                alt=""
                class="h-[26.333px] w-[26.333px]"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <input
              type="text"
              class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]"
              placeholder="Law Firm"
            />
            <select
              class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]"
            >
              <option value="Select an area of law">
                Select an area of law
              </option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Immigration Law">Immigration Law</option>
            </select>
            <input
              type="email"
              class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]"
              placeholder="Email Address"
            />
          </div>
        </div>

        <div>
          <div
            v-if="showUpgrade"
            class="flex w-full justify-between items-center"
          >
            <div
              class="flex items-center space-x-2 bg-[#202020] p-2 w-4/5 lg:flex-1 cursor-pointer"
            >
              <div>
                <img
                  src="/icons/Arrow-Up.svg"
                  alt=""
                  class="h-[17px] w-[17px]"
                />
              </div>
              <div>
                <span class="text-base text-[#358DF4]">Upgrade to Premium</span>
              </div>
            </div>
            <div class="flex bg-[#202020] p-2 lg:hidden">
              <div>
                <img
                  src="/icons/Vector.svg"
                  alt=""
                  class="h-5 w-5 cursor-pointer"
                  @click="settingShowPopup"
                 
                  
                />
              </div>
            </div>
          </div>

          <div v-else class="flex bg-[#202020] p-2 space-x-2 lg:hidden">
            <div>
              <img
                src="/icons/Vector.svg"
                alt=""
                class="h-5 w-5 cursor-pointer"
                @click="replaceDiv"
              />
            </div>
            <span class="text-white">Setting</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1  mr-[300px] hidden md:block lg:block">
      <div class="flex flex-col lg:p-[70px] p-5">
        <div class="mb-8">
          <p class="text-primary font-semibold text-[28px]">Settings</p>
        </div>
        <div>
          <div class="p-4 text-dark_gray font-medium"><span class="text-[11px] font-semibold">Account</span></div>
        </div>
        <div class="bg-white shadow-md divide-y divide-my_border">
          <div class="flex justify-between p-4">
            <div class="flex space-x-2">
              <img src="/icons/Message.svg" alt="" class="w-6 h-6" />
              <span class="text-primary">Email</span>
            </div>
            <div>
              <p class="text-primary">afaqahmadmalik970@gmail.com</p>
            </div>
          </div>
          <div class="flex justify-between p-4">
            <div class="flex space-x-2">
              <img src="/icons/Plus.svg" alt="" class="w-6 h-6" />
              <span class="text-primary">Subscription</span>
            </div>
            <div>
              <p class="text-primary">
                Standard Plan
                <span class="text-secondary" @click="showPopup()"
                  >(change)</span
                >
              </p>
            </div>
          </div>
        </div>

        <!-- card end -->
        <!-- help center -->
        <div class="flex my-6 flex-col">
          <div>
            <div class="p-4 text-dark_gray font-medium">
              <span class="text-[11px] font-semibold">Help center</span>
            </div>
          </div>
          <div class="bg-white shadow-md grid grid-cols-1 divide-y divide-my_border">
            <div class="p-4">
              <span class="text-primary">FAQ</span>
            </div>
            <div class="p-4">
              <span class="text-primary">Terms of service</span>
            </div>
            <div class="p-4">
              <span class="text-primary">Policy Service</span>
            </div>
          </div>
        </div>
        <!-- logout -->
        <div
          class="bg-white shadow-md grid grid-cols-1 gap-4 divide-y divide-my_border"
        >
          <div class="p-4 flex">
            <div class="flex space-x-2">
              <img src="/icons/Logout.svg" alt="" class="w-6 h-6" />
              <span class="text-primary">Log out</span>
            </div>
          </div>
          <div class="p-4 flex justify-between">
            <div class="flex space-x-2">
              <img src="/icons/x.svg" alt="" class="w-6 h-6" />
              <p class="text-secondary">Delete Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- card checkout -->
  <div class="modal" v-if="isPopupShown">
    <div class="border-2 border-my_border bg-white rounded-md border-solid">
      <div
        class="flex p-5 justify-between border-b-2 border-my_border rounded-md border-solid"
      >
        <h1 class="text-secondary text-[22px] font-bold">Standard Plan</h1>
        <span class="text-primary text-[22px] font-bold">$ 20 / mo</span>
      </div>
      <div class="flex flex-col m-[20px] gap-3">
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Basic profile display on website
          </p>
        </div>
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Appear in search results
          </p>
        </div>
      </div>
    </div>
    <!-- premium Plan -->
    <div
      class="border-2 border-my_border bg-white rounded-md border-solid my-5"
    >
      <div
        class="flex p-5 justify-between border-b-2 border-my_border rounded-md border-solid"
      >
        <h1 class="text-primary text-[22px] font-bold">Premium Plan</h1>
        <span class="text-primary text-[22px] font-bold">$ 50 / mo</span>
      </div>
      <div class="flex flex-col m-[20px] gap-3">
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Basic profile display on website
          </p>
        </div>
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Appear in search results
          </p>
        </div>
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Featured in main chat box
          </p>
        </div>
        <div class="flex space-x-2">
          <img src="/icons/check_FILL.svg" alt="" class="h-[22px] w-[22px]" />
          <p class="text-base text-primary font-medium">
            Featured in newsletter
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- card setting -->
  <div
    class="fixed top-0 left-0 w-full h-full lg:p-[70px] p-4 bg-[#FFFFFF]"
    v-if="settingPopupShown"
  >
    <div class="mb-8 flex justify-end items-center space-x-32">
      <p class="text-primary font-semibold text-[28px]">Settings</p>
      <img
        src="/icons/Xclose.svg"
        alt=""
        class="w-6 h-6"
        @click="hideSettingsPopup"
      />
    </div>
    <div>
      <div class="p-4 text-dark_gray font-medium"><span>Account</span></div>
    </div>
    <div class="bg-white shadow-md divide-y divide-my_border">
      <div class="flex justify-between p-4">
        <div class="flex space-x-2">
          <img src="/icons/Message.svg" alt="" class="w-6 h-6" />
          <span class="text-dark_gray">Email</span>
        </div>
        <div>
          <p class="text-dark_gray">afaqahmadmalik970@gmail.com</p>
        </div>
      </div>
      <div class="flex justify-between p-4">
        <div class="flex space-x-2">
          <img src="/icons/Plus.svg" alt="" class="w-6 h-6" />
          <span class="text-dark_gray">Subscription</span>
        </div>
        <div>
          <p class="text-dark_gray">
            Standard Plan
            <span class="text-secondary" @click="showPopup()">(change)</span>
          </p>
        </div>
      </div>
    </div>

    
    <!-- card end -->
    <!-- help center -->
    <div class="flex my-6 flex-col">
      <div>
        <div class="p-4 text-dark_gray font-medium">
          <span>Help center</span>
        </div>
      </div>
      <div class="bg-white shadow-md grid grid-cols-1 divide-y divide-my_border">
        <div class="p-4">
          <span class="text-dark_gray">Faq</span>
        </div>
        <div class="p-4">
          <span class="text-dark_gray">Terms of service</span>
        </div>
        <div class="p-4">
          <span class="text-dark_gray">Policy Service</span>
        </div>
      </div>
    </div>
    <!-- logout -->
    <div class="bg-white shadow-md grid grid-cols-1 gap-4 divide-y divide-my_border">
      <div class="p-4 flex">
        <div class="flex space-x-2">
          <img src="/icons/Logout.svg" alt="" class="w-6 h-6" />
          <span class="text-dark_gray">Log out</span>
        </div>
      </div>
      <div class="p-4 flex justify-between">
        <div class="flex space-x-2">
          <img src="/icons/x.svg" alt="" class="w-6 h-6" />
          <p class="text-secondary">Delete Account</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isPopupShown = ref(false);
const settingPopupShown = ref(false);
function showPopup() {
  isPopupShown.value = true;
}
function settingShowPopup() {
  settingPopupShown.value = true;
  showUpgrade.value = !showUpgrade.value;
}

function hideSettingsPopup() {
  settingPopupShown.value = false;
}

const isSlided = ref(false);
const showUpgrade = ref(true);

const slideLeft = () => {
  isSlided.value = !isSlided.value;
};

const replaceDiv = () => {
  showUpgrade.value = !showUpgrade.value;
};
</script>

<style>
.modal {
  @apply fixed top-0 left-0 w-full h-full;
  background-color: rgba(0, 0, 0, 0.5);
  @apply flex flex-col lg:flex-row  items-center justify-center;
}
.slide-left {
  transform: translateX(-100%);
  transition: transform 1s ease;
}
</style>
