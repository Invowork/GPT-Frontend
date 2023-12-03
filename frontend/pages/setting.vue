<template>
  <div class="flex flex-col lg:flex-row md:flex-row h-screen">
    <div class="flex flex-col bg-primary w-75 flex-shrink-0 h-screen">
      <div class="flex flex-col p-6">
        <div class="flex border-b border-[#242424]">
          <p class="text-[11px] mb-2 font-medium text-white">lawyer profile</p>
        </div>
        <div class="flex justify-center items-center py-10">
          <div
            class="flex flex-col w-[100px] h-[100px] items-center px-[14.813px] py-[37.031px] rounded-[164.583px] border-[0.823px] border-dashed border-[#09D3FF]"
          >
            <img
              src="/icons/CameraPlus.svg"
              alt=""
              class="w-[26.333px] h-[26.333px]"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <input
            type="text"
            class="mb-4 w-full border text-[#737272] bg-primary border-[#242424] rounded-md border-solid py-3 px-5"
            placeholder="Full Name"
          />
          <input
            type="text"
            class="mb-4 w-full bg-primary border text-[#737272] border-[#242424] rounded-md border-solid py-3 px-5"
            placeholder="Law Firm"
          />
          <select
            class="mb-4 w-full text-[#737272] bg-primary border border-[#242424] rounded-md border-solid py-3 px-5"
          >
            <option value="Select an area of law">Select an area of law</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Family Law">Family Law</option>
            <option value="Immigration Law">Immigration Law</option>
          </select>
          <input
            type="email"
            class="mb-4 w-full text-[#737272] bg-primary border border-[#242424] rounded-md border-solid py-3 px-5"
            placeholder="Email Address"
          />
        </div>

        <div class="flex space-x-2 items-center lg:mt-80 md:mt-32 bg-[#202020] p-2">
          <div>
            <img src="/icons/Arrow-Up.svg" alt="" class="w-[17px] h-[17px]" />
          </div>
          <div>
            <span class="text-[#358DF4] text-base">Upgrade to Premium</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-1 w-full mr-[300px] hidden md:block lg:block"
    >
      <div class="flex flex-col p-[70px]">
        <div class="mb-8">
          <p class="text-primary font-semibold text-[28px]">Settings</p>
        </div>
        <div>
          <div class="p-4 text-dark_gray font-medium"><span>Account</span></div>
        </div>
        <div class="bg-white shadow-md">
          <div class="flex justify-between p-4">
            <div class="flex space-x-2">
              <img src="/icons/Message.svg" alt="" class="w-6 h-6" />
              <span class="text-dark_gray">Email</span>
            </div>
            <div>
              <p class="text-dark_gray">yaakoub.elhbari@gmail.com</p>
            </div>
          </div>
          <div class="flex justify-between p-4">
            <div class="flex space-x-2">
              <img src="/icons/Plus.svg" alt="" class="w-6 h-6" />
              <span class="text-dark_gray">Subscription</span>
            </div>
            <div>
              <p class="text-dark_gray">
                Standard Plan <span class="text-secondary">(change)</span>
              </p>
            </div>
          </div>
        </div>
        <!-- help center -->
        <div class="flex my-6 flex-col">
          <div>
            <div class="p-4 text-dark_gray font-medium">
              <span>Help center</span>
            </div>
          </div>
          <div class="bg-white shadow-md">
            <div class="flex justify-between p-4">
              <div class="flex space-x-2">
                <span class="text-dark_gray">FAQ</span>
              </div>
            </div>
            <div class="flex justify-between p-4">
              <div class="flex space-x-2">
                <span class="text-dark_gray">Term of Service</span>
              </div>
            </div>
            <div class="flex justify-between p-4">
              <div class="flex space-x-2">
                <span class="text-dark_gray">Policy Service</span>
              </div>
            </div>
          </div>
        </div>
        <!-- logout -->
        <div class="bg-white shadow-md">
          <div class="flex p-4">
            <div class="flex space-x-2">
              <img src="/icons/Logout.svg" alt="" class="w-6 h-6" />
              <span class="text-dark_gray">Log out</span>
            </div>
           
          </div>
          <div class="flex justify-between p-4">
            <div class="flex space-x-2">
              <img src="/icons/x.svg" alt="" class="w-6 h-6" />
              <p class="text-secondary">
                Delete Account
              </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-col bg-primary w-75 overflow-x-hidden flex-shrink-0 h-screen">
    
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
